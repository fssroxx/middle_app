import {Layout, Menu, Row} from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";

const Navbar = () => {
    const router = useHistory();
    const {isAuth, user} = useTypedSelector( state => state.auth)
    const dispatch = useDispatch();

    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth
                ?
                    <>
                        <div style={{color: 'white'}}>{user.username}</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>

                            <Menu.Item onClick={() => {
                                dispatch(AuthActionCreators.logout())
                            }} key={1}>
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item onClick={() => {
                            router.push(RouteNames.LOGIN)
                        }} key={1}>
                            Логин
                        </Menu.Item>
                    </Menu>
                }

            </Row>
        </Layout.Header>
    );
};

export default Navbar;