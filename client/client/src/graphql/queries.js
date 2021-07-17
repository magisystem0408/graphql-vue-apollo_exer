import gql from "graphql-tag";

export const MOVIE_LIST =gql`
    query{
        movies{
            id
            name
            genre
            director{
                id
                name
            }
        }
    }
`