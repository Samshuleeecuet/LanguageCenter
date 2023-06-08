import { useEffect } from "react";
const useDynamicTitle=(title)=>{
    title? title= '| '+title : ''
    useEffect(()=>{
        document.title = `LanguageCenter ${title}`;   
},[])
}
 

export default useDynamicTitle;