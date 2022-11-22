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

    return (
        <div className="w-full overflow-hidden">


            <main className={styles.main}>
                <section className="font-[Oswald] bg-[url('/PickRestTV/Lending/backgpick.png')] h-screen md:h-[85vh] w-full">
                    <div className="container mx-auto h-full flex-col flex items-center justify-center">
                        <h2 className="text-5xl font-medium">Подключайтесь</h2>
                        <h3 className="text-xl text-center mt-4">Интернет телевидение<br/>
                            В Израиле на русском и иврите</h3>
                        <button onClick={() => {
                            router.push('/profile')
                        }}
                                className="bg-dead_violet rounded-3xl p-3 mt-8 text-xl font-[Oswald] font-medium">Подключайтесь
                        </button>
                    </div>
                </section>
                <section className="bg-gradient-to-r w-full from-grad_from to-grad_to">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center">
                            <h2 className="text-6xl text-center font-bold font-[Inter] mt-8">Все возможности<br/>REST TV
                            </h2>
                            <div
                                className="bg-white pt-8 pb-8 mt-16 mb-16 rounded-3xl flex-col flex flex-col lg:flex-row items-center justify-between w-full md">
                                <Image src={'/PickRestTV/Lending/tv1.png'} width={1500} height={1500} className={'scale-x-[-1]'} />
                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="text-6xl text-dead_violet font-medium pl-4">400+ телеканалов</h3>
                                    <p className="text-text-gray text-4xl pl-4">Каждый член семьи найдет, что
                                        ему интересно: новости, развлекательные
                                        программы, спортивные трансляции,
                                        фильмы, детские передачи в HD и Full HD
                                        качестве на русском языке.</p>
                                </div>
                            </div>
                            <div
                                className="bg-white pb-8 pt-8 mt-16 mb-16 rounded-3xl flex-col-reverse flex flex-col lg:flex-row items-center justify-between w-full md">
                                <div className="flex flex-col 2xl:mr-16 items-start">
                                    <h3 className="text-6xl text-dead_violet font-medium pl-4">Качество HD / Full
                                        HD</h3>
                                    <p className="text-text-gray text-4xl pl-4">Изображение высокой четкости, чистый
                                        звук, отсутствие зависаний и помех делают просмотр максимально комфортным.
                                        Качество сигнала не зависит от погодных условий.</p>
                                </div>
                                <Image className={'rotate-12'} src={'/PickRestTV/Lending/remoteCntrl2.png'} width={1500} height={1500} />
                            </div>
                            <div
                                className="bg-white pt-8 pb-8 mt-16 mb-16 rounded-3xl flex-col flex flex-col lg:flex-row items-center justify-between w-full md">
                                <Image width={1500} height={1500} src='/PickRestTV/Lending/earth3.png'/>

                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="text-6xl text-dead_violet pl-4 font-medium">Мульти
                                        Национальность</h3>
                                    <p className="text-text-gray text-4xl pl-4">Смотрите национальные телеканалы из
                                        Израиля, РФ, Украины, стран СНГ, а также стран Европы и Америки. 200+ Каналов на
                                        национальных языках.</p>
                                </div>
                            </div>
                            <div
                                className="bg-white pt-8 pb-8 mt-16 mb-16 rounded-3xl flex-col flex flex-col-reverse lg:flex-row items-center justify-between w-full md">
                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="text-6xl text-dead_violet font-medium pl-4">Онлайн-кинотеатр</h3>
                                    <p className="text-text-gray text-4xl pl-4">Вам доступно более 10 000 фильмов:
                                        новинки кинопроката, любимые сериалы, лучшие мультфильмы и советская
                                        классика.</p>
                                </div>
                                <Image src={'/PickRestTV/Lending/cinema4.png'} width={1500} height={1500} />
                            </div>
                            <div
                                className="bg-white pt-8 pb-8 mt-16 mb-16 rounded-3xl flex-col flex flex-col lg:flex-row items-center justify-between w-full md">
                                <Image src={'/PickRestTV/Lending/gift5.png'} width={1500} height={1500} />
                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="text-6xl text-dead_violet pl-4 font-medium">Акции и подарки</h3>
                                    <p className="text-text-gray text-4xl pl-4">Мы заботимся о наших постоянных клиентах
                                        и с радостью проводим регулярные акции. Вы всегда можете предложить подключение
                                        к Rest TV для ваших знакомых по специальной цене.</p>
                                </div>
                            </div>
                            <div
                                className="bg-white pt-8 pb-8 mt-16 mb-16 rounded-3xl flex-col flex flex-col lg:flex-row items-center justify-between w-full md">
                                <Image src={'/PickRestTV/Lending/archive6.png'} width={1500} height={1500} />
                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="text-6xl pl-4 text-dead_violet font-medium">Архив телепрограмм</h3>
                                    <p className="text-text-gray pl-4 text-4xl">Главная ценность для нас — это вы и ваше
                                        время. Смотрите любимые программы в удобное вам время. От вас не нужно никаких
                                        действий — эфир записывается автоматически.</p>
                                </div>
                            </div>
                            <div
                                className="bg-white mt-16 mb-16 rounded-3xl flex-col flex pt-8 pb-8 flex-col lg:flex-row items-center justify-between w-full md">
                                <Image src={'/PickRestTV/Lending/adm7.png'} width={1500} height={1500} />
                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="pl-4 text-6xl text-dead_violet font-medium">Родительский
                                        контроль</h3>
                                    <p className="text-text-gray pl-4 text-4xl">Не беспокойтесь, что ваши дети увидят
                                        что-то нежелательное в ваше отсутствие. С помощью функции «Родительский
                                        контроль» вы можете ограничить доступ к нежелательному контенту.</p>
                                </div>
                            </div>
                            <div
                                className="bg-white mt-16 mb-16 pt-8 pb-8 rounded-3xl flex-col flex flex-col lg:flex-row items-center justify-between w-full md">
                                <Image src={'/PickRestTV/Lending/wifi8.png'} width={1500} height={1500} />
                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="text-6xl text-dead_violet pl-4 font-medium">Адаптивное
                                        ‍вещание</h3>
                                    <p className="text-text-gray text-4xl pl-4">Эффективная система доставки
                                        видеосигнала позволит вам смотреть фильмы и передачи в максимально высоком
                                        разрешении.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto lg:h-[90vh]">
                        <div className="flex items-center justify-center">
                            <h2 className="text-6xl text-center font-bold font-[Inter] mt-8">Как подключиться?</h2>
                        </div>
                        <div className="flex mt-16 w-full flex-col lg:flex-row justify-around items-center">
                            <div
                                className="flex flex-col pb-8 pt-8 items-center flex-1 bg-white basis-1/5 p-7 rounded-3xl">
                                <h3 className="text-dead_violet text-center text-3xl font-bold pt-8
                         font-[Inter]">Зарегистрируйтесь</h3>
                                <p className="text-center text-2xl md:text-xl text-xl text-text-gray">Нажмите кнопку
                                    “Зарегистрироваться”
                                    Придумайте логин и пароль для своей учетной записи</p>
                                <Image src={'/PickRestTV/Lending/userSteps.png'} width={1500} height={1500} />
                            </div>

                            <div
                                className="flex flex-col mt-8 lg:mt-0 pb-8 pt-8 items-center md:ml-8 md:mr-8 flex-1 bg-white basis-1/5 p-7 rounded-3xl">
                                <h3 className="text-dead_violet pt-8 text-center text-3xl font-bold font-[Inter]">Согласуйте
                                    встречу</h3>
                                <p className="text-center text-2xl md:text-xl text-xl text-text-gray">Назначьте сами
                                    день и время, чтобы вам было максимально удобно встретиться с нашим техническим
                                    специалистом.</p>
                                <Image src={'/PickRestTV/Lending/locationSteps.png'} width={1500} height={1500} />
                            </div>

                            <div
                                className="flex lg:w-auto flex-col mt-8 lg:mt-0 pb-8 pt-8 items-center flex-1 bg-white basis-1/5 p-7 rounded-3xl">
                                <h3 className="text-dead_violet text-center text-3xl font-bold font-[Inter]">Наслаждайтесь <br/>
                                    REST TV</h3>
                                <p className="text-center text-2xl md:text-xl text-text-gray">После подключения системы
                                    и демонстраци возможностей оборудования смотрите любимые каналы и телепередачи в
                                    качестве Full HD</p>
                                <Image src={'/PickRestTV/Lending/saluteSteps.png'} width={1500} height={1370} />
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <h2 className="text-6xl text-center flex-wrap font-bold font-[Inter] mt-8">Часто задаваемые
                            вопросы</h2>
                        <div className="flex items-center mt-8 flex-col lg:flex-row justify-around w-full">
                            <div
                                className="basis-1/3 p-4 shrink-0 mt-8 lg:mt-0 flex-col items-center bg-white rounded-3xl">
                                <h3 className="text-2xl text-center text-dead_violet font-bold">Сложно ли пользоваться
                                    Интернет Телевидением?</h3>
                                <p className="text-xl text-center text-text-gray">ТВ от REST TV пользоваться не сложнее
                                    обычного ТВ. При подключении наш техник покажет как пользоваться. В случае
                                    возникновения вопросов к Вашим услугам служба поддержки.
                                </p>
                            </div>
                            <div className="lg:basis-1/4 order-first lg:order-1 lg:shrink-0 h-[30vh]">
                                <Image src={'/PickRestTV/Lending/FAQ.png'} width={1500} height={1500} />
                            </div>
                            <div
                                className="basis-1/3 p-4 shrink-0 lg:order-last mt-8 lg:mt-0 flex-col items-center bg-white rounded-3xl">
                                <h3 className="text-2xl text-center text-dead_violet font-bold">Есть ли каналы из
                                    Израиля?</h3>
                                <p className="text-xl text-center text-text-gray">У нас более 40 телеканалов из Израиля
                                    разных тематик (Общественные, спортивные, детские, ...).
                                </p>
                            </div>

                        </div>
                        <div
                            className="flex pb-16 flex-wrap flex-col lg:flex-row lg:items-center lg:justify-around w-full">
                            <div
                                className="basis-[45%] p-4 shrink-0 flex-col items-center bg-white rounded-3xl mt-8 lg:mt-0">
                                <h3 className="text-2xl font-bold text-center text-dead_violet">Хочу подключиться, но
                                    уже подключен к другому
                                    ТВ-провайдеру. Как быть?</h3>
                                <p className="text-xl text-center text-text-gray">Мы поможем отключиться от вашего
                                    текущего ТВ-провайдера без каких либо штрафных санкций.
                                </p>
                            </div>
                            <div
                                className="basis-[45%] p-4 shrink-0 flex-col items-center bg-white mt-8 lg:mt-0 rounded-3xl">
                                <h3 className="text-2xl text-center font-bold text-dead_violet">У меня нет телевизора,
                                    как мне смотреть ваше ТВ?</h3>
                                <p className="text-xl text-center text-text-gray">У нас есть специальный тариф 149₪/мес.
                                    По условиям тарифа Вы получите самый последний телевизор 32, подключение к нашему
                                    телевидению и настройку под ключ.
                                </p>
                            </div>
                            <div className="basis-[70%] mt-8 p-4 shrink-0 flex-col items-center bg-white rounded-3xl">
                                <h3 className="text-2xl text-center text-dead_violet font-bold">Сложно ли пользоваться
                                    Интернет Телевидением?</h3>
                                <p className="text-xl text-center text-text-gray">ТВ от REST TV пользоваться не сложнее
                                    обычного ТВ. При подключении наш техник покажет как пользоваться. В случае
                                    возникновения вопросов к Вашим услугам служба поддержки.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <h2 className="text-6xl text-center flex-wrap font-bold font-[Inter] mt-8">Что говорят клиенты о
                            REST TV</h2>
                        <div className="flex flex-col-reverse lg:flex-row mt-8 pb-8 items-center justify-between">
                            <div className="flex mt-8 flex-col-reverse lg:flex-row items-center basis-[50%]">
                                <div
                                    className="flex items-start flex-col items-end bg-white basis-[70%] rounded-3xl pt-4 pb-4 pl-8 pr-8">
                                    <p className="text-text-gray text-xl">“Картинка великолепная. Количество каналов
                                        просто ошеломляет. Для каждого в семье есть свои каналы. Для меня одни, для мужа
                                        другие, да и дети тоже смотрят с удовольствием детские каналы на русском
                                        языке.”</p>
                                    <h3 className="text-2xl text-center text-dead_violet font-bold">Валентина</h3>
                                </div>
                                <div
                                    className="pl-4 w-full h-[10vh] lg:w-auto lg:h-auto lg:basis-1/3 lg:shrink-0 h-[40vh]">
                                    <Image src={'/PickRestTV/Lending/loveFeedback.png'} width={1500} height={1500} />
                                </div>
                            </div>
                            <div className="flex mt-8 flex-col-reverse lg:flex-row items-center basis-[50%]">
                                <div
                                    className="flex items-start flex-col items-end bg-white basis-[70%] rounded-3xl pt-4 pb-4 pl-8 pr-8">
                                    <p className="text-text-gray text-xl">Часто смотрю передачи в записи, т.е. архив.
                                        Отлично работает. За это Вам огромное спасибо. Отдельное спасибо за пакет
                                        каналов МАТЧ, теперь смотрю Бундеслигу. Ну и за количество каналов и за их
                                        качество тоже Вам большой респект!!! Заказал родителям тоже и друзьям
                                        посоветовал!
                                    </p>
                                    <h3 className="text-2xl text-center text-dead_violet font-bold">Эдуард
                                    </h3>
                                </div>
                                <div
                                    className="pl-4 w-full h-[10vh] lg:w-auto lg:h-auto lg:basis-1/3 lg:shrink-0 h-[40vh]">
                                    <Image src={'/PickRestTV/Lending/likeFeedback.png'} width={1500} height={1500} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse lg:flex-row mt-8 pb-8 items-center justify-between">
                            <div className="flex items-center mt-8 flex-col-reverse lg:flex-row basis-[50%]">
                                <div
                                    className="pl-4 w-full h-[10vh] lg:w-auto lg:h-auto lg:basis-1/3 lg:shrink-0 h-[40vh]">
                                    <Image src={'/PickRestTV/Lending/5starsFeedback.png'} width={1500} height={1500}/>
                                </div>
                                <div
                                    className="flex items-start flex-col bg-white basis-[70%] rounded-3xl pt-4 pb-4 pl-8 pr-8">
                                    <p className="text-text-gray text-xl">Очень качественная и удобная приставка. Всё
                                        идёт как и должно идти у серьёзного поставщика: без вылетов и зависаний.
                                        Картинка - сказка! техподдержке отдельное спасибо - всегда отвечают оперативно и
                                        по делу!
                                    </p>
                                    <h3 className="text-2xl text-center text-dead_violet font-bold">Михаэль</h3>
                                </div>
                            </div>
                            <div className="flex mt-8 flex-col-reverse lg:flex-row items-center basis-[50%]">
                                <div
                                    className="pl-4 w-full h-[10vh] lg:w-auto lg:h-auto lg:basis-1/3 lg:shrink-0 h-[40vh]">
                                    <Image src={'/PickRestTV/Lending/Face_LoveFeedback.png'} width={1500} height={1500} />
                                </div>
                                <div
                                    className="flex items-start flex-col items-end bg-white basis-[70%] rounded-3xl pt-4 pb-4 pl-8 pr-8">
                                    <p className="text-text-gray text-xl">За 89 шекелей в месяц — просто сказка. FullHD
                                        и HD каналы превзошли все мои ожидания, как по качеству, так и по количеству
                                        (есть с чем сравнить, у знакомых русское телевидение от другой компании
                                        установлено, уже думают тоже на Rest TV перейти).

                                    </p>
                                    <h3 className="text-2xl text-center text-dead_violet font-bold">Александр
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
