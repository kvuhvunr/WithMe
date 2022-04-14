import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CategoryList from './CategoryList';
import API from '../../../../config';

const Aside = ({ isClicked }) => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const goToTab = () => {
    navigate(`/mypage/point`);
  };

  const fetchAsideData = () => {
    fetch(`${API.Aside}`, {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setUserData(data.user_info);
      });
  };

  useEffect(() => {
    fetchAsideData();
  }, [isClicked]);

  const pointString =
    userData.point && userData.point.substring(0, userData.point.length - 3);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('Authorization');
    alert('로그아웃 되었습니다.');
  };

  return (
    <Container>
      <UserInfo>
        <h2>
          {userData.nickname}
          <span> 님</span>
        </h2>
        <span>{userData.email} </span>
        <Kakao>
          카카오 본인 인증 <img src="/images/Mypage/kakao.png" alt="logo" />
        </Kakao>
        <Point>포인트 내역: {pointString}원 </Point>
      </UserInfo>
      {CATEGORY_LIST.map(({ id, name, category }) => {
        return (
          <div key={id}>
            <List onClick={goToTab}>{name}</List>
            <CategoryList category={category} />
          </div>
        );
      })}
      <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 285px;
  margin-right: 50px;
  padding-top: 50px;
  padding-bottom: 140px;
`;

const UserInfo = styled.div`
  line-height: 1.3;

  h2 {
    margin-bottom: 10px;
    font-size: 32px;
    font-weight: 700;
    color: #212121;

    span {
      display: inline;
      font-weight: 600;
      font-size: 18px;
    }
  }

  span {
    display: block;
    font-size: 13px;
    line-height: 23px;
    font-weight: 400;
  }
`;

const Kakao = styled.div`
  color: #b2b2b2;
  font-size: 14px;
  font-weight: 500;

  img {
    width: 13px;
  }
`;

const Point = styled.p`
  color: #b2b2b2;
  font-size: 15px;
  font-weight: 500;
`;

const List = styled.div`
  font-weight: 700;
  margin-top: 40px;
  color: #212121;
  font-size: 18px;
  cursor: pointer;
`;

const LogoutBtn = styled.button`
  padding: 1rem 0;
  border: 0;
  font-size: 17px;
`;

const CATEGORY_LIST = [
  {
    id: 1,
    name: '남의 집 관리',
    category: [
      {
        id: 1,
        name: '내역',
        url: '',
      },
      {
        id: 2,
        name: '후기',
        url: 'review',
      },
    ],
  },
  {
    id: 2,
    name: '포인트 충전',
    url: 'point',
  },
];

export default Aside;
