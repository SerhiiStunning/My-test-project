import { Set_Auth, Set_Error, Set_Is_Loading, Set_User } from ".";
import UserService from "../../../api/UserService";

// ActionCreators
export const AuthActionCreators = {
    // Sync ActionCreators
    // Даний ActionCreator аргументом приймає 'user'(користувача) і в action в якості payload цього користувача прокидає.
    setUser: (user) => ({type: Set_User, payload: user}),
    setIsAuth: (auth) => ({type: Set_Auth, payload: auth}),
    setIsLoading: (payload) => ({type: Set_Is_Loading, payload}),
    setError: (payload) => ({type: Set_Error, payload}),
    // Async ActionCreators
    // Logic of Login
    login: (username, password) => async (dispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            // setTimeout use for visual 'loading' moment in button
            setTimeout(async() => {
                const response = await UserService.getUsers() // Виклик методу з сервісу "UserService"
                // Пошук користувача за введиним 'username' в полі форми та 'password'
                const localUsers = response.data.find(user => user.username === username && user.password === password)
                // Перевірка чи користувачем введено коректні/існуючі дані
                if (localUsers) {
                    // Зберігання інформації про реєстрацію користувача
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', localUsers.username);
                    dispatch(AuthActionCreators.setIsAuth(true));
                    // Передача знайденої інформації з масиву про користувача в "setUser"
                    dispatch(AuthActionCreators.setUser(localUsers));
                } else {
                    dispatch(AuthActionCreators.setError('Incorrect Login or Password'));
                }
                dispatch(AuthActionCreators.setIsLoading(false));
            }, 1000)
            
        } catch (e) {
            dispatch(AuthActionCreators.setError('Error Login!'))
        }
    },
    logout: () => async (dispatch) => {
        // catch в даній ситуації непотрібний, тому його можна прибрати, і try також.
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            // Обнулення стану
            dispatch(AuthActionCreators.setUser({}))
            // Передача "fasle" щоб редеректнуло на сторінку логіну
            dispatch(AuthActionCreators.setIsAuth(false))
    }
}