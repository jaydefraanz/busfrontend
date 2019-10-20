import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class BusItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item : props.item,
            det : {}
        }
    }
    onDelete(){
        let id = this.state.det.id;
        axios.delete(`http://localhost:8080/busdetails/delete/${id}`).then(res=>{
            window.location.reload();
        })
    }

    render(){
        return(
            <li className="list-group-item">
                <Link to={`/delete/${this.state.item.id}`}>
                    {this.state.item.id}    
                </Link>
                {this.state.item}
                <span className="badge left">
                <button className="btn btn-primary fa fa-minus" onClick={this.onDelete.bind(this)}>Delete</button>
                 </span>
            </li>
        )
    }
}

export default BusItem