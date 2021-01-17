import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import setBg from '../../bd/ColorGenerator';
export default function Statistics({ title, stats }) {
  // const { id = "", label = "", percentage = 0 } = stats;
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            style={{
              backgroundColor: setBg(),
            }}
            className={styles.item}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}> {stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

Statistics.defaultProps = {
  title: '',
  ststs: {},
};
