import Link from 'next/link'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getFullProfile, getProfile, login, setCustomError} from '../../storage/reducers/authReducer'
import { useRouter } from 'next/router';
import {AiOutlineClose, AiOutlineEyeInvisible} from "react-icons/ai";
import {AiOutlineEye} from "react-icons/ai";
import {BiErrorCircle} from "react-icons/bi";


export default function LoginPage() {
    const [hidden, setHidden] = useState(true)
    const router = useRouter()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userExists = useSelector(state => state.authReducer.email)
    const error = useSelector(state => state.authReducer.error);
    // const error = useSelector(state=>state.authReducer.error)

    const submitLogin = async () => {
        if (email === "" || password === "") {
            return;
        }
        await dispatch(login(email, password));
        await dispatch(getProfile());
        await dispatch(getFullProfile());
        if (userExists) {
            router.push('/profile');
        } else {
            // Handle the error and set it in the Redux store
            dispatch(setCustomError('Неверный логин или пароль'));
        }
    };


    const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    return (
        <div className="w-full flex lg:h-[55rem] h-[30rem] items-center pb-8 bg-primary-black">
            <div className=" w-full relative h-screen flex items-center justify-center">
                <div className="flex w-full justify-center flex-col items-center">
                    <h1 className="text-2xl text-gray-200 sm:text-3xl text-center font-bold mt-[-60px]">Логин</h1>
                    <form className={"w-full flex flex-col items-center"}>

                        <div className={`lg:w-1/4 w-10/12 group mt-8 flex flex-col items-start justify-center`}>
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
                        {error && (
                            <div className="z-40 flex items-center mb-8 bg-red-500 p-2 lg:p-4 rounded-xl  text-sm align-middle">
                                <BiErrorCircle className={"lg:text-xl"}/>
                                <p className={"text-xs lg:text-sm ml-4"}>{error}</p>
                            </div>
                        )}

                        <div className=" z-20">
                            <a className="text-gray-200 text-sm lg:text-lg">У вас нет акаунта? </a>
                            <Link href="/auth/signup">
                                <a className="text-gray-300 text-sm lg:text-lg hover:underline hover:text-gray-400 transition-all duration-300">Зарегистрируйтесь
                                    !</a>
                            </Link>
                        </div>


                    </form>
                    <button onClick={submitLogin} disabled={!emailRegExp.test(email) || !(password.length > 7)}
                            className={"z-10 mb-8 mt-4 w-10/12 text-primary lg:w-1/5 text-white font-medium text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-highlightBlue to-highlightDarkBlue " +
                                `rounded-xl ${!emailRegExp.test(email) || !(password.length > 7) ? "opacity-50" : "opacity-100 hover:scale-105"} w-10/12se p-3 lg:p-4 lg:px-8  duration-500 transition-all`}>Подтвердить
                    </button>
                </div>
            </div>
        </div>
    )
}
