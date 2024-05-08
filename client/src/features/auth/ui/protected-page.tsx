'use client';

import { useSession } from '@/entities/session';
import { ROUTES } from '@/shared/constants/routes';
import { UiPageSpinner } from '@/shared/ui/ui-page-spinner';
import { useRouter } from 'next/navigation';
import { ReactElement } from 'react';

export const protectedPage = (Component: () => ReactElement) => {
  return function ProtectedPage() {
    const router = useRouter();
    const { isLoading, isError } = useSession();

    if (isLoading) {
      return <UiPageSpinner />;
    }

    if (isError) {
      router.replace(ROUTES.SIGN_IN);
    }

    return <Component />;
  };
};
