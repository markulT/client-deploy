import Link from 'next/link'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { register } from '../../storage/reducers/authReducer'
import c from './auth.module.css'
import {useRouter} from "next/router";
import {AiOutlineCheck} from "@react-icons/all-files/ai/AiOutlineCheck";
import {ImCross} from "@react-icons/all-files/im/ImCross";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";


export default function RegisterPage() {
    const [hidden, setHidden] = useState(true)
    const [policyRead, setPolicyRead] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const readPolicy = useSelector(state => state.signupReducer.raedTermsOfPolicy)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const registerSubmit = () => {
        if (!policyRead) {
            return;
        }
        if(login=="" || password =="" || fullName=="" || phone=="" || email=="" || address==""){
            return
        }

        const emailCorrect = emailValidate.test(email)
        if(!emailCorrect) {
            setEmailError(!emailError)
            return;
        }
        dispatch(register(login, password,fullName,email,phone,address))


    }

    return (
        <div className="md:min-h-[100vh]  w-full bg-gradient-to-r from-grad_from to-grad_to">
            <div className="container md:h-screen mx-auto flex items-center justify-center">
                <div className="flex flex-col items-center">
                <h1 className="text-2xl text-gray-200 sm:text-3xl text-center font-bold md:mt-[-40px] mt-20 ">Регистрация</h1>
                    <form className=" mt-10">
                        <div className=" flex flex-col md:grid md:gap-x-4 md:grid-cols-2 md:grid-rows-3 md:mt-0 px-12 md:px-0 ">
                        <div className="group">
                            <input type="text" value={login} onChange={(e)=>{setLogin(e.target.value)}} className="text-md px-20 rounded-lg border-8  focus:border-gray-300  focus:border-8 block w-full pl-3 bg-gray-800 border-gray-700  text-gray-300 autofill:bg-gray-800 transition-all duration-500" required />
                            <label className="ml-2">Логин</label>
                        </div>

                        <div className="group">
                            <input type="text" className="text-md px-20 rounded-lg border-8  focus:border-gray-300  focus:border-8 block w-full pl-3 bg-gray-800 border-gray-700  text-gray-300 autofill:bg-gray-800 transition-all duration-500" value={fullName} onChange={(e)=>{setFullName(e.target.value)}} required />
                            {/* <span className="highlight"></span> */}
                            {/* <span className="bar"></span> */}
                            <label className="ml-2">Полное имя</label>
                        </div>

                        <div className="group">
                            <input type={`${hidden ? 'password' : 'text'}`} value={password} onChange={(e)=>{setPassword(e.target.value)}} className="text-md px-20 rounded-lg border-8  focus:border-gray-300  focus:border-8 block w-full pl-3 bg-gray-800 border-gray-700  text-gray-300 autofill:bg-gray-800 transition-all duration-500" required />
                            {/* <span className="highlight"></span> */}
                            {/* <span className="bar"></span> */}
                            {hidden ? <AiOutlineEyeInvisible onClick={()=>{setHidden(!hidden)}} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/> : <AiOutlineEye onClick={()=>{setHidden(!hidden)}} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/> }
                            <label className="ml-2">Пароль</label>
                        </div>

                        <div className="group">
                            <input type="text" className={`border-gray-700 text-md px-20 rounded-lg border-8  focus:border-gray-300  focus:border-8 block w-full pl-3 bg-gray-800  text-gray-300 autofill:bg-gray-800 transition-all duration-500`} value={phone} onChange={(e)=>{setPhone(e.target.value)}} required />
                            {/* <span className="highlight"></span> */}
                            {/* <span className="bar"></span> */}
                            <label className="ml-2">Номер телефона</label>
                        </div>

                        <div className="group">
                            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} className={`${emailError ? "border-red-500" : "border-gray-700"} text-md px-20 rounded-lg border-8  focus:border-gray-300  focus:border-8 block w-full pl-3 bg-gray-800 text-gray-300 autofill:bg-gray-800 transition-all duration-500`} required />
                            {/* <span className="highlight"></span> */}
                            {/* <span className="bar"></span> */}
                            <label className="ml-2">Email</label>
                        </div>

                        <div className="group">
                            <input type="text" className="text-md px-20 rounded-lg border-8  focus:border-gray-300  focus:border-8 block w-full pl-3 bg-gray-800 border-gray-700  text-gray-300 autofill:bg-gray-800 transition-all duration-500" value={address} onChange={(e)=>{setAddress(e.target.value)}} required />
                            {/* <span className="highlight"></span> */}
                            {/* <span className="bar"></span> */}
                            <label className="ml-2">Адресс</label>
                        </div>
                        </div>
                        <div className="flex items-center mb-5 mt-[-30px] mx-12 justify-center sm:justify-start sm:mx-0">
            <div className="flex items-center mr-2 ">
                <input value={policyRead} onClick={()=>{setPolicyRead(!policyRead)}}  type="checkbox" className="w-4 h-4 bg-red-100 border-red-300 text-red-500 focus:ring-red-200"/>
        </div>
        <Link href={'/policy'} >
        <a className="text-gray-200 text-sm sm:text-lg">Я согласен с
        <a href="#" className=" text-gray-400 text-sm sm:text-lg  hover:underline hover:text-gray-500 transition-all duration-500"> политикой конфиденициальности</a></a>


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
                    <div className="flex flex-col items-center whitespace-nowrap mb-5">
                     <Link href="/auth/login">
                        <a className="text-gray-200 text-lg ">У вас нет акаунта?  
                        <a className="text-gray-300 text-lg ml-1.5 hover:underline hover:text-gray-400 transition-all duration-500">Зарегистрируйтесь !</a></a>
                        </Link>
                   </div>
                    <button onClick={registerSubmit}  className="md:mb-0 mb-10 bg-gray-800 hover:bg-gray-900 hover:scale-110 rounded-2xl p-3 px-5 text-lg font-medium  text-gray-200 transition-all duration-500">Отправить</button>
                   
                   
                    
                </div>
            </div>
        </div>
    )
}
