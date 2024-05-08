'use client';

import { useSession } from '@/entities/session';
import { authControllerGetSession } from '@/shared/api/generated';
import { ROUTES } from '@/shared/constants/routes';
import { UiPageSpinner } from '@/shared/ui/ui-page-spinner';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, ReactElement } from 'react';

export const protectedPage = <P,>(Component: (props: P) => ReactElement) => {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();
    const { isLoading, isError } = useSession();

    if (isLoading) {
      return <UiPageSpinner />;
    }

    if (isError) {
      router.replace(ROUTES.SIGN_IN);
    }

    return <Component {...props} />;
  };
};
