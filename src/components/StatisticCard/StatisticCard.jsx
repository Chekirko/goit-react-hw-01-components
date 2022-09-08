import PropTypes from 'prop-types';
import { StatItem, StatPercentage } from './StatisticCard.styled';

const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const StatisticCard = ({ label, percentage }) => {
  return (
    <StatItem style={{ backgroundColor: getRandomHexColor() }}>
      <span>{label}</span>
      <StatPercentage>{percentage}%</StatPercentage>
    </StatItem>
  );
};

StatisticCard.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
