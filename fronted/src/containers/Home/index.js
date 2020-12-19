import React, { useContext, useEffect, useState, Component } from 'react'
import Header from '../../components/Header'
import { getQuestionnaires } from '../../context/actions/questionnaire';
import { GlobalContext } from '../../context/Provider'
import QuestionnaireListUI from '../../layout/QuestionnaireList';

// function HomeComponent() {

//     const { questionniareDispatch } = useContext(GlobalContext);

//     // var listQ = [];

//     const listQ = getQuestionnaires().then((res) => {
//         console.log(res.data)
//         return res.data;
//         // this.setState({ abonnes: res.data.data, loader: false  })
//     })
//     console.log('listQ', listQ)
//     const [allQuestionnaires, setAllQuestionnaires] = useState(listQ);



//     console.log('qqq ', allQuestionnaires)
//     // useEffect(() => {
//     //     getQuestionnaires()(questionniareDispatch);
//     // }, [])


//     return (
//         <div>


//             <h1>Accueil</h1>
//             <QuestionnaireListUI state={allQuestionnaires} />
//         </div>
//     )
// }

// export default HomeComponent




export default class HomeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            allQuestionnaires:[]
        }
    }

    componentDidMount() {
        getQuestionnaires().then((res) => {
            console.log(res.data)
          this.setState({
            allQuestionnaires:res.data
          })
            
        })
    }

    render() {
        return (
            <div>


              
                <QuestionnaireListUI allQuestionnaires={this.state.allQuestionnaires} />
            </div>
        )
    }
}

