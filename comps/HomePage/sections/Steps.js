
import {BsChevronRight} from "react-icons/bs";
import StepsCard from "../utils/StepsCard";

export default function Steps() {

    const stepsMap = {
        "first": {
            title: 'Зарегистрируйтесь',
            src: '/mainPage/8.png',
            id: "01",
            width: "w-2/3"
        },
        "second": {
            title: 'Выберите пакет программ',
            src: '/mainPage/9.png',
            id: "02",
            width: "w-2/3"
        },
        "third": {
            title: 'Наслаждайтесь ',
            src: '/mainPage/10.png',
            id: "03",
            width: "w-full"
        },
    };


    return (
        <section className={"z-10 flex flex-col h-fit mx-12 mb-24 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 2xl:mx-32 justify-between font-primary"}>
            <h1 className={"text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-text-black self-center text-center"}>
                КАК ПОДПИСАТСЯ
            </h1>
            <div className={"z-10 mt-4 lg:mt-8"}>
                <div className={"w-full flex lg:flex-row flex-col gap-y-8 lg:gap-y-0 justify-between items-center"}>
                    <StepsCard title={stepsMap['first'].title} imageSrc={stepsMap['first'].src} id={stepsMap['first'].id} width={stepsMap['first'].width}/>
                    <BsChevronRight className={"rotate-90 lg:rotate-0 text-primary-blue text-5xl mx-8 hover:translate-y-2 lg:hover:translate-x-2 duration-500 transition-all ease-in-out"}/>
                    <StepsCard title={stepsMap['second'].title} imageSrc={stepsMap['second'].src}  id={stepsMap['second'].id} width={stepsMap['second'].width}/>
                    <BsChevronRight className={"rotate-90 lg:rotate-0 text-primary-blue text-5xl mx-8 hover:translate-y-2 lg:hover:translate-x-2 duration-500 transition-all ease-in-out"}/>
                    <StepsCard title={stepsMap['third'].title} imageSrc={stepsMap['third'].src}  id={stepsMap['third'].id} width={stepsMap['third'].width}/>
                </div>
            </div>
        </section>
    )
}
