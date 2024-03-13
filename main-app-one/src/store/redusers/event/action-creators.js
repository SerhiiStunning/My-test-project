import { Set_Guests, Set_Events} from ".";
import UserService from "../../../api/UserService";

export const EventActionCreators = {
    // Функція повертає ActionCreator для того щоб помістити у стан гостей.
    setGuests: (payload) => ({type: Set_Guests, payload}),
    setEvents: (payload) => ({type: Set_Events, payload}),
    // Async Action/Отримуємо гостей з файлу
    fetchGuests: () => async (dispatch) => {
        try {
            // Функція в якій отримується користувач
            const response = await UserService.getUsers()
            dispatch(EventActionCreators.setGuests(response.data))
        } catch(e) {
            console.log('Error fetching guests:', e);
        }
    },
    createEvent: (event) => async (dispatch) => {
        try {
            const events = localStorage.getItem("events") || "[]"
            const json = JSON.parse(events);
            json.push(event);
            dispatch(EventActionCreators.setEvents(json));
            localStorage.setItem('events', JSON.stringify(json));
        } catch(e) {
            console.log(e);
        }
    },
    // Потрібно приймати ім'я користувача який авторизований в даний момент
    fetchEvents: (username) => async (dispatch) => {
        try {
            const events = localStorage.getItem("events") || "[]"
            const json = JSON.parse(events);
            // Гість та автор порівнюється з користувачем який авторизований в даний момент
            const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username);
            dispatch(EventActionCreators.setEvents(currentUserEvents));
        } catch(e) {
            console.log(e);
        }
    }
}