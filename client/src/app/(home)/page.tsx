'use client';

import { authControllerGetSession } from '@/shared/api/generated';
import { UiButton } from '@/shared/ui/ui-button';
import { UiHeader } from '@/shared/ui/ui-header';
import { UiLink } from '@/shared/ui/ui-link';
import { UiPageSpinner } from '@/shared/ui/ui-page-spinner';
import { UiSelectField } from '@/shared/ui/ui-select-field';
import { UiSpinner } from '@/shared/ui/ui-spinner';
import { UiTextField } from '@/shared/ui/ui-text-field';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data } = useQuery({
    queryKey: ['auth'],
    queryFn: authControllerGetSession
  });

  return (
    <div className="">
      <UiHeader right={<div>{data?.email}</div>}/>

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
      <UiSpinner className='h-14 w-14 text-teal-600'/>
      {/* <UiPageSpinner /> */}
    </div>
  );
}
