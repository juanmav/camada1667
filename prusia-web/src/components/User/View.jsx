import React from 'react';
import {Link} from 'react-router-dom';

export default class Edit extends React.Component {

    state = {
        user: {}
    };

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        let userId = this.props.userId;

        fetch('http://localhost:8000/users/' + userId)
            .then(res => res.json())
            .then(user => {
                this.setState({user});
            })
    }


    render(){
        return (<div>
            <h3>Personal data </h3>
            <label>Name: </label>
            <input type="text" value={this.state.user.name}/>
            <br />
            <label>LastName: </label>
            <input type="text" value={this.state.user.lastname}/>
            <br />
            <label>DNI: </label>
            <input type="text" value={this.state.user.dni}/>
            <br />
        </div>)
    }

}