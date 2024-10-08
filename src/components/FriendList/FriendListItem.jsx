import React from 'react'
import PropTypes from "prop-types";
import css from './FriendList.module.css'

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
   
};

export default FriendListItem