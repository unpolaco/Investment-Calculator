import {colors} from './helpers/constants-colors';

export const resetStyles = `
*, 
*::before,
*::after {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	font-size: 100%;
	font-family: 'Lato', sans-serif;
	vertical-align: baseline;
	list-style: none;
}

body {
	background-color: ${colors.bodyBackgroundColor};
}
`;
