// tslint:disable
// this is an auto generated file. This will be overwritten

export const getFitnessLiveClasses = `query GetFitnessLiveClasses($id: ID!) {
  getFitnessLiveClasses(id: $id) {
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
export const listFitnessLiveClasses = `query ListFitnessLiveClasses(
  $filter: TableFitnessLiveClassesFilterInput
  $limit: Int
  $nextToken: String
) {
  listFitnessLiveClasses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
