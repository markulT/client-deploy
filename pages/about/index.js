import {useState} from "react";
import Link from "next/link";
import Button from "../../comps/Button";
import {useDispatch} from "react-redux";
import {setPolicy} from "../../storage/reducers/signReducer";
import {useRouter} from "next/router";

export default function About() {
    const [read, setRead] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()
    return (
        <div className="h-full bg-gradient-to-t from-grad_from to-grad_to ">
            <div className={'font-[Inter] text-gray-200 items-center justify-center w-full'}>
                <div className='container min-h-screen mx-auto pt-6 pb-4 '>
                    <div className="bg-gray-800 pl-4 pr-4 rounded-3xl ">
                        <div className="text-center pt-2">
                            <h2 className={'text-3xl mt-4 font-semi-bold'}>Про нас
                            </h2>
                        </div>

                        <h2 className={'text-2xl mt-4'}>ФОП КОСТРУБА ТАРАС МИКОЛАЙОВИЧ надає інформаційні послуги  з використання  програмної продукції ISP Network LTD –  https://maximum-ott.com/ власником якої — один із найтехнологічніших OTT-сервісів, що пропонує контент для всієї родини. Платформа забезпечує відмінний досвід для користувача і є одним з найкращих рішень для онлайн-перегляду телепередач та фільмів за однією підпискою. Сервіс працює скрізь, де є інтернет.</h2>
                        <p className={'text-xl mt-4'}>Програмна продукція дозволяє зупиняти та перемотувати пряму трансляцію назад.</p>
                        <p className={'text-xl'}>Телепередачі автоматично записуються до архіву на 7 днів!</p>
                        <p className={'text-xl'}>Висока якість зображення, включаючи HD і 4K.</p>
                        <p className={'text-xl'}>Редакційна система рекомендацій допомагає скоротити час, який витрачається на пошук цікавого контенту.</p>
                        <p className={'text-xl'}>Новий рівень OTT</p>
                        <p className={'text-xl'}>Зручно підключити</p>
                        <p className={'text-xl'}>Клієнти можуть використовувати до пяти пристроїв в одній підписці.</p>
                        <p className={'text-xl'}>Швидка реєстрація</p>
                        <p className={'text-xl'}>Можна підписатися на будь-якій платформі за електронною поштою, номером телефону, Google, Facebook або Apple ID.</p>
                        <p className={'text-xl'}>Легко платити</p>
                        <p className={'text-xl'}>Сплатити передплату можна на будь-якій платформі через VISA/Mastercard, банківський переказ або Мобільний банкінг.</p>
                        <p className={'text-xl'}>Легко дивитись</p>
                        <p className={'text-xl'}>Стрімінговий сервіс має інноваційно зручний інтерфейс: структуру меню, що швидко вибирається, простий у навігації. надає безкоштовний доступ усім</p>
                        <p className={'text-xl'}>Легко знайти</p>
                        <p className={'text-xl pb-8'}>Програми доступні на Smart TV, смартфонах (Android та iOS), планшетах (Android та iOS), телевізійних приставках ( Apple TV та Xbox), ноутбуках (macOS та Windows)</p>

                    </div>
                </div>
            </div>
        </div>
    )
}