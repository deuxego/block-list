import {
  accountControllerGetAccount,
  accountControllerPatchAccount
} from '@/shared/api/generated';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const accountKey = ['account'];

export const useAccountQuery = () => {
  return useQuery({
    queryKey: accountKey,
    queryFn: accountControllerGetAccount
  });
};

export const useUpdateAccountMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: accountControllerPatchAccount,
    onSuccess(data) {
      queryClient.setQueryData(accountKey, data);
    },
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: accountKey });
    }
  });
};
