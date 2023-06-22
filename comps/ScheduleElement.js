

export default function ScheduleElement({name, from, to}) {
    return (
        <div className={"basis-1/4 bg-gray-700 rounded-3xl p-4"}>
            {name}
            <div>
                {from}-{to}
            </div>
        </div>
    )
}