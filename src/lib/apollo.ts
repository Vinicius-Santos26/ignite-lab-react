import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o274z907i001xmgekp7azx/master',
  cache: new InMemoryCache()
})