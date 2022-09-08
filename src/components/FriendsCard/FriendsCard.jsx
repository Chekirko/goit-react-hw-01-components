import PropTypes from 'prop-types';
import {
  FriendsImg,
  FriendItem,
  Status,
  FriendName,
} from './FriendsCard.styled';

export const FriendsCard = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}>
        {isOnline}
      </Status>
      <FriendsImg src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendsCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
