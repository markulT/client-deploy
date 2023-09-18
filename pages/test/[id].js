import Router, {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineEyeInvisible} from "react-icons/ai";
import {AiOutlineEye} from "react-icons/ai";
import {
    createMobileTestSubThunk,
    createTestSubThunk,
    getFullProfile,
    getProfile
} from "../../storage/reducers/authReducer";
import {checkPass} from "../../storage/reducers/payReducer";


export default function TestPaymentGateway() {

    const router = useRouter()
    const actionId = router.query.id
    const user = useSelector(state => state.authReducer)
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const [hidden, setHidden] = useState(true)
    const isPasswordCorrect = useSelector(state => state.payReducer.isPassCorrect)
    const error = useSelector(state => state.payReducer.error)
    const [disable, setDisable] = useState(false)


    const createTestSub = async (password, tariff) => {
        await dispatch(createTestSubThunk({
            email: user.email,
            password: password,
            tariff: tariff
        }))
    }

    const createMobileTestSub = async () => {
        await dispatch(createMobileTestSubThunk({
            email: user.email,
        }))
    }

    const submit = async () => {
        const subLevel = actionId === "minimum" ? 1 : actionId === "standard" ? 2 : actionId === "premium" ? 3 : 0;
        await dispatch(createTestSubThunk({email: user.email, password: password, tariff: subLevel}));

        // Refresh profile and navigate
        await dispatch(getProfile());
        await dispatch(getFullProfile());
        await router.push(`/profile`);

        setDisable(false)
    }

    return (
        <div className="w-full lg:h-[55rem] h-[30rem] pb-8 bg-primary-black">
            <div className="flex h-full flex-col items-center justify-center">
                <h1 className="z-20 text-2xl text-gray-200 sm:text-3xl text-center font-bold ">Тестовая
                    подписка {(actionId)?.toUpperCase()}</h1>
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
                <button onClick={submit}
                        className={"z-10 text-primary lg:w-1/5 text-white font-medium text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-primary-blue to-primary-yellow " +
                            "rounded-xl w-2/3 p-3 lg:p-4 lg:px-8 hover:scale-105 duration-500 transition-all"}>Подтвердить
                </button>
            </div>
        </div>
    )
}
