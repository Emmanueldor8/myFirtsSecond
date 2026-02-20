import Header from "./features/layout/components/Header";
import { Content } from "./features/layout/components/Content";
import { Footer } from "./features/layout/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Props from "./features/layout/components/Props";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/props" element={<Props />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
