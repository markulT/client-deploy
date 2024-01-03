import Link from 'next/link'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getFullProfile, getProfile, register} from '../../storage/reducers/authReducer'
import { useRouter } from 'next/router';
import {AiOutlineEyeInvisible} from "react-icons/ai";
import {AiOutlineEye} from "react-icons/ai";


export default function RegisterPage() {
    const [hidden, setHidden] = useState(true)
    const [confirmHidden, setConfirmHidden] = useState(true)
    const [policyRead, setPolicyRead] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [dealerCode, setDealerCode] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const readPolicy = useSelector(state => state.signupReducer.raedTermsOfPolicy)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const registerSubmit = async () => {

        await dispatch(register(password, fullName, email, "", "", dealerCode))
        await dispatch(getProfile())
        await dispatch(getFullProfile())
        await router.push(`/profile`);
    }


    useEffect(() => {
        setDealerCode(router.query.dealerCode)
    }, [router.query.dealerCode])

    const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    return (
        <div className="z-20 w-full flex lg:py-32 items-center pb-8 bg-primary-black">
            <div className="w-full h-full flex items-center justify-center">
                <div className="flex w-full h-full flex-col items-center">
                    <h1 className="text-2xl text-gray-200 sm:text-3xl text-center font-bold md:mt-[-40px] mt-20 ">Регистрация</h1>
                    <form className={"w-full flex flex-col items-center"}>
                        <div className={`lg:w-1/4 w-10/12 mt-8 group flex flex-col items-start justify-center`}>
                            <input type="text" value={fullName} onChange={(e) => {
                                setFullName(e.target.value)
                            }}
                                   className={`text-md items-center ${fullName === "" ? "border-2  border-red-500" : ""} rounded-lg  w-full pl-3 bg-secondary-black text-white autofill:bg-gray-800`}
                                   required/>
                            <label className="ml-2">Полное имя</label>
                            {fullName === "" ?
                                <p className={"text-red-500 text-sm"}>Незаполненное текстовое поле</p> : <></>}
                        </div>

                        <div className={`lg:w-1/4 w-10/12 group  flex flex-col items-start justify-center`}>
                            <input type="text" value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                                   className={`${email === "" || !emailRegExp.test(email) ? "border-2  border-red-500" : ""} text-md  items-center rounded-lg flex w-full pl-3 bg-secondary-black text-white autofill:bg-gray-800`}
                                   required/>
                            <label className="ml-2 text-gray-400">Email</label>
                            {email === "" ?
                                <p className={"text-red-500 text-sm"}>Незаполненное текстовое поле</p> : <></>}
                            {email !== "" ? emailRegExp.test(email) ? <> </> :
                                <p className={"text-red-500 text-sm"}>Емейл не валидный</p> : <> </>}
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

                        <div className={`lg:w-1/4 w-10/12 group flex flex-col items-start justify-center`}>
                            <input type="text" value={dealerCode} onChange={(e) => {
                                setDealerCode(e.target.value)
                            }}
                                   className={`text-md items-center rounded-lg  w-full pl-3 bg-secondary-black text-white autofill:bg-gray-800`}
                                   required/>
                            <label className="ml-2">Код дилера (если есть)</label>

                        </div>

                        <div
                            className="z-20 flex items-center mb-5 mt-[-30px] mx-12 justify-center sm:justify-start sm:mx-0">
                            <div className="flex items-center mr-2 ">
                                <input value={policyRead} onClick={() => {
                                    setPolicyRead(!policyRead)
                                }} type="checkbox"
                                       className="w-4 h-4 bg-red-100 border-red-300 text-red-500 focus:ring-red-200"/>
                            </div>
                            <Link href={'/policy'}>
                                <a className="text-gray-200 text-sm sm:text-lg">Я согласен с
                                    <a href="#"
                                       className=" text-gray-400 text-sm sm:text-lg  hover:underline hover:text-gray-500 transition-all duration-500"> политикой
                                        конфиденициальности</a></a>


                            </Link>
                        </div>
                    </form>
                    {/* <p className={'text-red-600'}>{emailError}</p> */}
                    {/* <Link href={'/policy'}>
                        <a className={'text-xl p-6'}>
                            {readPolicy ?
                            <AiOutlineCheck  className={'inline text-3xl pr-1 text-green-400'}/>
                                : <ImCross className={'inline text-2xl pr-1 text-red-600'}/>
                            }
                            Политика Конфиденциальности
                        </a>
                    </Link> */}
                    <div className=" z-20">
                        <a className="text-gray-200 text-sm lg:text-lg">Есть аккаунт? </a>
                        <Link href="/auth/login">
                            <a className="text-gray-300 text-sm lg:text-lg hover:underline hover:text-gray-400 transition-all duration-300">Ввойдите
                                !</a>
                        </Link>
                    </div>


                    <button
                        disabled={fullName === "" || !emailRegExp.test(email) || !(password.length > 7) || confirmPassword !== password || !policyRead}
                        onClick={registerSubmit}
                        className={"z-10 mb-8 mt-4 w-10/12 text-primary lg:w-1/5 text-white font-medium text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-highlightBlue to-highlightDarkBlue " +
                            `rounded-xl ${fullName === "" || !emailRegExp.test(email) || !(password.length > 7) || confirmPassword !== password || !policyRead ? "opacity-50" : "opacity-100 hover:scale-105"} w-10/12se p-3 lg:p-4 lg:px-8  duration-500 transition-all`}>Подтвердить
                    </button>
                </div>

            </div>

        </div>
    )
}
