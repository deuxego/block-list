'use client';

import { ROUTES } from '@/shared/constants/routes';
import { UiButton } from '@/shared/ui/ui-button';
import { UiLink } from '@/shared/ui/ui-link';
import { UiTextField } from '@/shared/ui/ui-text-field';
import { useSignUpForm } from '../model/use-sign-up-form';

export const SignUpForm = () => {
  const { handleSubmit, register, isLoading, errorMsg } = useSignUpForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UiTextField
        label="Email"
        inputProps={{ type: 'email', ...register('email', { required: true }) }}
      />
      <UiTextField
        label="Password"
        inputProps={{
          type: 'password',
          ...register('password', { required: true })
        }}
      />
      {errorMsg && <p className="text-rose-500">{errorMsg}</p>}

      <UiButton disabled={isLoading} variant="primary">
        Sign Up
      </UiButton>

      <UiLink href={ROUTES.SIGN_IN}>Already have an account? Sign In</UiLink>
    </form>
  );
};
