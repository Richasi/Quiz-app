 import axios from "axios";
 export const getdata=(param)=>(dispatch)=>{
   axios.get("https://opentdb.com/api.php",param)
   .then(res=>{
    console.log(res)
    dispatch({type:"get",payload:res.data})
   })
   .catch(err=>console.log(err))
 }