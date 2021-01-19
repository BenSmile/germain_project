import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GET_ALL_USERS } from '../../actions/types';
import { allUser } from '../../actions/userActions';
import axios from 'axios';
import { Button, Table, Icon } from 'semantic-ui-react';


export default function ListUser() {

    // const dispatch = useDispatch()


    // const allUsersAccions = dispatch(allUser());


    // const state = useSelector(state => state.user)

    const [users, setUsers] = useState([])

    useEffect( () => {
        axios.get(`http://127.0.0.1:8080/api/users/`)
          .then(res => {
            setUsers(res.data)
            console.log('res users ', res.data)
          })
       }, []);

    return (
        <div className="container" style={{ marginTop: "30px" }}>
            <h1>Utilisateurs</h1>


          <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {users.map((enqueteur, index) => (
                        <Table.Row>
                            <Table.Cell>{`${enqueteur.firstName}  ${enqueteur.lastName}`}</Table.Cell>
                            <Table.Cell>{enqueteur.email}</Table.Cell>
                            <Table.Cell negative>{enqueteur.username}</Table.Cell>
                        </Table.Row>
                    ))}


                </Table.Body>
            </Table>
          
        </div>
    )
}