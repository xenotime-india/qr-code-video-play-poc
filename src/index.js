import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContentfulClient, ContentfulProvider } from 'react-contentful';

const contentfulClient = new ContentfulClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_API_KEY,
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
});

ReactDOM.render(
  <React.StrictMode>
    <ContentfulProvider client={contentfulClient}>
      <App />
    </ContentfulProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
