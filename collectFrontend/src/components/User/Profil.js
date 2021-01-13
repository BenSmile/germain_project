import React from 'react'
import { useState, useEffect } from 'react'
import { Grid, Segment, Image } from 'semantic-ui-react'

export default function Profil() {


    const [user, setUser] = useState({});



    useEffect(() => {
        setUser(localStorage.getItem("user"));

    }, [])

    console.log('user profil', user)
    return (
        <div className="container" style={{ marginTop: "30px" }}>
            <h1>Profil</h1>

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
                   <div>
                       <h3>{user.id}</h3>
                   </div>
                </Grid.Column>

                {/* <Grid.Column width={3}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column> */}
            </Grid>
        </div>
    )
}
