import { Route,Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Quiz } from "../pages/quiz";
import { Lederbord } from "../pages/leaderboard";
export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/quiz" element={<Quiz/>}/>
            <Route path="/lederbord" element={<Lederbord/>}/>
        </Routes>
    )
}