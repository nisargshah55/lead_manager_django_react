import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads } from '../../actions/leadsAction';

export class Leads extends Component {

    static propTypes = {
        leads: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        return (
            <div>
                <h1>Leads list</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map(lead => (
                            <tr key={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    leads: state.leadsReducer.leadsState
})

export default connect(mapStateToProps, { getLeads })(Leads)
