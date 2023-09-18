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
import FeatureComponent from "../../comps/HomePage/utils/FeatureComponent";

export default function ProfilePage() {
    const user = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const router = useRouter()

    const schedule = useSelector(state=>state.authReducer.schedule)
    const [scheduleVisibility, setScheduleVisibility] = useState(false)


    useEffect(()=>{
        dispatch(getProfile)
        dispatch(getFullProfile)
        console.log(user)
        if (!user.email) {
            router.push('/auth/login')
        }
    },[])

    const subsList = {
        "1": {
            title: 'Минимальный',
            src: '/payGateway/minimum',
            paragraph: "Минимальный тариф.\n" +
                "Список програм\n" +
                "MINIMAL включен",
        },
        "2": {
            title: 'Стандарт',
            src: '/payGateway/standart',
            paragraph: "Стандартный тариф.\n" +
                "Список програм\n" +
                "STANDARD включен",
        },
        "3": {
            title: 'Премиум',
            src: '/payGateway/premium',
            paragraph: "Премиум тариф.\n" +
                "Список програм\n" +
                "PREMIUM включен",
        },
        "4": {
            title: 'Тест минимальный',
            src: '/test/minimum',
            paragraph: "Минимальный тариф.\n" +
                "Список програм\n" +
                "MINIMAL включен",
        },
        "5": {
            title: 'Тест стандарт',
            src: '/test/standard',
            paragraph: "Стандартный тариф.\n" +
                "Список програм\n" +
                "STANDARD включен",
        },
        "6": {
            title: 'Тест премиум',
            src: '/test/premium',
            paragraph: "Премиум тариф.\n" +
                "Список програм\n" +
                "PREMIUM включен",
        },
    };

    const handleActivateEmailClick = () => {
        // Replace 'email@example.com' with the email address you want to filter by
        const emailToFilter = 'rest.iptv.business@gmail.com';

        // Construct the Gmail URL with a search query for the specific email address
        const gmailUrl = `https://mail.google.com/mail/u/0/#search/from%3A${encodeURIComponent(emailToFilter)}`;

        // Open Gmail in the user's default web browser
        window.open(gmailUrl, '_blank');
    };

    return (
        <div className="flex flex-col z-[10] w-full min-h-screen px-12 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-32">

            <div className="flex flex-col lg:flex-row w-full">
                <section className={"flex lg:w-1/2 flex-col z-[10]"}>
                    <h1 className="text-center lg:text-start font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Профиль</h1>
                    <h2 className="text-primary-text font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-8 lg:mt-16">Приветствуем {user.fullName}</h2>
                    <div>
                        <p className={"text-outline-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl"}>Ваш email:</p>
                        <p className={"font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl"}>{user.email}</p>
                    </div>
                    <div>
                        <p className={"text-outline-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl"}>Ваш телефон:</p>
                        <p className={"font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl"}>{user.phone == "" ? "Не указан" : user.phone}</p>
                    </div>
                    <div>
                        <p className={"text-outline-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl"}>Активация емейла:</p>
                        <div className={"flex items-center"}>
                            <p className={"font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl"}>{user.isActivated == false ? "Неактивирован" : "Активирована"}</p>
                            {user.isActivated == false ?
                                <p className={"ml-4 font-medium text-sm md:text-md lg:text-lg italic cursor-pointer"} onClick={handleActivateEmailClick}>Активировать почту</p>
                                : <></>
                            }

                        </div>
                    </div>
                    <div>
                        <p className={"text-outline-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl"}>Подписка:</p>
                        <p className={"font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl"}>{
                            user.subLevel == 0 ? "Неактивна" :
                                user.subLevel == 1 ? "Минимум":
                                    user.subLevel == 2 ? "Стандарт" :
                                        user.subLevel == 3 ? "Премиум" :
                                            "Неактивна"
                        }</p>
                    </div>
                    {/*<button onClick={() => console.log(user)}>log</button>*/}

                            <div className={'flex justify-start'}>
                                {user.subLevel == 1 ||  user.subLevel == 2 ||  user.subLevel == 3 ?
                                    <button className={"mt-4 z-10 text-primary w-full sm:w-fit text-white font-medium text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl bg-gradient-to-r from-primary-blue to-primary-yellow " +
                                        "rounded-2xl p-3 lg:p-4 lg:px-8 hover:scale-105 duration-500 transition-all"}

                                            onClick={()=>{

                                                if(scheduleVisibility) {
                                                    setScheduleVisibility(false)
                                                } else {
                                                    setScheduleVisibility(true)
                                                    dispatch(getSchedule())
                                                }
                                            }}>
                                        {scheduleVisibility ? "Закрыть программу" : "Посмотреть программу"}
                                    </button>
                                    : <></>}
                            </div>

                </section>
                {scheduleVisibility ? <section className={'mt-8 flex justify-center flex-col items-center'}>
                    <h2 className={'text-3xl font-bold'}>ICTV</h2>

                    <div className={"container mx-auto rounded-3xl p-4 grid grid-cols-1 gap-3 md:grid-cols-2"}>
                        {schedule
                            ? schedule.map((item, index) => {
                                // Split the time string into parts
                                const timeParts = item.t_time.split(' ');
                                const timeToParts = item.t_time_to.split(' ');

                                // Extract hours and minutes
                                const [hours12, minutes] = timeParts[0].split(':').map(Number);
                                const [hoursTo12, minutesTo] = timeToParts[0].split(':').map(Number);

                                // Convert to 24-hour format
                                let hours24 = hours12;
                                let hoursTo24 = hoursTo12;

                                if (timeParts[1] === 'PM' && hours12 !== 12) {
                                    hours24 += 12;
                                }

                                if (timeToParts[1] === 'PM' && hoursTo12 !== 12) {
                                    hoursTo24 += 12;
                                }

                                // Construct the 24-hour time strings
                                const startTime = `${hours24.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                                const endTime = `${hoursTo24.toString().padStart(2, '0')}:${minutesTo.toString().padStart(2, '0')}`;

                                const currentTime = new Date()

                                const t_startDate = new Date();
                                t_startDate.setHours(hours24, minutes, 0, 0);

                                const t_endDate = new Date();
                                t_endDate.setHours(hoursTo24, minutesTo, 0, 0);


                                if (t_startDate > currentTime) {
                                    return (
                                        <ScheduleElement
                                            color={"white"}
                                            name={item.name}
                                            from={startTime}
                                            to={endTime}
                                            key={index}
                                        />
                                    );
                                } else if (t_startDate < currentTime) {
                                    return (
                                        <ScheduleElement
                                            color={"disabled-white"}
                                            name={item.name}
                                            from={startTime}
                                            to={endTime}
                                            key={index}
                                        />
                                    );
                                } else {
                                    return (
                                        <ScheduleElement
                                            color={"primary-blue"}
                                            name={item.name}
                                            from={startTime}
                                            to={endTime}
                                            key={index}
                                        />
                                    );
                                }
                            })
                            : ''}



                    </div>
                </section> : ''}
            </div>


            <div className="pb-8 md:pb-0 my-16">
                {/*<h2 id={"subs"} className="text-gray-200 text-3xl md:text-6xl text-center flex-wrap font-bold font-[Inter] mt-8">Подписки</h2>*/}
                <div className="flex flex-col text-w h-fit sm:grid  md:grid-cols-2 lg:grid lg:grid-cols-3 items-center justify-around  gap-5">
                    {Object.keys(subsList).map((currentSub) => {
                        const sub = subsList[currentSub];
                        return (
                            <div className="bg-secondary-black py-8 md:py-12 drop-shadow-2xl rounded-3xl flex flex-col z-[2] items-center p-2 lg:p-6  ">
                                <h3 className="text-xl md:text-3xl text-center text-gray-200 font-bold">{sub.title}
                                </h3>
                                <p className="text-center text-gray-300 text-lg md:text-2xl ">
                                    {sub.paragraph}
                                </p>
                                <button onClick={()=>{router.push(`${sub.src}`)}} className={"mt-4 text-primary text-white font-medium text-md md:text-lg lg:text-xl xl:text-2xl bg-gradient-to-r from-primary-blue to-primary-yellow " +
                                    "rounded-2xl p-3 md:p-4 px-8 md:px-16 hover:scale-105 duration-500 transition-all"}>Подписаться</button>
                            </div>
                        )
                    })}
                    {/*<div className="bg-gray-800 drop-shadow-2xl rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6  ">*/}
                    {/*    <h3 className="text-2xl md:text-3xl text-center text-gray-200 font-bold">Минимальный*/}
                    {/*    </h3>*/}
                    {/*    <p className="text-center text-gray-300 text-xl md:text-2xl">*/}
                    {/*        Минимальный  тариф. <br/> Список програм <br/> <a className={'font-bold'}>MINIMAL</a> включен*/}
                    {/*    </p>*/}
                    {/*    <button onClick={()=>{router.push('/payGateway/minimum')}} className="bg-gray-600 hover:bg-gray-700 text-gray-200 mt-4 rounded-xl p-3 px-7 text-lg font-medium transition-all hover:-translate-y-1 duration-500 hover:scale-110">Заказать</button>*/}
                    {/*</div>*/}
                    {/*<div className="bg-gray-800 drop-shadow-2xl rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6  ">*/}
                    {/*    <h3 className="text-2xl md:text-3xl text-center text-gray-200 font-bold">Стандарт*/}
                    {/*    </h3>*/}
                    {/*    <p className="text-center text-gray-300 text-xl md:text-2xl">*/}
                    {/*        Стандартный тариф. <br/> Список програм <br/> <a className={'font-bold'}>STANDARD</a> включен*/}
                    {/*    </p>*/}
                    {/*    <button onClick={()=>{router.push('/payGateway/standard')}} className="bg-gray-600 hover:bg-gray-700 text-gray-200 mt-4 rounded-xl p-3 px-7 text-lg font-medium transition-all hover:-translate-y-1 duration-500 hover:scale-110">Заказать</button>*/}
                    {/*</div>*/}
                    {/*<div className="bg-gray-800 sm:mt-0 rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6">*/}
                    {/*    <h3 className="text-2xl md:text-3xl text-center text-gray-200 font-bold">Премиум*/}
                    {/*    </h3>*/}
                    {/*    <p className="text-center text-gray-300 text-xl md:text-2xl px-90 ">*/}
                    {/*        Премиум тариф.<br/>*/}
                    {/*        <span className="whitespace-nowrap">Список програм <br/> <a className={'font-bold'}>PREMIUM</a>  включен</span>*/}
                    {/*    </p>*/}
                    {/*    <button onClick={()=>{router.push('/payGateway/premium')}} className="bg-gray-600 hover:bg-gray-700 text-gray-200 mt-4 rounded-xl p-3 px-7 text-lg font-medium transition-all hover:-translate-y-1 duration-500 hover:scale-110">Заказать</button>*/}
                    {/*</div>*/}
                    {/*<div className="bg-gray-800 sm:mt-0 rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6 ">*/}
                    {/*    <h3 className="text-2xl md:text-3xl text-center text-gray-200 font-bold">Тест минимум*/}
                    {/*    </h3>*/}
                    {/*    <p className="text-center text-gray-300 text-xl md:text-2xl px-90 ">*/}
                    {/*        Тест тариф .<br/>*/}
                    {/*        <span className="whitespace-nowrap">Список програм <br/> <a className={'font-bold'}>TEST SUB MINIMUM</a>  включен</span>*/}
                    {/*    </p>*/}
                    {/*    <button onClick={()=>{router.push('/test/minimum')}} className="bg-gray-600 hover:bg-gray-700 text-gray-200 mt-4 rounded-xl p-3 px-7 text-lg font-medium transition-all hover:-translate-y-1 duration-500 hover:scale-110">Заказать</button>*/}
                    {/*</div>*/}
                    {/*<div className="bg-gray-800 sm:mt-0 rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6 ">*/}
                    {/*    <h3 className="text-2xl md:text-3xl text-center text-gray-200 font-bold">Тест стандарт*/}
                    {/*    </h3>*/}
                    {/*    <p className="text-center text-gray-300 text-xl md:text-2xl px-90 ">*/}
                    {/*        Тест тариф.<br/>*/}
                    {/*        <span className="whitespace-nowrap">Список програм <br/> <a className={'font-bold'}>TEST SUB STANDART</a>  включен</span>*/}
                    {/*    </p>*/}
                    {/*    <button onClick={()=>{router.push('/test/standard')}} className="bg-gray-600 hover:bg-gray-700 text-gray-200 mt-4 rounded-xl p-3 px-7 text-lg font-medium transition-all hover:-translate-y-1 duration-500 hover:scale-110">Заказать</button>*/}
                    {/*</div>*/}
                    {/*<div className="bg-gray-800 sm:mt-0 rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6 ">*/}
                    {/*    <h3 className="text-2xl md:text-3xl text-center text-gray-200 font-bold">Тест премиум*/}
                    {/*    </h3>*/}
                    {/*    <p className="text-center text-gray-300 text-xl md:text-2xl px-90 ">*/}
                    {/*        Тест тариф.<br/>*/}
                    {/*        <span className="whitespace-nowrap">Список програм <br/> <a className={'font-bold'}>TEST SUB PREMIUM</a>  включен</span>*/}
                    {/*    </p>*/}
                    {/*    <button onClick={()=>{router.push('/test/premium')}} className="bg-gray-600 hover:bg-gray-700 text-gray-200 mt-4 rounded-xl p-3 px-7 text-lg font-medium transition-all hover:-translate-y-1 duration-500 hover:scale-110">Заказать</button>*/}
                    {/*</div>*/}
                </div>

                <div className={'flex justify-center'}>
                    {user.subLevel == 1 || user.subLevel == 2 || user.subLevel == 3 ?
                        <div className="container pb-8 mx-auto">
                            <div className="flex items-center justify-center w-full">
                                <button onClick={()=>{
                                    router.push("/payments/cancelSub")
                                }} className="bg-red-500 hover:bg-red-600 text-gray-200 rounded-xl w-full md:w-fit p-3 mt-8 text-sm md:text-lg font-medium hover:scale-110 hover:-translate-y-1 transition-all duration-500">Отменить подписку</button>
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
