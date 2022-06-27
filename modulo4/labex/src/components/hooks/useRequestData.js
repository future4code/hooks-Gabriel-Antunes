import {useState,useEffect} from "react";
import axios from "axios";

const useRequestData = (url,changeData) => {
    const [data,setData] = useState(undefined);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState('');

    useEffect(()=>{
        setIsLoading(true)
        axios
        .get(url)
        .then((res)=>{
            setIsLoading(false)
            setData(res.data)
        })
        .catch((err)=>{
            setIsLoading(false)
            setError(err)
        })
    },[changeData,url])
    return [data,isLoading,error]
}

export default useRequestData