import { Route, Routes } from "react-router-dom"
import { Layout } from "./pages/Layout"
import { Home } from "./pages/home"
import { SearchList } from "./pages/SearchList"
import { Favorite } from "./pages/Favorite"
import { NotFound } from "./pages/NotFound"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

body {
  font-family: '', sans-serif;
}
`;

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<SearchList />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
