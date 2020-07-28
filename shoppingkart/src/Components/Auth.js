/**

 @author    Rashmika Ibrahimpatnam => B00832190

**/
//authentication status
const Auth = {
    isAuthenticated: window.localStorage.getItem("token")? true : false,
    authenticate() {
        this.isAuthenticated = true;
    },
    logout() {
        this.isAuthenticated = false;
    },
    getAuth() {
        return this.isAuthenticated;
    }
};
export default Auth;