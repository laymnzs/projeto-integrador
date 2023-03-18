export const goToLoginPage = (navigator) => { //recebe obj para mudar a pag.
    navigator("/login");
}


export const goToLogoutPage = (navigator) => {
    navigator("/logout");
}


export const goToSignupPage = (navigator) => {
    navigator("/signup");
}


export const goToFeedPage = (navigator) => {
    navigator("/feed");
}


export const goToAddCommentPage = (navigator) => {
    navigator("/add-comment");
}


export const goToCommentDetail = (navigator, id) => {
    navigator(`/comment/${id}`);
}