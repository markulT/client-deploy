import Link from 'next/link'
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../storage/reducers/authReducer'
import {useRouter} from "next/router";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export default function LoginPage() {
    const [hidden, setHidden] = useState(true)
    const router = useRouter()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userExists = useSelector(state=>state.authReducer.email)
    // const error = useSelector(state=>state.authReducer.error)

    const submitLogin = async () => {
        if (email == "" || password == '') {
            return
        }
        await dispatch(login(email, password))
        router.push('/profile')
    }
    useEffect(()=>{
        if (userExists) {
            router.push('/profile')
        }
    },[])


    return (
        <div className="min-h-[100vh] w-full bg-gradient-to-r from-grad_from to-grad_to bg-blur-sm">
            <div className="container h-screen mx-auto flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl text-gray-200 sm:text-3xl text-center font-bold mt-[-60px]">Логин</h1>
                    <form>

                        <div className="group mt-10">
                            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="text-md px-20 rounded-lg border-8  focus:border-gray-300  focus:border-8 block w-full pl-3 bg-gray-800 border-gray-700  text-gray-300 autofill:bg-gray-800 transition-all duration-500" required />
                            <label className="ml-2 text-gray-400">Email</label>
                        </div>
                        <div className="group">
                            <input type={`${hidden ? 'password' : 'text'}`} value={password} onChange={(e)=>{setPassword(e.target.value)}} className="text-md px-20 rounded-lg border-8  focus:border-gray-300  focus:border-8 block w-full pl-3 bg-gray-800 border-gray-700  text-gray-300 autofill:bg-gray-800 transition-all duration-500" required />
                            {hidden ? <AiOutlineEyeInvisible onClick={()=>{setHidden(!hidden)}} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/> : <AiOutlineEye onClick={()=>{setHidden(!hidden)}} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/> }
                            <label className="ml-2 text-gray-400 peer-focus:text-gray-100">Пароль</label>
                        </div>

                        <div className="mt-[-20px]">
<a className="text-gray-200 text-lg">У вас нет акаунта? </a>
                        <Link href="/auth/signup">
                        <a className="text-gray-300 text-lg  hover:underline hover:text-gray-400 transition-all duration-300">Зарегистрируйтесь !</a>
                        </Link>
                        </div>
                        

                    </form>
                    <button onClick={submitLogin} className="bg-gray-800 hover:bg-gray-900 hover:scale-110 rounded-2xl p-3 px-5 text-lg font-medium mt-5 text-gray-200 transition-all duration-500">Отправить</button>
                </div>
            </div>
        </div>
    )
}
