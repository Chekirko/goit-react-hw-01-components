import PropTypes from 'prop-types';
import { StatsItem, StatsTitle, StatsText } from './ProfileStatsItem.styled';

export const ProfileStatsItem = ({ title, quantity }) => {
  return (
    <StatsItem>
      <StatsTitle>{title}</StatsTitle>
      <StatsText>{quantity}</StatsText>
    </StatsItem>
  );
};

ProfileStatsItem.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
