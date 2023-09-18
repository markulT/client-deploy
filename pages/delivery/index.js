import {useState} from "react";
import Link from "next/link";
import Button from "../../comps/Button";
import {useDispatch} from "react-redux";
import {setPolicy} from "../../storage/reducers/signReducer";
import {useRouter} from "next/router";

export default function Delivery() {
    const [read, setRead] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()
    return (
        <div className="flex flex-col h-full z-[30] mb-8 ">
            <div className={'z-[20] font-primary text-gray-200 items-center justify-center z-20 px-4 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-32 w-full'}>
                <div className=' min-h-screen pt-6 pb-4 '>
                    <div className="bg-secondary-black pl-4 pr-4 rounded-3xl ">
                        <div className="text-center pt-2">
                            <h2 className={'text-3xl mt-4 font-semibold'}>Доставка і оплата</h2>
                        </div>
                        <p className={'text-xl mt-4'}>1. Замовник своєчасно та в повному обсязі сплачує вартість наданих йому  послуг, згідно тарифів, встановлених на сайті
                            <a className={'hover:text-gray-400 transition-all duration-300 ml-2'}>
                                <Link href={'https://maximum-ott.com/'} >
                                https://maximum-ott.com/
                                </Link><br/>
                            </a> Виконавцем.
                        </p>
                        <p className={'text-xl mt-4'}>2. Послуги надаються з моменту Акцепту Замовником умов та положень даного Договору та внесення передоплати за послуги.
                        </p>
                        <p className={'text-xl mt-4'}>3. Місцем надання послуг вважається місце	яке ідентифіковане та вказано Замовником під час реєстрації.
                        </p>
                        <p className={'text-xl mt-4 pb-10'}>4. У разі відмови Замовником від Замовлення, передоплата Виконавцем Замовнику не повертається.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}