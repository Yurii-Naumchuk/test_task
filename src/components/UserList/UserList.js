import UserCard from '../UserCard/UserCard';
import css from './UserList.module.css';
import PropTypes from 'prop-types';

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
