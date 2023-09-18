

export default function ScheduleElement({name, from, to, color}) {
    return (
        <div className={`grid text-${color} grid-cols-5 w-full justify-start`}>
            <div className={'text-start w-fit text-xs md:text-sm col-span-2'}>
                {from}-{to}
            </div>
            <div className={"ml-2 text-xs md:text-sm w-full text-start truncate col-span-3"}>
                "{name.length > 45 ? `${name.substring(0, 45)}...` : name}"
            </div>
        </div>
    )
}
