import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Item from './Item';
import { Flex } from '../../../../../styles/Mixin';
import API from '../../../../../config';

const History = ({ isClicked, setIsClicked }) => {
  const [HistoryData, setHistoryData] = useState([]);

  const fetchData = useCallback(() => {
    async function fetchAndSetHistoryData() {
      const response = await fetch(`${API.History}`, {
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
      });
      const data = await response.json();
      setHistoryData(data.result.reservation_list);
    }
    fetchAndSetHistoryData();
  }, [isClicked]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <HistoryWrap>
      <HistoryTitle>
        <img src="/images/mypage/house_icon.png" alt="history" />
        <h1>내역</h1>
      </HistoryTitle>
      <Title>
        <span>신청내역</span>
      </Title>

      {HistoryData && HistoryData.length === 0 ? (
        <HistoryNoneBox>
          <p>아직 신청한 남의집이 없으시네요!</p>
          <p>지금 바로 남의집에 놀러가보세요.</p>
          <Link to="/productlist">
            <button>남의집 둘러보기</button>
          </Link>
        </HistoryNoneBox>
      ) : (
        <HistoryBox>
          {HistoryData &&
            HistoryData.map((data, idx) => {
              return (
                <Item
                  key={idx}
                  {...data}
                  fetchData={fetchData}
                  setIsClicked={setIsClicked}
                />
              );
            })}
        </HistoryBox>
      )}
    </HistoryWrap>
  );
};

const HistoryWrap = styled.div`
  width: 50rem;
`;

const HistoryTitle = styled.div`
  ${Flex('center', 'center')}
  gap: 10px;
  border-bottom: 1px solid #ddd;
  height: 150px;

  img {
    width: 30px;
    height: 30px;
  }

  h1 {
    font-weight: 600;
  }
`;

const Title = styled.div`
  ${Flex('center', 'center')}
  height: 45px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  font-weight: 700;
`;

const HistoryNoneBox = styled.div`
  ${Flex('center', 'center')}
  flex-direction: column;
  position: relative;
  height: 415px;
  background-color: #f6f6f6;

  p {
    display: block;
    color: #919191;
    font-size: 14px;
    line-height: 1.2;
    font-weight: 400;
  }

  button {
    display: block;
    margin: 20px auto 0;
    height: 50px;
    width: 140px;
    background-color: #212121;
    color: #fff;
    border: 0;
    font-size: 15px;
    border-radius: 5px;
  }
`;

const HistoryBox = styled.div`
  height: 35rem;
  overflow: scroll;
  border-bottom: 1px solid #ddd;
`;

export default History;
