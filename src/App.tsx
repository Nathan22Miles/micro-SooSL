import React, { Component } from 'react'

import { TopView } from './components/Views'
import { SooSLViewModel, getGlosses } from './model/SooSLViewModel'
import { getSigns } from './model/signsData'

class App extends Component {
  constructor(props: any) {
    super(props)
  }

  svm = new SooSLViewModel(getGlosses(getSigns()))

  render() {
    return (
      <div className="App">
        <header className="App-header">
          micro-SooSL
        </header>
        <body>
          <TopView svm={this.svm} />
        </body>
      </div>
    )
  }
}

export default App;
