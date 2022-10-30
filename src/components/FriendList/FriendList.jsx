import style from './friendList.module.css';
import PropTypes from 'prop-types';

import {FriendListItem} from './FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return <ul className={style.friendList}>
        {friends.map(friend => (
            <FriendListItem
                key={friend.id}
                isOnline={friend.isOnline}
                avatar={friend.avatar}
                name={friend.name}
            />))}
</ul>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};