import {
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem
} from '@/shared/api/generated';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const blockListKey = ['block-list'] as unknown[];

export const useBlockListQuery = ({ q }: { q: string }) => {
  return useQuery({
    queryKey: blockListKey.concat([[{ q }]]),
    queryFn: () => blockListControllerGetList({ q }),
    placeholderData: (prev) => prev
  });
};

export const useAddBlockItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: blockListKey });
    }
  });
};

export const useRemoveBlockItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: blockListKey });
    }
  });
};
