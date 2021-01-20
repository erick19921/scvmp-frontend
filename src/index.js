// React imports
import React from "react";
import ReactDOM from "react-dom";

//Other imports
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";

// Js imports
import App from "./App";

//Apollo client creation
const client = new ApolloClient({
  uri: "http://localhost:3000/scvmp_api",
  cache: new InMemoryCache()
});

const PRODUCTOS = gql`
  query productos {
    id
    costo_compra_no_iva
    cantidad_disponible
    fecha_expiracion
    descripcion {
      nombre
    }
  }
`;

function Productos() {
  const { loading, error, data } = useQuery(PRODUCTOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.map(({ id, costo_compra_no_iva, cantidad_disponible }) => (
    <div key={id}>
      <p>
        {costo_compra_no_iva}
        {cantidad_disponible}
      </p>
    </div>
  ));
}

function App2() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
    </ApolloProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Productos />
  </React.StrictMode>,
  rootElement
);
