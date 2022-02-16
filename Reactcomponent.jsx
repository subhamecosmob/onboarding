
// A react component is a class or a function that allows you create an isolated building block of UI and logic  for your web app

// class base component

import React, {   useEffect, useState } from 'react'

export default class Reactcomponent extends React.Component {

    constructor(props){
        super(props);

    // Set the state directly. Use props if necessary.
        this.state = {
            name:""
        }
    }

    componentDidMount = () =>{
        this.setState({name:"react component"})
    }

    render() {
        return (
        <div>Reactcomponent</div>
        )
    }
}


// functional base component

export const Reactcomponent = () => {

    const [name , setName] = useState("");

    useEffect(()=>{
        setName("react component")
    },[])


  return (
    <div>Reactcomponent</div>
  )
}

