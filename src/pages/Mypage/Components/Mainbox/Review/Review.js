import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from '../../../../../styles/Mixin';
import ReviewItem from './ReviewAbleItem';
import ReviewHistoryItem from './ReviewHistoryItem';
import API from '../../../../../config';

const Review = () => {
  const [selectReview, setSelectHistory] = useState('First');
  const [ReviewData, setReviewData] = useState([]);

  const navigate = useNavigate();
  const goToDetail = () => {
    navigate('/places');
  };

  useEffect(() => {
    fetch(`${API.Review}`, {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setReviewData(data.review);
      });
  }, []);

  return (
    <HistoryWrap>
      <HistoryTitle>
        <img src="/images/mypage/iconreview.png" alt="history" />
        <h1>후기</h1>
      </HistoryTitle>

      <Title>
        <FirstList
          onClick={() => {
            setSelectHistory('First');
          }}
          selectReview={selectReview}
        >
          작성 가능한 후기
        </FirstList>

        <SecondList
          onClick={() => {
            setSelectHistory('Second');
          }}
          selectReview={selectReview}
        >
          내가 작성한 후기
        </SecondList>
      </Title>

      <MainContainer>
        {selectReview === 'First' && (
          <div>
            {ReviewData && ReviewData.length === 0 ? (
              <ReviewNoneBox>
                <p>아직 작성 가능한 후기가 없으시네요!</p>
                <p>남의집에 놀러 다녀오신 후, 후기를 남겨보세요.</p>
                <button onClick={goToDetail}>남의집 둘러보기</button>
              </ReviewNoneBox>
            ) : (
              <ReviewBox>
                {ReviewData &&
                  ReviewData.map(data => {
                    return <ReviewItem key={data.id} {...data} />;
                  })}
              </ReviewBox>
            )}
          </div>
        )}

        {selectReview === 'Second' && (
          <div>
            {ReviewData.length === 0 ? (
              <ReviewNoneBox>
                <p>작성한 후기가 없으시네요!</p>
                <p>남의집에 놀러 다녀오신 후, 후기를 남겨보세요.</p>
                <button onClick={goToDetail}>남의집 둘러보기</button>
              </ReviewNoneBox>
            ) : (
              <ReviewBox>
                {ReviewData.map(data => {
                  return <ReviewHistoryItem key={data.id} {...data} />;
                })}
              </ReviewBox>
            )}
          </div>
        )}
      </MainContainer>
    </HistoryWrap>
  );
};

const HistoryWrap = styled.div`
  width: 50rem;
  margin-bottom: 10rem;
`;

const HistoryTitle = styled.div`
  ${Flex('center', 'center')}
  gap: 10px;
  height: 150px;
  border-bottom: 1px solid #ddd;

  img {
    width: 30px;
    height: 30px;
  }

  h1 {
    font-weight: 600;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  font-size: 14px;
  font-weight: 700;
`;

const FirstList = styled.div`
  ${Flex('center', 'center')}
  width: 50%;
  height: 100%;
  font-weight: 700;
  color: black;
  cursor: pointer;
  color: ${props => (props.selectReview === 'First' ? '#000' : '#ddd')};
  border-bottom: ${props =>
    props.selectReview === 'First' ? '2px solid #000' : '1px solid #ddd'}; ;
`;

const SecondList = styled(FirstList)`
  color: ${props => (props.selectReview === 'Second' ? '#000' : '#ddd')};
  border-bottom: ${props =>
    props.selectReview === 'Second' ? '2px solid #000' : '1px solid #ddd'}; ;
`;

const ReviewNoneBox = styled.div`
  ${Flex('center', 'center')}
  flex-direction: column;
  position: relative;
  background-color: #f6f6f6;
  height: 415px;

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

const MainContainer = styled.div`
  height: 30rem;
  overflow: scroll;
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Review;
