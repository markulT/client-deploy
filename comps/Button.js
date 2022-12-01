import {useRouter} from "next/router";


export default function Button(props) {
    const router = useRouter()
    return (
        <button className="bg-indigo-500 hover:bg-indigo-600 text-gray-50 hover:text-gray-50 rounded-3xl p-3 md:ml-8 text-lg font-medium" onClick={()=>{router.push('/auth/signup')}}>
            {props.children}
        </button>
    )
}