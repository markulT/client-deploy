import Navbar from "./Navbar";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Layout = ({children}) => {
    return (

        <div id={'#footer'}>
            <Navbar/>
            {children}
            <footer className={styles.footer}>
                <ul className="flex container flex-col md:grid md:grid-cols-3 lg:flex lg:flex-row justify-around text-xl text-gray-200 ">
                    <div className={'flex flex-col justify-center'}>
                        <div className={"flex justify-center md:justify-start"}>
                            <img src="/PickRestTV/Lending/resttv.png" className="h-20 w-24" alt=""/>
                        </div>
                        <div className={"flex justify-center md:justify-start"}>
    <span className="mt-4 text-sm text-gray-500 sm:text-center dark:text-gray-400 flex ">© 2023 RestTV™ Все права защищены.
                            </span>
                        </div>

                    </div>
                    <div className={'w-50 h-50 py-10 flex justify-center md:justify-start'}>
                        <Image src={'/catalogPick/masterlogo.png'} height={60} width={100} className={''}/>
                        <Image src={'/catalogPick/visalogo.png'} height={60} width={100} className={''}/>
                    </div>
                    <div className={'flex flex-col lg:flex-row gap-4 md:gap-0'}>
                        <div className={'px-10'}>
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


                        <div className={'px-10'}>
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
                        <div className={'px-10'}>
                            <a className="text-gray-200 text-lg font-bold ">Контакты</a>
                            <div>
                                <li>
                                    <a className="text-gray-200">tkostruba@ukr.net</a>
                                </li>
                            </div>
                        </div>
                    </div>
                </ul>
            </footer>
        </div>
    )
}
export default Layout
