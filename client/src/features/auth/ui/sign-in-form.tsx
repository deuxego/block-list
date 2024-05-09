'use client';

import { ROUTES } from '@/shared/constants/routes';
import { UiButton } from '@/shared/ui/ui-button';
import { UiLink } from '@/shared/ui/ui-link';
import { UiTextField } from '@/shared/ui/ui-text-field';
import { useSignInForm } from '../model/use-sign-in-form';

export const SignInForm = () => {
  const { handleSubmit, register, isLoading, errorMsg } = useSignInForm();

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
        Sign In
      </UiButton>

      <UiLink href={ROUTES.SIGN_UP}>Create account</UiLink>
    </form>
  );
};
