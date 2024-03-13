import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import { privateRoutes, publicRoutes } from "../router";
import {useSelector} from 'react-redux';

const AppRouter = () => {
    const isAuth = useSelector(state => state.isAuth.isAuth)
    return (
        isAuth ?
            // Якщо користувач авторизований
            <Routes>
                {/* Пробігаємося по масиву "privateRoutes" за допомогою 'map' і завдання перетворити об'єкти які в цьому масиві знаходяться в компонент "Route" */}
                {privateRoutes.map(route =>
                    <Route 
                        path={route.path} 
                        element={route.component} 
                        key={route.path}
                    />
                )}
                {/* "*" - цей символ означає "збіг з будь-яким рештою шляху". Такий маршрут буде відповідати будь-якому шляху, який не відповідає жодному з інших визначених маршрутів в вашому додатку. */}
                {/* Таким чином, якщо користувач вводить, наприклад, /random-url, то цей маршрут буде викликаний, і відбудеться переадресація на '/postses'(Або на інший вказаний шлях). */}
                <Route path='*' element={<Navigate to='/Event'/>}></Route>
            </Routes> 
            :
            <Routes>
                {/* В даному випадку ітерація відбувається по публічним маршрутам. В якості ключів вказується шлях до компонента, оскільки шлях до кожного компонента завжди унікальний */}
                {publicRoutes.map(route => 
                    <Route
                        path={route.path} 
                        element={route.component} 
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Navigate to='/Login'/>}></Route>
            </Routes> // Якщо не авторизований, то в рамках "publicRoutes"
    );
};

export default AppRouter;