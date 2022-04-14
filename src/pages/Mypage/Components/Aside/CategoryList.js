import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const CategoryList = ({ category }) => {
  return (
    <List>
      {category &&
        category.map(data => {
          return <Item key={data.id} name={data.name} url={data.url} />;
        })}
    </List>
  );
};

const List = styled.div`
  padding: 2px;
`;

export default CategoryList;
