
import { fetch_lista_productos } from "../lib/data";
import ListaProductos from "../ui/listaProductos";

async function Page() {

    const datos = await fetch_lista_productos();

    return (
        <>
            <ListaProductos datos={datos} />
        </>
    )
}

export default Page
