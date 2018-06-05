import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
    state = {
        userName:''
    }

    render() {
        return (
            <div>
                name: <input type="text" value={this.state.userName} onChange={this.handleUserChange}/>
            </div>
        );
    }
    handleUserChange = (ev) =>{
        if(ev.target.value.length > 10) return 
        this.setState({userName:ev.target.value})
    }
}

UserForm.propTypes = {

};

export default UserForm;