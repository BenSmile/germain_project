import React, { useEffect, useState } from 'react';
import MenuExampleSecondary from './Menu';
import { Link, useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT_USER } from '../actions/types';
import { config } from 'dotenv';
import {
    Menu, Image, Button, Icon, Container,
    Divider,
    Dropdown,
    Grid,
} from "semantic-ui-react"

const Header = () => {


    const { user } = useSelector(state => state.user)


    const history = useHistory();

    const [userConnected, setUserConnected] = useState({})


    const { pathname } = useLocation();

    const dispatch = useDispatch()


    // console.log('user from menu :>> ', user.user);

    const handleItemClick = (e, { name }) => ({ activeItem: name })
    const logoutUser = (e) => {
        e.preventDefault();

        localStorage.removeItem("user")
        dispatch({ type: LOGOUT_USER })

        // history.push('/login')
        history.push('/')

    }

    useEffect(() => {
        // setUserConnected(localStorage.getItem("user"))
        setUserConnected(user)
        // console.log('history', history)

        if (!userConnected) {
            history.push('/')
        }



    })


    // console.log('userConnected', userConnected)

    const menuHeader = () => {

        if (pathname === '/') {
            return <div></div>
        } else if (pathname.includes('login')) {
            return <div></div>
        }
        else if (pathname.includes('register')) {
            return <div></div>
        }
        else {
            return (
                <>
                    <Menu fixed='top' inverted>
                        <Container>

                            <Menu.Item as={Link} to="/questionnaires">Questionnaires</Menu.Item>


                            {
                                user.role === "ADMIN" && (<Menu.Item as={Link} to='/allusers'>Utilisateurs</Menu.Item>)
                            }





                            <Menu.Item as={Link} to='/profil'>Profil</Menu.Item>
                            <Menu.Menu position='right'>
                                {/* <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item> */}
                                <Menu.Item

                                    name='deconnexion'

                                    onClick={logoutUser}
                                />
                            </Menu.Menu>
                        </Container>
                    </Menu>
                </>
            )
        }
    }

    return (
        <div>

            {menuHeader()}

        </div>

    )
}

export default Header;
