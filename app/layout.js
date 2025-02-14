import ThemeProvider from './components/Context/ThemeContext';
import Header from './components/Layouts/Header';
import HomeBackButton from './components/Layouts/HomeBackButton';
import './globals.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
      <body className="">
        <Header/>
          {children}
          
      </body>
      </ThemeProvider>
    </html>
  );
}
