import PropTypes from 'prop-types';
import { StatisticCard } from 'components/StatisticCard/StatisticCard';
import { Title, StatsWrapper, StatList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsWrapper>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <StatisticCard
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </StatList>
    </StatsWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
