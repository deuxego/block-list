import { authControllerGetSession } from '@/shared/api/generated';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const session = ['session'];

export const useSession = () => {
  return useQuery({
    queryKey: session,
    queryFn: authControllerGetSession,
    retry: 0,
    staleTime: 10 * 60 * 1000
  });
};

export const useResetSession = () => {
  const queryClient = useQueryClient();
  return () => queryClient.removeQueries({ queryKey: session });
};
