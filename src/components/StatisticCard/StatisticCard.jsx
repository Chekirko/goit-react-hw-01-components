import PropTypes from 'prop-types';

export const StatisticCard = ({ label, percentage }) => {    
    return <>
    <span>{label}</span>
    <span>{percentage}%</span>
    </>
}

StatisticCard.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}