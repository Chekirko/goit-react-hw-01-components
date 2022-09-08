import PropTypes from 'prop-types';
import { CardWrapper, Card, ProfileImg, Name, Text } from './Profile.styled';
import { ProfileStats } from 'components/Profile.Stats/Profile.Stats';

export const Profile = props => {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;
  return (
    <CardWrapper>
      <Card>
        <ProfileImg src={avatar} alt="User avatar" />
        <Name>{name}</Name>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Card>

      <ProfileStats followers={followers} views={views} likes={likes} />
    </CardWrapper>
  );
};

Profile.propTypes = {
  props: PropTypes.exact({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
