import UserCard from '../UserCard/UserCard';
import PropTypes from 'prop-types';
import css from './UserList.module.css';

export default function UserList({ users }) {
	return (
		<div className={css.container}>
			{users.map(users => (
				<li className={css.item} key={users.id}>
					<UserCard users={users} />
				</li>
			))}
		</div>
	);
}

UserList.propTypes = {
	users: PropTypes.array,
};
