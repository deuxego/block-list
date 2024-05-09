import { UiButton } from '@/shared/ui/ui-button';
import { useSignOut } from '../model/use-sign-out';
import { useQueryClient } from '@tanstack/react-query';

export const SignOutButton = () => {
  const { signOut, isLoading } = useSignOut();

  return (
    <UiButton
      variant="outlined"
      disabled={isLoading}
      onClick={() => signOut({})}
    >
      Sign Out
    </UiButton>
  );
};
