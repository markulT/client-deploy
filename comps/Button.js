import {useRouter} from "next/router";


export default function Button(props) {
    const router = useRouter()
    return (
        <button className=" bg-gradient-to-r from-primary-blue to-primary-yellow hover:scale-105 text-gray-50 hover:text-gray-50 rounded-2xl px-8 p-3 md:ml-8 text-lg font-medium transition-all duration-300" onClick={()=>{router.push('/auth/signup')}}>
            {props.children}
        </button>
    )
}
