import Image from "next/image"
import Router, {useRouter} from 'next/router'
import FeatureComponent from "../utils/FeatureComponent";

export default function FeaturesSection() {

    const featuresMap = {
        "1": {
            title: 'Программа телеканалов',
            src: '/mainPage/2.png',
            paragraph: "Каждый член семьи найдет, что ему интересно: новости, " +
                "развлекательные программы, спортивные трансляции, фильмы, детские передачи " +
                "в HD и Full HD качестве на русском языке.",
            reversed: true,
            py: "lg:py-64",
            width: "w-full lg:w-2/3",
        },
        "2": {
            title: 'Почему ты должен ее купить?',
            src: '/mainPage/3.png',
            paragraph: "Приобретая рассылку телепрограмм телеканалов всего за 1 доллар в месяц, вы получите множество возможностей для " +
                "увлекательного времяпрепровождения. Не упустите шанс получить доступ к множеству программ телепередач по самой выгодной цене.",
            reversed: false,
            py: "lg:py-64",
            width: "w-full lg:w-2/3",
        },
        "3": {
            title: 'Мульти Национальность',
            src: '/mainPage/4.png',
            paragraph: "Программа телеканалов вмещает в себя национальные телеканалы из Израиля, " +
                "Украины, стран СНГ, а также стран Европы и Америки. 200+ Каналов на национальных языках.",
            reversed: true,
            py: "lg:py-64",
            width: "w-full lg:w-2/3",
        },
        "4": {
            title: 'Кинотеатр',
            src: '/mainPage/5.png',
            paragraph: "Вам доступна информация о фильмах: новинки кинопроката, любимые сериалы, лучшие мультфильмы и советская классика.",
            reversed: false,
            py: "lg:py-64",
            width: "w-full lg:w-1/2",
        },
        "5": {
            title: 'Акции и подарки',
            src: '/mainPage/6.png',
            paragraph: "Мы заботимся о наших постоянных клиентах и с радостью проводим регулярные акции.",
            reversed: true,
            py: "lg:py-64",
            width: "w-full lg:w-2/3",
        },
        "6": {
            title: 'Настройте рассылку',
            src: '/mainPage/7.png',
            paragraph: "Настройка рассылки программ телеканалов происходит очень быстро и просто. Вы можете выбрать из широкого" +
                "спектра программ каналов по любым критериям: жанру, направлению, языку и т.д.",
            reversed: false,
            py: "lg:py-64",
            width: "w-full lg:w-1/2",
        },
    };

    const router = useRouter();
    return (
        <div className="w-full bg-transparent z-10 px-12 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-32">
            <section className={"flex flex-col gap-4"}>
                {Object.keys(featuresMap).map((currentFeature) => {
                    const feature = featuresMap[currentFeature];
                    return (
                        <FeatureComponent key={feature}
                                          title={feature.title}
                                          paragraph={feature.paragraph}
                                          reversed={feature.reversed}
                                          image={feature.src}
                                          width={feature.width}
                                          py={feature.py}
                        />
                    )
                })}
            </section>
        </div>
    )
}