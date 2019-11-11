// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateFitnessLiveClasses = `subscription OnCreateFitnessLiveClasses(
  $id: ID
  $title: String
  $description: String
  $equipment: String
  $image: String
) {
  onCreateFitnessLiveClasses(
    id: $id
    title: $title
    description: $description
    equipment: $equipment
    image: $image
  ) {
    id
    title
    description
    equipment
    image
    trainer
    targets
    calories
    start_date
    end_date
    start_time
    end_time
    level
    price
    day
    zoom
  }
}
`;
export const onUpdateFitnessLiveClasses = `subscription OnUpdateFitnessLiveClasses(
  $id: ID
  $title: String
  $description: String
  $equipment: String
  $image: String
) {
  onUpdateFitnessLiveClasses(
    id: $id
    title: $title
    description: $description
    equipment: $equipment
    image: $image
  ) {
    id
    title
    description
    equipment
    image
    trainer
    targets
    calories
    start_date
    end_date
    start_time
    end_time
    level
    price
    day
    zoom
  }
}
`;
export const onDeleteFitnessLiveClasses = `subscription OnDeleteFitnessLiveClasses(
  $id: ID
  $title: String
  $description: String
  $equipment: String
  $image: String
) {
  onDeleteFitnessLiveClasses(
    id: $id
    title: $title
    description: $description
    equipment: $equipment
    image: $image
  ) {
    id
    title
    description
    equipment
    image
    trainer
    targets
    calories
    start_date
    end_date
    start_time
    end_time
    level
    price
    day
    zoom
  }
}
`;
