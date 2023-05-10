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
        <div className="w-full min-h-screen bg-gradient-to-t from-grad_from to-grad_to">
            <div className="container h-screen mx-auto flex flex-col items-center justify-center">
            <h1 className="text-2xl text-gray-200 sm:text-3xl text-center font-bold mt-[-70px] ">Покупка подписки</h1>
                    <div className={`group mt-20`}>
                    <input type={`${hidden ? 'password' : 'text'}`} value={password} onChange={(e)=>{setPassword(e.target.value)}} className="text-md px-20 rounded-lg border-8  focus:border-gray-300  focus:border-8 block w-full pl-3 bg-gray-800 border-gray-700  text-gray-300 autofill:bg-gray-800" required />
                    {hidden ? <AiOutlineEyeInvisible onClick={()=>{setHidden(!hidden)}} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/> : <AiOutlineEye onClick={()=>{setHidden(!hidden)}} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/> }
                            <label className="ml-2">Пароль</label>
                        <p className={`text-red-600 ${error ? 'visible' : 'hidden'}`}>{error}</p>
                </div>
                <button onClick={submit} className="bg-gray-800 hover:bg-gray-700 rounded-2xl p-3 px-5 text-lg font-medium  text-gray-200">Подтвердить</button>
            </div>
        </div>
    )
}
