import { Card, Layout, Row } from "antd";
import React from "react";
import './styles/loginStyle.css';
import LoginForm from "../components/LoginForm";

const Login = () => {
    return (
        <Layout>
            <Row className="logRow h100">
                <Card>
                    <LoginForm/>
                </Card>
            </Row>
        </Layout>
    );
};

export default Login;