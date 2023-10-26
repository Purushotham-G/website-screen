import { createTheme } from '@mui/material';

const customTheme = {
    palette: {
        primary: {
            main: "#2563EB"
        },
        secondary: {
            main: "#94A3B8"
        },
        third: {
            main: '#111927'
        },
        text: {
            primary: "#111927",
        },
        primaryBG: 'rgba(37, 99, 235, 0.12)',
        text1: '#6C737F',
        text1BG: 'rgba(108, 115, 127, 0.14)'
    },
    status: {
        success: '#0B815A',
        successBG: 'rgba(16, 185, 129, 0.12)',
        fail: '#B42318',
        failBG: 'rgba(240, 68, 56, 0.12)'
    }
}

export const theme = createTheme(customTheme);