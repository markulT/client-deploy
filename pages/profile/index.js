import { useDispatch, useSelector } from 'react-redux'
import {
    cancelSubThunk,
    changeMac,
    createSubThunk,
    getFullProfile, getProfile, getSchedule,
    getUser,
    logout
} from '../../storage/reducers/authReducer'
// import { useRouter } from 'next/router'
import Router, {useRouter} from 'next/router'
import {useCallback, useEffect, useState} from 'react'
import style from '../../styles/payButton.module.css'
import {useEffectOnce} from "../../hooks/useEffectOnce";
import {AiOutlineDownCircle} from "@react-icons/all-files/ai/AiOutlineDownCircle";
import { BsCart2 } from "react-icons/bs";
import Image from 'next/image'
import {downloadScheduleThunk} from "../../storage/reducers/payReducer";
import Link from "next/link";
import ScheduleElement from "../../comps/ScheduleElement";

export default function ProfilePage() {
    const user = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const router = useRouter()

    const schedule = useSelector(state=>state.authReducer.schedule)
    const [scheduleVisibility, setScheduleVisibility] = useState(false)


    useEffect(()=>{
        dispatch(getProfile)
        dispatch(getFullProfile)
        console.log(user.tariff_plan)
        if (!user.email) {
            router.push('/auth/login')
        }
    },[])
    return (
        <div className="w-ful min-h-screen bg-gradient-to-t from-grad_from to-grad_to">
            <div className="container mx-auto">
                <div className="flex flex-wrap md:flex-nowrap justify-center items-center pt-8">
                    <div className="basis-1/3">
                        <Image src={'/PickRestTV/Profile/User.png'}
                                   className="w-full select-none h-auto scale-x-[-1]" draggable={false} width={700}
                                   height={700}/>
                    </div>
                    <div className={''}>
                        <div className={'text-center md:text-left bg-gray-800 p-4 sm:p-8 rounded-3xl transition-all duration-800 ease-in-out'}>
                            <h3 className="text-xl md:text-3xl text-left font-medium text-gray-200">Email: {user.email}</h3>
                            <h3 className="text-xl md:text-3xl text-left font-medium text-gray-200">Полное имя: {user.full_name}</h3>
                            {/*<h3 className="text-3xl flex items-center font-medium text-gray-200">Мобильный тариф: {user.mobileSubLevel == 0 ? "Нету" : user.mobileSubLevel == null ? "Нету" : "Премиум"}</h3>*/}
                            <a  className="text-xl md:text-3xl flex items-center font-medium text-gray-200">Подписка: {user.tariff_plan === "1"  ? "Активна" : user.tariff_plan === "2"  ? "Премиум" : "Нету"}</a>
                            {/*<div className="flex flex-wrap flex-col items-center">*/}
                            {/*    <h3 className={`${macOpen ? 'text-3xl' : 'text-3xl'} transition-all duration-200 ease-in font-medium text-gray-200`}>{user.stb_mac ? user.stb_mac : "Установите свой мак адрес"} <AiOutlineDownCircle onClick={()=>{*/}
                            {/*        setMac('')*/}
                            {/*        setMacOpen(!macOpen)}*/}
                            {/*    } className={`${macOpen ? "rotate-180" : "rotate-0"} transition-all duration-500 text-3xl inline cursor-pointer ml-4 mr-4 focus:rotate-90 text-color-gray-200 hover:text-gray-400`}/></h3>*/}

                            {/*    <div className={`${macOpen ? "visible " : "hidden"}  bg-gray-700 rounded-3xl mt-3 p-6 flex flex-wrap items-center`}>*/}
                            {/*    <div className={`group items-start h-2 w-80`}>*/}
                            {/*        <input type="text" value={mac} onChange={(e)=>{setMac(e.target.value)}} className="absolute  right-0 text-md px-20 rounded-lg border-8  focus:border-gray-300  focus:border-8 block w-full pl-3 bg-gray-800 border-gray-500  text-gray-300 autofill:bg-gray-800" required />*/}
                            {/*        <label className="text-gray-400 focus:text-gray-200">Mac Address</label>*/}
                            {/*    </div>*/}
                            {/*        <button onClick={changeMacAddress} className="bg-gray-800 hover:bg-gray-600 text-gray-200 rounded-2xl ml-3 p-3 text-lg font-medium mt-5 sm:mt-0">Готово</button>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/* <h3  className="text-3xl font-medium text-gray-200">{tariffs[user.tariff_plan]}</h3> */}
                        </div>
                        <div className={'flex justify-center'}>
                            {user.tariff_plan === "1" || user.tariff_plan === "2" ?
                        <div className={'bg-gray-700 mt-4 p-2 w-full rounded-xl hover:bg-gray-800 hover:scale-105  transition-all duration-500'}>
                            <button className={"p-2 text-center w-full"} onClick={()=>{

                                if(scheduleVisibility) {
                                    setScheduleVisibility(false)
                                } else {
                                    setScheduleVisibility(true)
                                    dispatch(getSchedule())
                                }
                            }}>
                                {scheduleVisibility ? "Закрыть программу" : "Посмотреть программу"}
                            </button>
                            {/*<Link href="/catalogPick/1.jpg" download>*/}
                            {/*    Скачать программу*/}
                            {/*</Link>*/}
                        </div>
                            : ""}
                        </div>


                    </div>
                </div>
            </div>

            {scheduleVisibility ? <section className={'mt-8 flex justify-center flex-col items-center'}>
                <h2 className={'text-3xl font-bold'}>ICTV</h2>

                <div className={"container mx-auto rounded-3xl p-4 grid grid-cols-2 gap-3 lg:grid-cols-4"}>
                    {schedule ? schedule.map((item) => <ScheduleElement name={item.name} from={item.t_time} to={item.t_time_to} key={0}/>) : ''}
                </div>
            </section> : ''}

            <div className="container mx-auto pb-8 md:pb-0">
                <h2 id={"subs"} className="text-gray-200 text-3xl md:text-6xl text-center flex-wrap font-bold font-[Inter] mt-8">Подписки</h2>
                <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-center justify-around mt-8 gap-5">
                    <div className="bg-gray-800 drop-shadow-2xl rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6  ">
                        <h3 className="text-2xl md:text-3xl text-center text-gray-200 font-bold">Минимальный
                        </h3>
                        <p className="text-center text-gray-300 text-xl md:text-2xl">
                            Минимальный  тариф. <br/> Список програм <br/> <a className={'font-bold'}>MINIMAL</a> включен
                        </p>
                        <button onClick={()=>{router.push('/payGateway/minimum')}} className="bg-gray-600 hover:bg-gray-700 text-gray-200 mt-4 rounded-xl p-3 px-7 text-lg font-medium transition-all hover:-translate-y-1 duration-500 hover:scale-110">Заказать</button>
                    </div>
                    <div className="bg-gray-800 drop-shadow-2xl rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6  ">
                        <h3 className="text-2xl md:text-3xl text-center text-gray-200 font-bold">Стандарт
                        </h3>
                        <p className="text-center text-gray-300 text-xl md:text-2xl">
                            Стандартный тариф. <br/> Список програм <br/> <a className={'font-bold'}>STANDART</a> включен
                        </p>
                        <button onClick={()=>{router.push('/payGateway/standart')}} className="bg-gray-600 hover:bg-gray-700 text-gray-200 mt-4 rounded-xl p-3 px-7 text-lg font-medium transition-all hover:-translate-y-1 duration-500 hover:scale-110">Заказать</button>
                    </div>
                    <div className="bg-gray-800 sm:mt-0 rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6">
                        <h3 className="text-2xl md:text-3xl text-center text-gray-200 font-bold">Премиум
                        </h3>
                        <p className="text-center text-gray-300 text-xl md:text-2xl px-90 ">
                            Премиум тариф.<br/>
                            <span className="whitespace-nowrap">Список програм <br/> <a className={'font-bold'}>PREMIUM</a>  включен</span>
                        </p>
                        <button onClick={()=>{router.push('/payGateway/premium')}} className="bg-gray-600 hover:bg-gray-700 text-gray-200 mt-4 rounded-xl p-3 px-7 text-lg font-medium transition-all hover:-translate-y-1 duration-500 hover:scale-110">Заказать</button>
                    </div>
                    <div className="bg-gray-800 sm:mt-0 rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6 ">
                        <h3 className="text-2xl md:text-3xl text-center text-gray-200 font-bold">Тест
                        </h3>
                        <p className="text-center text-gray-300 text-xl md:text-2xl px-90 ">
                            Тест тариф.<br/>
                            <span className="whitespace-nowrap">Список програм <br/> <a className={'font-bold'}>TEST SUB</a>  включен</span>
                        </p>
                        <button onClick={()=>{router.push('/payGateway/test')}} className="bg-gray-600 hover:bg-gray-700 text-gray-200 mt-4 rounded-xl p-3 px-7 text-lg font-medium transition-all hover:-translate-y-1 duration-500 hover:scale-110">Заказать</button>
                    </div>
                </div>

                <div className={'flex justify-center'}>
                    {user.tariff_plan === "1" || user.tariff_plan === "2" ?
                        <div className="container pb-8 mx-auto">
                            <div className="flex items-center justify-center w-full">
                                <button onClick={()=>{
                                    router.push("/payments/cancelSub")
                                }} className="bg-red-500 hover:bg-red-600 text-gray-200 rounded-3xl p-3 mt-5 text-lg font-medium hover:scale-110 hover:-translate-y-1 transition-all duration-500">Отменить подписку</button>
                            </div>
                        </div>
                            : ""}
                </div>



            </div>
            {/*<div className="container mx-auto pb-4">*/}
            {/*    <h2 id="subsMobile" className="text-6xl text-gray-200 text-center flex-wrap font-bold font-[Inter] mt-8">Подписка Mobile Maximum</h2>*/}
            {/*    <div className="flex items-center justify-around mt-8">*/}
            {/*        <div className="bg-gray-800 rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6 px-20">*/}
            {/*            <h3 className="text-3xl text-center text-gray-200  font-bold">Полный доступ*/}
            {/*            </h3>*/}
            {/*            <p className="text-center text-gray-300 text-2xl mt-4">*/}
            {/*                Тарифф с полным доступом*/}
            {/*            </p>*/}
            {/*            <button onClick={()=>{router.push('/payGateway/mobile')}} className="bg-gray-600 hover:bg-gray-700 text-gray-200 mt-4 rounded-2xl p-3 text-lg font-medium">Заказать</button>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*    <div className="container pb-8 mx-auto mt-4">*/}
            {/*        <div className="flex items-center justify-center w-full">*/}
            {/*            <button onClick={()=>{*/}
            {/*                router.push("/payments/cancelMobileSub")*/}
            {/*            }} className="bg-red-500 hover:bg-red-600 text-gray-200 rounded-3xl p-3 text-lg font-medium mr-4">Отменить подписку</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
