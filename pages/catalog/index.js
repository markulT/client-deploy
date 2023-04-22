import {useState} from "react";
import Link from "next/link";
import Button from "../../comps/Button";
import {useDispatch} from "react-redux";
import {setPolicy} from "../../storage/reducers/signReducer";
import Router, {useRouter} from 'next/router'
import Image from "next/image";

export default function Catalog() {
    const [read, setRead] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()
    return (
        <div className="h-full bg-gradient-to-t from-grad_from to-grad_to ">
            <div className={'font-[Inter] text-gray-200 items-center justify-center w-100'}>
                <div className='container min-h-screen mx-auto pt-6 pb-4 '>
                    <div className="bg-gray-800 pl-4 pr-4 rounded-3xl pt-4 justify-items-center ">
                      <p className={'font-semibold'}>Цена 1 USD в месяц</p>
                        <p className={'font-regular'}>Вы получаете рассылку программы телепередач на каждый день</p>
                        <div className={'grid grid-cols-2 grid-rows-2 gap-4 pb-4 mt-2'}>
                        <Image src={'/catalogPick/1.jpg'} height={358} width={518} className={'rounded-xl'}/>
                        <Image src={'/catalogPick/2.jpg'} height={358} width={518} className={'rounded-xl'}/>
                        <Image src={'/catalogPick/3.jpg'} height={358} width={518} className={'rounded-xl'}/>
                        <Image src={'/catalogPick/4.jpg'} height={358} width={518} className={'rounded-xl'}/>
                        </div>
                        <div className={'flex justify-center'}>
                            <button onClick={() => {
                                router.push('/profile')
                            }}
                                    className= "text-gray-50 bg-indigo-600 hover:scale-110 hover:bg-indigo-800 hover:bg-blend-darken rounded-2xl p-3 px-5  mb-4 text-xl  font-medium transition-all duration-500">Купить за 1$
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}