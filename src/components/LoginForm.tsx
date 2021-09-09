import React, {FC} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {log} from "util";

const LoginForm: FC = () => {
    const submit = () => {
        console.log('submit')
    }
    return (
        <Form
        onFinish={submit}
        >
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Введите Ваш логин, сэр')]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Введите пароль, будьте так добры')]}
            >
                <Input />
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;