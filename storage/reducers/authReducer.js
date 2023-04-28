import * as axios from "axios"
import api, {serverUrl} from "../axios/authApi"
import {getCookie} from 'cookies-next'
import Router from "next/router";

const setUserType = 'SET_USER'
const setGuestType = 'SET_GUEST'
const setMac = "SET_MAC"
const setFullProfileType = 'SET_FULL_PROFILE'
const clearProfile = 'CLEAR_PROFILE'
const setError = "SET_ERROR"

const instance = axios.create({
    baseUrl: `http://localhost:8000/api`,
    withCredentials: true
})

const initialState = {
    login: '',
    full_name: '',
    phone: '',
    account_number: '',
    tariff_plan: '0',
    tariff_expired_date: null,
    tariff_instead_expired: null,
    stb_sn: '',
    stb_mac: '',
    stb_type: '',
    status: 0,
    online: '',
    ip: '',
    version: '',
    comment: null,
    end_date: '',
    account_balance: '',
    last_active: '',
    subscribed: [],
    subscribed_id: [],
    mobileSubLevel:0,
    mobileSubOrderId:'',
    error:''
}
// const initialState = {
//     login: '',
//     accessToken: '',
//     refreshToken: ''
// }
export default function authReducer(state = initialState, action) {
    switch (action.type) {

        case setUserType:
            return {
                ...action.user
            }
        case setGuestType:
            return {
                ...state,
                login: action.guest.login,
                full_name: action.guest.fullName,
                mobileSubLevel: action.guest.mobileSubLevel,
                mobileSubOrderId: action.guest.mobileSubOrderId
            }
        case setFullProfileType:

            return {
                ...action.profile.results,
                login: state.login,
                full_name: state.full_name
            }
        case setMac:
            return {
                ...state,
                stb_mac: action.mac
            }
        case setError:
            return {
                ...state,
                error:action.error
            }
        // return {
        //     accessToken: action.user.accessToken,
        //     refreshToken: action.user.refreshToken,
        //     login: action.user.login
        // }
        case clearProfile:{
            return {
                ...initialState
            }
        }

        default:
            return state
    }
}

const setUserAction = (user) => ({type: setUserType, user})
const setGuestAction = (guest) => ({type: setGuestType, guest})
const setMacAction = (mac) => ({type: setMac, mac})
const setFullProfile = (profile) => ({type: setFullProfileType, profile})
const clearProfileAC = () => ({type:clearProfile})
const setErrorAction = (error) => ({type:setError, error})

// export const getUser = (userLogin) => async (dispatch) => {
//     const response = await api.get(`http://a7777.top:80/stalker_portal/api/v1/users/${userLogin}`)
//     dispatch(response)
//     console.log(response.data.results);
// }
export const changeMac = (login, newMac) => async (dispatch) => {
    const response = await api.post(`${serverUrl}/ministra/changeMacAddress`, {
        login: login,
        newMac: newMac
    }, {withCredentials: true})
    setMacAction(newMac)
}

export const register = (login, password, fullName, email, phone, address) => async (dispatch) => {
    const response = await axios.post(`${serverUrl}/api/registration`, {
        login: login,
        password: password,
        fullName: fullName,
        email: email,
        phone: phone,
        address: address
    }, {withCredentials: true})
    localStorage.setItem('token', response.data.userData.accessToken)
    const guest = response.data.userData.user
    dispatch(setGuestAction(guest))
    if(response.data.userData.accessToken) {Router.push("/profile")}
}

export const login = (login, password) => async (dispatch) => {
    // const response = await axios.post(`${serverUrl}/api/login`, {
    //     login: login,
    //     password: password
    // }, {withCredentials: true})
    const response = await fetch(`${serverUrl}/api/login`, {
        method:"POST",
        credentials:'include',
        body:JSON.stringify({login:login, password:password}),
        mode:'cors',
        headers:{
            'Access-Control-Allow-Origin':'*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    console.log(response.status)
    if (response.status == 417) {
        dispatch(setErrorAction('Неправильный пароль'))
        return
    }
    const data = await response.json()
    localStorage.setItem('token', data.userData.accessToken)

    const user = JSON.parse(data.userData.fullProfile)
    const guest = data.userData.user
    dispatch(setErrorAction(''))
    if (user.results == null) {
        dispatch(setGuestAction(guest))
    } else {
        dispatch(setUserAction(user.results))
    }

}

export const checkAuth = () => async (dispatch) => {
    const response = await axios.get(`${serverUrl}/api/refresh`, {withCredentials: true})
}

export const createSubThunk = ({login, password, fullName, tariff, orderId, acqId, paymentData}) => async (dispatch) => {
    const response = await api.post(`${serverUrl}/payments/callback`, {
        login: login,
        password: password,
        fullName: fullName,
        tariff: tariff,
        orderId: orderId,
        acqId: acqId,
        paymentData: paymentData
    }, {withCredentials: true})
    return 0
}

export const cancelSubThunk = ({login, password}) => async (dispatch) => {
    const response = await api.post(`${serverUrl}/payments/cancelSub`, {
        login: login,
        password: password
    }, {withCredentials: true})

}

export const cancelMobileSubThunk = ({password}) => async (dispatch) => {
    const response = await api.post(`${serverUrl}/payments/cancelMobileSub`, {
        password: password
    }, {withCredentials: true})
}

export const getProfile = (redirect = true) => async (dispatch) => {
    const response = await api.get(`${serverUrl}/api/refresh`, {withCredentials: true})
    if(!response) {
        Router.push('/auth/login')
        return
    }
    localStorage.setItem('token', response.data.userData.accessToken)
    dispatch(setGuestAction(response.data.userData.user))
    if (redirect) {
        Router.push('/profile')
    }
}
export const getFullProfile = () => async (dispatch) => {
    const response = await api.get(`${serverUrl}/api/getFullProfile`, {withCredentials: true})
    if(!response){
        Router.push('/auth/login')
        return
    }
    const parsedProfile = JSON.parse(response.data.fullProfile.fullProfile)
    dispatch(setFullProfile(parsedProfile))
}
export const logout = () => async (dispatch) => {
    const response = await api.post(`${serverUrl}/api/logout`, {withCredentials: true})
    console.log(response)
    dispatch(clearProfileAC())
    Router.push('/auth/login')
    Router.push('/')
}
