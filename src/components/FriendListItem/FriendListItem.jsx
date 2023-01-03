import PropTypes from 'prop-types';
import { CiWifiOff, CiWifiOn } from 'react-icons/ci';
import {
  Card,
  FriendName,
  FriendOnline,
  FriendOffline,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Card>
      {isOnline ? (
        <FriendOnline>
          <CiWifiOn size={30} />
        </FriendOnline>
      ) : (
        <FriendOffline>
          <CiWifiOff size={30} />
        </FriendOffline>
      )}
      <img src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </Card>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
