'use client';

import { useResetSession } from '@/entities/session';
import { authControllerSignOut } from '@/shared/api/generated';
import { ROUTES } from '@/shared/constants/routes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useSignOut = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const resetSession = useResetSession();

  const { mutate: signOut, isPending } = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess() {
      router.push(ROUTES.SIGN_IN);
      resetSession();
    }
  });

  return {
    signOut,
    isLoading: isPending
  };
};
