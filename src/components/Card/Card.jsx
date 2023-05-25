import CardItem from 'components/CardItem/CardItem';
import { fetchDataCard } from 'services/Api';
import React, { useState, useEffect } from 'react';


export default function Card() {
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [card, setCard] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [followCheck] = useState('');
  const limit = 3;

  useEffect(() => {
    const getUsers = async ({ page, limit, selected }) => {
      try {
        return await fetchDataCard (page, limit, selected).then(data => {
          if (data && data.length < limit) {
            setLoadMoreBtn(false);
          } else {
            setLoadMoreBtn(true);
          }

          setCard([...card, ...data]);
        });
      } catch (error) {
        alert(error);
      }
    };

    getUsers({ page: pageNumber, limit: limit, selected: followCheck });

  }, [pageNumber, followCheck]);

  const handleLoadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div>
      <ul >
        {card && card.length > 0 ? (
          card.map(card => <CardItem key={card.id} card={card} />)
        ) : (
          <p>There is nothing here...</p>
        )}
      </ul>
      {loadMoreBtn && (
        <button type="button" onClick={handleLoadMore} >
          Load more
        </button>
      )}
    </div>
  );
}