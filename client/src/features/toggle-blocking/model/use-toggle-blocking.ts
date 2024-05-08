import { useAccountQuery, useUpdateAccountMutation } from '@/entities/account';

export const useToggleBlocking = () => {
  const accountQuery = useAccountQuery();
  const updateAccountMutation = useUpdateAccountMutation();

  const toggleBlocking = () => {
    if (accountQuery.data) {
      updateAccountMutation.mutate({
        isBlockingEnabled: !accountQuery.data?.isBlockingEnabled
      });
    }
  };

  return {
    isLoading: accountQuery.isLoading || updateAccountMutation.isPending,
    isBlockingEnabled: accountQuery.data?.isBlockingEnabled ?? false,
    toggleBlocking,
    isReady: accountQuery.isSuccess
  };
};
