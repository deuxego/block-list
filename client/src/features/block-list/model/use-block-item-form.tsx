import { useAddBlockItemMutation } from '@/entities/block-list';
import { AddBlockItemDtoType } from '@/shared/api/generated';
import { useForm } from 'react-hook-form';

export const useAddBlockItemForm = () => {
  const { handleSubmit, register, watch, reset } = useForm<{
    type: AddBlockItemDtoType;
    data: string;
  }>({
    defaultValues: {
      type: AddBlockItemDtoType.Website
    }
  });
  const { mutate, isPending } = useAddBlockItemMutation();
  const type = watch('type');

  return {
    handleSubmit: handleSubmit((data) => {
      mutate(data, {
        onSuccess() {
          reset();
        }
      });
    }),
    isLoading: isPending,
    register,
    type
  };
};
