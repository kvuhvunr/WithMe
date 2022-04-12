import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductItem from './ProductItem';
import PlaceFilter from './Filter/PlaceFilter';
import RecruitFilter from './Filter/RecruitFilter';
import SortFilter from './Filter/SortFilter';
import { Flex } from '../../styles/Mixin';
import API from '../../config';

const Productlist = () => {
  const [productitem, setProductitem] = useState([]);
  const [filterDisabled, setFilterDisabled] = useState(true);
  const [placeInput, setPlaceInput] = useState('');
  const [recruitInput, setRecruitInput] = useState('');
  const [sortInput, setSortInput] = useState('');
  const [filterValue, setFilterValue] = useState({
    status: '',
    participant: '',
    sort: '',
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API.Productlist}${location.search}`)
      .then(res => res.json())
      .then(data => {
        setProductitem(data.result);
      });
  }, [location.search]);

  useEffect(() => {
    const queryString = `/places/placelist?${
      filterValue.status ? `status=${filterValue.status}` : ''
    }${filterValue.participant && filterValue.status ? `&` : ''}${
      filterValue.participant ? `participant=${filterValue.participant}` : ''
    }${
      (filterValue.participant && filterValue.sort) ||
      (filterValue.status && filterValue.sort)
        ? `&`
        : ''
    }${filterValue.sort ? `sort=${filterValue.sort}` : ''}`;
    navigate(queryString);
  }, [filterValue.status, filterValue.participant, filterValue.sort, navigate]);

  const resetUrl = () => {
    setFilterDisabled(true);
    setPlaceInput('');
    setRecruitInput('');
    setSortInput('');
    setFilterValue({
      status: '',
      participant: '',
      sort: '',
    });
  };

  return (
    <Container>
      <Filter>
        <FilterTrack>
          <PlaceFilterTrack>
            <PlaceFilter
              setFilterValue={setFilterValue}
              filterValue={filterValue}
              setFilterDisabled={setFilterDisabled}
              setPlaceInput={setPlaceInput}
              placeInput={placeInput}
            />
          </PlaceFilterTrack>
          <RecruitFilterTrack>
            <RecruitFilter
              setFilterValue={setFilterValue}
              filterValue={filterValue}
              filterDisabled={!filterDisabled}
              setRecruitInput={setRecruitInput}
              recruitInput={recruitInput}
            />
          </RecruitFilterTrack>
          <FilterReset onClick={resetUrl}>필터 초기화</FilterReset>
        </FilterTrack>
      </Filter>
      <MainContainer>
        <Title>
          <MainTitle>새로운 놀이터</MainTitle>
          <SortFilterTrack>
            <SortFilter
              setFilterValue={setFilterValue}
              filterValue={filterValue}
              filterDisabled={!filterDisabled}
              setSortInput={setSortInput}
              sortInput={sortInput}
            />
          </SortFilterTrack>
        </Title>
        <Products>
          {productitem &&
            productitem.map((item, idx) => {
              return <ProductItem key={idx} {...item} />;
            })}
        </Products>
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-weight: lighter;
`;

const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid lightgray;
`;

const FilterTrack = styled.div`
  ${Flex('center')};
  margin-left: -650px;
`;

const PlaceFilterTrack = styled.div`
  height: 45px;
  margin: 12px 15px 0 0;
`;

const RecruitFilterTrack = styled(PlaceFilterTrack)`
  .css-1in441m > span {
    padding-right: 20px;
  }
`;

const SortFilterTrack = styled.div`
  .css-1in441m > span {
    padding-right: 30px;
  }
`;

const FilterReset = styled.button`
  width: 100px;
  margin-top: 20px;
  background-image: url('/images/ProductList/reset.png');
  background-repeat: no-repeat;
  background-size: 12px 12px;
  background-position: center right 1px;
  border: none;
  color: lightgray;
`;

const MainContainer = styled.div`
  position: relative;
  width: 1140px;
  margin-top: 70px;
`;

const Title = styled.div`
  ${Flex('space-between', 'center')};
  position: relative;
  margin-top: 100px;
`;

const MainTitle = styled.span`
  font-size: 30px;
  font-weight: 500;
`;

const Products = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export default Productlist;
