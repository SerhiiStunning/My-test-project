import React from "react";
import {Layout, Menu, Row} from 'antd';
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import { useSelector } from "react-redux";
import './styles/navbarStyle.css';
import { useActions } from "../hooks/useActions";

const Navbar = () => {
    const router = useNavigate()
    const isAuth = useSelector(state => state.isAuth.isAuth)
    const user = useSelector(state => state.isAuth.user)
    // Для "logout" та ж сама дія що й для "login". Тільки за допомогою деструктиризації дістається потрібна функція.
    const {logout} = useActions();

    return (
        <Layout.Header>
            {/* Row - це просто флекс контейнер з направленням в рядок. Вказується пропс 'justify' зі значенням end, 
            для того щоб всі кнопки знаходилися в правому куті навбара.*/}
            <Row className="forRow">
                {isAuth
                    ?
                    <Menu 
                        theme="dark"
                        mode="horizontal"
                        selectable={false}
                    >
                        <div style={{color: 'white'}}>
                            {user.username}
                        </div>
                        <Menu.Item onClick={() => logout()} key="1">
                            Exit
                        </Menu.Item>
                    </Menu>
                    :
                    <div>
                    <Menu 
                        theme="dark"
                        mode="horizontal"
                        selectable={false}
                    >
                        <Menu.Item onClick={() => router(<Login/>)} key="1">
                            Login
                        </Menu.Item>
                    </Menu>
                    </div>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;