import React, { useState } from 'react';
import img from  'images/img.png'
import logo from 'images/logo.png'
import { updateFetchCard } from 'services/Api'

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
    <li  id={card.card.id}>
      <div>
        <img src={`${logo}`} alt="logo"  />
      </div>
      <div>
        <img src={`${img}`} alt="img"  />
      </div>
      <div ></div>
      <div >
        <img
          src={`${card.card.avatar}`}
          alt={card.card.user}
          
        />
      </div>
      <div>
        <p >{card.card.tweets} tweets</p>
        <p >
          {followersCount.toLocaleString('en-US')} followers
          {/* {followersCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '} */}
        </p>
        <button
          type="button"
        
          style={{ background: selection ? '#5CD3A8' : '#EBD8FF' }}
          onClick={() => handleClick(card.id)}
        >
          <p >{selection ? 'following' : 'follow'}</p>
        </button>
      </div>
    </li>
  );
}