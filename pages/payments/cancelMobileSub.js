import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {cancelMobileSubThunk, cancelSubThunk, getProfile} from "../../storage/reducers/authReducer";
import Router, {useRouter} from "next/router";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";


export default function CancelMobileSub() {
    const [password, setPassword] = useState('')
    const [hidden, setHidden] = useState(true)
    const dispatch = useDispatch()
    const user = useSelector(state=>state.authReducer)
    const router = useRouter()
    const cancelSub = async () => {
        await dispatch(cancelMobileSubThunk({password:password}))
        await dispatch(getProfile())
        router.push('/profile')
    }
    useEffect(() => {
        if (!user.login) {
            Router.push({
                pathname: '/auth/login'
            })
        }
    }, [])
    return (
        <div>
            <div className="w-full min-h-screen bg-gradient-to-r from-grad_from to-grad_to">
                <div className="container h-screen mx-auto flex flex-col items-center justify-center">
                <h1 className="text-2xl text-gray-200 sm:text-3xl text-center font-bold mt-[-70px] ">Отмена мобильной подписки</h1>
                    <div className={`group mt-20`}>
                        <input type={`${hidden ? 'password' : 'text'}`} value={password} onChange={(e)=>{setPassword(e.target.value)}} className="text-md px-20 rounded-lg border-8  focus:border-gray-300  focus:border-8 block w-full pl-3 bg-gray-800 border-gray-700  text-gray-300 autofill:bg-gray-800" required />
                        {hidden ? <AiOutlineEyeInvisible onClick={()=>{setHidden(!hidden)}} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/> : <AiOutlineEye onClick={()=>{setHidden(!hidden)}} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/> }
                        <label className="ml-2">Пароль</label>
                    </div>
                    <button disabled={password == ''} onClick={cancelSub} className="bg-gray-800 hover:bg-gray-700 rounded-2xl p-3 px-5 text-lg font-medium  text-gray-200">Подтвердить</button>
                </div>
            </div>
        </div>
    )
}