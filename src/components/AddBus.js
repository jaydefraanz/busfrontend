import React, {Component} from 'react';
import axios from 'axios';
import './../components/Login.css';

class AddBus extends Component{

    addBus(bus){
        axios.request({
            method: 'POST',
            url: 'http://localhost:8080/busdetails/create',
            data: bus
        }).then(res=>{
            this.props.history.push('/')
        }).catch(err=>console.log(err));
    }

    onAddSubmit(){
        const bus = {
            busName: this.refs.name.value,
            busSeats: this.refs.seats.value
        }
        this.addBus(bus);
    }
    goHome(){
        this.props.history.push('/bus')
    }

    render() {
    return (<div className="addContent">
         <form onSubmit={this.onAddSubmit.bind(this)}>
             <h1>Enter bus details</h1>
                <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" class="form-control" name ="name"  placeholder="Name" ref="name"/>
                </div>
                </div>
                <div className="form-group row">
                <label class="col-sm-2 col-form-label">Seats</label>
                <div className="col-sm-10">
                    <input type="text" class="form-control" name ="seats"  placeholder="Seats" ref="seats"/>
                </div>
                </div>
                <input type="submit" value="save"/>
        </form>
        <button onClick={this.goHome.bind(this)}>Cancel</button>
    </div>)
    }
}

export default AddBus;