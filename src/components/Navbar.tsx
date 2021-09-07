import {Layout, Menu, Row} from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import {RouteNames} from "../router";
import {log} from "util";

const Navbar = () => {
    const router = useHistory();
    console.log(router)
    const isAuth = false;

    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth
                ?
                    <>
                        <div style={{color: 'white'}}>FssRoxx</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>

                            <Menu.Item onClick={() => {
                                console.log("Выйти")
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