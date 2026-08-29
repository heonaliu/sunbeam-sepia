// tailwind.config.cjs — CommonJS copy for tools that require CJS
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        slate: "#586080",
        ice: "#D8ECF7",
        sky: "#A4DAEC",
        blue: "#4FA8D6",
        navy: "#124A7D",
        rose: "#DD8AA1",
        sand: "#E7AC63",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "cursive"],
      },
      boxShadow: {
        pixel: "4px 4px 0px 0px #124A7D",
        "pixel-sm": "2px 2px 0px 0px #124A7D",
      },
      borderRadius: {
        none: "0px",
      },
    },
  },
  plugins: [],
};
