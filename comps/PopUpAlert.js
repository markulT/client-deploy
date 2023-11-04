
import {BiErrorCircle} from 'react-icons/bi';
import {useRouter} from "next/router";
import React from "react";


const PopUpAlert = ({ visible, setVisible }) => {
    const router = useRouter();

    return (
        <div
            className={`popup fixed min-w-screen left-0 right-0 top-0 backdrop-blur-sm z-[9999] items-center justify-center min-h-full ${visible ? "flex" : "hidden"}`}
            onClick={(e) => {
                //@ts-ignore
                if (e.target.closest('div.popup') === e.target) {
                    setVisible(false)
                }
            }}
        >
            <div
                className="bg-primary-black text-blue-5 self-center drop-shadow-2xl absolute z-50 md:max-w-screen-2xl max-w-screen-3xs flex flex-col p-4 md:p-6 rounded-xl">
                <BiErrorCircle className="self-center text-yellow-4 text-6xl md:text-8xl mb-4"/>
                <h3 className="self-center text-center text-white text-xl md:text-2xl font-bold mb-2 max-w-2xs">Подтвердите почту</h3>
                <p className="self-center text-sm sm:text-md md:text-lg text-center text-outline-white md:max-w-xs">На ваш эмейл пришло письмо с подтверждением</p>
                <div className="flex xl:flex-row flex-col gap-4 justify-around mt-4">
                    <button className="bg-gradient-to-l  from-blue-3 to-blue-1 text-white font-semibold py-2.5 px-8 rounded-xl hover:scale-105 transition-all duration-500"
                            onClick={() => setVisible(false)}
                    >Позже</button>
                    <button className="bg-gradient-to-l opacity-90 hover:opacity-100 from-highlightBlue to-highlightDarkBlue text-white font-semibold py-2.5 px-8 rounded-xl hover:scale-105 transition-all duration-500"
                            onClick={() => router.push('https://mail.google.com/mail/u/0/#search/from%3Arest.iptv.business%40gmail.com')}
                    >Подтвердить</button>
                </div>
            </div>
        </div>
    );
};

export default PopUpAlert;
