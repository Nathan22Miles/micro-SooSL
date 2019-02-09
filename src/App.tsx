import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { TopView } from './components/Views'
import { SooSLViewModel, getGlosses } from './model/SooSLViewModel'
import { getSigns } from './model/signsData'

@observer
class App extends Component {
  constructor(props: any) {
    super(props)
  }

  svm = new SooSLViewModel(getGlosses(getSigns()))

  render() {
    let { svm } = this

    let gloss = svm.selectedGloss  // access gloss to force re-render when selectedGloss changes

    return (
      <div className="App">
        <header className="App-header">
          micro-SooSL
        </header>
        <body>
          <TopView svm={svm} />
        </body>
      </div>
    )
  }
}

export default App;
