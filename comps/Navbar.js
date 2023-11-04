import Link from "next/link";
import Button from "./Button";
import {useRouter} from "next/router";
import {useState} from "react";
import {useSelector} from "react-redux";
import {BiUserCircle} from "@react-icons/all-files/bi/BiUserCircle";
import {BiHome} from "@react-icons/all-files/bi/BiHome";
import {HiChevronDown} from "react-icons/hi";
import {logout} from "../storage/reducers/authReducer";
import {useDispatch} from "react-redux";


export default function Navbar() {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)
    const [expand, setExpand] = useState(false)
    const [open, setOpen] = useState(false)
    const email = useSelector(state => state.authReducer.email)
    const fullName = useSelector(state => state.authReducer.fullName)
    const dispatch = useDispatch()

    async function handleLogout() {
        setMenuOpen(false)
        await dispatch(logout())

    }

    return (
        <nav className={`   py-8 ${open ? 'bg-secondary-black absolute' : 'bg-transparent'} w-full z-[999] px-12 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-32`}>
            <div className="">
                <div className="md:flex w-full align-middle justify-between items-center">
                    <div className="z-30 flex text-5xl font-[Poppins] cursor-pointer h-[48px] w-auto" onClick={() => {
                        router.push('/')
                        console.log(email)
                    }}>
                        <img src="/PickRestTV/Lending/resttv.png"
                             className="z-30 h-full w-auto hover:scale-125 transition-all duration-500" alt=""/>
                    </div>
                    <div onClick={() => {
                        setOpen(!open)
                    }} className="text-5xl absolute z-40 right-8 text-gray-200 top-6 cursor-pointer md:hidden">
                        <ion-icon name={open ? 'close' : 'menu-outline'}></ion-icon>
                    </div>
                    <div
                        className={`${open ? 'bg-secondary-black' : 'bg-transparent'} md:flex md:flex-row flex flex-col items-center z-30 md:pb-0 pb-12 md-:px-0 absolute md:static  w-full md:w-auto left-0 md:pl-0  transition-all duration-200 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                        <div className=" inline-block md:ml-8 text-xl md:my-0 my-7">
                            <Link className="align-middle md:flex-1 md:ml-8 text-xl" href={"/"}>
                                <a className="text-white hover:text-disabled-white items-center transition-all duration-300">
                                    {/*<BiHome className={'inline font-primary text-2xl mb-1 mr-2'}/>*/}
                                    Главная
                                </a>
                            </Link>
                        </div>
                        {email ? (
                            <div className="relative inline-block align-middle flex-1 md:ml-8 text-md lg:text-xl md:my-0 my-0">
                                <div>
                                    <a className="truncate cursor-pointer text-white bg-gradient-to-r from-highlightBlue to-highlightDarkBlue rounded-2xl p-4 flex items-center" onClick={() => setMenuOpen(!menuOpen)}>
                                        <BiUserCircle className="inline text-2xl mr-2" />
                                        {email}
                                        <HiChevronDown
                                            className={`${menuOpen ? "rotate-180" : "rotate-0"} transition-all duration-500 text-2xl inline cursor-pointer ml-2 mt-1 focus:rotate-90 text-gray-200`}
                                        />
                                    </a>
                                    <div
                                        className={`${menuOpen ? "z-40 opacity-100 translate-y-[-10px] translate-y-3" : "opacity-0 translate-y-0"} absolute top-14 left-0 right-0 transition-all duration-500 bg-gray-700 rounded divide-y mt-3 p-3 flex flex-wrap items-center justify-center`}
                                    >
                                        <div className="z-[50] py-3 px-8 text-sm text-gray-200 justify-center text-center items-center">
                                            <div className={"z-[50]"}>{fullName}</div>
                                            <div className="z-[50] font-medium">{email}</div>
                                        </div>
                                        <div className="z-[50]">
                                            <ul className="py-1 z-[50] text-sm text-gray-200">
                                                <li className="text-center">
                                                    <a href="/profile" className="block py-2 px-4 hover:bg-gray-600 hover:text-gray-200">Профиль</a>
                                                </li>
                                                <li className="text-center">
                                                    <a onClick={handleLogout} className="block py-2 px-4 hover:bg-gray-600 hover:text-gray-200">Выход</a>
                                                </li>
                                                {/* Additional menu items */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className={"flex md:flex-row flex-col items-center"}>
                                <div className="align-middle flex md:ml-8 text-xl md:my-0 my-7">
                                    <Link href={"/auth/login"}>
                                        <a className="hover:text-gray-400 text-gray-200 transition-all duration-300">Логин</a>
                                    </Link>
                                </div>
                                <Button>Регистрация</Button>
                            </div>
                        )}
                    </div>
                    <div className={"absolute bg-gradient-to-r from-primary-blue via-transparent to-primary-blue opacity-20 lg:opacity-50"}></div>
                </div>
            </div>

        </nav>

    )
}
