import React from 'react'
import FriendListItem from './FriendListItem'
import PropTypes from "prop-types";
import css from './FriendList.module.css'

const FriendList = ({friends}) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))} 

    </ul>
  )
}

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};


export default FriendList