import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
// import setBg from '../../bd/ColorGenerator';
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  // const { good, neutral, bad, total, positivePercentage } = stats;
  // const type = Object.keys(stats);
  return (
    <>
      <ul className={styles.statList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}</li>
      </ul>
      {/* {title && <h2 className={styles.title}>{title}</h2>} */}

      {/* <ul className={styles.statList}>
        {type.map(stat => (
          <li
            key={stat.id}
            style={{
              backgroundColor: setBg(),
            }}
            className={styles.item}
          >
            <span className={styles.label}>{stat}</span>
            <span className={styles.percentage}> {stat}</span>
          </li>
        ))}
      </ul> */}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string,
};

Statistics.defaultProps = {
  total: 0,
};
