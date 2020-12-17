import React, { useContext } from 'react'
import Header from '../../components/Header'
import { GlobalContext } from '../../context/Provider'

function HomeComponent() {

    const context = useContext(GlobalContext);

    console.log("context = ", context);
    return (
        <div>
        

            <h1>Accueil</h1>
        </div>
    )
}

export default HomeComponent
