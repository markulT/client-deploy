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
        <div className="flex flex-col h-full z-[30] mb-8 ">
            <div className={'z-[20] font-primary text-gray-200 items-center justify-center z-20 px-4 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-32 w-full'}>
                <div className='container min-h-screen mx-auto pt-6 pb-4 '>
                    <div className="bg-secondary-black px-4 rounded-3xl ">
                        <div className="text-center pt-2">
                            <h2 className={'text-3xl mt-4 font-semibold'}>Про нас
                            </h2>
                        </div>
                        <p className={'text-xl'}>На даному сайті представлена програма передач ефірних, кабельних/супутникових телеканалів. Наш сервіс проводить розсилку програм телепередач нашим підписникам.
                        </p>
                        <p className={'text-xl'}>Програма передач, зображення до програм та інший інформаційний контент надано нашим сайтом, частина інформації взята з відкритих вільних загальнодоступних джерел. Адміністрація
                            <a className={'hover:text-gray-400 transition-all duration-300 ml-2'}>
                                <Link href={'https://maximum-ott.com/'} >
                                https://maximum-ott.com/
                                </Link><br/>
                            </a> не має прямого відношення до контенту.
                            Адміністрація сайту не несе відповідальності за можливі неточності у розкладах, описах телепередач, за зміст рекламних оголошень, розміщених на сайті.
                        </p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className={'text-xl pb-10'}>Електронна пошта для зв'язку з нами:
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}