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
                    <div className="bg-gray-800 pl-4 pr-4 rounded-3xl pt-4 flex flex-1">

                        {/*Text + description*/}
                        <div className={''}>
                            <div className={'flex flex-1'}>

                                <div className={''}>
                                    <p className={'font-semibold text-2xl'}>Минимальный</p>
                                    <p className={'font-regular'}>
                                        -включает в себя доступ к программе телепередач 100 самых популярных каналов
                                        <br/>-вы можете посмотреть программу на сегодня на завтра и на целую неделю вперед
                                    </p>
                                    {/*<div className={'grid grid-cols-2 grid-rows-2 gap-4 pb-4 mt-2'}>*/}
                                    {/*<Image src={'/catalogPick/1.jpg'} height={358} width={518} className={'rounded-xl'}/>*/}
                                    {/*<Image src={'/catalogPick/2.jpg'} height={358} width={518} className={'rounded-xl'}/>*/}
                                    {/*<Image src={'/catalogPick/3.jpg'} height={358} width={518} className={'rounded-xl'}/>*/}
                                    {/*<Image src={'/catalogPick/4.jpg'} height={358} width={518} className={'rounded-xl'}/>*/}
                                    {/*</div>*/}
                                    <div className={''}>
                                        <button onClick={() => {
                                            router.push('/profile')
                                        }}
                                                className= "mt-3 text-gray-50 bg-indigo-600 hover:scale-110 hover:bg-indigo-800 hover:bg-blend-darken rounded-2xl p-3 px-5  mb-4 text-xl  font-medium transition-all duration-500">Купить за 1$
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className={'flex flex-1'}>
                                <div>
                                    <p className={'font-semibold text-2xl'}>Стандарт</p>
                                    <p className={'font-regular'}>
                                        -включает в себя доступ к программе телепередач 500+ самых популярных каналов
                                        <br/>-вы можете посмотреть программу на сегодня на завтра и на целую неделю вперед
                                        <br/>-вы можете посмотреть программу спортивных и кино каналов, развлекательных и т.д.

                                    </p>
                                    {/*<div className={'grid grid-cols-2 grid-rows-2 gap-4 pb-4 mt-2'}>*/}
                                    {/*<Image src={'/catalogPick/1.jpg'} height={358} width={518} className={'rounded-xl'}/>*/}
                                    {/*<Image src={'/catalogPick/2.jpg'} height={358} width={518} className={'rounded-xl'}/>*/}
                                    {/*<Image src={'/catalogPick/3.jpg'} height={358} width={518} className={'rounded-xl'}/>*/}
                                    {/*<Image src={'/catalogPick/4.jpg'} height={358} width={518} className={'rounded-xl'}/>*/}
                                    {/*</div>*/}
                                    <div className={''}>
                                        <button onClick={() => {
                                            router.push('/profile')
                                        }}
                                                className= "mt-3 text-gray-50 bg-indigo-600 hover:scale-110 hover:bg-indigo-800 hover:bg-blend-darken rounded-2xl p-3 px-5  mb-4 text-xl  font-medium transition-all duration-500">
                                            Купить за 5$
                                        </button>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className={'font-semibold text-2xl'}>Премиум</p>
                                <p className={'font-regular'}>
                                    -включает в себя доступ к программе телепередач 1000+ самых популярных каналов
                                    <br/>-вы можете посмотреть программу на сегодня на завтра и на целую неделю вперед
                                    <br/>-вы можете посмотреть программу спортивных и кино каналов, развлекательных и т.д.
                                    <br/>- вы можете посмотреть информацию о новинках телепередач , фильмов с описаниями
                                    <br/>-вы можете почитать  анонсы и рекомендации  новых телепередачах , фильмов спортивных программ и т.д.
                                </p>
                                {/*<div className={'grid grid-cols-2 grid-rows-2 gap-4 pb-4 mt-2'}>*/}
                                {/*<Image src={'/catalogPick/1.jpg'} height={358} width={518} className={'rounded-xl'}/>*/}
                                {/*<Image src={'/catalogPick/2.jpg'} height={358} width={518} className={'rounded-xl'}/>*/}
                                {/*<Image src={'/catalogPick/3.jpg'} height={358} width={518} className={'rounded-xl'}/>*/}
                                {/*<Image src={'/catalogPick/4.jpg'} height={358} width={518} className={'rounded-xl'}/>*/}
                                {/*</div>*/}
                                <div className={''}>
                                    <button onClick={() => {
                                        router.push('/profile')
                                    }}
                                            className= "mt-3 text-gray-50 bg-indigo-600 hover:scale-110 hover:bg-indigo-800 hover:bg-blend-darken rounded-2xl p-3 px-5  mb-4 text-xl  font-medium transition-all duration-500">
                                        Купить за 10$
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={'flex flex-col'}>
                            <div className={'ml-10'}>
                                <Link href="/catalogPick/1test.png" download>
                                    <Image onClick={''} src={'/catalogPick/1.jpg'} height={179} width={259} className={'rounded-xl'}/>
                                </Link>
                            </div>
                            <div className={'ml-10'}>
                                <Link href="/catalogPick/3test.png" download>
                                    <Image onClick={''} src={'/catalogPick/3.jpg'} height={179} width={259} className={'rounded-xl'}/>
                                </Link>
                            </div>
                            <div className={'ml-10 relative'}>
                                <Link href="/catalogPick/4test.png" download>
                                    <Image onClick={''} src={'/catalogPick/4.jpg'} height={179} width={259} className={'rounded-xl'}/>
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}