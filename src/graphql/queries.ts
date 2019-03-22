// tslint:disable
// this is an auto generated file. This will be overwritten

export const getSign = `query GetSign($id: ID!) {
  getSign(id: $id) {
    id
    project
    data
  }
}
`;
export const listSigns = `query ListSigns(
  $filter: ModelSignFilterInput
  $limit: Int
  $nextToken: String
) {
  listSigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      project
      data
    }
    nextToken
  }
}
`;
