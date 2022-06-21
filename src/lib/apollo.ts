import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8huyd137m01xr14fk7kre/master',
  cache: new InMemoryCache()
})