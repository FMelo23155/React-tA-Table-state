/**
 * App.js
 */

import React from "react";
import Table from "./Table";


class App extends React.Component{
  //  data is defined as 'state'
  //  this means that data can be changed by app, at real time
  state = {
    students : [
    {
      name:"Francisco",
      surname:"Melo",
    },
    {
      name:"Maria",
      surname:"Ferreira",
    },
    {
      name:"João",
      surname:"Pintor",
    },
    {
      name:"Antonio",
      surname:"Pinto",
    },
    {
      name:"Carlota",
      surname:"Cambalhota",
    },
  ]
  } 
  
  render(){
    const{students}=this.state // <=> const {students} = this.state.students

    return(
      <div className="container">
        <h1>Students</h1>
        <Table studentsDataIN={students} />
      </div>
    )
  }
}


export default App;
