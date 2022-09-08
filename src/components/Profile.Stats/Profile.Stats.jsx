import PropTypes from 'prop-types';
import { ProfileStatsItem } from 'components/ProfileStatsItem/ProfileStatsItem';
import { StatList } from './ProfileStats.styled';

export const ProfileStats = ({ followers, views, likes }) => {
  return (
    <StatList>
      <ProfileStatsItem title="Followers" quantity={followers} />
      <ProfileStatsItem title="Views" quantity={views} />
      <ProfileStatsItem title="Likes" quantity={likes} />
    </StatList>
  );
};

ProfileStatsItem.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
