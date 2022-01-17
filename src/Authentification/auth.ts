//import { setContext } from '@apollo/client/link/context';
import { ApolloClient, DefaultOptions, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from "@apollo/client/link/ws";
require('dotenv').config()


const wsLink = new WebSocketLink({
  //uri: 'ws://localhost:8080/v1/graphql',
  uri: 'wss://darkbid.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    timeout: 30000,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET
      }
    }
  }
})
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

/*
const authLink = setContext((_, { headers }) => {
  const userId = null || localStorage.getItem('user') 
  let role = ""
  
  if (localStorage.getItem("user") !== null){
     role = String(localStorage.getItem("role"))
  } 

  // return the headers to the context so httpLink can read them
  return {
    headers: {
        "X-Hasura-User-ID": userId,
        "X-Hasura-Role": role
    }
  }
});
*/

const client = new ApolloClient({


  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
  link: wsLink,
});
client.resetStore()

export default client;
