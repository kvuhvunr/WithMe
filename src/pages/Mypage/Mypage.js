import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Aside from './Components/Aside/Aside';
import History from './Components/Mainbox/History/History';
import Review from './Components/Mainbox/Review/Review';
import Point from './Components/Mainbox/Point/Point';
import API from '../../config';

const Mypage = () => {
  const [historyData, setHistoryData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch(`${API.Mypage}`, {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setHistoryData(data.result);
      });
  }, []);

  return (
    <Container>
      <Aside
        nickname={historyData.nickname}
        email={historyData.email}
        point={historyData.point}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <Routes>
        <Route
          path="/"
          element={
            <History
              reservation_list={historyData.reservation_list}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
          }
        />
        <Route path="/review" element={<Review />} />
        <Route path="/point" element={<Point setIsClicked={setIsClicked} />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 82vw;
  margin: 0 auto;
`;

export default Mypage;
