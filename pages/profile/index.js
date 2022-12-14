import { useDispatch, useSelector } from 'react-redux'
import {cancelSubThunk, changeMac, createSubThunk, getFullProfile, getUser} from '../../storage/reducers/authReducer'
// import { useRouter } from 'next/router'
import Router, {useRouter} from 'next/router'
import {useCallback, useEffect, useState} from 'react'
import style from '../../styles/payButton.module.css'
import {useEffectOnce} from "../../hooks/useEffectOnce";
import {AiOutlineDownCircle} from "@react-icons/all-files/ai/AiOutlineDownCircle";
import { BsCart2 } from "react-icons/bs";
import Image from 'next/image'

export default function ProfilePage() {
    const user = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const router = useRouter()

    const [macOpen, setMacOpen] = useState(false)
    const [scrollTop, setScrollTop] = useState(false)
    const tariffs = {
        "1":"standart",
        "2":"premium",
        "3":"mobile"
    }

    const [password, setPassword] = useState('')
    const [tariff, setTariff] = useState('')
    const [mac, setMac] = useState('')

    const createSub = async (password, tariff) => {
        await dispatch(createSubThunk({
            login:user.login,
            password:password,
            fullName:user.fullName,
            tariff:tariff
        }))
    }

    const changeMacAddress = () => {
        dispatch(changeMac(user.login, mac))
    }

    const cancelSub = async (password) => {
        await dispatch(cancelSubThunk({
            login:user.login,
            pass
        }))
    }


    useEffect(() => {
        if (!user.login) {
            Router.push({
                pathname: '/auth/login'
            })
        }
        
    }, [])
    return (
        <div className="w-ful min-h-screen bg-gradient-to-t from-grad_from to-grad_to">
            <div className="container mx-auto">
                <div className="flex flex-wrap md:flex-nowrap justify-center items-center pt-8">
                    <div className="basis-1/3">
                        <Image src={'/PickRestTV/Profile/User.png'}
                                   className="w-full select-none h-auto scale-x-[-1]" draggable={false} width={700}
                                   height={700}/>
                    </div>
                    <div className={'text-center md:text-left bg-gray-800 p-8 rounded-3xl transition-all duration-800 ease-in-out'}>
                        <h3 className="text-3xl font-medium text-gray-200">??????????: {user.login}</h3>
                        <h3 className="text-3xl font-medium text-gray-200">???????????? ??????: {user.full_name}</h3>
                        <h3 className="text-3xl flex items-center font-medium text-gray-200">?????????????????? ??????????: {user.mobileSubLevel == 0 ? "????????" : user.mobileSubLevel == null ? "????????" : "??????????????"}</h3>
                        <a  className="text-3xl flex items-center font-medium text-gray-200">????????????????: {user.tariff_plan == "0" ? "????????" : user.tariff_plan == null ? "????????" : user.tariff_plan == "1" ? "????????????????" : "??????????????"}</a>
                        <div className="flex flex-wrap flex-col items-center">
                            <h3 className={`${macOpen ? 'text-3xl' : 'text-3xl'} transition-all duration-200 ease-in font-medium text-gray-200`}>{user.stb_mac ? user.stb_mac : "???????????????????? ???????? ?????? ??????????"} <AiOutlineDownCircle onClick={()=>{
                                setMac('')
                                setMacOpen(!macOpen)}
                            } className={`${macOpen ? "rotate-180" : "rotate-0"} transition-all duration-500 text-3xl inline cursor-pointer ml-4 mr-4 focus:rotate-90 text-color-gray-200 hover:text-gray-400`}/></h3>

                            <div className={`${macOpen ? "visible " : "hidden"}  bg-gray-700 rounded-3xl mt-3 p-6 flex flex-wrap items-center`}>
                            <div className={`group items-start h-2 w-80`}>
                                <input type="text" value={mac} onChange={(e)=>{setMac(e.target.value)}} className="absolute  right-0 text-md px-20 rounded-lg border-8  focus:border-gray-300  focus:border-8 block w-full pl-3 bg-gray-800 border-gray-500  text-gray-300 autofill:bg-gray-800" required />
                                <label className="text-gray-400 focus:text-gray-200">Mac Address</label>
                            </div>
                                <button onClick={changeMacAddress} className="bg-gray-800 hover:bg-gray-600 text-gray-200 rounded-2xl ml-3 p-3 text-lg font-medium mt-5 sm:mt-0">????????????</button>
                            </div>
                        </div>
                        {/* <h3  className="text-3xl font-medium text-gray-200">{tariffs[user.tariff_plan]}</h3> */}
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <h2 id={"subs"} className="text-gray-200 text-6xl text-center flex-wrap font-bold font-[Inter] mt-8">????????????????</h2>
                <div className="flex flex-col sm:flex-row items-center justify-around mt-8">
                    <div className="bg-gray-800 rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6">
                        <h3 className="text-3xl text-center text-gray-200 font-bold">Standart
                        </h3>
                        <p className="text-center text-gray-300 text-2xl mt-4">
                            ?????????????????????? ??????????. <br/> 200 ?????????????? ????????????????
                        </p>
                        <button onClick={()=>{router.push('/payGateway/standart')}} className="bg-gray-600 hover:bg-gray-700 text-gray-200 mt-4 rounded-2xl p-3 text-lg font-medium">????????????????</button>
                    </div>
                    <div className="bg-gray-800 mt-8 sm:mt-0 rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6">
                        <h3 className="text-3xl text-center text-gray-200 font-bold">Premium
                        </h3>
                        <p className="text-center text-gray-300 text-2xl mt-4 px-90 ">
                            ?????????????? ??????????.<br/>
                            <span className="whitespace-nowrap">???????????????????? ??????????????????????</span>
                        </p>
                        <button onClick={()=>{router.push('/payGateway/premium')}} className="bg-gray-600 hover:bg-gray-700 text-gray-200 mt-4 rounded-2xl p-3 text-lg font-medium">????????????????</button>
                    </div>
                </div>
                <div className="container pb-8 mx-auto">
                    <div className="flex items-center justify-center w-full">
                        <button onClick={()=>{
                            router.push("/payments/cancelSub")
                        }} className="bg-red-500 hover:bg-red-600 text-gray-200 rounded-3xl p-3 mt-5 text-lg font-medium mr-4">???????????????? ????????????????</button>
                    </div>
                </div>

            </div>
            <div className="container mx-auto pb-4">
                <h2 id="subsMobile" className="text-6xl text-gray-200 text-center flex-wrap font-bold font-[Inter] mt-8">???????????????? Mobile Maximum</h2>
                <div className="flex items-center justify-around mt-8">
                    <div className="bg-gray-800 rounded-3xl flex flex-col z-[2] items-center basis-1/4 p-6 px-20">
                        <h3 className="text-3xl text-center text-gray-200  font-bold">???????????? ????????????
                        </h3>
                        <p className="text-center text-gray-300 text-2xl mt-4">
                            ???????????? ?? ???????????? ????????????????
                        </p>
                        <button onClick={()=>{router.push('/payGateway/mobile')}} className="bg-gray-600 hover:bg-gray-700 text-gray-200 mt-4 rounded-2xl p-3 text-lg font-medium">????????????????</button>
                    </div>

                </div>
                <div className="container pb-8 mx-auto mt-4">
                    <div className="flex items-center justify-center w-full">
                        <button onClick={()=>{
                            router.push("/payments/cancelMobileSub")
                        }} className="bg-red-500 hover:bg-red-600 text-gray-200 rounded-3xl p-3 text-lg font-medium mr-4">???????????????? ????????????????</button>
                    </div>
                </div>
            </div>
        </div>
    )
}