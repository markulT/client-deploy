import Image from "next/image"

export default function MainChunk() {
    return (
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
    )
}