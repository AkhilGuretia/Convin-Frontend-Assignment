import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "../src/core-utils/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <SideNavbar components={SIDE_NAV_ITEMS} /> */}
        {/* <Footer /> */}
        {/* <Header primaryHeaderText="Trade" /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
        {/* <CustomCard
          cardDetails={{
            id: 1,
            name: "Football video",
            link: "https://www.youtube.com/embed/tgbNymZ7vqY",
          }}
        /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
