import React from 'react';
import UserList from './components/UserList';
import users from './data/users.json';
import PropTypes from 'prop-types';

export default function App() {
	return (
		<>
			<UserList users={users} />
		</>
	);
}

App.propTypes = {
	users: PropTypes.array,
};
