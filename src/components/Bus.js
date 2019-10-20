import React, {Component} from 'react';
import axios from 'axios';
import BusItem from './BusItem';
import {Link} from 'react-router-dom';
import './../components/Login.css';

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
            <div className="busSummary">
                <h1>Busses</h1>
                    {busItem}
                <Link className="buttonOne" to="/create">Add Bus</Link>
                <Link className="buttonTwo" to="/">Log Out</Link>
             </div>
        )
    }
}

export default Bus;