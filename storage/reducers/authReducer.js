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
const setSchedule = "SET_SCHEDULE"

const instance = axios.create({
    baseUrl: `http://localhost:8000/api`,
    withCredentials: true
})

const initialState = {
    email: '',
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
    subLevel: 0,
    mobileSubLevel:0,
    mobileSubOrderId:'',
    ministraDate: '',
    signDate: '',
    schedule:[],
    error: null


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
            console.log(action)
            return {
                ...state,
                email: action.guest.email,
                fullName: action.guest.fullName,
                isActivated: action.guest.isActivated,
                address: action.guest.address,
                ministraDate: action.guest.ministraDate,
                phone: action.guest.phone,
                signDate: action.guest.signDate,
                subLevel: action.guest.subLevel,
            }
        case setFullProfileType:

            return {
                ...action.profile.results,
                email: state.email,
                fullName: state.full_name,
                address: state.address,
                isActivated: state.isActivated,
                ministraDate: state.ministraDate,
                phone: state.phone,
                signDate: state.signDate,
                subLevel: state.subLevel,
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
        case setSchedule: {
            return {
                ...state,
                schedule: action.schedule
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
const setScheduleAction = (schedule) => ({type:setSchedule, schedule})

// export const getUser = (userLogin) => async (dispatch) => {
//     const response = await api.get(`http://a7777.top:80/stalker_portal/api/v1/users/${userLogin}`)
//     dispatch(response)
//     console.log(response.data.results);
// }
export const changeMac = (email, newMac) => async (dispatch) => {
    const response = await api.post(`${serverUrl}/ministra/changeMacAddress`, {
        login: email,
        newMac: newMac
    }, {withCredentials: true})
    setMacAction(newMac)
}

export const setCustomError = (error) => async (dispatch) => {
    setErrorAction(error)
}

export const register = (password, fullName, email, phone, address) => async (dispatch) => {
    console.log(password, fullName, email, phone, address)
    const response = await axios.post(`${serverUrl}/api/registration`, {
        password: password,
        fullName: fullName,
        email: email,
        phone: phone,
        address: address
    }, {withCredentials: true})
    console.log(response)
    localStorage.setItem('token', response.data.userData.accessToken)
    console.log(response.data.userData.accessToken)
    const guest = response.data.userData.user
    dispatch(setGuestAction(guest))
    if(response.data.userData.accessToken) {Router.push("/profile")}
}

export const login = (email, password) => async (dispatch) => {
    try {
        const response = await fetch(`${serverUrl}/api/login`, {
            method: "POST",
            credentials: 'include',
            body: JSON.stringify({ email: email, password: password }),
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            // Handle the error response here
            console.log(response);
            console.error('Server error: Неверный логин или пароль');
            dispatch(setErrorAction('Неверный логин или пароль')); // Dispatch an action to handle the error in your Redux store or state
            return;
        }

        const data = await response.json();
        localStorage.setItem('token', data.userData.accessToken);
        const user = JSON.parse(data.userData.fullProfile);
        const guest = data.userData.user;
        dispatch(setErrorAction(null)); // Dispatch an action to handle the error in your Redux store or state

        if (user.results == null) {
            dispatch(setGuestAction(guest));
        } else {
            dispatch(setUserAction(user.results));
        }
    } catch (error) {
        // Handle any other errors that might occur during the fetch or data parsing
        console.error('An error occurred:', error);
    }
}



export const checkAuth = () => async (dispatch) => {
    const response = await axios.get(`${serverUrl}/api/refresh`, {withCredentials: true})
}

export const createSubThunk = ({email, password, fullName, tariff, orderId, acqId, paymentData}) => async (dispatch) => {
    const response = await api.post(`${serverUrl}/payments/callback`, {
        email:email,
        password: password,
        fullName: fullName,
        tariff: tariff,
        orderId: orderId,
        acqId: acqId,
        paymentData: paymentData
    }, {withCredentials: true})
    return 0
}

export const createTestSubThunk = ({email, password, tariff}) => async (dispatch) => {
    console.log("reducer")
    console.log(tariff)
    const response = await api.post(`${serverUrl}/payments/createTestSub`, {
        email:email,
        password: password,
        tariff: tariff,
    }, {withCredentials: true})
    return 0
}

export const createMobileTestSubThunk = (email) => async (dispatch) => {
    const response = await api.post(`${serverUrl}/payments/createMobileTestSub`, {
        email:email,
    }, {withCredentials: true})
    console.log(response)
    return 0
}


export const cancelSubThunk = ({email, password}) => async (dispatch) => {
    const response = await api.post(`${serverUrl}/payments/cancelSub`, {
        email:email,
        password: password
    }, {withCredentials: true})

}

export const cancelMobileSubThunk = ({password}) => async (dispatch) => {
    const response = await api.post(`${serverUrl}/payments/cancelMobileSub`, {
        password: password
    }, {withCredentials: true})
}
export const cancelTestMobileSubThunk = ({password}) => async (dispatch) => {
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
    console.log("response")
    console.log(response.data.fullProfile.fullProfile)
    dispatch(setFullProfile(response.data.fullProfile))
}
export const logout = () => async (dispatch) => {
    const response = await api.post(`${serverUrl}/api/logout`, {withCredentials: true})
    dispatch(clearProfileAC())
    Router.push('/auth/login')
    Router.push('/')
}

export const getSchedule = () => async (dispatch) => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const day = String(currentDate.getDate()).padStart(2, '0')
    const formattedDate = `${year}-${month}-${day}`
    const response = await api.get(`${serverUrl}/channelManagement/getSchedule102?date=${formattedDate}`, {withCredentials:true})
    console.log(response.data)
    dispatch(setScheduleAction(response.data))
}
