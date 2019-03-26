import React from 'react'
// import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

// import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import AtomSwitch from '@s-ui/react-atom-switch'
import AtomLabel from '@s-ui/react-atom-label'

function Atom() {
  return (
    <div>
      <AtomSwitch
        type="select"
        labelLeft="No"
        labelRight="Yes"
        name="inputSwitchTest"
        label="Do you like Cats?"
        onToggle={value => console.log(value)}
      />
      {/* <div>
        <AtomSpinner type={AtomSpinnerTypes.FULL} />
      </div> */}

      <AtomLabel
        name="atomLabelName"
        for="labelName"
        text="ca'ts name"
        optional="(optional text)"
      />

      <input id="atomLabelName" type="text" />
    </div>
  )
}

ReactDOM.render(<Atom />, document.getElementById('root'))
