
// React state with event

// class base component

import React, {   useEffect, useState } from 'react'


class Reactcomponent extends React.Component {
    state = {
        input:""
    }
   

    onClick = (e) => {
        this.setState({input:e.target.value})
    }

    render() {
        return (
            <input value={this.state.input} onChange={this.onClick} />
        )
    }
}




// functional base component

export const Reactcomponent = () => {

    const [input , setInput] = useState("");

  
  return (
    <input value={input} onChange={(e)=>setInput(e.target.value)} />
  )
}

