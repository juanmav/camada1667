import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Root from '../layout/Root';
import Main from '../layout/Main';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar'

//Pages
import About from '../pages/About';
import Contact from '../pages/Contact';

// Componnets de usuarios
import List from './User/List';
import Edit from './User/Edit';
import Add from './User/Add';
import View from './User/View';

// Componentes de Tags
import TagList from './Tag/List';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount (){

    }

    render() {
        return (
            <div>
                <Router history={true}>
                    <Root>
                        <Header>
                            Curso de React
                        </Header>
                        <Sidebar>
                                <li><Link to="/users">Users</Link></li>
                                <li><Link to="/tags">Tags</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                        </Sidebar>
                        <Main>
                            <Route path='/'  exact={true} render={() => {
                                return (<h1>Bienvenidos al curso de react</h1>)
                            }}/>

                            { /**
                                Usuarios
                             */}
                            <Route path="/users/" exact={true} component={List}/>
                            <Route path="/users/add" exact={true} component={Add}/>
                            <Route path="/users/view/:userId" exact={true} render={({match}) => {
                                return <View userId={match.params.userId}/>
                            }} />
                            <Route path="/users/edit/:userId" exact={true} render={({match}) => {
                                return <Edit userId={match.params.userId}/>
                            }} />

                            { /**
                                Tags

                                List
                                View
                                Add
                                Edit
                             */}

                            <Route path="/tags/" exact={true} component={TagList}/>

                            <Route path='/about' component={About}/>
                            <Route path='/contact' component={Contact}/>
                        </Main>
                    </Root>
                </Router>
            </div>

        );
    }
}


const MainContent = ({user}) => {
    return (
        <div>
            <h1>{user.name}</h1>

            <form>
                <h3>Personal data </h3>
                <label>User name: </label> <input type="text" value={user.username}/> <br />
                <label>Email: </label> <input type="text" value={user.email}/><br />
                <h3>Address</h3><br />
                <label>Street: </label> <input type="text" value={user.address.street}/> <br />
                <label>Suite: </label> <input type="text" value={user.address.suite}/> <br />
                <label>City: </label> <input type="text" value={user.address.city}/> <br />
                <label>Zipcode: </label> <input type="text" value={user.address.zipcode}/>
            </form>
        </div>
    )
}