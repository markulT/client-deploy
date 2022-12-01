import Image from "next/image"


export default function FAQChunk() {
    return(
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
    )
}