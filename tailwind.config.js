/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./comps/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        screens: {
            '4xs': '180px',
            // => @media (min-width: 640px) { ... }

            '3xs': '280px',
            // => @media (min-width: 640px) { ... }

            '2xs': '320px',
            // => @media (min-width: 640px) { ... }

            'xs': '420px',
            // => @media (min-width: 640px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            fontFamily: {
                'primary': ['Montserrat']
            },

            keyframes: {
                love: {
                    '0%': {transform: 'scale(0.5) rotate(-13.65deg)'},
                    '10%': {transform: 'scale(0.65) rotate(14deg)'},
                    '20%': {transform: 'scale(0.65) rotate(-8deg)'},
                    '30%': {transform: 'scale(0.65) rotate(14deg)'},
                    '40%': {transform: 'scale(0.65) rotate(-4deg)'},
                    '50%': {transform: 'scale(0.65) rotate(10.0deg)'},
                    '60%': {transform: 'scale(0.65) rotate(0.0deg)'},
                    '100%': {transform: 'scale(0.5) rotate(-13.65deg)'},
                },
                heart: {
                    '0%': {transform: 'scale(0.5)'},
                    '10%': {transform: 'scale(0.65)'},
                    '20%': {transform: 'scale(0.45)'},
                    '30%': {transform: 'scale(0.65)'},
                    '40%': {transform: 'scale(0.45)'},
                    '50%': {transform: 'scale(0.65)'},
                    '60%': {transform: 'scale(0.45)'},
                    '70%': {transform: 'scale(0.65)'},
                    '80%': {transform: 'scale(0.45)'},
                    '90%': {transform: 'scale(0.65)'},
                    '100%': {transform: 'scale(0.5)'},
                },
                like: {
                    '0%': {transform: 'scale(0.5) rotate(0deg)'},
                    '20%': {transform: 'scale(0.5) rotate(4deg)'},
                    '40%': {transform: 'scale(0.5) rotate(-8deg)'},
                    '60%': {transform: 'scale(0.5) rotate(4deg)'},
                    '80%': {transform: 'scale(0.5) rotate(-8deg)'},
                    '100%': {transform: 'scale(0.5) rotate(0.0deg)'},
                },
                star: {
                    '0%': {transform: 'translate(0px, 0px) scale(0.5)'},
                    '10%': {transform: 'translate(30px, 15px) scale(0.65)'},
                    '20%': {transform: 'translate(0px, 0px) scale(0.45)'},
                    '30%': {transform: 'translate(-30px, 15px) scale(0.65)'},
                    '40%': {transform: 'translate(0px, 0px) scale(0.45)'},
                    '50%': {transform: 'translate(0px,0px) scale(0.65)'},
                    '60%': {transform: 'translate(0px, 0px) scale(0.45)'},
                    '70%': {transform: 'translate(-30px, -15px) scale(0.65)'},
                    '80%': {transform: 'translate(0px, 0px) scale(0.45)'},
                    '90%': {transform: 'translate(30px, -15px) scale(0.65)'},
                    '100%': {transform: 'translate(0px, 0px) scale(0.5)'},
                },
                mac: {
                    '0%': {transform: 'rotate(0deg)'},
                    '100%': {transform: 'rotate(180deg)'},
                },
                mac_closen: {
                    '0%': {transform: 'rotate(180deg)'},
                    '100%': {transform: 'rotate(0deg)'},
                },


            },
            animation: {
                'love_face': 'love 3s ease-in-out',
                'heart_bounce': 'heart 3s ease-in-out',
                'like_wave': 'like 3s ease-in-out',
                'star_trans': 'star 3s ease-in-out',
                'mac_open': 'mac 0.5s ease-in-out',
                'mac_closen': 'mac_closen 0.5s ease-in-out'
            },
            colors: {
                'dead_violet': '#9988CC',
                'nav_black': "#000500",
                "grad_to": "#537895",
                "grad_from": '#09203F',
                'text-gray': '#868686',
                "grad_to_dark": '#2e3234',
                "grad_from_dark": '#0944a2',
                "cook": "#373B44",
                "grad_from_new": "#373B44",
                "grad_to_new": "#755B4C",

                "primary-black": "#26292B",
                "secondary-black": "#373B44",
                "white": "#FEF4F4",
                "primary-blue": "#5A7ADB",
                "primary-yellow": "#F6D251",
                "outline-white": "#D9D9D9",
                "disabled-white": "#D9D9D9",
                'highlightBlue': '#50B6E3',
                'highlightDarkBlue': '#2270B2'
                ,

            },
        },
    },
    plugins: [],
}
