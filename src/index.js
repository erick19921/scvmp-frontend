// React imports
import React from "react";
import ReactDOM from "react-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';

//Other imports
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider
} from "@apollo/client";
import { useQuery, gql } from "@apollo/client";

// Js imports
//import App from "./App";

//Apollo client creation
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3000/scvmp_api"
  })
});

client
  .query({
    query: gql`
      {
        productos {
          id
          costo_compra_no_iva
          cantidad_disponible
          fecha_expiracion
          descripcion {
            nombre
          }
        }
      }
    `
  })
  .then((result) => console.log(result));

const PRODUCTOS = gql`
  {
    productos {
      id
      costo_compra_no_iva
      cantidad_disponible
      fecha_expiracion
      descripcion {
        nombre
      }
    }
  }
`;

function Productos() {
  const { loading, error, data } = useQuery(PRODUCTOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h2>Productos</h2>
      {data.productos.map((id, cantidad_disponible) => (
        <p key={id}>{cantidad_disponible}</p>
      ))}
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <Productos />
  </ApolloProvider>,
  rootElement
);
