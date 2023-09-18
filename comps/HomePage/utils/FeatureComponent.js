import Image from "next/image"
import Router, {useRouter} from 'next/router'

export default function FeatureComponent({title, paragraph, reversed, image, width, py}) {
    const router = useRouter();
    return (
        <div className={`w-full flex flex-col-reverse ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} bg-transparent z-10`}>
            <div className={`lg:w-1/2 w-full justify-center flex flex-col items-center ${reversed ? "lg:items-end" : "lg:items-start"}`}>
                <h1 className={`text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center ${reversed ? "lg:text-end" : "lg:text-start"}`}>{title}</h1>
                <p className={`text-outline-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl font-medium max-w-lg text-center ${reversed ? "lg:text-end" : "lg:text-start"}`}>{paragraph}
                </p>
            </div>
            <div className={`lg:w-1/2 w-full flex h-full ${!reversed ? "items-end justify-end" : "items-start justify-start"}`}>
                <div className={`relative ${width} pb-56 md:pb-80 ${py} `}>
                    <Image
                        draggable={false}
                        layout={'fill'}
                        objectFit={'contain'}
                        src={image}
                        alt={"Logo"}
                        className={"self-end cursor-pointer hover:scale-105 transition-all duration-500"}
                    />
                </div>
            </div>
        </div>
    )
}