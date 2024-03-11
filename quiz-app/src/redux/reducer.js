
const initail={
    data:[]
}
export const reducer=(state=initail,{type,paylaod})=>{
    switch (type) {
        case "get":
             return  {...state,data:paylaod} 
            
    
        default:
             return state
    }
}