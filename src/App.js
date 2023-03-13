import { GlobalStyled } from "./GlobalStyled";
import { MenuBar } from "./Home/MenuBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<MenuBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
