import { GraphQLSchema, GraphQLObjectType, GraphQLList } from 'graphql';

import {
//  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

let PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  description: 'A Pokemon',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'The name of the Pokemon.',
    },
    type: {
      type: GraphQLString,
      description: 'The type of the Pokemon.',
    },
    stage: {
      type: GraphQLInt,
      description: 'The level of the Pokemon.',
    },
    species: {
      type: GraphQLString,
      description: 'The species of the Pokemon.',
    }
  })
});

import  PokemonArray from './data.js'
let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      // root queries go here!
      pokemon: {
        type: new GraphQLList(PokemonType),
        resolve: () => PokemonArray // here, Pokemon is an in-memory array
      }
    }
  })
});

export default schema;
