import React from 'react';
export default class Main extends React.Component {
    constructor(props){
        super(props);
    }

    render (){
        return (<div className="main" style={styles} {...this.props} />);
    }
}

const styles = {
    width:'70%',
    float:'left'
};