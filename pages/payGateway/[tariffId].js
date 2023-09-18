import {useRouter} from "next/router";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkPass, setPasswordAction, setTariffAction} from "../../storage/reducers/payReducer";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export default function PaymentGateway() {

    const router = useRouter()
    const actionId = router.query.tariffId
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const [hidden, setHidden] = useState(true)
    const isPasswordCorrect = useSelector(state=>state.payReducer.isPassCorrect)
    const error = useSelector(state => state.payReducer.error)

    const submit = async () =>{
        await dispatch(await checkPass(password))
        dispatch(setTariffAction(router.query.tariffId))
        dispatch(setPasswordAction(password))
        console.log(router.query.tariffId)
        if(isPasswordCorrect) {
            router.push(`/payments/${actionId}`)
        }
    }


    return (
        <div className="w-full flex lg:h-[55rem] h-[30rem] items-center pb-8 bg-primary-black">
            <div className="container mx-auto flex flex-col items-center justify-center">
            <h1 className="z-20 text-2xl text-gray-200 sm:text-3xl text-center font-bold mt-[-70px] ">Покупка подписки</h1>
                <div className={`lg:w-1/5 w-2/3 group mt-8 flex items-center justify-center`}>
                    <input type={`${hidden ? 'password' : 'text'}`} value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                           className="text-md px-24 items-center rounded-lg  w-full pl-3 bg-secondary-black text-white autofill:bg-gray-800"
                           required/>
                    {hidden ? <AiOutlineEyeInvisible onClick={() => {
                        setHidden(!hidden)
                    }} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/> : <AiOutlineEye onClick={() => {
                        setHidden(!hidden)
                    }} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/>}
                    <label className="ml-2 text-outline-white">Пароль</label>
                    <p className={`text-red-600 ${error ? 'visible' : 'hidden'}`}>{error}</p>
                </div>
                <button onClick={submit} className={"z-10 text-primary lg:w-1/5 text-white font-medium text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-primary-blue to-primary-yellow " +
                    "rounded-xl w-2/3 p-3 lg:p-4 lg:px-8 hover:scale-105 duration-500 transition-all"}>Подтвердить</button>
            </div>
        </div>
    )
}
