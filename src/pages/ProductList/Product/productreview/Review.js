import React from 'react';
import styled from 'styled-components';

const Review = ({ nickname, content, running_date }) => {
  return (
    <Container>
      <Title />
      <Reviewer>
        <Name>{nickname}</Name>
        <Date>{running_date}</Date>
      </Reviewer>
      <Text>{content}</Text>
      <hr />
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.div`
  display: flex;
  font-size: 30px;
`;
const Reviewer = styled.div`
  display: flex;
  margin: 30px 0;
`;

const Name = styled.dt``;

const Date = styled.dd`
  margin-left: 30px;
`;

const Text = styled.div`
  font-size: 18px;
  margin-bottom: 25px;
`;

export default Review;
