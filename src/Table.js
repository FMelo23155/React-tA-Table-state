/**
 * Tabela.js
 * 
 * This table shows a simple list of students 
 */

import React,{Component} from "react";
/**
 * write the table header
 * @returns 
 */
function Header(){
    return (
    <thead>
        <tr>
        <th>First Name</th>
        <th>Last Name</th>
        </tr>
    </thead>)
   
}
// o const tem que estar sempre definida antes da sua utilização, a function nao precisa, de resto e igual !!!!!!!

/**
 * write the table body
 * @param {*} props : the data to be writed: a list of students
 * @returns 
 */
const Body = (props) => {
    //  we are building each table row, with the data we receive
    const rows = props.dataTableIN.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.surname}</td>
            </tr>
        )
    })
    return(
        <tbody>{rows}</tbody>
    )
    
}

class Table extends Component{

    render(){
        // 'read' data that was supplied to component 'Tables'
        const {studentsDataIN} = this.props


        return(
            <table className="table table-dark">

                <Header />
                <Body dataTableIN={studentsDataIN} />

            </table>
        )
    }

}

export default Table;