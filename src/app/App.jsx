import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./styles/styles.css";
import { About, AboutPRoduct, Cart, Contact, Home, Layout, Login, Product, Profile, SignUp, WishList } from "../pages/lazy/Lazy";
import { Provider } from 'react-redux'
import Loading from "../pages/Loading/loading";
import {store} from "./providers/store/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={<Loading />}>
          <Layout />
        </Suspense>}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login/>}/>
          <Route path="signUp" element={<SignUp/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="aboutProduct/:id" element={<AboutPRoduct/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="wishList" element={<WishList/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
