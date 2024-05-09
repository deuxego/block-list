import { useBlockListQuery } from '@/entities/block-list';
import { useDebauncedValue } from '@/shared/lib/react-std';
import { useState } from 'react';

export const useBlockItems = () => {
  const [query, setQuery] = useState('');
  const { data, isLoading } = useBlockListQuery({
    q: useDebauncedValue(query)
  });

  const items = data?.items ?? [];

  return {
    items,
    isLoading,
    query,
    setQuery
  };
};
