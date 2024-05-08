import clsx from 'clsx';

export const UiLogo = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(className, 'flex items-center gap-2 text-xl')}>
      <Shield className="w-12 h-12" />
      Easy Block
    </div>
  );
};

export const Shield = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="#888888"
      d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.263 6.913T12 22Zm0-5q0-2.1 1.45-3.55T17 12q-2.1 0-3.55-1.45T12 7q0 2.1-1.45 3.55T7 12q2.1 0 3.55 1.45T12 17Z"
    />
  </svg>
);
