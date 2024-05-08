import { SignUpForm } from '@/features/auth';
import { UiFormPageLayout } from '@/shared/ui/layouts/ui-form-page-layout';
import { UiHeader } from '@/shared/ui/ui-header';

const Page = () => {
  return (
    <UiFormPageLayout
      title="Sign Up"
      header={<UiHeader />}
      form={<SignUpForm />}
    />
  );
};

export default Page;
