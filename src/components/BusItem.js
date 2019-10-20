import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './../components/Login.css';

class BusItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item : props.item,
            det : {}
        }
    }
    onDelete(){
        let id = this.state.det.name;
        axios.delete(`http://localhost:8080/busdetails/delete/${id}`).then(res=>{
            window.location.reload();
        })
    }

    render(){
        return(
            <li className="list-group-item">
                <Link to={`/delete/${this.state.item.name}`}>
                    {this.state.item.id}    
                </Link>
                {this.state.item}
                <span className="badge left">
                 </span>
            </li>
        )
    }
}

export default BusItem