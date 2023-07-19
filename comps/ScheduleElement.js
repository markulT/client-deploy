

export default function ScheduleElement({name, from, to}) {
    return (
        <div className={"bg-gray-700 rounded-3xl p-4 whitespace-pre-wrap break-words flex flex-col justify-between"}>
            <div className={"font-bold"}>
                {name.length > 45 ? `${name.substring(0, 45)}...` : name}
            </div>
            <div className={'text-md'}>
                {from}-{to}
            </div>
        </div>
    )
}
