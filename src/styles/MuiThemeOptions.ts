// import { green } from "@mui/material/colors";
// import { ThemeOptions } from "@mui/material/styles";

import { grey, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// export const themeOptions: ThemeOptions = {
//   palette: {
// 	  primary: {
// 		  main: green[500]
// 	  }
//     // mode: 'dark',
//   },
// };

export const themeOptions = createTheme({
    palette: {
        primary: {
            main: grey[700],
        },
    },
});
