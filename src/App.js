import { GlobalStyled } from "./GlobalStyled";
import { MenuBar } from "./Home/MenuBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { FormAuto } from "./Home/components/FormAuto";
import { FormPay } from "./Home/components/FormPay";
import { Main } from "./Home/components/Main/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<MenuBar />} />
        <Route path="/FormAuto" element={<FormAuto/>}/>
        <Route path="/FormPay" element ={<FormPay/>}/>
        <Route path="/Main" element = {<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
