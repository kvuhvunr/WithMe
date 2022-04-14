import React, { useEffect } from 'react';
import styled from 'styled-components';
import API from '../../../../../config';

const ReviewHistoryItem = ({
  title,
  sub_title,
  image,
  running_date,
  review,
}) => {
  useEffect(() => {
    fetch(`${API.Review}`, {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    });
  }, []);

  return (
    <ItemWrap>
      <Img src={image} alt="게시물 사진" />
      <Info>
        <h2>{title}</h2>
        <h3> {sub_title}</h3>
        <span>{running_date} </span>
        <MakeReview>
          <Review>{review}</Review>
        </MakeReview>
      </Info>
    </ItemWrap>
  );
};

const ItemWrap = styled.div`
  display: flex;
  gap: 1rem;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 8px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

  h2 {
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 10px;
  }

  h3 {
    font-size: 0.8rem;
    padding-bottom: 10px;
  }

  span {
    padding-bottom: 14px;
    font-size: 10px;
    line-height: 1.5;
  }
`;

const MakeReview = styled.div`
  display: flex;
  width: 37rem;
  align-items: center;
  gap: 1rem;
`;

const Review = styled.div`
  font-size: 0.8rem;
`;
export default ReviewHistoryItem;
