import React, {useEffect} from 'react'
import { Tab } from 'semantic-ui-react'
import ListQuestions from './Question/ListQuestions'

import Enqueteurs from './Questionnaire/Enqueteurs'



const panes = [
  {
    menuItem: 'Questions',
    render: () => <Tab.Pane attached={false}><ListQuestions/></Tab.Pane>,
  },
  {
    menuItem: 'Enqueteurs',
    render: () => <Tab.Pane attached={false}><Enqueteurs/></Tab.Pane>,
  },
  {
    menuItem: 'Stats',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
]


// const TabExampleSecondaryPointing = ({questionnaireId}) => (

//   <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
  
// )




 function TabExampleSecondaryPointing({questionnaireId}) {

  

  useEffect(() => {
    // console.log('questionnaireId', questionnaireId)
  });

  return (
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
  )
}


export default TabExampleSecondaryPointing