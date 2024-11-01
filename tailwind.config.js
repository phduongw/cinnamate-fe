module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
        extend: {
            "screens": {
                "other": {
                    "min": "340px",
                    "max": "1280px"
                }
            },
            "colors": {
                //Custom specific color
                "dark-bg": "#1E293B",

                //Custom range of color
                "blue": {
                    850: "#7DD3FC",
                }
            }
        }
    },
    plugins: [],
}