import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            sans: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        },
        colors: {
            background: '#000212',
            white: '#fff',
            grey: '#858699',
            'white-a08': 'rgba(255,255,255,0.08)',
        },
        fontSize: {
            xs: '1.3rem',
            sm: '1.4rem',
            md: '1.6rem',
            nm: '1.7rem',
            lg: ['2.2rem', '1.3'],
            xl: ['3.2rem', '3.8rem'],
            '5xl': ['8rem', '1'],
        },
        spacing: {
            0: '0',
            1: '0.4rem',
            2: '0.8rem',
            3: '1.2rem',
            4: '1.6rem',
            5: '2.0rem',
            6: '2.4rem',
            7: '2.8rem',
            8: '3.2rem',
            9: '3.6rem',
            10: '4rem',
            11: '4.4rem',
            12: '4.8rem',
        },
        backgroundImage: {
            'primary-gradient':
                'linear-gradient(92.88deg, #455eb5 9.16%, #5643cc 43.89%, #673fd7 64.72%);',
            'page-gradient':
                'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, .3), transparent);',
        },
        boxShadow: {
            primary: 'rgb(80 63 205 / 50%) 0px 1px 40px',
        },
    },

    plugins: [],
};
export default config;
