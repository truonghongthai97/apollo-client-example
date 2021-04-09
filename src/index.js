import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import { counterVar } from "./cache";

const cache = new InMemoryCache({
  typePolicies: {
    // Type policy map
    Query: {
      fields: {
        // Field policy map for the Product type
        isInCart: {
          // Field policy for the isInCart field
          read(_, { variables }) {
            // The read function for the isInCart field
            return localStorage.getItem("CART").includes(variables.productId);
          },
        },
        counter: {
          read(_, { variables }) {
            // return makeVar(0)();
            return counterVar();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
