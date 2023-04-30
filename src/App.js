import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import WelcomePage from './pages/WelcomePage';
import DictionaryPage from "./pages/MiniDictionary";


const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
      </Routes>

    </BrowserRouter>
  )
};

export default App;