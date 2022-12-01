import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Script from "next/script";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {AiFillCaretUp} from "@react-icons/all-files/ai/AiFillCaretUp";
import {getProfile} from "../storage/reducers/authReducer";


export default function Home() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [scrollTop, setScrollTop] = useState(false)
    const onScroll = useCallback(event => {
        if (window.scrollY > 0) {
            setScrollTop(true)
        } else {
            setScrollTop(false)
        }
    })
    useEffect(() => {

        window.addEventListener('scroll', onScroll, {passive: true})

        return () => {
            window.removeEventListener('scroll', onScroll, {passive: true})
        }
    }, [])
    // const getSize = () => {
    //     if (window !== 'undefined') {
    //         if (window.innerWidth > 1023) {
    //             return window.innerWidth
    //         } else {
    //             return window.innerWidth * 0.5
    //         }
    //     }
    // }
    return (
        
        <div className="w-full overflow-hidden">
            
  <div  x-show="open"     
         className="hidden max-w-screen-lg mx-auto fixed bg-gray-800 inset-x-5 p-5 bottom-10 z-10 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
    <div className="w-full text-white">Этот веб-сайт использует файлы cookie, чтобы обеспечить вам максимальное удобство на нашем веб-сайте. 
      <a href="#" className="text-indigo-300 whitespace-nowrap  hover:underline"> Читать больше</a></div>
    <div className="flex gap-4 items-center flex-shrink-0">
      <button className="text-indigo-300 focus:outline-none hover:underline">Отклонить</button>
      <button className="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none">Разрешить Coockies</button>
    </div>
  </div>
 
            
            <main className={styles.main}>
                <section
                    className="font-[Oswald] h-screen md:h-[105vh] w-full">
                        <div className="bg-[url('/PickRestTV/Lending/backgpick.png')] h-screen md:h-[105vh] w-full">
                        <div className="container mx-auto h-full flex-col flex items-center justify-center">
                        <h2 className="text-5xl font-medium text-gray-200">Подключайтесь</h2>
                        <h3 className="text-xl text-center mt-4 text-gray-200">Интернет телевидение<br/>
                            В Израиле на русском и иврите</h3>
                        <button onClick={() => {
                            router.push('/profile')
                        }}
                                className= "text-gray-50 bg-indigo-600 hover:bg-indigo-700 hover:bg-blend-darken rounded-2xl p-3 px-5 mt-8 text-xl font-[Oswald] font-medium">Подключайтесь
                        </button>
                    </div>
                        
                            
                        </div>
                        
                    
                </section>
                <section className="bg-gradient-to-t w-full from-grad_from to-grad_to">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center">
                            <h2 className="text-gray-200 text-4xl sm:text-6xl text-center font-bold font-[Inter] mt-8">Все возможности<br/>REST TV
                            </h2>
                            <div
                                className="bg-gray-700 pt-8 pb-8 mt-16 mb-16 rounded-3xl flex-col flex flex-col lg:flex-row items-center justify-between w-full md">
                                <Image src={'/PickRestTV/Lending/tv1.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000}
                                       className={`${'scale-x-[-1]'} `}/>
                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="text-4xl sm:text-6xl text-gray-200 font-medium pl-4">400+ телеканалов</h3>
                                    <p className="text-gray-300 text-3xl sm:text-4xl pl-4">Каждый член семьи найдет, что
                                        ему интересно: новости, развлекательные
                                        программы, спортивные трансляции,
                                        фильмы, детские передачи в HD и Full HD
                                        качестве на русском языке.</p>
                                </div>
                            </div>
                            <div
                                className="bg-gray-700 pb-8 pt-8 mt-16 mb-16 rounded-3xl flex-col-reverse flex flex-col lg:flex-row items-center justify-between w-full md">
                                <div className="flex flex-col 2xl:mr-16 items-start">
                                    <h3 className="text-4xl sm:text-6xl text-gray-200 font-medium pl-4">Качество HD / Full
                                        HD</h3>
                                    <p className="text-gray-300 text-3xl sm:text-4xl pl-4">Изображение высокой четкости, чистый
                                        звук, отсутствие зависаний и помех делают просмотр максимально комфортным.
                                        Качество сигнала не зависит от погодных условий.</p>
                                </div>
                                <Image className={'rotate-12'} src={'/PickRestTV/Lending/remoteCntrl2.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000}
                                       height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000}/>
                            </div>
                            <div
                                className="bg-gray-700 pt-8 pb-8 mt-16 mb-16 rounded-3xl flex-col flex flex-col lg:flex-row items-center justify-between w-full md">
                                <Image width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth : window.innerWidth*0.5 : 1000} src='/PickRestTV/Lending/earth3.png'/>

                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="text-4xl sm:text-6xl text-gray-200 pl-4 font-medium">Мульти
                                        Национальность</h3>
                                    <p className="text-gray-300 text-3xl sm:text-4xl pl-4">Смотрите национальные телеканалы из
                                        Израиля, РФ, Украины, стран СНГ, а также стран Европы и Америки. 200+ Каналов на
                                        национальных языках.</p>
                                </div>
                            </div>
                            <div
                                className="bg-gray-700 pt-8 pb-8 mt-16 mb-16 rounded-3xl flex-col flex flex-col-reverse lg:flex-row items-center justify-between w-full md">
                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="text-4xl sm:text-6xl text-gray-200 font-medium pl-4">Онлайн-кинотеатр</h3>
                                    <p className="text-gray-300 text-3xl sm:text-4xl pl-4">Вам доступно более 10 000 фильмов:
                                        новинки кинопроката, любимые сериалы, лучшие мультфильмы и советская
                                        классика.</p>
                                </div>
                                <Image src={'/PickRestTV/Lending/cinema4.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth : window.innerWidth*0.5 : 1000}/>
                            </div>
                            <div
                                className="bg-gray-700 pt-8 pb-8 mt-16 mb-16 rounded-3xl flex-col flex flex-col lg:flex-row items-center justify-between w-full md">
                                <Image src={'/PickRestTV/Lending/gift5.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth : window.innerWidth*0.5 : 1000}/>
                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="text-4xl sm:text-6xl text-gray-200 pl-4 font-medium">Акции и подарки</h3>
                                    <p className="text-gray-300 text-3xl sm:text-4xl pl-4">Мы заботимся о наших постоянных клиентах
                                        и с радостью проводим регулярные акции. Вы всегда можете предложить подключение
                                        к Rest TV для ваших знакомых по специальной цене.</p>
                                </div>
                            </div>
                            <div
                                className="bg-gray-700 pt-8 pb-8 mt-16 mb-16 rounded-3xl flex-col flex flex-col lg:flex-row items-center justify-between w-full md">
                                <Image src={'/PickRestTV/Lending/archive6.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth : window.innerWidth*0.5 : 1000}/>
                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="text-4xl sm:text-6xl pl-4 text-gray-200 font-medium">Архив телепрограмм</h3>
                                    <p className="text-gray-300 pl-4 text-3xl sm:text-4xl">Главная ценность для нас — это вы и ваше
                                        время. Смотрите любимые программы в удобное вам время. От вас не нужно никаких
                                        действий — эфир записывается автоматически.</p>
                                </div>
                            </div>
                            <div
                                className="bg-gray-700 mt-16 mb-16 rounded-3xl flex-col flex pt-8 pb-8 flex-col lg:flex-row items-center justify-between w-full md">
                                <Image src={'/PickRestTV/Lending/adm7.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000}/>
                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="pl-4 text-4xl sm:text-6xl text-gray-200 font-medium">Родительский
                                        контроль</h3>
                                    <p className="text-gray-300 pl-4 text-3xl sm:text-4xl">Не беспокойтесь, что ваши дети увидят
                                        что-то нежелательное в ваше отсутствие. С помощью функции «Родительский
                                        контроль» вы можете ограничить доступ к нежелательному контенту.</p>
                                </div>
                            </div>
                            <div
                                className="bg-gray-700 mt-16 mb-16 pt-8 pb-8 rounded-3xl flex-col flex flex-col lg:flex-row items-center justify-between w-full md">
                                <Image src={'/PickRestTV/Lending/wifi8.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth : window.innerWidth*0.5 : 1000}/>
                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="text-4xl sm:text-6xl text-gray-200 pl-4 font-medium">Адаптивное
                                        ‍вещание</h3>
                                    <p className="text-gray-300 text-3xl sm:text-4xl pl-4">Эффективная система доставки
                                        видеосигнала позволит вам смотреть фильмы и передачи в максимально высоком
                                        разрешении.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container flex flex-col mx-auto lg:h-[90vh]">
                        <div className="flex items-center justify-center">
                            <h2 className="text-gray-200 text-4xl sm:text-6xl text-center font-bold font-[Inter] mt-8">Как подключиться?</h2>
                        </div>
                        <div className="flex mt-16 w-full flex-col lg:flex-row justify-around items-center">
                            <div
                                className="flex flex-col py-12 items-center flex-1 bg-gray-700 basis-1/5 p-7 rounded-3xl">
                                <h3 className="text-gray-200 text-center text-3xl font-bold pt-8
                         font-[Inter]">Зарегистрируйтесь</h3>
                                <p className="text-center text-2xl md:text-xl text-xl text-gray-300">Нажмите кнопку
                                    “Зарегистрироваться”
                                    Придумайте логин и пароль для своей учетной записи</p>
                                <Image src={'/PickRestTV/Lending/userSteps.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000}/>
                            </div>

                            <div
                                className="flex flex-col mt-8 lg:mt-0 py-12 items-center md:ml-8 md:mr-8 flex-1 bg-gray-700 basis-1/5 p-7 rounded-3xl">
                                <h3 className="text-gray-200 pt-8 text-center text-3xl font-bold font-[Inter]">Согласуйте
                                    встречу</h3>
                                <p className="text-center text-2xl md:text-xl text-xl text-gray-300">Назначьте сами
                                    день и время, чтобы вам было максимально удобно встретиться с нашим техническим
                                    специалистом.</p>
                                <Image src={'/PickRestTV/Lending/locationSteps.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000}/>
                            </div>

                            <div
                                className="flex lg:w-auto flex-col mt-8 lg:mt-0 pb-8 pt-8 items-center flex-1 bg-gray-700 basis-1/5 p-7 rounded-3xl">
                                <h3 className="text-gray-200 pt text-center text-3xl font-bold font-[Inter]">Наслаждайтесь <br/>
                                    REST TV</h3>
                                <p className="text-center text-2xl md:text-xl text-gray-300">После подключения системы
                                    и демонстраци возможностей оборудования смотрите любимые каналы и телепередачи в
                                    качестве Full HD</p>
                                <Image src={'/PickRestTV/Lending/saluteSteps.png'} className="scale-75" width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000}/>
                            </div>
                        </div>
                    </div>
                    <div className="container flex flex-col mx-auto mt-20">
                        <h2 className="text-gray-200 text-5xl sm:text-6xl text-center flex-wrap font-bold font-[Inter]">Часто задаваемые
                            вопросы</h2>
                        <div className="flex items-center mt-8 flex-col lg:flex-row justify-around w-full">
                            <div
                                className="basis-1/3 p-4 shrink-0 mt-8 lg:mt-0 flex-col items-center bg-gray-700 rounded-3xl">
                                <h3 className="text-2xl text-center text-gray-200 font-bold">Сложно ли пользоваться
                                    Интернет Телевидением?</h3>
                                <p className="text-xl text-center text-gray-300">ТВ от REST TV пользоваться не сложнее
                                    обычного ТВ. При подключении наш техник покажет как пользоваться. В случае
                                    возникновения вопросов к Вашим услугам служба поддержки.
                                </p>
                            </div>
                            <Image src={'/PickRestTV/Lending/FAQ.png'}
                                   className="lg:basis-1/4 order-first lg:order-1 lg:shrink-0 h-[30vh]" width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000}
                                   height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000}/>
                            <div
                                className="basis-1/3 p-4 shrink-0 lg:order-last mt-8 lg:mt-0 flex-col items-center bg-gray-700 rounded-3xl">
                                <h3 className="text-2xl text-center text-gray-200 font-bold">Есть ли каналы из
                                    Израиля?</h3>
                                <p className="text-xl text-center text-gray-300">У нас более 40 телеканалов из Израиля
                                    разных тематик (Общественные, спортивные, детские, ...).
                                </p>
                            </div>

                        </div>
                        <div
                            className="flex pb-16 flex-wrap flex-col lg:flex-row lg:items-center lg:justify-around w-full">
                            <div
                                className="basis-[45%] p-4 shrink-0 flex-col items-center bg-gray-700 rounded-3xl mt-8 lg:mt-0">
                                <h3 className="text-2xl font-bold text-center text-gray-200">Хочу подключиться, но
                                    уже подключен к другому
                                    ТВ-провайдеру. Как быть?</h3>
                                <p className="text-xl text-center text-gray-300">Мы поможем отключиться от вашего
                                    текущего ТВ-провайдера без каких либо штрафных санкций.
                                </p>
                            </div>
                            <div
                                className="basis-[45%] p-4 shrink-0 flex-col items-center bg-gray-700 mt-8 lg:mt-0 rounded-3xl">
                                <h3 className="text-2xl text-center font-bold text-gray-200">У меня нет телевизора,
                                    как мне смотреть ваше ТВ?</h3>
                                <p className="text-xl text-center text-gray-300">У нас есть специальный тариф 149₪/мес.
                                    По условиям тарифа Вы получите самый последний телевизор 32, подключение к нашему
                                    телевидению и настройку под ключ.
                                </p>
                            </div>
                            <div className="basis-[70%] mt-8 p-4 shrink-0 flex-col items-center bg-gray-700 rounded-3xl">
                                <h3 className="text-2xl text-center text-gray-200 font-bold">Сложно ли пользоваться
                                    Интернет Телевидением?</h3>
                                <p className="text-xl text-center text-gray-300">ТВ от REST TV пользоваться не сложнее
                                    обычного ТВ. При подключении наш техник покажет как пользоваться. В случае
                                    возникновения вопросов к Вашим услугам служба поддержки.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <h2 className="text-gray-200 text-5xl sm:text-6xl text-center flex-wrap font-bold font-[Inter] mt-8">Что говорят клиенты о
                            REST TV</h2>
                        <div className="flex flex-col-reverse xl:flex-row mt-8 pb-8 items-center justify-between">
                            <div className="flex mt-8 flex-col-reverse lg:flex-row items-center basis-[50%]">
                                <div
                                    className="flex items-start flex-col items-end bg-gray-700 basis-[70%] rounded-3xl pt-4 pb-4 pl-8 pr-8">
                                    <p className="text-gray-300 text-xl">“Картинка великолепная. Количество каналов
                                        просто ошеломляет. Для каждого в семье есть свои каналы. Для меня одни, для мужа
                                        другие, да и дети тоже смотрят с удовольствием детские каналы на русском
                                        языке.”</p>
                                    <h3 className="text-2xl text-center text-gray-200 font-bold">Валентина</h3>
                                </div>

                                <Image src={'/PickRestTV/Lending/loveFeedback.png'}
                                       className="hover:animate-heart_bounce pl-4 w-full scale-50 h-[10vh] lg:w-auto lg:h-auto lg:basis-1/3 lg:shrink-0 h-[40vh]"
                                       width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*0.5 : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*0.5 : window.innerWidth*0.5 : 1000}/>

                            </div>
                            <div className="flex mt-8 flex-col-reverse lg:flex-row items-center basis-[50%]">
                                <div
                                    className="flex items-start flex-col items-end bg-gray-700 basis-[70%] rounded-3xl pt-4 pb-4 pl-8 pr-8">
                                    <p className="text-gray-300 text-xl">Часто смотрю передачи в записи, т.е. архив.
                                        Отлично работает. За это Вам огромное спасибо. Отдельное спасибо за пакет
                                        каналов МАТЧ, теперь смотрю Бундеслигу. Ну и за количество каналов и за их
                                        качество тоже Вам большой респект!!! Заказал родителям тоже и друзьям
                                        посоветовал!
                                    </p>
                                    <h3 className="text-2xl text-center text-gray-200 font-bold">Эдуард
                                    </h3>
                                </div>

                                <Image
                                    className="w-full h-[10vh] hover:animate-like_wave lg:w-auto lg:h-auto lg:basis-1/3 lg:shrink-0 h-[40vh] scale-50 lg:scale-1"
                                    src={'/PickRestTV/Lending/likeFeedback.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*0.5 : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*0.5 : window.innerWidth*0.5 : 1000}/>

                            </div>
                        </div>
                        <div className="flex flex-col-reverse xl:flex-row mt-8 pb-8 items-center justify-between">
                            <div className="flex items-center mt-8 flex-col-reverse lg:flex-row basis-[50%]">

                                <Image
                                    className="pl-4 w-full h-[10vh] hover:animate-star_trans lg:w-auto lg:h-auto lg:basis-1/3 lg:shrink-0 h-[40vh] scale-50 lg:scale-1"
                                    src={'/PickRestTV/Lending/5starsFeedback.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*0.5 : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*0.5 : window.innerWidth*0.5 : 1000}/>

                                <div
                                    className="flex items-start flex-col bg-gray-700 basis-[70%] rounded-3xl pt-4 pb-4 pl-8 pr-8">
                                    <p className="text-gray-300 text-xl">Очень качественная и удобная приставка. Всё
                                        идёт как и должно идти у серьёзного поставщика: без вылетов и зависаний.
                                        Картинка - сказка! техподдержке отдельное спасибо - всегда отвечают оперативно и
                                        по делу!
                                    </p>
                                    <h3 className="text-2xl text-center text-gray-200 font-bold">Михаэль</h3>
                                </div>
                            </div>
                            <div className="flex mt-8 flex-col-reverse lg:flex-row items-center basis-[50%]">

                                <Image
                                    className="pl-8 w-full box-border h-[10vh] rotate-[-13.65deg] transform translation-all hover:animate-love_face lg:w-auto lg:h-auto lg:basis-1/3 lg:shrink-0 h-[40vh] scale-50 lg:scale-1"
                                    src={'/PickRestTV/Lending/Face_LoveFeedback.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*0.5 : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*0.5 : window.innerWidth*0.5 : 1000}/>
                                <div
                                    className="flex items-start flex-col items-end bg-gray-700 basis-[70%] rounded-3xl pt-4 pb-4 pl-8 pr-8">
                                    <p className="text-gray-300 text-xl">За 89 шекелей в месяц — просто сказка. FullHD
                                        и HD каналы превзошли все мои ожидания, как по качеству, так и по количеству
                                        (есть с чем сравнить, у знакомых русское телевидение от другой компании
                                        установлено, уже думают тоже на Rest TV перейти).

                                    </p>
                                    <h3 className="text-2xl text-center text-gray-200 font-bold">Александр
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className={`fixed bottom-5 right-5 p-4 bg-black cursor-pointer rounded-[50%] ${scrollTop ? 'visible' : 'hidden'}`}
                    onClick={() => {
                        window.scrollTo({top: 0, behavior: 'smooth'})
                    }}
                >
                    <AiFillCaretUp className={'text-2xl'}/>
                </div>
            </main>
        </div>
    )
}
