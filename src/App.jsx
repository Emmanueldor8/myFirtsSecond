import Header from "./features/layout/components/Header";
import { Content } from "./features/layout/components/Content";
import { Footer } from "./features/layout/components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import Props from "./features/layout/components/Props";

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/props" element={<Props />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
