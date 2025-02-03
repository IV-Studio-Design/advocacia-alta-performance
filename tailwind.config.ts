import type { Config } from 'tailwindcss';

export default<Partial<Config>> {
    theme: {
        extend: {
            colors: {
                snowWhite: "#FCFCFC",
                softBege: "#FFF7F2",
                lightPeach: "#FFD4B5",
                pastelOrange: "#FFAC6F",
                deepBlack: "#0C0C0D"
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            }
        }
    }
}