import React from 'react';
import css from './UserCard.module.css';
import PropTypes from 'prop-types';

import LocalStorage from '../../utils/localStorage';

export default function UserCard ({ users: { id, user, tweets, followers, avatar } }) {
	const KEY_FOLLOWERS = `followers ${id}`;
	const KEY_BTN = `btn ${id}`;

	const [btn, setBtn] = LocalStorage(KEY_BTN, false);
	const [follower, setFollower] = LocalStorage(KEY_FOLLOWERS, followers);

	const toggleBtn = () => {
		if (!btn) {
			setFollower(prevState => prevState + 1);
			setBtn(!btn);
		} else {
			setFollower(prevState => prevState - 1);
			setBtn(!btn);
		}
	};

	const FollowerWithDot = follower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	return (
		<div className={css.card}>
			<div className={css.logoBox}>
				<img src={require('../../images/logoGoIt.png')} alt="logo" width="76" />
			</div>
			<div className={css.imageBox}>
				<img src={require('../../images/pictureCard.png')} alt="question mark" width="308" />
			</div>

			<div className={css.line}>
				<div className={css.ellipse}>
					<img src={require('../../images/Ellipse.png')} alt="elipse" />
				</div>
				<div className={css.avatarBox}>
					<img src={avatar} alt={user} width="62"/>
				</div>
			</div>
            <div className={css.textBox}>
			<div className={css.text}>{tweets} tweets</div>
			<div className={css.text}>{FollowerWithDot} followers</div>
            </div>
			<button
				onClick={() => {
					toggleBtn(id);
				}}
				className={!btn ? css.button : css.active}
			>
				{!btn ? 'Follow' : 'Following'}
			</button>
		</div>
	);
}

UserCard.propTypes = {
	users: PropTypes.shape({
		id: PropTypes.number.isRequired,
		tweets: PropTypes.number.isRequired,
		followers: PropTypes.number.isRequired,
	}).isRequired,
};
