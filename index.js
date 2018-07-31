var {GraphQLServer} = require('graphql-yoga');

const typeDefs = `
  type Query {
    welcome: String!
    links: [Link!]!
  }
  
  type Mutation {
    addLink(url:String!, description:String!): Link!
  }

  type Link {
    url: String!
    id: String!
    description: String!
  }
`;

let articleLinks = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'A resources to learn graphql. Check out the advanced sections for some more in-depth tutorials.'
}, {
    id: 'link-1',
    url: 'news.ycombinator.com',
    description: 'Hacker news is like reddit that doesn\'t suck.  Focused on tech.  Great place to improve your chameleon skills.'
}, {
    id: 'link-2',
    url: 'https://www.graphqlhub.com/',
    description: 'Some practice APIs to play around with queries'
}]

const resolvers = {
  Query: {
    welcome: function () {
      return 'WPR38 is not WPR34';
    },
    links: () => {
      return articleLinks;
    }
  },
  Mutation: {
    addLink: (root, args) => {
      const {url, description} = args;
      const newLink = {
        id: `link-${articleLinks.length}`,
        url,
        description
      }
      articleLinks.push(newLink);
      return newLink;
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log('Server started'));