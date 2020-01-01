import React, {Fragment} from 'react';
import Form from './Form';
import LeadsList from './LeadsList';

export default function Dashboard() {
    return (
        <div>
            <Fragment>
                <Form/>
                <LeadsList/>
            </Fragment>
        </div>
    )
}
