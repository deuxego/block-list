import { authControllerSignIn } from '@/shared/api/generated';
import { ROUTES } from '@/shared/constants/routes';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const useSignInForm = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const {
    mutate: signIn,
    isPending,
    error
  } = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess: () => router.push(ROUTES.HOME)
  });

  const errorMsg = error ? 'Sign up failed' : undefined;

  return {
    handleSubmit: handleSubmit((data) => signIn(data)),
    register,
    errorMsg,
    isLoading: isPending
  };
};
