import React from 'react';

export default class Root extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        return (<div className="root">
            <div {...this.props} />
        </div>)
    }
}