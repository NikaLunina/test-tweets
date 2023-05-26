import React, { useState } from 'react';
import img from  'images/img.png'
import logo from 'images/logo.png'
import { updateFetchCard } from 'services/Api'
import css from './CardItem.module.css'

export default function CardItem(card) {
  const [selection, setSelection] = useState(card.card.followed);
  const [followersCount, setFollowersCount] = useState(card.card.followers);

  const handleClick = () => {
    setSelection(!selection);
    if (selection) {
      updateFetchCard(card.card.id, {
        followed: !selection,
        followers: followersCount - 1,
      });
      setFollowersCount(followersCount - 1);
    }
    if (!selection) {
      updateFetchCard(card.card.id, {
        followed: !selection,
        followers: followersCount + 1,
      });
      setFollowersCount(followersCount + 1);
    }
  };

  return (
    <li  className={css.tweetsItem} id={card.card.id}>
      <div>
              <img className={css.logo} src={`${logo}`} alt="logo"  />
      </div>
      <div>
              <img className={css.img } src={`${img}`} alt="img"  />
          </div>
          <div className={css.line}></div>
       <div className={css.avatar}>
        <img
          src={`${card.card.avatar}`}
          alt={card.card.user}
           className={css.photo}
        />
      </div>
      <div>
        <p className={css.tweets}> {card.card.tweets} tweets</p>
        <p className={css.followers}>
          {followersCount.toLocaleString('en-US')} followers
          {/* {followersCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '} */}
        </p>
        <button
          type="button"
         className={css.btnFollow}
          style={{ background: selection ? '#5CD3A8' : '#EBD8FF' }}
          onClick={() => handleClick(card.id)}
        >
          <p className={css.btnText}>{selection ? 'following' : 'follow'}</p>
        </button>
      </div>
    </li>
  );
}