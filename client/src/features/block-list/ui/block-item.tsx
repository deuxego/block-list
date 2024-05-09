import { useRemoveBlockItemMutation } from '@/entities/block-list';
import { AddBlockItemDtoType } from '@/shared/api/generated';

export const BlockItem = ({
  id,
  type,
  data
}: {
  id: number;
  type: AddBlockItemDtoType;
  data: string;
}) => {
  const { mutate, isPending } = useRemoveBlockItemMutation();

  const handleRemove = () => {
    mutate(id);
  };

  return (
    <div className="flex gap-2">
      <div>
        <div className='text-lg'>{data}</div>
        <div className='text-slate-500'>{type}</div>
      </div>

      <button
        onClick={handleRemove}
        disabled={isPending}
        className="ml-auto p-3 disabled:opacity-50"
      >
        <Trash className='h-6 w-6'/>
      </button>
    </div>
  );
};

const Trash = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="#e12d2d"
        d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
      />
    </svg>
  );
};
