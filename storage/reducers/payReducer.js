import api, {serverUrl} from "../axios/authApi";
import {login} from "./authReducer";

const SET_PASSWORD_TYPE = "SET_PASSWORD"
const SET_TARIFF_TYPE = 'SET_TARIFF'
const SET_PASSWORD_VALIDITY = "SET_PASSWORD_VALIDITY"
const SET_ERROR = "SET_ERROR"

const initialState = {
    password:'',
    tariff:'',
    isPassCorrect:false,
    error:''
}

export default function payReducer(state = initialState, action) {
    switch (action.type) {

        case SET_TARIFF_TYPE:
            return {
                ...state,
                tariff:action.tariff
            }

        case SET_PASSWORD_TYPE:
            return {
                ...state,
                password: action.password
            }
        case SET_PASSWORD_VALIDITY:
            return {
                ...state,
                isPassCorrect: action.isPassCorrect
            }
        case SET_ERROR:
            return {
                ...state,
                error:action.error
            }
        default:
            return state
    }
}

export const setPasswordAction = (password) => ({type:SET_PASSWORD_TYPE, password:password})
export const setTariffAction = (tariff) => ({type:SET_TARIFF_TYPE, tariff:tariff})
export const setPasswordValidity = (isPassCorrect) => ({type:SET_PASSWORD_VALIDITY, isPassCorrect:isPassCorrect})
export const setError = (error) => ({type:SET_ERROR, error:error})

export const downloadScheduleThunk = () => async (dispatch) => {
    const response = await api.post(`${serverUrl}/payments/schedule`);
}
export const checkPass = (password) => async (dispatch) => {

    const response = await api.post(`${serverUrl}/payments/checkPass`, {password:password})
    if (!response) {
        dispatch(setError('Неверный пароль'))
        return
    }
    dispatch(setError(''))
    console.log(response.data.isCorrect)
    dispatch(setPasswordValidity(true))

}
