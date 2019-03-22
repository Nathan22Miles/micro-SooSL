/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateSignInput = {
  id?: string | null,
  project: string,
  data: string,
};

export type UpdateSignInput = {
  id: string,
  project?: string | null,
  data?: string | null,
};

export type DeleteSignInput = {
  id?: string | null,
};

export type ModelSignFilterInput = {
  id?: ModelIDFilterInput | null,
  project?: ModelStringFilterInput | null,
  data?: ModelStringFilterInput | null,
  and?: Array< ModelSignFilterInput | null > | null,
  or?: Array< ModelSignFilterInput | null > | null,
  not?: ModelSignFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateSignMutationVariables = {
  input: CreateSignInput,
};

export type CreateSignMutation = {
  createSign:  {
    __typename: "Sign",
    id: string,
    project: string,
    data: string,
  } | null,
};

export type UpdateSignMutationVariables = {
  input: UpdateSignInput,
};

export type UpdateSignMutation = {
  updateSign:  {
    __typename: "Sign",
    id: string,
    project: string,
    data: string,
  } | null,
};

export type DeleteSignMutationVariables = {
  input: DeleteSignInput,
};

export type DeleteSignMutation = {
  deleteSign:  {
    __typename: "Sign",
    id: string,
    project: string,
    data: string,
  } | null,
};

export type GetSignQueryVariables = {
  id: string,
};

export type GetSignQuery = {
  getSign:  {
    __typename: "Sign",
    id: string,
    project: string,
    data: string,
  } | null,
};

export type ListSignsQueryVariables = {
  filter?: ModelSignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSignsQuery = {
  listSigns:  {
    __typename: "ModelSignConnection",
    items:  Array< {
      __typename: "Sign",
      id: string,
      project: string,
      data: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateSignSubscription = {
  onCreateSign:  {
    __typename: "Sign",
    id: string,
    project: string,
    data: string,
  } | null,
};

export type OnUpdateSignSubscription = {
  onUpdateSign:  {
    __typename: "Sign",
    id: string,
    project: string,
    data: string,
  } | null,
};

export type OnDeleteSignSubscription = {
  onDeleteSign:  {
    __typename: "Sign",
    id: string,
    project: string,
    data: string,
  } | null,
};
