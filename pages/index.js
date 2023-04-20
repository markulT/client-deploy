import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {AiFillCaretUp} from "@react-icons/all-files/ai/AiFillCaretUp";
import dynamic from 'next/dynamic';
import { setCookie } from 'cookies-next';
import { getCookie } from 'cookies-next';
import { hasCookie } from 'cookies-next';



const MainChunk = dynamic(()=>import('../comps/MainChunk'))
const HelpChunk = dynamic(()=>import('../comps/HelpChunk'))
const FAQChunk = dynamic(()=>import('../comps/FAQChunk'))
const FeedChunk = dynamic(()=>import('../comps/FeedChunk'))
export default function Home() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [Hidden, setHidden] = useState(false)

useEffect(
()=>{
getCookie('cookieAccept') == "hidden" ? setHidden(true) : setHidden(false)
}
,[])
    const [scrollTop, setScrollTop] = useState(false)
    const onScroll = useCallback(event => {
        if (window.scrollY > 0) {
            setScrollTop(true)
        } else {
            setScrollTop(false)
        }
    })
    useEffect(() => {

        window.addEventListener('scroll', onScroll, {passive: true})

        return () => {
            window.removeEventListener('scroll', onScroll, {passive: true})
        }
    }, [])
    // const getSize = () => {
    //     if (window !== 'undefined') {
    //         if (window.innerWidth > 1023) {
    //             return window.innerWidth
    //         } else {
    //             return window.innerWidth * 0.5
    //         }
    //     }
    // }
    // bg-[url('/PickRestTV/Lending/backgpick.png')]
    return (
        
        <div className="w-full overflow-hidden">
            
  <div  x-show="open"     
         className={`${Hidden ? "hidden" : "visible"} max-w-screen-lg mx-auto fixed bg-gray-800 inset-x-5 p-5 bottom-10 z-10 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between`}>
    <div className="w-full text-white text-sm sm:text-md ">Этот веб-сайт использует файлы cookie, чтобы обеспечить вам максимальное удобство на нашем веб-сайте. 
      <a href="#" className="text-indigo-300 whitespace-nowrap  hover:underline text-sm sm:text-md transition-all duration-300"> Читать больше</a></div>
    <div className="flex gap-4 items-center flex-shrink-0">
      <button className="text-indigo-300 focus:outline-none hover:underline text-sm pl-5 sm:pl-0 transition-all duration-300"
      onClick={()=>{
      setHidden(true)
        setCookie('cookieAccept', 'hidden')}}>Отклонить</button>
      <button className="bg-indigo-500 sm:px-5 sm:py-2 px-2 py-2 text-sm sm:text-md mr-3 sm:mr-0 text-white rounded-md hover:bg-indigo-700 focus:outline-none transition-all duration-300"
      onClick={()=>{
      setHidden(true)
        setCookie('cookieAccept', 'hidden')}}>Разрешить Coockies</button>
    </div>
  </div>
 
            
            <main className={styles.main}>
                <section
                    className="font-[Oswald] h-screen md:h-[105vh] w-full" id='backImg'>
                        <div className=" h-screen md:h-[105vh] w-full">
                        <div className="container mx-auto h-full flex-col flex items-center justify-center">
                        <h2 className="text-5xl font-medium text-gray-200">Заказывайте</h2>
                        <h3 className="text-xl text-center mt-4 text-gray-200">Актуальную программу<br/>
                            телевидения</h3>
                        <button onClick={() => {
                            router.push('/profile')
                        }}
                                className= "text-gray-50 bg-indigo-600 hover:scale-110 hover:bg-indigo-800 hover:bg-blend-darken rounded-2xl p-3 px-5 mt-8 text-xl font-[Oswald] font-medium transition-all duration-500">Получить программу
                        </button>
                    </div>
                        
                            
                        </div>
                        
                    
                </section>
                <section className="bg-gradient-to-t w-full from-grad_from to-grad_to flex flex-col">
                <div
                    className={`fixed bottom-5 right-5 p-4 bg-black cursor-pointer rounded-[50%] ${scrollTop ? 'visible' : 'hidden'}`}
                    onClick={() => {
                        window.scrollTo({top: 0, behavior: 'smooth'})
                    }}
                >
                    <AiFillCaretUp className={'text-2xl'}/>
                </div>
                    <MainChunk />
                    <HelpChunk />
                    {/*<FAQChunk />*/}
                    {/*<FeedChunk />*/}
                </section>
            </main>
        </div>
    )
}
