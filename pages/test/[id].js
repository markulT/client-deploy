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
        <div className="w-full min-h-screen bg-gradient-to-t from-grad_from to-grad_to">
            <div className="container h-screen mx-auto flex flex-col items-center justify-center">
                <h1 className="text-2xl text-gray-200 sm:text-3xl text-center font-bold mt-[-70px] ">Тестовая
                    подписка {(actionId)?.toUpperCase()}</h1>
                <div className={`group mt-20`}>
                    <input type={`${hidden ? 'password' : 'text'}`} value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                           className="text-md px-20 rounded-lg border-8  focus:border-gray-300  focus:border-8 block w-full pl-3 bg-gray-800 border-gray-700  text-gray-300 autofill:bg-gray-800"
                           required/>
                    {hidden ? <AiOutlineEyeInvisible onClick={() => {
                        setHidden(!hidden)
                    }} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/> : <AiOutlineEye onClick={() => {
                        setHidden(!hidden)
                    }} className="h-6 w-6 fill-gray-300 absolute top-3 right-3"/>}
                    <label className="ml-2">Пароль</label>
                    <p className={`text-red-600 ${error ? 'visible' : 'hidden'}`}>{error}</p>
                </div>
                <button onClick={submit} disabled={false}
                        className="bg-gray-800 hover:bg-gray-700 rounded-2xl p-3 px-5 text-lg font-medium  text-gray-200">Подтвердить
                </button>
            </div>
        </div>
    )
}
