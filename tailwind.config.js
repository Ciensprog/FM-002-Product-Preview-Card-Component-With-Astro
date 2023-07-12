const colors = {
  aquamarine: {
    400: '#3D8168',
    700: '#1A4032',
  },
  aurometal: {
    400: '#6C7289',
  },
  cream: {
    400: '#F2EAE2',
  },
  gunmetal: {
    700: '#1C232B',
  },
}

/*
|-------------------------------------------------------------------------------
| Configuration
|-------------------------------------------------------------------------------
*/

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundColor: colors,
      borderColor: colors,
      colors,
      fontFamily: {
        fraunces: ["'Fraunces 9pt'", 'serif'],
      },
      minHeight: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
}
