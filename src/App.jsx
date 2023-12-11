import { Route, Routes } from "react-router-dom"
import { Layout } from "./pages/Layout"
import { Home } from "./pages/home"
import { SearchList } from "./pages/SearchList"
import { Favorite } from "./pages/Favorite"
import { NotFound } from "./pages/NotFound"
import { createGlobalStyle } from "styled-components"
import { ModalWin } from "./ModalWin"
import { useState } from "react"
import { createPortal } from "react-dom"
import { Contacts } from "./pages/Contacts"
import { Admin } from "./pages/Admin"

const GlobalStyle = createGlobalStyle`

body {
  font-family: '', sans-serif;
}
`;

function App() {
  const [isModal, setIsModal] = useState(false);
  const [valueModal, setValueModal] = useState({});
  const handlerModal = (val) => {
    setValueModal({ ...val });
    setIsModal(true);
  }
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<SearchList setModal={handlerModal}/>} />
        <Route path="/favorite" element={<Favorite setModal={handlerModal} />} />
        <Route path="/contacts" element={<Contacts />} /> 
        <Route path="/admin" element={<Admin/>}/>  
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
      {isModal && createPortal(<ModalWin onClose={() => setIsModal(false)} valueModal={valueModal} />, document.getElementById('modal'))}  
    </>
  )
}

export default App
