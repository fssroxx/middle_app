import React, {FC, useState} from 'react';
import {Button, Form, Input, Row} from "antd";
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const LoginForm: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useActions()

    const submit = () => {
        login(username, password)
    }


    return (
        <Form
        onFinish={submit}
        >
            {error && <div style={{color: 'red'}}>
                {error }
            </div>}
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Введите Ваш логин, сэр')]}
            >
                <Input
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Введите пароль, будьте так добры')]}
            >
                <Input
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    type={'password'}
                />
            </Form.Item>

            <Form.Item >
                <Row justify="end">
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Войти
                    </Button>
                </Row>

            </Form.Item>
        </Form>
    );
};

export default LoginForm;