import Image from "next/image"
import Router, {useRouter} from 'next/router'
import GradientButton from "../utils/GradientButton";

export default function MainSection() {
    const router = useRouter();
    return (
        <div className="w-full flex flex-col lg:flex-row bg-transparent z-20 px-12 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-32">
            <div className={"lg:w-1/2 w-full items-center lg:items-start flex flex-col justify-center"}>
                <h1 className={"text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"}>Заказывайте</h1>
                <p className={"text-outline-white text-center lg:text-start text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-medium max-w-sm"}>Актуальную программу
                    телевидения</p>
                <GradientButton text={"Получить программу"}/>
            </div>
            <div className={"w-1/2 items-end justify-end h-full hidden lg:flex"}>
                <div className={"relative items-end justify-end w-full pb-56 md:pb-80 lg:pb-96"}>
                    <Image
                        draggable={false}
                        layout={'fill'}
                        objectFit={'contain'}
                        src={"/mainPage/1.png"}
                        alt={"Logo"}
                        className={"self-end cursor-pointer hover:scale-105 transition-all duration-500"}
                    />
                </div>
            </div>
        </div>
    )
}