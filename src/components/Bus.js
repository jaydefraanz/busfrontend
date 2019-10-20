import React, {Component} from 'react';
import axios from 'axios';
import BusItem from './BusItem';
import {Link} from 'react-router-dom';

class Bus extends Component{
    constructor(){
        super();
        this.state = {
            bus: []
        }
    }

    componentWillMount(){
        this.getbusses();
    }

    getbusses(){
        axios.get('http://localhost:8080/busdetails/getall/').then(response=> {
            this.setState({bus: response.data}, ()=> {
                console.log(this.state);
            })
        })
    }
    render(){
        var busItem = this.state.bus.map((bus, i )=> {
            return(
                <BusItem key= {bus.busNo} item ={bus.busName}/>
            );
        })
        return (
            <div>
                <h1>Busses</h1>
                <ul className="list-group">
                    {busItem}
                </ul>
                <Link to="/create">Add Bus</Link>
             </div>
        )
    }
}

export default Bus;