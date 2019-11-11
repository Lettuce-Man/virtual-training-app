/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateFitnessLiveClassesInput = {
  title: string,
  description: string,
  equipment: string,
  image?: string | null,
  trainer: string,
  targets?: Array< string | null > | null,
  calories?: number | null,
  start_date: string,
  end_date: string,
  start_time: string,
  end_time: string,
  level: number,
  price: number,
  day: string,
  zoom: string,
};

export type UpdateFitnessLiveClassesInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  equipment?: string | null,
  image?: string | null,
  trainer?: string | null,
  targets?: Array< string | null > | null,
  calories?: number | null,
  start_date?: string | null,
  end_date?: string | null,
  start_time?: string | null,
  end_time?: string | null,
  level?: number | null,
  price?: number | null,
  day?: string | null,
  zoom?: string | null,
};

export type DeleteFitnessLiveClassesInput = {
  id: string,
};

export type TableFitnessLiveClassesFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  equipment?: TableStringFilterInput | null,
  image?: TableStringFilterInput | null,
  calories?: TableIntFilterInput | null,
  start_date?: TableStringFilterInput | null,
  end_date?: TableStringFilterInput | null,
  start_time?: TableStringFilterInput | null,
  end_time?: TableStringFilterInput | null,
  level?: TableIntFilterInput | null,
  price?: TableIntFilterInput | null,
  day?: TableStringFilterInput | null,
  zoom?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
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

export type TableStringFilterInput = {
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

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateFitnessLiveClassesMutationVariables = {
  input: CreateFitnessLiveClassesInput,
};

export type CreateFitnessLiveClassesMutation = {
  createFitnessLiveClasses:  {
    __typename: "FitnessLiveClasses",
    id: string,
    title: string,
    description: string,
    equipment: string,
    image: string | null,
    trainer: string,
    targets: Array< string | null > | null,
    calories: number | null,
    start_date: string,
    end_date: string,
    start_time: string,
    end_time: string,
    level: number,
    price: number,
    day: string,
    zoom: string,
  } | null,
};

export type UpdateFitnessLiveClassesMutationVariables = {
  input: UpdateFitnessLiveClassesInput,
};

export type UpdateFitnessLiveClassesMutation = {
  updateFitnessLiveClasses:  {
    __typename: "FitnessLiveClasses",
    id: string,
    title: string,
    description: string,
    equipment: string,
    image: string | null,
    trainer: string,
    targets: Array< string | null > | null,
    calories: number | null,
    start_date: string,
    end_date: string,
    start_time: string,
    end_time: string,
    level: number,
    price: number,
    day: string,
    zoom: string,
  } | null,
};

export type DeleteFitnessLiveClassesMutationVariables = {
  input: DeleteFitnessLiveClassesInput,
};

export type DeleteFitnessLiveClassesMutation = {
  deleteFitnessLiveClasses:  {
    __typename: "FitnessLiveClasses",
    id: string,
    title: string,
    description: string,
    equipment: string,
    image: string | null,
    trainer: string,
    targets: Array< string | null > | null,
    calories: number | null,
    start_date: string,
    end_date: string,
    start_time: string,
    end_time: string,
    level: number,
    price: number,
    day: string,
    zoom: string,
  } | null,
};

export type GetFitnessLiveClassesQueryVariables = {
  id: string,
};

export type GetFitnessLiveClassesQuery = {
  getFitnessLiveClasses:  {
    __typename: "FitnessLiveClasses",
    id: string,
    title: string,
    description: string,
    equipment: string,
    image: string | null,
    trainer: string,
    targets: Array< string | null > | null,
    calories: number | null,
    start_date: string,
    end_date: string,
    start_time: string,
    end_time: string,
    level: number,
    price: number,
    day: string,
    zoom: string,
  } | null,
};

export type ListFitnessLiveClassesQueryVariables = {
  filter?: TableFitnessLiveClassesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFitnessLiveClassesQuery = {
  listFitnessLiveClasses:  {
    __typename: "FitnessLiveClassesConnection",
    items:  Array< {
      __typename: "FitnessLiveClasses",
      id: string,
      title: string,
      description: string,
      equipment: string,
      image: string | null,
      trainer: string,
      targets: Array< string | null > | null,
      calories: number | null,
      start_date: string,
      end_date: string,
      start_time: string,
      end_time: string,
      level: number,
      price: number,
      day: string,
      zoom: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateFitnessLiveClassesSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  equipment?: string | null,
  image?: string | null,
};

export type OnCreateFitnessLiveClassesSubscription = {
  onCreateFitnessLiveClasses:  {
    __typename: "FitnessLiveClasses",
    id: string,
    title: string,
    description: string,
    equipment: string,
    image: string | null,
    trainer: string,
    targets: Array< string | null > | null,
    calories: number | null,
    start_date: string,
    end_date: string,
    start_time: string,
    end_time: string,
    level: number,
    price: number,
    day: string,
    zoom: string,
  } | null,
};

export type OnUpdateFitnessLiveClassesSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  equipment?: string | null,
  image?: string | null,
};

export type OnUpdateFitnessLiveClassesSubscription = {
  onUpdateFitnessLiveClasses:  {
    __typename: "FitnessLiveClasses",
    id: string,
    title: string,
    description: string,
    equipment: string,
    image: string | null,
    trainer: string,
    targets: Array< string | null > | null,
    calories: number | null,
    start_date: string,
    end_date: string,
    start_time: string,
    end_time: string,
    level: number,
    price: number,
    day: string,
    zoom: string,
  } | null,
};

export type OnDeleteFitnessLiveClassesSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  equipment?: string | null,
  image?: string | null,
};

export type OnDeleteFitnessLiveClassesSubscription = {
  onDeleteFitnessLiveClasses:  {
    __typename: "FitnessLiveClasses",
    id: string,
    title: string,
    description: string,
    equipment: string,
    image: string | null,
    trainer: string,
    targets: Array< string | null > | null,
    calories: number | null,
    start_date: string,
    end_date: string,
    start_time: string,
    end_time: string,
    level: number,
    price: number,
    day: string,
    zoom: string,
  } | null,
};
