/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Block list
 * OpenAPI spec version: 1.0.0
 */
import { createInstance } from './api-instance';
import type { BodyType } from './api-instance';
export type BlockListControllerGetListParams = {
  q?: string;
};

export interface GetSessionInfoDto {
  email: string;
  exp: number;
  iat: number;
  id: number;
}

export interface SignInBodyDto {
  email: string;
  password: string;
}

export interface SignUpBodyDto {
  email: string;
  password: string;
}

export type AddBlockItemDtoType =
  (typeof AddBlockItemDtoType)[keyof typeof AddBlockItemDtoType];

export const AddBlockItemDtoType = {
  Website: 'Website',
  KeyWord: 'KeyWord'
} as const;

export interface AddBlockItemDto {
  blockListId: number;
  data: string;
  type: AddBlockItemDtoType;
}

export type BlockItemDtoType =
  (typeof BlockItemDtoType)[keyof typeof BlockItemDtoType];

export const BlockItemDtoType = {
  Website: 'Website',
  KeyWord: 'KeyWord'
} as const;

export interface BlockItemDto {
  blockListId: number;
  createdAt: string;
  data: string;
  id: number;
  type: BlockItemDtoType;
}

export interface BlockListDto {
  id: number;
  items: BlockItemDto[];
  ownerId: number;
}

export interface PatchAccountDto {
  isBlockingEnabled?: boolean;
}

export interface AccountDto {
  id: number;
  isBlockingEnabled: boolean;
  ownerId: number;
}

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const appControllerGetHello = (
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<void>({ url: `/`, method: 'GET' }, options);
};

export const accountControllerGetAccount = (
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<AccountDto>(
    { url: `/account`, method: 'GET' },
    options
  );
};

export const accountControllerPatchAccount = (
  patchAccountDto: BodyType<PatchAccountDto>,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<AccountDto>(
    {
      url: `/account`,
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      data: patchAccountDto
    },
    options
  );
};

export const blockListControllerGetList = (
  params?: BlockListControllerGetListParams,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<BlockListDto>(
    { url: `/block-list`, method: 'GET', params },
    options
  );
};

export const blockListControllerAddBlockItem = (
  addBlockItemDto: BodyType<AddBlockItemDto>,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<BlockItemDto>(
    {
      url: `/block-list/item`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: addBlockItemDto
    },
    options
  );
};

export const blockListControllerRemoveBlockItem = (
  id: number,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<BlockItemDto>(
    { url: `/block-list/item/${id}`, method: 'DELETE' },
    options
  );
};

export const authControllerSignUp = (
  signUpBodyDto: BodyType<SignUpBodyDto>,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<void>(
    {
      url: `/auth/sign-up`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: signUpBodyDto
    },
    options
  );
};

export const authControllerSignIn = (
  signInBodyDto: BodyType<SignInBodyDto>,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<void>(
    {
      url: `/auth/sign-in`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: signInBodyDto
    },
    options
  );
};

export const authControllerSignOut = (
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<void>(
    { url: `/auth/sign-out`, method: 'POST' },
    options
  );
};

export const authControllerGetSession = (
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<GetSessionInfoDto>(
    { url: `/auth/session`, method: 'GET' },
    options
  );
};

export type AppControllerGetHelloResult = NonNullable<
  Awaited<ReturnType<typeof appControllerGetHello>>
>;
export type AccountControllerGetAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerGetAccount>>
>;
export type AccountControllerPatchAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerPatchAccount>>
>;
export type BlockListControllerGetListResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerGetList>>
>;
export type BlockListControllerAddBlockItemResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerAddBlockItem>>
>;
export type BlockListControllerRemoveBlockItemResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerRemoveBlockItem>>
>;
export type AuthControllerSignUpResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignUp>>
>;
export type AuthControllerSignInResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignIn>>
>;
export type AuthControllerSignOutResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignOut>>
>;
export type AuthControllerGetSessionResult = NonNullable<
  Awaited<ReturnType<typeof authControllerGetSession>>
>;
