import CardItem from 'components/CardItem/CardItem';
import { fetchDataCard } from 'services/Api';
import React, { useState, useEffect } from 'react';
import css from './Card.module.css'


export default function Card() {
   const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [card, setCard] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [followCheck] = useState('');
  const limit = 3;

  useEffect(() => {
    const getUsers = async ({ page, limit, selected }) => {
      try {
        return await fetchDataCard(page, limit, selected).then(data => {
          if (data && data.length < limit) {
            setShowLoadMoreBtn(false);
          } else {
            setShowLoadMoreBtn(true);
          }

          setCard([...card, ...data]);
        });
      } catch (error) {
        alert(error);
      }
    };

    getUsers({ page: pageNumber, limit: limit, selected: followCheck });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, followCheck]);

  const handleLoadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className={css.container}>
      <ul className={css.tweetsList}>
        {card && card.length > 0 ? (
          card.map(card => <CardItem key={card.id} card={card} />)
        ) : (
          <p>Oop...something went wrong.</p>
        )}
      </ul>
      {showLoadMoreBtn && (
        <button type="button" onClick={handleLoadMore} className={css.loadMoreBtn} >
          Load more
        </button>
      )}
    </div>
  );
}