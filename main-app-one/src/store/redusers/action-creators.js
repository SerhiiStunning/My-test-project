// Узагальнюючий об'єкт
import {AuthActionCreators} from './auth/action-creators';
import {EventActionCreators} from './event/action-creators';

export const allActionCreators = {
    // Розгортання тих ActionCreator які вже створені
    ...AuthActionCreators,
    ...EventActionCreators,
}