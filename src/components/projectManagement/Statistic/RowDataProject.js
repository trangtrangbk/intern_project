import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink }  from 'react-router-dom'

export default class RowDataProject extends Component {
    render() {
        return (
            <tr>
                <td> Web </td>
                <td> ReactJS + NodeJS </td>
                <td> 1/1/1990 </td>
                <td> 1/1/1990 </td>
                <td> 1/1/1990 </td> 
                <td> 1/1/1990 </td>
                <td> 1/1/1990 </td> 
                <td>
                <NavLink to="/contact" >Edit </NavLink>
 </td>
                <td>
                    <a className="delete" href="javascript:;"> Delete </a>
                </td>
            </tr>
        )
    }
}