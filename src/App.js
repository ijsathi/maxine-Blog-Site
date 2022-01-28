import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/details/:id" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;