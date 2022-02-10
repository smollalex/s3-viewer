import React from 'react';
import {AlbumProps} from '@components/Album';
import { Select } from './styled';

type FilterProps = {
  filters?: AlbumProps[]
  selectedFilter: string
  setSelectedFilter: (value: string) => void
}

export const Filter: React.FC<FilterProps> = (props) => {
  const {
    filters,
    selectedFilter,
    setSelectedFilter
  } = props;

  return (
    <Select
      value={selectedFilter}
      onChange={e => setSelectedFilter(e.target.value)}
    >
      <option value="all">All</option>
      {filters?.map((filter) => <option value={filter.title} key={filter.title}>{filter.title}</option>)}
    </Select>
  );
}
