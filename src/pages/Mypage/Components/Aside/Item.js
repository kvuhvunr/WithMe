import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Item = ({ name, url }) => {
  const navigate = useNavigate();

  const goToBox = () => {
    navigate(`/mypage/${url}`);
  };
  return <List onClick={goToBox}>{name}</List>;
};

export default Item;

const List = styled.li`
  padding-top: 10px;
  font-size: 15px;
  font-weight: 300;
  color: #212121;
  cursor: pointer;
  /* text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-position: from-font; */
`;
