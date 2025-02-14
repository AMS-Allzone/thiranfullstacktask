import { createTheme } from '@mui/material/styles';
import {customDarkTheme,customLightTheme } from './CustomStyles'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: 'var(--color-bg)',
      paper: 'var(--card-bg)',
    },
    primary: {
      main: customLightTheme.background.themeColor,  // Customize this color
    },
    secondary: {
      main: '#858585',  // Customize this color
    },
    text: {
      primary: customLightTheme.text.primaryColor,
      secondary: customLightTheme.text.secondaryColor,
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', 
    
    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
    },
    // Add more styles for other typography variants as needed
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: '#ffffff',
            backgroundColor: customLightTheme.button.primaryColor, // Custom background color
            '&:hover': {
              backgroundColor:  customLightTheme.button.primaryHover, // Hover color
            },
            borderRadius:"10px",
            padding:"12px 35px",
            boxShadow:'none'
          },
        },
        {
          props: { variant: 'containedPrimary' },
          style: {
            color: '#ffffff',
            backgroundColor: customLightTheme.button.primaryColor, // Custom background color
            '&:hover': {
              backgroundColor:  customLightTheme.button.primaryHover, // Hover color
            },
            borderRadius:"100px",
            padding:"12px 35px"
          },
        },
        {
          props: { variant: 'containedSecondary' },
          style: {
            color: '#ffffff',
            backgroundColor: customLightTheme.button.SecondaryColor, // Another custom background color
            '&:hover': {
              backgroundColor: customLightTheme.button.secondaryHover, // Hover color
            },
            borderRadius:"100px",
            padding:"12px 35px"
          },
        },
        {
          props: { variant: 'containedDanger' },
          style: {
            color: '#ffffff',
            backgroundColor: customLightTheme.button.dangerColor, // Custom background color
            '&:hover': {
              backgroundColor:  customLightTheme.button.dangerHover, // Hover color
            },
            borderRadius:"100px",
            padding:"12px 35px"
          },
        },
        {
          props: { variant: 'outlinedPrimary' },
          style: {
            color: customLightTheme.button.primaryColor,
            backgroundColor: 'transparent', // Custom background color
            borderWidth:1,
            borderStyle:'solid',
            borderColor:customLightTheme.button.primaryHover,
            '&:hover': {
              backgroundColor:  customLightTheme.button.primaryColor, // Hover color
              color: 'white',
              borderColor:customLightTheme.button.primaryColor,
            },
            borderRadius:"100px",
            padding:"12px 35px"
          },
        },
        {
          props: { variant: 'outlinedSecondary' },
          style: {
            color: customLightTheme.button.SecondaryColor,
            backgroundColor: 'transparent', // Custom background color
            borderWidth:1,
            borderStyle:'solid',
            borderColor:customLightTheme.button.secondaryHover,
            '&:hover': {
              backgroundColor:  customLightTheme.button.SecondaryColor, // Hover color
              borderColor:customLightTheme.button.SecondaryColor,
              color: 'white',
              
            },
            borderRadius:"100px",
            padding:"12px 35px"
          },
        },
        {
          props: { variant: 'outlinedUpload' },
          style: {
            color: customLightTheme.button.SecondaryColor,
            backgroundColor: 'transparent', // Custom background color
            borderWidth:2,
            
            borderStyle:'dotted',
            borderColor:customLightTheme.button.secondaryHover,
            '&:hover': {
              // backgroundColor:  customLightTheme.button.SecondaryColor, // Hover color
              borderColor:customLightTheme.button.SecondaryColor,
              // color: 'white',
              
            },
            borderRadius:"100px",
            padding:"12px 35px"
          },
        },
        {
          props: { variant: 'outlinedSuccess' },
          style: {
            color: customLightTheme.button.successColor,
            backgroundColor: 'transparent', // Custom background color
            borderWidth:1,
            borderStyle:'solid',
            borderColor:customLightTheme.button.successHover,
            '&:hover': {
              backgroundColor:  customLightTheme.button.successColor, // Hover color
              color:'white',
              borderColor: customLightTheme.button.successColor,
            },
            borderRadius:"100px",
            padding:"12px 35px"
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          backgroundColor: 'transparent', 
          color: customLightTheme.text.primaryHeading, 
          border: '0px solid var(--color-border)', 
          '&:hover': {
            borderColor: 'transparent', 
            outline: 'none', 
          },
          '&.Mui-focused': {
            borderColor: 'transparent', 
            boxShadow: '0 0 0 2px transparent', 
            outline: 'none', 
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: customLightTheme.border.inputBorder, 
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: customLightTheme.background.themeColor,  
          },
        },
        notchedOutline: {
          borderColor: customLightTheme.border.inputBorder, 
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: customLightTheme.text.secondaryColor, 
          '&.Mui-focused': {
            color: customLightTheme.background.themeColor,   
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          color: customLightTheme.text.primaryColor, // Default text color for tabs
         
          '& .MuiTab-root': {
            // color: customLightTheme.text.primaryColor, // Set text color for each tab
            // transition: 'transform 0.3s ease, background-color 0.3s ease', 
            '&:hover': {
          // transform: 'scale(1.05)', // Scale up the tab slightly on hover
        },
            '&.Mui-selected': {
              color: customLightTheme.text.primaryColor, // Color for selected tab
              backgroundColor:customLightTheme.background.secondaryColor
            },
          },
        },
        indicator: {
          backgroundColor: customLightTheme.background.themeColor, // Set your custom indicator color
        },
      },
    },
  },
});


const darkTheme = createTheme({palette: {
    mode: 'dark',
    background: {
      default: 'var(--color-bg)',
      paper: 'var(--card-bg)',
    },
    primary: {
      main: customDarkTheme.background.themeColor,  // Customize this color
    },
    secondary: {
      main: '#f50057',  // Customize this color
    },
    text: {
      primary: customDarkTheme.text.primaryColor,
      secondary: customDarkTheme.text.secondaryColor,
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', // Set Poppins as the default font
    // You can define specific styles for different variants if needed
    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
    },
    // Add more styles for other typography variants as needed
  },
  components: {
    MuiButton: {
      
      variants: [
        {
          props: { variant: 'containedPrimary' },
          style: {
            color: '#ffffff',
            backgroundColor: customDarkTheme.button.primaryColor, // Custom background color
            '&:hover': {
              backgroundColor:  customDarkTheme.button.primaryHover, // Hover color
            },
            borderRadius:"100px",
          padding:"12px 35px"
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            color: '#ffffff',
            backgroundColor: customDarkTheme.button.primaryColor, // Custom background color
            '&:hover': {
              backgroundColor:  customDarkTheme.button.primaryHover, // Hover color
            },
            borderRadius:"10px",
            padding:"12px 35px",
            boxShadow:'none'
          },
        },
        {
          props: { variant: 'containedSecondary' },
          style: {
            color: '#ffffff',
            backgroundColor: customDarkTheme.button.SecondaryColor, // Another custom background color
            '&:hover': {
              backgroundColor: customDarkTheme.button.secondaryHover, // Hover color
            },
            borderRadius:"100px",
            padding:"12px 35px"
          },
        },
        {
          props: { variant: 'containedDanger' },
          style: {
            color: '#ffffff',
            backgroundColor: customDarkTheme.button.dangerColor, // Custom background color
            '&:hover': {
              backgroundColor:  customDarkTheme.button.dangerHover, // Hover color
            },
            borderRadius:"100px",
            padding:"12px 35px"
          },
        },
        {
          props: { variant: 'outlinedPrimary' },
          style: {
            color: customDarkTheme.button.primaryColor,
            backgroundColor: 'transparent', // Custom background color
            borderWidth:1,
            borderStyle:'solid',
            borderColor:customDarkTheme.button.primaryHover,
            '&:hover': {
              backgroundColor:  customDarkTheme.button.primaryColor, // Hover color
              color: 'white',
              borderColor: customDarkTheme.button.primaryColor,
            },
            borderRadius:"100px",
            padding:"12px 35px"
          },
        },
        {
          props: { variant: 'outlinedSecondary' },
          style: {
            color: customDarkTheme.text.secondaryColor,
            backgroundColor: 'transparent', // Custom background color
            borderWidth:1,
            borderStyle:'solid',
            borderColor:customDarkTheme.button.secondaryHover,
            '&:hover': {
              backgroundColor:  customDarkTheme.button.SecondaryColor, // Hover color
              color: customDarkTheme.text.primaryColor,
              borderColor: customDarkTheme.button.SecondaryColor,
            },
            borderRadius:"100px",
            padding:"12px 35px"
          },
        },
        {
          props: { variant: 'outlinedUpload' },
          style: {
            color: customDarkTheme.button.SecondaryColor,
            backgroundColor: 'transparent', // Custom background color
            borderWidth:2,
            
            borderStyle:'dotted',
            borderColor:customDarkTheme.button.secondaryHover,
            '&:hover': {
              // backgroundColor:  customLightTheme.button.SecondaryColor, // Hover color
              borderColor:customDarkTheme.button.SecondaryColor,
              // color: 'white',
              
            },
            borderRadius:"10px",
            padding:"12px 35px"
          },
        },
        {
          props: { variant: 'outlinedSuccess' },
          style: {
             color: customLightTheme.button.successColor,
            backgroundColor: 'transparent', // Custom background color
            borderWidth:1,
            borderStyle:'solid',
            borderColor:customDarkTheme.button.successHover,
            '&:hover': {
              backgroundColor:  customDarkTheme.button.successColor, // Hover color
              color:'white',
              borderColor: customDarkTheme.button.successColor,
            },
            borderRadius:"100px",
            padding:"12px 35px"
          },
        },
      ],
    
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          backgroundColor: 'transparent', 
          color: customDarkTheme.text.primaryHeading, 
          border: '0px solid var(--color-border)', 
          '&:hover': {
            borderColor: 'transparent', 
            outline: 'none', 
          },
          '&.Mui-focused': {
            borderColor: 'transparent', 
            boxShadow: '0 0 0 2px transparent',
            outline: 'none', 
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius:'10px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: customDarkTheme.border.inputBorder, 
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: customDarkTheme.background.themeColor, 
          },
        },
        notchedOutline: {
          borderColor: customDarkTheme.border.inputBorder,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: customDarkTheme.text.secondaryColor, 
          '&.Mui-focused': {
            color: customDarkTheme.background.themeColor, 
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          color: customDarkTheme.text.primaryColor, // Default text color for tabs
          '& .MuiTab-root': {          
            // color: customDarkTheme.text.secondaryColor, // Set text color for each tab
            '&.Mui-selected': {
              color: customDarkTheme.text.primaryColor, // Color for selected tab
              backgroundColor:customDarkTheme.background.secondaryColor
            },
          },
        },
        indicator: {
          backgroundColor: customDarkTheme.background.themeColor, // Set your custom indicator color
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
