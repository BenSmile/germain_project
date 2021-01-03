import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: 'Questions',
    render: () => <Tab.Pane attached={false}><div>ben</div></Tab.Pane>,
  },
  {
    menuItem: 'Enqueteurs',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Stats',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
]

const TabExampleSecondaryPointing = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default TabExampleSecondaryPointing