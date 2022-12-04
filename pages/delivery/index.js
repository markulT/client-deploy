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
        <div className="h-full bg-gradient-to-t from-grad_from to-grad_to ">
            <div className={'font-[Inter] text-gray-200 items-center justify-center w-full'}>
                <div className='container min-h-screen mx-auto pt-6 pb-4 '>
                    <div className="bg-gray-800 pl-4 pr-4 rounded-3xl ">
                        <div className="text-center pt-2">
                            <h2 className={'text-3xl mt-4 font-semi-bold'}>Доставка і оплата</h2>
                        </div>
                        <p className={'text-xl mt-4'}>1. Замовник своєчасно та в повному обсязі сплачує вартість наданих йому  послуг, згідно тарифів, встановлених на сайті https://maximum-ott.com Виконавцем.</p>
                        <p className={'text-xl'}>2. Послуги надаються з моменту Акцепту Замовником умов та положень даного Договору та внесення передоплати за послуги.</p>
                        <p className={'text-xl'}>3. Місцем надання послуг вважається місце	яке ідентифіковане та вказано Замовником під час реєстрації.</p>
                        <p className={'text-xl pb-8'}>4. У разі відмови Замовником від Замовлення, передоплата Виконавцем Замовнику не повертається.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}