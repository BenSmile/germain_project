import React from 'react'
import { useState, useEffect } from 'react'
import { Grid, Segment, Image, Message, Button } from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Button } from 'bootstrap';

export default function Profil() {

    const { user } = useSelector(state => state.user)


    console.log('use hook', user)
    const [userConnected, setUserConnected] = useState({});

    useEffect(() => {
        setUserConnected(user);
        // setUserConnected(localStorage.getItem("user"));
    }, [userConnected])

    console.log('user profil', userConnected)
    return (
        <div className="container" style={{ marginTop: "30px" }}>
            <h1>Profil</h1>

            {/* <h1>{user.username}</h1> */}
            {/* <Grid columns={3} divided>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment>1</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>1</Segment>
                        <Segment>2</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>1</Segment>
                        <Segment>2</Segment>
                        <Segment>3</Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <hr></hr> */}

            <Grid>
                <Grid.Column width={4}>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                </Grid.Column>
                <Grid.Column width={9}>
                    <Segment>Nom : {userConnected.firstName}</Segment>
                    <Segment>Prenom : {userConnected.lastName}</Segment>
                    <Segment>Nom d'utilisateur : {userConnected.username}</Segment>
                    <Segment>Email : {userConnected.email}</Segment>
                    <Segment>Role : {userConnected.role}</Segment>
                    <Button>
                              <Link to="/register">Modifier</Link>
                        </Button>
                </Grid.Column>

                {/* <Grid.Column width={3}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column> */}
            </Grid>
        </div>
    )
}
