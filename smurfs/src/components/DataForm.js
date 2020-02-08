import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createData } from '../actions/dataActions';

class DataForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const smurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        };

        this.props.createData(smurf)
    }

    render() {
        return (
            <div>
                <h1>Add Smurf</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name: </label><br />
                        <input
                        type='text'
                        name='name'
                        onChange={this.onChange}
                        value={this.state.name}
                        placeholder='Enter Smurfs Name'
                        />
                    </div>
                    <br />
                    <div>
                        <label>Age: </label><br />
                        <input
                        type='text'
                        name='age'
                        onChange={this.onChange}
                        value={this.state.age}
                        placeholder='Enter Smurfs Age'
                        />
                    </div>
                    <div>
                        <br />
                        <label>Height: </label><br />
                        <input
                        type='text'
                        name='height'
                        onChange={this.onChange}
                        value={this.state.height}
                        placeholder='Enter Smurf Height'
                        />
                    </div>
                        <br />
                        <button type='submit'>Submit</button>
                    
                </form>
            </div>
        )
    }
}

DataForm.propsTypes = {
    createData: PropTypes.func.isRequired
};

export default connect(
    null,
    { createData })
    (DataForm);