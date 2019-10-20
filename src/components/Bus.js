import React, {Component} from 'react';
import axios from 'axios'

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
        return (
            <div>
                <h1>Busses</h1>
             </div>
        )
    }
}

export default Bus;