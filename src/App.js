import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTOS = gql`
{
  productos {
    id,
    costo_compra_no_iva,
    costo_venta_no_iva,
    cantidad_disponible,
    fecha_expiracion
  }
}
`;

function App() {
  const { loading, error, data } = useQuery(GET_PRODUCTOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div>
        <div class="table">
          <div class="table-contenido">
            <table class="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Costo compra sin iva</th>
                  <th>Costo venta sin iva</th>
                  <th>Cantidad disponible</th>
                  <th>Fecha expiracion</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {data.productos.map(({
                  id,
                  costo_compra_no_iva,
                  costo_venta_no_iva,
                  cantidad_disponible,
                  fecha_expiracion
                }) => (
                  <tr key={id}>
                    <td>
                      {id}
                    </td>
                    <td>
                      {costo_compra_no_iva}
                    </td>
                    <td>
                      {costo_venta_no_iva}
                    </td>
                    <td>
                      {cantidad_disponible}
                    </td>
                    <td>
                      {fecha_expiracion}
                    </td>
                    <td>
                      <button onClick="" data-id={id} type="button" class="btn btn-outline-secondary"><i class="fas fa-pencil-alt"></i></button>
                      <button data-id={id} type="button" class="btn btn-outline-secondary"><i class="fas fa-trash"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
