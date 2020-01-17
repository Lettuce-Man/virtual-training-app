import gql from 'graphql-tag';

export default gql`
    mutation createClass($id: ID!,
        $title: String!,
        $description: String!) {
            create message(id: $id,
                title: $title,
                description: $description) {
                    id
                    title
                    description
                }
        }

`;