'use client';

import { protectedPage } from '@/features/auth';
import { ToggleBlockingButton } from '@/features/toggle-blocking';
import { UiHeader } from '@/shared/ui/ui-header';
import { Profile } from '@/widgets/profile';

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <UiHeader right={<Profile />} />

      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5 pt-10">
          <ToggleBlockingButton />
        </aside>
        <main>Block List</main>
      </div>
    </div>
  );
}

export default protectedPage(Home);
