module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  purge: [
    './components/**/*.ts',
    './components/**/*.tsx',
    './pages/**/*.tsx',
    './utilities/**/*.ts',
    './utilities/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": "'PT Sans', 'Noto Sans TC', sans-serif",
        "serif": "'Noto Serif TC', serif",
        "mono": "'JetBrains Mono', Menlo, monospace",
      },
      colors: {
        "discord": "#767E8B",
      },
      backgroundColor: {
        "discord": "#36393E",
        "discord-blue": "#5666ED",
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
