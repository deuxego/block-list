'use client';

import { useSession } from '@/entities/session';
import { SignOutButton, protectedPage } from '@/features/auth';
import { UiButton } from '@/shared/ui/ui-button';
import { UiHeader } from '@/shared/ui/ui-header';
import { UiLink } from '@/shared/ui/ui-link';
import { UiSelectField } from '@/shared/ui/ui-select-field';
import { UiSpinner } from '@/shared/ui/ui-spinner';
import { UiTextField } from '@/shared/ui/ui-text-field';

function Home() {
  const { data } = useSession();

  return (
    <div>
      <UiHeader
        right={
          <div>
            {data?.email} <SignOutButton />
          </div>
        }
      />

      <UiButton variant="primary">Primary</UiButton>
      <UiButton variant="secondary">Secondary</UiButton>
      <UiButton variant="outlined">Outlined</UiButton>
      <UiButton disabled variant="outlined">
        Outlined
      </UiButton>

      <UiTextField
        label="Text Field"
        inputProps={{ placeholder: 'Enter email' }}
      />
      <UiTextField error="Error" inputProps={{ placeholder: 'Enter email' }} />
      <UiTextField />

      <UiSelectField options={[{ value: '1', label: 'Option' }]} />

      <UiLink href={'/'}>v,dkvdkdkv</UiLink>
      <UiSpinner className="h-14 w-14 text-teal-600" />
      {/* <UiPageSpinner /> */}
    </div>
  );
}

export default protectedPage(Home);
