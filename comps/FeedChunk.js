import Image from "next/image"

export default function FeedChunk() {
    return (
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
    )
}