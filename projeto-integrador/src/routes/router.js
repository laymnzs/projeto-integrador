import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage, LogoutPage, SignupPage, FeedPage, AddCommentPage, CommentDetail, } from "../pages";
import { Header } from "../components/header/index";

export const Router = () => {
    //exportando componente
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/logout" element={<LogoutPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/feed" element={<FeedPage/>}/>
            <Route path="/add-comment" element={<AddCommentPage/>}/>
            <Route path="/comment/:id" element={<CommentDetail/>}/>

        </Routes>
        </BrowserRouter>
    )
}