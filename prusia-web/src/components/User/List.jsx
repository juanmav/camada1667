import React from 'react';
import {Link} from 'react-router-dom';

export default class List extends React.Component {

    state = {
        users : null
    };

    constructor(props){
        super(props);
    }

    componentWillMount(){
        fetch('http://localhost:8000/users/')
            .then(response => response.json())
            .then(users => this.setState({users}));
    }

    render(){
        let users = this.state.users;
        return ( <div>
                <ul>
                    {
                        users ? (
                        users.map(user => {
                            return ( <li key={user._id}>
                                {user.name}
                                <Link to={'/users/view/' + user._id}> View</Link>
                                <Link to={'/users/edit/' + user._id}> Edit</Link>
                            </li>)
                        })
                    )
                            : ( <li>...Cargando</li>)
                    }
                </ul>
                <br/>
                <br/>
                <Link to="/users/add"> Agregar Usuario nuevo</Link>
            </div>

        )
    }
};