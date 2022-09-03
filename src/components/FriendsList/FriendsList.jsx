import PropTypes from 'prop-types';
import { FriendsCard } from 'components/FriendsCard/FriendsCard';

export const FriendList = ({ friends }) => {
    return (
        <>
            {friends.map(friend => (
    <FriendsCard
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
      key={friend.id}
    />
  ))}
        </>
  )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
