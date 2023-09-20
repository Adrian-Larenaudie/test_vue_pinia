const logout = () => {
    localStorage.removeItem("access_token");
};

const isLogged = () => {
    if(localStorage.getItem("access_token")) {
        return true;
    }
    return false;
}

export const authService = {
    logout,
    isLogged,
};
