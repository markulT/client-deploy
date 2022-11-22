import Link from 'next/link'
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../storage/reducers/authReducer'
import {useRouter} from "next/router";

export default function LoginPage() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [userLogin, setUserLogin] = useState('')
    const [password, setPassword] = useState('')
    const userExists = useSelector(state=>state.authReducer.login)

    const submitLogin = async () => {
        if (userLogin == "" || password == '') {
            return
        }
        await dispatch(login(userLogin, password))
        router.push('/profile')
    }
    useEffect(()=>{
        if (userExists) {
            router.push('/profile')
        }
    },[])

    return (
        <div className="min-h-[100vh] w-full bg-gradient-to-r from-grad_from to-grad_to">
            <div className="container h-screen mx-auto flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <form>

                        <div className="group">
                            <input type="text" value={userLogin} onChange={(e)=>{setUserLogin(e.target.value)}} className="bg-transparent" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Логин</label>
                        </div>
                        <div className="group">
                            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="bg-transparent" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Пароль</label>
                        </div>
                        <Link href="/auth/signup">
                            <a>У вас нет акаунта? Зарегистрируйтесь !</a>
                        </Link>

                    </form>
                    <button onClick={submitLogin} className="bg-dead_violet rounded-3xl p-3 text-lg font-medium">Отправить</button>
                </div>
            </div>
        </div>
    )
}
