import { ReactNode } from 'react';

export const UiFormPageLayout = ({
  title,
  header,
  form
}: {
  title: string;
  header?: ReactNode;
  form?: ReactNode;
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {header}

      <main className="grow flex flex-col pt-24">
        <div className="rounded-xl border border-slate-300 px-4 py-8 pb-8 w-full max-w-[400px] bg-white self-center">
          <h1 className="text-2xl mb-8">{title}</h1>
          {form}
        </div>
      </main>
    </div>
  );
};
