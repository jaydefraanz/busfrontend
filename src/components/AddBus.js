import React, {Component} from 'react';
import axios from 'axios';

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

    render() {
    return (<div>
         <form onSubmit={this.onAddSubmit.bind(this)}>
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
    </div>)
    }
}

export default AddBus;