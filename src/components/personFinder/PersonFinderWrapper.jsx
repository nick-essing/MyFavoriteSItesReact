import React from 'react';
import PropTypes from 'prop-types';

import { PersonFinder } from 'chayns-components/lib';

const PersonFinderWrapper = ({ addUser }) => (
    <PersonFinder
        placeholder="Search for users"

        onChange={(res) => {
            // this is a Callback which is Called in PersonFinder as this.props.onChange()
            console.log('personFinder', res);
            res.node.value = '';
            addUser(res.user);
        }}
        style={{
            width: '100%'
        }}
    />
);

PersonFinderWrapper.propTypes = {
    addUser: PropTypes.func.isRequired
};

export default PersonFinderWrapper;
