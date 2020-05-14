import { gql } from 'apollo-server-express'
import trajectories from './trajectories'

export const typeDefs = gql`
    type Query {
        trajectories: [Trajectoy]!
    }

    type Trajectoy {
        id: ID!
        staffId: String
        firstname: String
        lastname: String
        patronymic: String
    }
`;

export const resolvers = {
    Query: {
        trajectories: () => trajectories,
    },
};