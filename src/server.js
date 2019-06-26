const { ApolloServer, gql } = require('apollo-server');
const { prisma } = require('./db/generated/prisma-client');
const { importSchema } = require('./node_modules/graphql-import')
const { makeExecutableSchema } = require('./node_modules/graphql-tools');
const Query = require('./src/resolvers/Query')
const Mutation = require('./src/resolvers/Mutation')

const resolvers = {
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
}


const typeDefs = gql`${importSchema('./src/schema_.graphql')}`;

const schema = makeExecutableSchema({
    typeDefs, 
    resolvers
});

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
