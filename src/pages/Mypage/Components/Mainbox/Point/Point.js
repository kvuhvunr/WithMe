import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Flex } from '../../../../../styles/Mixin';
import API from '../../../../../config';

const Point = ({ setIsClicked }) => {
  const [point, setPoint] = useState();

  const handlePointInputValue = e => {
    const { value } = e.target;
    setPoint(value);
  };

  const postReview = () => {
    fetch(`${API.Point}`, {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
      method: 'POST',
      body: JSON.stringify({
        point: point,
      }),
    }).then(res => {
      const { status } = res;
      if (status === 400) {
        alert('포인트를 입력해주세요!');
      }
      if (status === 200) {
        alert('포인트가 충전되었습니다!');
        setIsClicked(true);
      }
    });
  };

  return (
    <Container>
      <Title>
        <img src="/images/Mypage/coinpig.png" alt="logo" />
        <h1>포인트</h1>
      </Title>
      <PointBox>
        <Input>
          <input
            placeholder="충전할 금액"
            value={point || ''}
            onChange={handlePointInputValue}
            maxLength="6"
          />
          <button onClick={postReview}>충전하기</button>
        </Input>
      </PointBox>
    </Container>
  );
};

export default Point;

const Container = styled.section`
  width: 50rem;
`;

const Title = styled.div`
  ${Flex('center', 'center')}
  gap: 10px;
  height: 150px;
  border-bottom: 1px solid #ddd;

  img {
    width: 35px;
    height: 35px;
  }

  h1 {
    padding-top: 7px;
    font-weight: 600;
    font-size: 19px;
  }
`;

const PointBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    width: 10rem;
    height: 3rem;
    border-radius: 10px;
  }

  button {
    display: block;
    width: 5rem;
    height: 40px;
    background-color: #212121;
    color: #fff;
    border: 0;
    font-size: 15px;
    border-radius: 5px;
  }
`;
