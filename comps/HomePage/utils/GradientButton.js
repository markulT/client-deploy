import Image from "next/image"
import Router, {useRouter} from 'next/router'

export default function GradientButton({text, callback}) {
    const router = useRouter();
    return (
        <button className={"mt-4 z-10 text-primary w-fit text-white font-medium text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl bg-gradient-to-r from-highlightBlue to-highlightDarkBlue " +
            "rounded-2xl p-3 lg:p-4 lg:px-8 hover:scale-105 duration-500 transition-all"}>
            {text}
        </button>
    )
}