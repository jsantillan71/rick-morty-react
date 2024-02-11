import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const rickMortyClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  // La uri será el único lugar al cual harás consultas, ahí estará almacenada toda nuestra data
  cache: new InMemoryCache(),
  // InMemoryCache guarda la información ya consultada para evitar el pedir la misma dos o más veces
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={rickMortyClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
