import { useDispatch, useSelector } from 'react-redux'
import {cancelSubThunk, changeMac, createSubThunk, getFullProfile, getUser} from '../../storage/reducers/authReducer'
// import { useRouter } from 'next/router'
import Router, {useRouter} from 'next/router'
import {useCallback, useEffect, useState} from 'react'
import style from '../../styles/payButton.module.css'
import {useEffectOnce} from "../../hooks/useEffectOnce";
import {AiOutlineDownCircle} from "@react-icons/all-files/ai/AiOutlineDownCircle";


export default function ProfilePage() {
    const user = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const router = useRouter()

    const [macOpen, setMacOpen] = useState(false)
    const [scrollTop, setScrollTop] = useState(false)
    const tariffs = {
        "1":"standart",
        "2":"premium",
        "3":"mobile"
    }

    const [password, setPassword] = useState('')
    const [tariff, setTariff] = useState('')
    const [mac, setMac] = useState('')

    const createSub = async (password, tariff) => {
        await dispatch(createSubThunk({
            login:user.login,
            password:password,
            fullName:user.fullName,
            tariff:tariff
        }))
    }

    const changeMacAddress = () => {
        dispatch(changeMac(user.login, mac))
    }

    const cancelSub = async (password) => {
        await dispatch(cancelSubThunk({
            login:user.login,
            pass
        }))
    }


    useEffect(() => {
        if (!user.login) {
            Router.push({
                pathname: '/auth/login'
            })
        }
    }, [])
    return (
        <div className="w-ful min-h-screen bg-gradient-to-r from-grad_from to-grad_to">
            <div className="container mx-auto">
                <div className="flex flex-wrap md:flex-nowrap justify-center items-center pt-8">
                    <div className="basis-1/3">
                        <img src="/PickRestTV/Profile/User.png" draggable={false} className="w-full select-none h-auto scale-x-[-1]" alt=""/>
                    </div>
                    <div className={'text-center md:text-left'}>
                        <h3 className="text-3xl font-medium text-dead_violet">{user.login}</h3>
                        <h3 className="text-3xl font-medium text-dead_violet">{user.full_name}</h3>
                        <h3 className="text-3xl font-medium text-dead_violet">Mobile Maximum {user.mobileSubLevel}</h3>
                        <a href={'#subs'} className="text-3xl cursor-pointer font-medium text-dead_violet">{user.tariff_plan != "0" ? user.tariff_plan : "Приобретите подписку"}</a>
                        <div className="flex flex-wrap flex-col items-center">
                            <h3 className={`${macOpen ? 'text-4xl' : 'text-3xl'} transition-all duration-200 ease-in font-medium text-dead_violet`}>{user.stb_mac ? user.stb_mac : "Установите свой мак адрес"} <AiOutlineDownCircle onClick={()=>{
                                setMac('')
                                setMacOpen(!macOpen)}
                            } className="text-3xl inline cursor-pointer ml-4 mr-4" /></h3>

                            <div className={`${macOpen ? "visible" : "hidden"} bg-white rounded-3xl p-6 flex flex-wrap items-center`}>
                            <div className={`group`}>
                                <input type="text" value={mac} onChange={(e)=>{setMac(e.target.value)}} className="bg-transparent" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Mac Address</label>
                            </div>
                                <button onClick={changeMacAddress} className="bg-dead_violet rounded-3xl p-3 text-lg font-medium">Submit</button>
                            </div>
                        </div>
                        <h3  className="text-3xl font-medium text-dead_violet">{tariffs[user.tariff_plan]}</h3>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <h2 id={"subs"} className="text-6xl text-center flex-wrap font-bold font-[Inter] mt-8">Подписки</h2>
                <div className="flex items-center justify-around mt-8">
                    <div className="bg-white rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6">
                        <h3 className="text-3xl text-center text-dead_violet font-bold">Standart
                        </h3>
                        <p className="text-center text-text-gray text-2xl mt-4">
                            Стандартный тарифф
                        </p>
                        <button onClick={()=>{router.push('/payGateway/standart')}} className="bg-dead_violet mt-4 rounded-3xl p-3 text-lg font-medium">Заказать</button>
                    </div>
                    <div className="bg-white rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6">
                        <h3 className="text-3xl text-center text-dead_violet font-bold">Premium
                        </h3>
                        <p className="text-center text-text-gray text-2xl mt-4">
                            Премиум тариф. Расширеные возможности
                        </p>
                        <button onClick={()=>{router.push('/payGateway/premium')}} className="bg-dead_violet mt-4 rounded-3xl p-3 text-lg font-medium">Заказать</button>
                    </div>
                </div>
                <div className="container pb-8 mx-auto">
                    <div className="flex items-center justify-center w-full">
                        <button onClick={()=>{
                            router.push("/payments/cancelSub")
                        }} className="bg-red-500 rounded-3xl p-3 text-lg font-medium mr-4">Отменить подписку</button>
                    </div>
                </div>

            </div>
            <div className="container mx-auto pb-4">
                <h2 className="text-6xl text-center flex-wrap font-bold font-[Inter] mt-8">Подписка Mobile Maximum</h2>
                <div className="flex items-center justify-around mt-8">
                    <div className="bg-white rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6">
                        <h3 className="text-3xl text-center text-dead_violet font-bold">Полный доступ
                        </h3>
                        <p className="text-center text-text-gray text-2xl mt-4">
                            Тарифф с полным доступом
                        </p>
                        <button onClick={()=>{router.push('/payGateway/mobile')}} className="bg-dead_violet mt-4 rounded-3xl p-3 text-lg font-medium">Заказать</button>
                    </div>

                </div>
                <div className="container pb-8 mx-auto mt-4">
                    <div className="flex items-center justify-center w-full">
                        <button onClick={()=>{
                            router.push("/payments/cancelMobileSub")
                        }} className="bg-red-500 rounded-3xl p-3 text-lg font-medium mr-4">Отменить подписку</button>
                    </div>
                </div>
            </div>
        </div>
    )
}