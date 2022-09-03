import PropTypes from 'prop-types';

export const FriendsCard = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span>{isOnline}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};

FriendsCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,  
};
