'use client';

import { useBlockListQuery } from '@/entities/block-list';
import { protectedPage } from '@/features/auth';
import { AddBlockItemForm, BlockList } from '@/features/block-list';
import { ToggleBlockingButton } from '@/features/toggle-blocking';
import { UiHeader } from '@/shared/ui/ui-header';
import { Profile } from '@/widgets/profile';

function Home() {
  const { data } = useBlockListQuery({ q: '' });

  return (
    <div className="min-h-screen flex flex-col">
      <UiHeader right={<Profile />} />

      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5 pt-10">
          <ToggleBlockingButton />
        </aside>
        <main className='pt-10 px-5'>
          <h1 className='text-2xl pb-5'>Block List</h1>
          <AddBlockItemForm />

          <BlockList className='mt-4'/>
        </main>
      </div>
    </div>
  );
}

export default protectedPage(Home);
