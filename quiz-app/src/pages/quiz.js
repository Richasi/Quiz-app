import { useSelector } from "react-redux"
import { Store } from "../redux/store"

export const Quiz=()=>{
    const data=useSelector(Store=>Store.data)
    console.log(data)
    return(
        <h1>quiz page</h1>
    )
}