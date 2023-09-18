import Navbar from "./Navbar";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Layout = ({children}) => {
    return (
        <div className={"bg-primary-black z-[-20] min-h-screen font-primary"}>
            <div className={"relative w-full"}>
                <div
                    className={"absolute inset-0 w-full h-full bg-gradient-to-r from-primary-blue via-transparent to-primary-blue opacity-20 lg:opacity-50"}>
                </div>
                <Navbar/>

                {children}
                <footer className={"z-10 pb-8 px-12 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-32"}>
                    <ul className="flex z-10 flex-col md:grid md:grid-cols-3 lg:flex lg:flex-row justify-around text-xl text-gray-200 ">
                        <div className={'z-10 flex flex-col justify-center'}>
                            <div className={"flex justify-center md:justify-start"}>
                                <img src="/PickRestTV/Lending/resttv.png" className="h-20 w-24" alt=""/>
                            </div>
                            <div className={"flex justify-center md:justify-start"}>
                            <span className="mt-4 text-sm text-gray-500 sm:text-center dark:text-gray-400 flex ">© 2023 RestTV™ Все права защищены.
                            </span>
                            </div>
                        </div>

                        <div className={'z-10 lg:w-1/6 py-8 lg:py-0 flex justify-center md:justify-start'}>
                            <div className={`relative lg:w-1/2 w-full flex justify-center pb-12 `}>
                                <Image
                                    draggable={false}
                                    layout={'fill'}
                                    objectFit={'contain'}
                                    src={'/catalogPick/masterlogo.png'}
                                    alt={"Logo"}
                                    className={"self-end cursor-pointer hover:scale-105 transition-all duration-500"}
                                />
                            </div>
                            <div className={`relative lg:w-1/2 w-full flex justify-center items-center pb-12`}>
                                <Image
                                    draggable={false}
                                    layout={'fill'}
                                    objectFit={'contain'}
                                    src={'/catalogPick/visalogo.png'}
                                    alt={"Logo"}
                                    className={"self-end cursor-pointer hover:scale-105 transition-all duration-500"}
                                />
                            </div>
                        </div>
                        <div className={'z-10 flex flex-col lg:flex-row gap-4 md:gap-0'}>
                            <div className={'px-10 flex flex-col items-center text-center'}>
                                <a className="text-gray-200 text-lg font-bold ">Ознакомительное</a>

                                <div>
                                    <Link href={'/policy'}>
                                        <a className="text-gray-200 hover:text-gray-400 transition-all duration-300 text-lg text-center ">Политика
                                            конфиденциальности</a>
                                    </Link>
                                </div>

                                <div>
                                    <Link href={'/delivery'}>
                                        <a className="text-gray-200 hover:text-gray-400 transition-all duration-300 text-lg text-center ">Доставка
                                            и оплата</a>
                                    </Link>
                                </div>

                                <div>
                                    <Link href={'/terms_of_use'}>
                                        <a className="text-gray-200 hover:text-gray-400 transition-all duration-300 text-lg ">Оферта</a>
                                    </Link>
                                </div>

                                <div>
                                    <Link href={'/about'}>
                                        <a className="text-gray-200 hover:text-gray-400 transition-all duration-300 text-lg ">О
                                            нас</a>
                                    </Link>
                                </div>

                            </div>


                            <div className={'px-10 flex flex-col items-center text-center'}>
                                <a className="text-gray-200 text-lg font-bold ">Соцсети</a>
                                <div>
                                    <li>
                                        <a className="text-gray-200 hover:text-gray-400 transition-all duration-300"
                                           href="https://www.facebook.com/">Facebook</a>
                                    </li>
                                </div>
                                <div>
                                    <li className="">
                                        <a className="text-gray-200 hover:text-gray-400 transition-all duration-300"
                                           href="https://www.whatsapp.com/?lang=ru">WhatsApp</a>
                                    </li>
                                </div>
                                <div>
                                    <li className="">
                                        <a className="text-gray-200 hover:text-gray-400 transition-all duration-300"
                                           href="https://web.telegram.org/k/">Telegram</a>
                                    </li>
                                </div>
                            </div>
                            <div className={'px-10 flex flex-col items-center text-center'}>
                                <a className="text-gray-200 text-lg font-bold ">Контакты</a>
                                <div>
                                    <li>
                                        <a className="text-gray-200 truncate">rest.iptv.business@gmail.com</a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </ul>
                </footer>

            </div>
        </div>
    )
}
export default Layout
