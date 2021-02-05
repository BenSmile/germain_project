import React, { useEffect, useState } from 'react';
import { Button, Table, Icon } from 'semantic-ui-react';
import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { GET_ALL_USERS } from '../../actions/types';
import { useHistory, useParams } from 'react-router-dom';

// import { allInvestigators } from '../../actions/userActions';

export default function ListInvestigators() {

  // const dispatch = useDispatch();

  const history = useHistory();


  // const state = useSelector(state => state)

  // console.log('state', state)

  // const allUsersAccions = dispatch(allInvestigators());

  const params = useParams();

  // print params to console
  console.log("param = ", params);

  const { id } = params

  const [invetigators, setInvestigators] = useState([])

  // const [userAssigned, setUserAssigned] = useState(false)


  useEffect(() => {
    axios.get(`http://127.0.0.1:8080/api/users/invetigators`)
      .then(res => {
        setInvestigators(res.data)
        console.log('res invetigators ', res.data)
      })
  }, []);

  const alreadyAssigned = async function (userId, qId) {

    const promise = axios.get(`http://localhost:8080/api/users/${userId}/isAssignedToInvestigation/${qId}`)
      .then(response => {
        return response.data;
        console.log(response.data);
      }).catch(err => {
        console.log(err);
      })



    // const dataPromise = promise.then((response) => response.data)
    // // .then(res => {
    // //     return res.data
    // //   })

    // return dataPromise
    // return varia;
  }


  console.log(alreadyAssigned(1, 1));




  const assignInvestigator = (userID) => {
    console.log('userID', userID)
    axios.post(`http://127.0.0.1:8080/api//questionnaire/assign_enqueteur`,
      {
        "questionnaireId": id,
        "userId": userID
      })
    history.push(`/questionnaire/${id}`)

  }

  // useEffect(() => {
  //     console.log('state', state)
  //     setInvestigators(state)
  // }, [invetigators])

  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <h1>Tous les enqueteurs</h1>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {invetigators.map((enqueteur, index) => (
            <Table.Row>
              <Table.Cell>{`${enqueteur.firstName}  ${enqueteur.lastName}`}</Table.Cell>
              <Table.Cell>{enqueteur.email}</Table.Cell>
              <Table.Cell negative>{enqueteur.username}</Table.Cell>
              <Table.Cell negative>
                <Button circular
                  onClick={() => assignInvestigator(enqueteur.id)} size='mini' basic icon color='green'>
                  <Icon name="add"></Icon>
                </Button>
              </Table.Cell>

            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan='4'>
              <Button
                floated='right'
                icon
                labelPosition='left'
                primary
                size='small'
              >
                <Icon name='user' /> Ajouter
          </Button>


            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}