import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';

import styles from './Profile.module.css';
export default function Profile({ name, tag, location, avatar, stats }) {
  const { followers = 0, views = 0, likes = 0 } = stats;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={name} className={styles.avatar} width="480" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}> {followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}> {views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

Profile.defaultProps = {
  // name: 'не указано',
  avatar: defaultImage,
  stats: {},
};

// Profile.defaultProps = {
//   name: 'не указано',
//   avatar: defaultImage,
//   stats: {},
// };

// stats.defaultProps = {
//   followers: 0,
//   views: 0,
//   likes: 0,
// };
