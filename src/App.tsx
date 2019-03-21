import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { withAuthenticator } from 'aws-amplify-react'

import { TopView } from './components/Views'
import PositionChooser from './components/PositionChooser'
import { Root } from './Root'
import { Project } from './model/Project'
import { observable } from 'mobx'


@observer // cause component to re-render whenver an observable item in svm changes
class App extends Component {
  constructor(props: any) {
    super(props)

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  root = new Root()
  @observable message = 'Loading...'

  render() {
    this.root.selectedGlossText    // redraw when selected gloss changes
    this.root.positions.length     // redraw when positions change

    if (this.message) {
      return (<div>{this.message} </div>)
    }

    return (
      <div className="App">
        <PositionChooser root={this.root}/>
        <TopView root={this.root} />
      </div>
    )
  }

  componentDidMount() {
    fetch('demo/project.json')
      .then((response: any) => response.json())
      .then((json: any) => {
        console.log('json', json)
        this.root.project = new Project(json)
        this.root.setGlossTexts()
        this.root.setPositions([])
        this.message = ''
      })
      .catch(err => {
        this.message = err.message
      })
  }
}

export default withAuthenticator(App)
