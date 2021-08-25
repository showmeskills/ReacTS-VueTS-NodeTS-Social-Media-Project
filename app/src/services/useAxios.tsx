import { render } from 'react-dom'
import axios from "axios";
import Loader from "@/components/Loader/index";
export const useAxios = ()=>{

    const showLoader = ()=>{
        const loadingContainer = document.createElement('div');
        loadingContainer.setAttribute('id', 'axiosLoading');
        document.body.appendChild(loadingContainer);
        render(<Loader/>,loadingContainer)
    };
    const hideLoader = ()=>{
        document.querySelector('body')!.removeChild(document.querySelector('#axiosLoading')!)
    };

    axios.interceptors.request.use(config=>{
        showLoader();
        return config;
    })
    axios.interceptors.response.use(config=>{
        hideLoader();
        return config;
    })
    return {
        axios,
    }
}
