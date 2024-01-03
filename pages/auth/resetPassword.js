import Link from 'next/link'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getFullProfile, getProfile, register, updatePassword} from '../../storage/reducers/authReducer'
import {useRouter} from 'next/router';
import {AiOutlineEyeInvisible} from "react-icons/ai";
import {AiOutlineEye} from "react-icons/ai";


export default function ResetPassword() {
    const [hidden, setHidden] = useState(true)
    const [confirmHidden, setConfirmHidden] = useState(true)
    const dispatch = useDispatch()
    const router = useRouter()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [recoveryCode, setRecoveryCode] = useState('')

    // const registerSubmit = async () => {
    //
    //     await dispatch(register(password, fullName, email, "", "", dealerCode))
    //     await dispatch(getProfile())
    //     await dispatch(getFullProfile())
    //     await Router.push(`/profile`);
    // }


    useEffect(() => {
        setRecoveryCode(router.query.recoveryCode)
    }, [router.query.recoveryCode])


    const recovery = () => {
        dispatch(updatePassword(password, recoveryCode))
        router.push('/auth/login');
    }

    const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    return (
        <div className="z-20 w-full flex lg:py-32 items-center pb-8 bg-primary-black">
            <div className="w-full h-full flex items-center justify-center">
                <div className="flex w-full h-full flex-col items-center">
                    <h1 className="text-2xl text-gray-200 sm:text-3xl text-center font-bold md:mt-[-40px] mt-20 ">ВОССТАНОВЛЕНИЕ
                        ПАРОЛЯ</h1>
                    <form className={"w-full flex flex-col items-center"}>
                        <div className={`lg:w-1/4 w-10/12 mt-8 group flex flex-col items-start justify-center`}>
                        </div>

                        <div className={`lg:w-1/4 w-10/12 group flex flex-col items-start justify-center`}>
                            <input type={`${hidden ? 'password' : 'text'}`} value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                                   className={`${password.length < 8 ? "border-2  border-red-500" : ""} text-md items-center rounded-lg  w-full pl-3 bg-secondary-black text-white autofill:bg-gray-800`}
                                   required/>
                            {hidden ? <AiOutlineEyeInvisible onClick={() => {
                                    setHidden(!hidden)
                                }} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/> :
                                <AiOutlineEye onClick={() => {
                                    setHidden(!hidden)
                                }} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/>}
                            <label className="ml-2 text-outline-white">Пароль</label>
                            {password === "" ?
                                <p className={"text-red-500 text-sm"}>Незаполненное текстовое поле</p> : <></>}
                            {password !== "" ? password.length > 7 ? <> </> :
                                <p className={"text-red-500 text-sm"}>Пароль должен состоять из 8 и более
                                    символов</p> : <> </>}
                        </div>

                        <div className={`lg:w-1/4 w-10/12 group flex flex-col items-start justify-center`}>
                            <input type={`${confirmHidden ? 'password' : 'text'}`} value={confirmPassword}
                                   onChange={(e) => {
                                       setConfirmPassword(e.target.value)
                                   }}
                                   className={`${confirmPassword !== password || confirmPassword === "" ? "border-2  border-red-500" : ""} text-md items-center rounded-lg  w-full pl-3 bg-secondary-black text-white autofill:bg-gray-800`}
                                   required/>
                            {confirmHidden ? <AiOutlineEyeInvisible onClick={() => {
                                    setConfirmHidden(!confirmHidden)
                                }} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/> :
                                <AiOutlineEye onClick={() => {
                                    setConfirmHidden(!confirmHidden)
                                }} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/>}
                            <label className="ml-2 text-outline-white">Подтвердите пароль</label>
                            {confirmPassword === "" ?
                                <p className={"text-red-500 text-sm"}>Незаполненное текстовое поле</p> : <></>}
                            {confirmPassword !== "" ? confirmPassword === password ? <> </> :
                                <p className={"text-red-500 text-sm"}>Пароли не сходятся</p> : <> </>}
                        </div>


                    </form>


                    <button
                        disabled={!(password.length > 7) || confirmPassword !== password}
                        //onClick={event => console.log(recoveryCode)}
                        onClick={recovery}
                        className={"z-10 mb-8 mt-4 w-10/12 text-primary lg:w-1/5 text-white font-medium text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-highlightBlue to-highlightDarkBlue " +
                            `rounded-xl ${!(password.length > 7) || confirmPassword !== password ? "opacity-50" : "opacity-100 hover:scale-105"} w-10/12se p-3 lg:p-4 lg:px-8  duration-500 transition-all`}>Подтвердить
                    </button>
                </div>

            </div>

        </div>
    )
}
