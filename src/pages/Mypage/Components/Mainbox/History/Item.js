import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import API from '../../../../../config';

const Item = ({
  title,
  sub_title,
  image,
  location,
  reservation,
  running_date,
  place_id,
  fetchData,
  setIsClicked,
}) => {
  const navigate = useNavigate();

  const reservationDelete = () => {
    fetch(`${API.History}`, {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
      method: 'POST',
      body: JSON.stringify({
        place_id: place_id,
      }),
    })
      .then(alert('예약이 취소되었습니다.'))
      .then(setIsClicked(true));
    // .then(
    //   setTimeout(() => {
    //     fetchData();
    //   }, 100)
    // );
  };

  const goToDetail = () => {
    navigate(`/places/detail/${place_id}`);
  };

  return (
    <ItemWrap key={reservation}>
      <Wrap onClick={goToDetail}>
        <img src={image} alt="img" />
        <Info>
          <h2>{title}</h2>
          <h3>{sub_title}</h3>
          <span>진행일자 : {running_date}</span>
          <span>진행장소 : {location}</span>
        </Info>
      </Wrap>
      <ReservationBtn onClick={reservationDelete}>예약 취소</ReservationBtn>
    </ItemWrap>
  );
};

const ItemWrap = styled.div`
  display: flex;
  position: relative;
  gap: 1rem;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  img {
    width: 150px;
    height: 150px;
  }
`;

const Wrap = styled.div`
  display: flex;
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  margin-left: 1rem;

  h2 {
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 10px;
  }

  h3 {
    font-size: 15px;
    padding-bottom: 10px;
  }

  span {
    font-size: 13px;
    line-height: 1.5;
  }
`;

const ReservationBtn = styled.button`
  position: absolute;
  right: 3rem;
  top: 3.5rem;
  width: 100px;
  height: 40px;
  background-color: #212121;
  color: #fff;
  border: 0;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
`;

export default Item;
