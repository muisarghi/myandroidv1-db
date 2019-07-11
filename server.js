

//const { ApolloServer, gql } = require('apollo-server');
//import * as jwt from 'jsonwebtoken';

const { GraphQLServer } = require('graphql-yoga')
const bcrypt = require('./node_modules/bcryptjs')
const jwt = require('./node_modules/jsonwebtoken')
//const { GraphQLServer } = require('graphql-yoga')

//const { jwt } = require('jsonwebtoken')
//const { prisma } = require('./database/generated/prisma-client');
const { Prisma } = require('./database/node_modules/prisma-binding')
const { importSchema } = require('./node_modules/graphql-import')
const { makeExecutableSchema } = require('./node_modules/graphql-tools');
const Query = require('./src/resolvers/Query')
const Mutation = require('./src/resolvers/Mutation')

//const bcrypt = require('bcryptjs');
const token = jwt.sign({ claims: 'read-post' }, 'secret', {
  algorithm: 'HS256',
})

const resolvers = {
	Query,
	Mutation
}


//const typeDefs = gql`${importSchema('./src/schema_.graphql')}`;
//const typeDefs = {importSchema('./src/schema_.graphql')};
//const schema = makeExecutableSchema({
  //  typeDefs: './src/schema_.graphql', 
    //resolvers
//});

const server = new GraphQLServer({
  typeDefs: './src/schema_.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql', // the generated Prisma DB schema
      endpoint: 'https://eu1.prisma.sh/lovebirdcom/lovebird/lovebird',          // the endpoint of the Prisma DB service
      secret: '',                    // specified in database/prisma.yml
      debug: true,                              // log all GraphQL queries & mutations
    }),
  }),
})


/*
const server = new GraphQLServer({
    typeDefs: './src/schema_.graphql',
    resolvers,
    context: request => {
        return {
          ...request,
          prisma,
        }
    },
})
*/
/*
module.exports = {
    schema,
    typeDefs, 
    resolvers
};

const server = new ApolloServer({ typeDefs, resolvers, context: {
    prisma,
  }, });

server.listen().then(({ url }) => {
  console.log(`  Server ready at ${url}`);
  //console.log(olllomba);
  //const getAllLombas = prisma.lombas();
  //console.log(getAllLomba);
});
*/

server.start(() => console.log(`Server is running on http://localhost:4000 -`))
//return token;
//server.start(() => console.log(`token`))
/*
Query: 
	{
		getAllLomba: (context, {id}) =>			 
		{ return prisma.lombas ()}, 
		
		getAllComment: (context, {id}) =>			 
		{ return prisma.comments ()},
		
		getAllDiskusi: (context, {id}) =>			 
		{ return prisma.diskusis ()},
		
		getAllFile: (context, {id}) =>			 
		{ return prisma.files ()},
	  
	},
  Mutation: 
	{
  
	  createLomba: (context, { lomba, ketlomba }) => {
      return prisma.createLomba({
        lomba,
        ketlomba,
      })
		},
		
	login: (parent, args, context, info) {

    const user = await context.prisma.user({ email: args.email })
    if (!user) {
        throw new Error('No such user found')
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
        throw new Error('Invalid password')
    }

    const token = jwt.sign({ userId: user.id })

    return {
        token,
        user,
    }
},

	}

*/
