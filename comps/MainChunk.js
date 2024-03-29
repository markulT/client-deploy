import Image from "next/image"
import Router, {useRouter} from 'next/router'

export default function MainChunk() {
    const router = useRouter();
    return (
        <div className="container mx-auto z-20">
                        <div className="flex flex-col items-center">
                            <h2 className="text-gray-200 text-4xl sm:text-6xl text-center font-bold font-[Inter] mt-8">Все возможности<br/>
                            </h2>
                            <div
                                className="bg-gray-700 pt-8 pb-8 mt-16 mb-16 rounded-3xl flex-col flex flex-col lg:flex-row items-center justify-between w-full md">
                                <Image src={'/PickRestTV/Lending/tv1.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000}
                                       className={`${'scale-x-[-1]'} `}/>
                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="text-4xl sm:text-6xl text-gray-200 font-medium pl-4">Программа телеканалов</h3>
                                    <p className="text-gray-300 text-3xl sm:text-4xl pl-4">Каждый член семьи найдет, что
                                        ему интересно: новости, развлекательные
                                        программы, спортивные трансляции,
                                        фильмы, детские передачи в HD и Full HD
                                        качестве на русском языке.</p>
                                    <button onClick={() => {
                                        router.push('/catalog')
                                    }}
                                    className={'p-2 px-10 ml-4 mt-4 bg-indigo-600 rounded-lg text-2xl font-semibold hover:bg-indigo-800 transition-all duration-500 hover:scale-110'}>
                                        Купить
                                    </button>
                                </div>



                            </div>
                            <div
                                className="bg-gray-700 pb-8 pt-8 mt-16 mb-16 rounded-3xl flex-col-reverse flex flex-col lg:flex-row items-center justify-between w-full md">
                                <div className="flex flex-col 2xl:mr-16 items-start">
                                    <h3 className="text-4xl sm:text-6xl text-gray-200 font-medium pl-4">Почему ты должен ее купить?
                                    </h3>
                                    <p className="text-gray-300 text-3xl sm:text-4xl pl-4 mt-2">Приобретая рассылку телепрограмм телеканалов всего за 1 доллар в месяц,
                                        вы получите множество возможностей для увлекательного времяпрепровождения.
                                        Не упустите шанс получить доступ к множеству программ телепередач по самой выгодной цене.</p>
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
                                    <p className="text-gray-300 text-3xl sm:text-4xl pl-4">Программа телеканалов вмещает в себя национальные телеканалы из
                                        Израиля, РФ, Украины, стран СНГ, а также стран Европы и Америки. 200+ Каналов на
                                        национальных языках.</p>
                                </div>
                            </div>
                            <div
                                className="bg-gray-700 pt-8 pb-8 mt-16 mb-16 rounded-3xl flex-col flex flex-col-reverse lg:flex-row items-center justify-between w-full md">
                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="text-4xl sm:text-6xl text-gray-200 font-medium pl-4">Кинотеатр</h3>
                                    <p className="text-gray-300 text-3xl sm:text-4xl pl-4">Вам доступна информация о фильмах:
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
                                        и с радостью проводим регулярные акции.</p>
                                </div>
                            </div>
                            {/*<div*/}
                            {/*    className="bg-gray-700 pt-8 pb-8 mt-16 mb-16 rounded-3xl flex-col flex flex-col lg:flex-row items-center justify-between w-full md">*/}
                            {/*    <Image src={'/PickRestTV/Lending/archive6.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth : window.innerWidth*0.5 : 1000}/>*/}
                            {/*    <div className="flex flex-col 2xl:ml-16 items-start">*/}
                            {/*        <h3 className="text-4xl sm:text-6xl pl-4 text-gray-200 font-medium">Архив телепрограмм</h3>*/}
                            {/*        <p className="text-gray-300 pl-4 text-3xl sm:text-4xl">Главная ценность для нас — это вы и ваше*/}
                            {/*            время. Смотрите любимые программы в удобное вам время. От вас не нужно никаких*/}
                            {/*            действий — эфир записывается автоматически.</p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div
                                className="bg-gray-700 mt-16 mb-16 rounded-3xl flex-col flex pt-8 pb-8 flex-col lg:flex-row items-center justify-between w-full md">
                                <Image src={'/PickRestTV/Lending/adm7.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000}/>
                                <div className="flex flex-col 2xl:ml-16 items-start">
                                    <h3 className="pl-4 text-4xl sm:text-6xl text-gray-200 font-medium">Настройте рассылку</h3>
                                    <p className="text-gray-300 pl-4 text-3xl sm:text-4xl">Настройка рассылки программ телеканалов происходит очень быстро и просто.
                                        Вы можете выбрать из широкого спектра программ каналов по любым критериям: жанру, направлению, языку и т.д. </p>
                                </div>
                            </div>
                            {/*<div*/}
                            {/*    className="bg-gray-700 mt-16 mb-16 pt-8 pb-8 rounded-3xl flex-col flex flex-col lg:flex-row items-center justify-between w-full md">*/}
                            {/*    <Image src={'/PickRestTV/Lending/wifi8.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth : window.innerWidth*0.5 : 1000}/>*/}
                            {/*    <div className="flex flex-col 2xl:ml-16 items-start">*/}
                            {/*        <h3 className="text-4xl sm:text-6xl text-gray-200 pl-4 font-medium">Адаптивное*/}
                            {/*            ‍вещание</h3>*/}
                            {/*        <p className="text-gray-300 text-3xl sm:text-4xl pl-4">Эффективная система доставки*/}
                            {/*            видеосигнала позволит вам смотреть фильмы и передачи в максимально высоком*/}
                            {/*            разрешении.</p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
    )
}