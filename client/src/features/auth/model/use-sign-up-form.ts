import { authControllerSignUp } from '@/shared/api/generated';
import { ROUTES } from '@/shared/constants/routes';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const useSignUpForm = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const {
    mutate: signUp,
    isPending,
    error
  } = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess: () => router.push(ROUTES.HOME)
  });

  const errorMsg = error ? 'Sign up failed' : undefined;

  return {
    handleSubmit: handleSubmit((data) => signUp(data)),
    register,
    errorMsg,
    isLoading: isPending
  };
};
