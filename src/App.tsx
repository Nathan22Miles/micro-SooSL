import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { TopView } from './components/Views'
import { SooSLViewModel, getGlosses } from './model/SooSLViewModel'
import { getSigns } from './model/signsData'
import PositionChooser from './components/PositionChooser'
import { Root } from './Root'

@observer // cause component to re-render whenver an observable item in svm changes
class App extends Component {
  constructor(props: any) {
    super(props)
    this.svm = new SooSLViewModel(getGlosses(getSigns()))
    this.svm.selectedGloss = this.svm.glosses[0]
  }

  svm: SooSLViewModel
  root = new Root()

  render() {
    let { svm } = this

    let gloss = svm.selectedGloss  // access gloss to force re-render when selectedGloss changes

    return (
      <div className="App">
          <PositionChooser root={this.root}/>
          <TopView svm={svm} />
      </div>
    )
  }
}

export default App
