import PropTypes from 'prop-types';
import { FriendsCard } from 'components/FriendsCard/FriendsCard';
import { Friends, FriendsWrapper } from './FriendsList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsWrapper>
      <Friends>
        {friends.map(friend => (
          <FriendsCard
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        ))}
      </Friends>
    </FriendsWrapper>
  );
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
