import PropTypes from 'prop-types';
import { CiWifiOff, CiWifiOn } from 'react-icons/ci';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.isOnline}>
          <CiWifiOn size={30} />
        </span>
      ) : (
        <span className={css.isOffline}>
          <CiWifiOff size={30} />
        </span>
      )}
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
