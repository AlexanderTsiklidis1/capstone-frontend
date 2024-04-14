import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			light: '#C9CEFF',
			main: '#5372FF',
			dark: '#001FC0',
			contrastText: '#FFF',
		},
		secondary: {
			light: '#FDF6A5',
			main: '#FFDF53',
			dark: '#F28B33',
			contrastText: '#000',
		},
		success: {
			light: '#4caf50',
			main: '#4caf50',
			dark: '#1b5e20',
			contrastText: '#000',
		}
	},
	typography: {
		fontFamily: ['Verdana', 'Roboto', 'sans-serif'].join(','),
	},
	custom: {
        cardHeight: '800px' 
    }
});

export default theme;
