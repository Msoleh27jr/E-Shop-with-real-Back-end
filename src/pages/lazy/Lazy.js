import { lazy } from "react";

export const Layout = lazy(()=> import('../layout/layout.jsx'))
export const Home = lazy(()=> import('../home/home.jsx'))
export const Contact = lazy(()=> import('../Contact/contact.jsx'))
export const Login = lazy(()=> import('../login/login.jsx'))
export const SignUp = lazy(()=> import('../signUp/signUp.jsx'))
export const Product = lazy(()=> import('../product/product.jsx'))
export const WishList = lazy(()=> import('../wishList/wishList.jsx'))
export const AboutPRoduct = lazy(()=> import('../aboutProduct/aboutProduct.jsx'))
export const About = lazy(()=> import('../about/about.jsx'))
export const Cart = lazy(()=> import('../cart/cart.jsx'))
export const Profile = lazy(()=> import('../profile/profile.jsx'))