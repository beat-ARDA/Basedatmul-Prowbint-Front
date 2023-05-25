export const endRegister = process.env.REACT_APP_PATH_API + 'register';
export const getUserProfile = process.env.REACT_APP_PATH_API + `user/${localStorage.getItem('userId')}`;