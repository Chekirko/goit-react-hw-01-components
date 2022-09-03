import PropTypes from 'prop-types';
import { StatisticCard } from 'components/StatisticCard/StatisticCard';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h1>{title}</h1>}

      {stats.map(stat => (
        <StatisticCard
          key={stat.id}
          label={stat.label}
          percentage={stat.percentage}
        />
      ))}
    </>
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
