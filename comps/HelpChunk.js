import Image from "next/image"

export default function HelpChunk() {
    return (
        <div className="container flex flex-col mx-auto lg:min-h-[90vh]">
                        <div className="flex items-center justify-center">
                            <h2 className="text-gray-200 text-4xl sm:text-6xl text-center font-bold font-[Inter] mt-8">Как подписаться?</h2>
                        </div>
                        <div className="flex mt-16 w-full flex-col lg:flex-row justify-around items-center">
                            <div
                                className="flex flex-col py-12 items-center flex-1 bg-gray-700 basis-1/5 p-7 rounded-3xl">
                                <h3 className="text-gray-200 text-center text-3xl font-bold pt-8
                         font-[Inter]">Зарегистрируйтесь</h3>
                                {/*<p className="text-center text-2xl md:text-xl text-xl text-gray-300">Нажмите кнопку*/}
                                {/*    “Зарегистрироваться”*/}
                                {/*    Придумайте логин и пароль для своей учетной записи</p>*/}
                                <Image src={'/PickRestTV/Lending/userSteps.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000}/>
                            </div>

                            <div
                                className="flex flex-col mt-8 lg:mt-0 py-12 items-center md:ml-8 md:mr-8 flex-1 bg-gray-700 basis-1/5 p-7 rounded-3xl">
                                <h3 className="text-gray-200 pt-8 text-center text-3xl font-bold font-[Inter]">Выберите пакет<br/> программ
                                </h3>
                                {/*<p className="text-center text-2xl md:text-xl text-xl text-gray-300">Назначьте сами*/}
                                {/*    день и время, чтобы вам было максимально удобно встретиться с нашим техническим*/}
                                {/*    специалистом.</p>*/}
                                <Image src={'/PickRestTV/Lending/locationSteps.png'} width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000}/>
                            </div>

                            <div
                                className="flex lg:w-auto flex-col mt-8 lg:mt-0 pb-8 pt-8 items-center flex-1 bg-gray-700 basis-1/5 p-7 rounded-3xl">
                                <h3 className="text-gray-200 pt text-center text-3xl font-bold font-[Inter]">Наслаждайтесь <br/></h3>
                                {/*<p className="text-center text-2xl md:text-xl text-gray-300">После подключения системы*/}
                                {/*    и демонстраци возможностей оборудования смотрите любимые каналы и телепередачи в*/}
                                {/*    качестве Full HD</p>*/}
                                <Image src={'/PickRestTV/Lending/saluteSteps.png'} className="scale-75" width={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000} height={typeof window !=='undefined' ? window.innerWidth > 1023 ? window.innerWidth*1.5 : window.innerWidth*0.5 : 1000}/>
                            </div>
                        </div>
                    </div>
    )
}