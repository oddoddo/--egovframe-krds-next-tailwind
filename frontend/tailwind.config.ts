import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                white: '#fff',
                black: '#000',
                gray: {
                    DEFAULT: '#8e8e8e',
                    5: '#f8f8f8',
                    10: '#f0f0f0',
                    20: '#e4e4e4',
                    30: '#d8d8d8',
                    40: '#c6c6c6',
                    50: '#8e8e8e',
                    60: '#717171',
                    70: '#555555',
                    80: '#2d2d2d',
                    90: '#1d1d1d',
                },
                primary: {
                    DEFAULT: '#246beb',
                    5: '#eff5ff',
                    10: '#d3e1fb',
                    20: '#a7c4f7',
                    30: '#7ca6f3',
                    40: '#5089ef',
                    60: '#1d56bc',
                    70: '#16408d',
                    80: '#0e2b5e',
                    90: '#07152f',
                },
                secondary: {
                    DEFAULT: '#003675',
                    5: '#edf1f5',
                    10: '#cdd7e4',
                    20: '#b4c4d6',
                    30: '#99b0cb',
                    40: '#2a5c96',
                    60: '#002b5e',
                    70: '#002046',
                    80: '#00162f',
                    90: '#000b17',
                },
                point: {
                    DEFAULT: '#e71825',
                    5: '#fdf2f3',
                    10: '#fad1d3',
                    20: '#f5a3a8',
                    30: '#f1747c',
                    40: '#ec4651',
                    60: '#b9131e',
                    70: '#8b0e16',
                    80: '#5c0a0f',
                    90: '#2e0507',
                },
                danger: '#eb003b',
                warning: '#ffb724',
                success: '#008a1e',
                information: '#2768ff',
            },
            fontFamily: {
                base: ['Pretendard GOV', 'sans-serif'],
            },
            fontSize: {
                root: '100%',
                'body-md': '1.7rem',
                display: {
                    sm: '4rem',
                    md: '5rem',
                    lg: '6.6rem',
                },
                heading: {
                    sm: '3.2rem',
                    md: '4rem',
                    lg: '5rem',
                },
                title: {
                    xs: '1.5rem',
                    sm: '1.7rem',
                    md: '1.9rem',
                    lg: '2.1rem',
                    xlg: '2.5rem',
                    xxlg: '3.2rem',
                },
                body: {
                    sm: '1.5rem',
                    md: '1.7rem',
                    lg: '1.9rem',
                },
                link: {
                    sm: '1.5rem',
                    md: '1.7rem',
                    lg: '1.9rem',
                },
                detail: {
                    sm: '1.3rem',
                    md: '1.5rem',
                    lg: '1.7rem',
                },
                label: {
                    xs: '1.3rem',
                    sm: '1.5rem',
                    md: '1.7rem',
                    lg: '1.9rem',
                },
            },
            fontWeight: {
                light: '300',
                normal: '400',
                medium: '500',
                bold: '700',
                bolder: '800',
            },
            lineHeight: {
                none: '1',
                base: '1.5',
            },
            borderRadius: {
                1: '.1rem',
                2: '.2rem',
                4: '.4rem',
                6: '.6rem',
                8: '.8rem',
                10: '1rem',
                12: '1.2rem',
                full: '100%',
            },
            spacing: {
                0: '0',
                default: '.1rem',
                default2: '.2rem',
                full: '100%',
            },
            screens: {
                sm: '600px',
                md: '1024px',
                lg: '1920px',
            },
            boxShadow: {
                base: '2px 2px 2px 0px rgba(0, 0, 0, 0.15)',
            },
            transitionProperty: {
                base: '0.4s ease-in-out',
                fade: 'opacity 0.4s linear',
                collapse: 'max-height 0.4s ease',
                collapseWidth: 'width 0.4s ease',
            },
        },
    },
    plugins: [],
};
export default config;
