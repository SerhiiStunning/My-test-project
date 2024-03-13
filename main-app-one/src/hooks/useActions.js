import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { allActionCreators } from "../store/redusers/action-creators";

// Щоб постійно не використовувати dispatch, то цей хук його може так би мовити замінити.
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActionCreators, dispatch);
}