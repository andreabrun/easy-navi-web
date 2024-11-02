/** @type {import('tailwindcss').Config} */
import themer from "@tailus/themer";
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./*.html", "./*.js", "./*.css"],
    darkMode: "media",
    safelist: ["isToggled"],
    theme: {
      fontFamily: {
        sans: ['Geist', 'Inter', ...defaultTheme.fontFamily.sans],
        mono : ['GeistMono', 'fira-code', ...defaultTheme.fontFamily.mono],
        pixel : ['Pixelify', 'fira-code', ...defaultTheme.fontFamily.mono],
      },
        keyframes: {
            loop: {
                to: {
                    "offset-distance": "100%",
                },
            },
        },
    },
    plugins: [
        themer({
            palette: {
                extend : "trust"
            },
            radius: "sharp",
            background: "light",
            border: "light",
            padding:"large",
            shadow : {
                size : "xl",
                opacity : "4"
            },
            components: {
                button: {
                    rounded : "3xl"
                }
            }
        })
    ],
    base: 'easy-navi-web',
};
