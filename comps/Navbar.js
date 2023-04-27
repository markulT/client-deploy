import Link from "next/link";
import Button from "./Button";
import {useRouter} from "next/router";
import {useState} from "react";
import {useSelector} from "react-redux";
import {BiUserCircle} from "@react-icons/all-files/bi/BiUserCircle";
import {BiHome} from "@react-icons/all-files/bi/BiHome";
import { HiChevronDown } from "react-icons/hi";
import { logout } from "../storage/reducers/authReducer";
import { useDispatch } from "react-redux";


export default function Navbar() {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)
    const [expand, setExpand] = useState(false)
    const [open, setOpen] = useState(false)
    const login = useSelector(state => state.authReducer.login)
    const fullName = useSelector(state => state.authReducer.full_name)
    const dispatch = useDispatch()
    async function handleLogout() {
        setMenuOpen(false)
        await dispatch(logout()) 
       
        }
    return (
        <nav className="p-5 bg-gray-800 w-full z-[999] ">
            <div className="container mx-auto">
                <div className="md:flex w-full align-middle justify-between items-center">
                    <div className="text-5xl font-[Poppins] cursor-pointer h-[48px] w-auto" onClick={() => {
                        router.push('/')
                    }}>
                        <img src="/PickRestTV/Lending/resttv.png" className="h-full w-auto hover:scale-125 transition-all duration-500" alt=""/>
                    </div>
                    <div onClick={() => {
                        setOpen(!open)
                    }} className="text-5xl absolute right-8 gray text-gray-200 top-6 cursor-pointer md:hidden">
                        <ion-icon name={open ? 'close' : 'menu-outline'}></ion-icon>
                    </div>
                    <div
                        className={`md:flex md:flex-row flex flex-col items-center z-20 md:pb-0 pb-12 md-:px-0 absolute md:static  bg-gray-800  w-full md:w-auto left-0 md:pl-0  transition-all duration-200 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                        <div className=" inline-block md:ml-8 text-xl md:my-0 my-7">
                            <Link className="align-middle md:flex-1 md:ml-8 text-xl" href={"/"}>
                                <a className=" hover:text-gray-400 text-gray-200 items-center transition-all duration-300">
                                    <BiHome className={'inline text-2xl mb-1 mr-2'} />
                                    Главная
                                </a>
                            </Link>
                        </div>
                        {login ?
                           <div className="relative  inline-block align-middle flex-1 md:ml-8 text-xl md:my-0 my-0  bg-indigo-500 hover:bg-indigo-500 p-3 rounded-2xl transition-all duration-300">
                            <div >
                             
                                   <a className=" text-gray-200 flex items-center">
                                       <BiUserCircle className={'inline text-2xl mr-2'} />
                                       {login}
                                       <HiChevronDown
                         className={`${menuOpen ? "rotate-180" : "rotate-0"} transition-all duration-500 text-2xl inline cursor-pointer ml-2 mt-1 focus:rotate-90 text-gray-200 `} onClick={()=>{
                            setMenuOpen(!menuOpen)}
                        }/>
                                   </a>
                               

                               <div className={`${menuOpen ? "opacity-100 translate-y-[-10px] translate-y-3" : "opacity-0 translate-y-0"} absolute top-14 left-0 right-0 transition-all duration-500 bg-gray-700 rounded divide-y mt-3 p-3 flex flex-wrap items-center justify-center`}>
            <div className="py-3 px-4 text-sm text-gray-200 justify-center text-center items-center">
      <div>{fullName}</div>
      <div className="font-medium ">@{login}</div>
    </div>
   {/* Менюха */}
    <div className="">
    <ul className="py-1 text-sm text-gray-200 ">
      <li className="text-center">
        <a href="/profile" className="block py-2 px-4  hover:bg-gray-600 hover:text-gray-200 ">Профиль</a>
      </li>
      {/* Купить експанд */}

    </ul>
    </div>
           {/* Вихід */}
        
           <ul className="py-1 text-sm text-gray-200 ">
            <li>
        <a onClick={handleLogout} className="block py-2 px-12  hover:bg-gray-600 hover:text-gray-200">Выход</a>
      </li>
                      </ul>
    </div>

                              
                            </div>
                           </div>
                           
                            :
                            <>
                                <div className="align-middle flex-1 md:ml-8 text-xl md:my-0 my-7">
                                    <Link href={"/auth/login"}>
                                        <a className="hover:text-gray-400 text-gray-200 transition-all duration-300">Логин</a>
                                    </Link>
                                </div>
                                <Button>Регистрация</Button>
                            </>
                        }
                    </div>
                </div>
            </div>
            
        </nav>
        
    )
}