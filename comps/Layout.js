import Navbar from "./Navbar";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Layout = ({children}) => {
    return(

        <div>
            <Navbar />
            {children}
            <footer className={styles.footer}>
                <ul className="flex container flex-wrap text-xl text-gray-200 ">
                    <li>
                        <a className="text-gray-200 hover:text-gray-400" href="https://www.facebook.com/">Facebook</a>
                    </li>
                    <li className="ml-8">
                        <a className="text-gray-200 hover:text-gray-400" href="https://www.whatsapp.com/?lang=ru">WhatsApp</a>
                    </li>
                    <li className="ml-8">
                        <a className="text-gray-200 hover:text-gray-400" href="https://web.telegram.org/k/">Telegram</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}
export default Layout