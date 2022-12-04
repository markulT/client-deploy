import {useRouter} from "next/router";


export default function Button(props) {
    const router = useRouter()
    return (
        <button className="bg-indigo-500 hover:bg-indigo-700 text-gray-50 hover:text-gray-50 rounded-3xl p-3 md:ml-8 text-lg font-medium transition-all duration-300" onClick={()=>{router.push('/auth/signup')}}>
            {props.children}
        </button>
    )
}