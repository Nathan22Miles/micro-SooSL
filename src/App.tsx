import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { TopView } from './components/Views'
import { SooSLViewModel, getGlosses } from './model/SooSLViewModel'
import { getSigns } from './model/signsData'

@observer // cause component to re-render whenver an observable item in svm changes
class App extends Component {
  constructor(props: any) {
    super(props)
    this.svm = new SooSLViewModel(getGlosses(getSigns()))
    this.svm.selectedGloss = this.svm.glosses[0]
  }

  svm: SooSLViewModel

  render() {
    let { svm } = this

    let gloss = svm.selectedGloss  // access gloss to force re-render when selectedGloss changes

    return (
      <div className="App">
        <body>
          <TopView svm={svm} />
        </body>
      </div>
    )
  }
}

export default App
