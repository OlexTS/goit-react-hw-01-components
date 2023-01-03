import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import {UserFriends} from './FriendList.styled';

export const FriendList = ({friends}) => {
    return <UserFriends>
     {friends.map(friend => {
      return <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
      />
  })}
</UserFriends>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    })).isRequired
}