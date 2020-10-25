import {useState,useEffect} from 'react';
import Key from "./key";
const CONTEXT_KEY = "9bb4b245cc03d35b6";
const useGoogleSearch = (term) => {
    const [data,setdata] = useState(null);
    const [loading,setloading] = useState(false);
    useEffect(()=>{
        const fetchData = async()=>{
            setloading(true);
            fetch(`https://www.googleapis.com/customsearch/v1?key=${Key}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(res=>res.json())
            .then(data=>{
                setdata(data)
                setloading(false);
            })
            .catch(err=>{
                alert(err.message);
                setloading(false)
            })
        };
        fetchData();
    },[term])
    return {data,loading};
}

export default useGoogleSearch
