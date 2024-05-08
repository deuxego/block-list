import { useSession } from '@/entities/session';
import { SignOutButton } from '@/features/auth';

export const Profile = () => {
  const { data: session } = useSession();

  return (
    <div className="flex gap-2 items-center">
      {session?.email} <SignOutButton />
    </div>
  );
};
