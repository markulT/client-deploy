import Image from 'next/image'

export default function StepsCard({title, imageSrc, id, width}) {


    return (
        <div className={"relative p-4 lg:w-96 w-full flex flex-col bg-secondary-black rounded-xl items-center justify-center"}>
            <p className={"absolute left-4 top-4 text-white font-semibold text-lg sm:text-lg lg:text-xl"}>{id}</p>
            <div className={`relative ${width} pb-56 md: pb-80 lg:pb-96`}>
                <Image
                    draggable={false}
                    layout={'fill'}
                    objectFit={'contain'}
                    src={imageSrc}
                    alt={"Logo"}
                    className={"self-end transition-all duration-500"}
                />
            </div>
            <h2 className={"text-white text-center font-bold text-lg lg:text-2xl mb-8 self-center"}>{title}</h2>
        </div>
    )
}
