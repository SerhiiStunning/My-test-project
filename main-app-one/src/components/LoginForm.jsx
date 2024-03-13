import React, { useState } from "react";
import './styles/LoginForm.css';
import { Button, Form, Input } from "antd";
import {useSelector} from 'react-redux';
import { useActions } from "../hooks/useActions";

const LoginForm = () => {
    const {error, isLoading} = useSelector(state => state.isAuth);
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    // Хук useActions() - повертає одразу всі ActionCreators
    const {login} = useActions();

    const submit = () => {
        // Якщо потрібно використати ActionCreator, то тепепр необов'язково використовувати "dispatch"
        login(userName, password)
    }

    return (
        <Form
            onFinish={submit}
        >
            {error && <div className="errorByLogin">
                {error}
            </div>}
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
            >
                <Input 
                    value={userName} 
                    onChange={e => setUserName(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;