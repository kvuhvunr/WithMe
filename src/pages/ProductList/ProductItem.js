import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProductItem = ({
  id,
  img_url,
  title,
  subtitle,
  location,
  running_date,
  price,
}) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    const detailUrl = `/places/detail/${id}`;
    navigate(`${detailUrl}`);
  };

  return (
    <Container key={id} onClick={goToDetail}>
      <ImgHover>
        <Img src={img_url} alt="productImg" />
      </ImgHover>
      <Text>
        <MainText>{title}</MainText>
        <SubText>{subtitle}</SubText>
        <BottomText>
          <Location>{location}</Location>
          <Time>{running_date}</Time>
          <Price>{parseInt(price)}원</Price>
        </BottomText>
      </Text>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3 - 10px);
  height: 400px;
  margin: 50px 15px 0 0;
  &:nth-child(3n) {
    margin-right: 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  transform: scale(1);
  transition: 0.5s;
  height: 244px;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImgHover = styled.div`
  overflow: hidden;
`;

const Text = styled.ul`
  margin-top: 20px;
`;

const MainText = styled.dt`
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

const SubText = styled.dd`
  height: 35px;
  margin-top: 10px;
  font-size: 15px;
`;

const BottomText = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 40px;
  margin-top: 20px;
  border-top: 1px solid lightgray;
`;

const Location = styled.div`
  margin: 8px 0 0 2px;
  font-size: 13px;
`;

const Time = styled(Location)``;

const Price = styled.span`
  position: absolute;
  right: 1px;
  bottom: 1px;
  margin-right: 5px;
`;

export default ProductItem;
