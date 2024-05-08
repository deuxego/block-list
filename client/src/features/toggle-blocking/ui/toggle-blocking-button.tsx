import { UiButton } from '@/shared/ui/ui-button';
import { useToggleBlocking } from '../model/use-toggle-blocking';

export const ToggleBlockingButton = () => {
  const { isBlockingEnabled, toggleBlocking, isLoading, isReady } = useToggleBlocking();

  if(!isReady){
    return null;
  }

  return (
    <UiButton
      onClick={toggleBlocking}
      disabled={isLoading}
      variant={isBlockingEnabled ? 'secondary' : 'primary'}
    >
      {isBlockingEnabled ? 'Disable blocking' : 'Enable blocking'}
    </UiButton>
  );
};
