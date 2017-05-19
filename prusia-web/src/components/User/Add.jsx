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
    }

    save = () => {
        let user = this.state.user;

        console.log(user);

        fetch('http://localhost:8000/users/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method : 'POST',
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(result => {
                alert('Salve con Exito');
            })
            .catch(err => {
                alert('Hubo un problema');
            })
    };

    onNameChange = (e) => {
        let user = this.state.user;
        user.name = e.target.value;
        this.setState({user});
    };


    fieldGenerator = (fieldName) => {
        return {
            onChange : (e) => {
                let user = this.state.user;
                user[fieldName] = e.target.value;
                this.setState({user})
            },
            value : this.state.user[fieldName]
        }
    };


    render(){
        return (<div>
            <h3>Personal data </h3>
            <label>Name: </label>
            <input type="text" value={this.state.user.name} onChange={this.onNameChange}/>
            <br />
            <label>LastName: </label>
            <input type="text" {...this.fieldGenerator('lastname')}/>
            <br />
            <label>DNI: </label>
            <input type="text" {...this.fieldGenerator('dni')}/>
            <br />
            <button onClick={this.save}> CREAR Usuario</button>
        </div>)
    }

}