import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo'
// ---------------
import AppRoutes from './routes/AppRoutes'
//----------------
import './style/style.css'

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache()
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <AppRoutes />
    </ApolloProvider>
  )
}

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
)
