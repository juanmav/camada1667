import React from 'react';
import {Link} from 'react-router-dom';

export default class List extends React.Component {

    state = {
        tags : null
    };

    constructor(props){
        super(props);
    }

    componentWillMount(){
        fetch('http://localhost:8000/tags/')
            .then(response => response.json())
            .then(tags => this.setState({tags}));
    }

    render(){
        let tags = this.state.tags;
        return ( <div>
                <ul>
                    {
                        tags ? (
                            tags.map(tags => {
                                return ( <li key={tags._id}>
                                    {tags.name}
                                    <Link to={'/tags/view/' + tags._id}> View</Link>
                                    <Link to={'/tags/edit/' + tags._id}> Edit</Link>
                                </li>)
                            })
                        )
                            : ( <li>...Cargando</li>)
                    }
                </ul>
                <br/>
                <br/>
                <Link to="/users/add"> Agregar Tag Nuevo</Link>
            </div>

        )
    }
};