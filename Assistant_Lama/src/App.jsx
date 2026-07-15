import { ThemeProvider } from "styled-components";
import Theme from  "./components/pages/styles/Theme"
import GlobalStyles from "./components/pages/styles/GlobalStyles";
import Dashboard from "./components/pages/Dashboard/Dashboard";


function App() {

return (
    <>
    <ThemeProvider theme={Theme}>
        <GlobalStyles/>
        <Dashboard/>
        
    
    </ThemeProvider>
    </>


);

}

export default App;