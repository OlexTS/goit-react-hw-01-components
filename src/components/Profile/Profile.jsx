import PropTypes from 'prop-types';
import { UserProfile, Description, UserName, Tag, Location, StatList, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
   
  return <UserProfile>
  <Description>
    <img
      src={avatar}
      alt={username}
          className="avatar"
          width='250'
    />
      <UserName>{username}</UserName>
    <Tag >@{tag}</Tag>
    <Location >{location}</Location>
  </Description>

    <StatList >
    <li>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </li>
    <li>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </li>
    <li>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </li>
  </StatList>
</UserProfile>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })

}