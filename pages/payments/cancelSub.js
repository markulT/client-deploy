import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {cancelSubThunk, cancelTestMobileSubThunk, getFullProfile, getProfile} from "../../storage/reducers/authReducer";
import Router, {useRouter} from "next/router";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";


export default function CancelSub() {
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(state=>state.authReducer)
    const router = useRouter()
    const [hidden, setHidden] = useState(true)

    const cancelSub = async () => {
        console.log(password)
        await dispatch(cancelSubThunk({
            email:user.email,
            password:password
        }))
        await dispatch(getProfile())
        await dispatch(getFullProfile())
        await Router.push('/profile')
    }
    useEffect(() => {
        if (!user.email) {
            Router.push({
                pathname: '/auth/login'
            })
        }
    }, [])

    return(
        <div className="w-full min-h-screen">
            <div className="container h-screen mx-auto flex flex-col items-center justify-center">
            <h1 className="text-2xl text-gray-200 sm:text-3xl text-center font-bold mt-[-70px] ">Отмена подписки</h1>
                <div className={`group mt-20`}>
                <input type={`${hidden ? 'password' : 'text'}`} value={password} onChange={(e)=>{setPassword(e.target.value)}}   className="text-md px-24 items-center rounded-lg  w-full pl-3 bg-secondary-black text-white autofill:bg-gray-800"
                       required/>
                          {hidden ? <AiOutlineEyeInvisible onClick={()=>{setHidden(!hidden)}} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/> : <AiOutlineEye onClick={()=>{setHidden(!hidden)}} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/> }
                            <label className="ml-2">Пароль</label>
                </div>
                <button
                    onClick={cancelSub}
                    className={"z-10 mb-8 mt-4 w-10/12 text-primary lg:w-1/5 text-white font-medium text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-highlightBlue to-highlightDarkBlue " +
                        `rounded-xl w-10/12se p-3 lg:p-4 lg:px-8  duration-500 transition-all`}>Подтвердить
                </button>
            </div>
        </div>
    )
}

