'use client';

import { authControllerSignIn } from '@/shared/api/generated';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    authControllerSignIn({ email: 'test@gmail.com', password: '1234' }).then(
      console.log
    );
  }, []);
  return (
   <div>work</div>
  );
}
