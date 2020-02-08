import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from '../actions/dataActions';

class Data extends Component {
    componentWillMount() {
        this.props.fetchData();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newData) {
            this.props.smurfs.unshift(nextProps.newData)
        }
    }

    render() {
        const dataItems = this.props.smurfs.map(smurf => (
            <div key={smurf.id}>
                <h2>{smurf.name}</h2>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
            </div>
        ))
        return (
            <div>
                <h1>Smurfs</h1>
                { dataItems }
            </div>
        )
    }
}

Data.propTypes = {
    fetchData: PropTypes.func.isRequired,
    smurfs: PropTypes.array.isRequired,
    newData: PropTypes.object
}

const mapStateToProps = state => ({
    smurfs: state.smurfs.smurfs,
    newData: state.smurfs.smurf
})

export default connect(
    mapStateToProps,
    { fetchData })
    (Data);