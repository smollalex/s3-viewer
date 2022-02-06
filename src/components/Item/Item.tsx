import React from 'react';
import {ImageProps, ItemProps} from './types';
import { Wrapper, Tag, Image } from './styled';

export const Item: React.FC<ItemProps> = (props) => {
  const {
    item,
    onClick
  } = props;

  return (
    <Wrapper onClick={() => onClick(item)}>
      <Image>
        <img src={item.url} alt={item.filename} />
      </Image>
      <Tag>{item.filename}</Tag>
    </Wrapper>
  );
}
