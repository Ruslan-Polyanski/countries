import './global.css';
import './declaration.d.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

polyfillCountryFlagEmojis()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider> 
  </React.StrictMode>
);

