import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
    <Header />
      <BrowserRouter>
        <Routes>
          <Route exact  index element={<Home />} />
          <Route exact  index path="/blog" element={<Blog />} />
          <Route exact  path="/details/:id" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;