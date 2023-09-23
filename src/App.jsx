import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Photos from "./components/Photos";
import PhotoProvider from "./context/PhotoProvider";

function App() {
  return (
    <PhotoProvider>
      <Routes>
        <Route index element={<Header />} />
      </Routes>
      <Photos />
    </PhotoProvider>
  );
}

export default App;
