import { LazyExoticComponent,lazy } from "react";
const Home = lazy(()=>import("@/pages/Home/index"));
const Login = lazy(()=>import("@/pages/Login/index"));
const Register = lazy(()=>import("@/pages/Register/index"));
const Profile = lazy(()=>import("@/pages/Profile/index"));

export interface MainRouter{
    pathname:string;
    exact?:boolean,
    component:LazyExoticComponent<()=>JSX.Element>
}

export const mainRouter:MainRouter[] =[
    {
        pathname:"/",
        exact:true,
        component:Home
    },
    {
        pathname:"/login",
        exact:true,
        component:Login,
    },
    {
        pathname:"/register",
        exact:true,
        component:Register,
    },
    {
        pathname:"/profile/:username",
        exact:true,
        component:Profile
    }
]