export async function fetch_lista_productos() {
    const data = await fetch(`https://backendtienda1311.000webhostapp.com/listaProductosCRUD.php?datos_general=all`)
        .then(res => res.json());

    return data;
}

export async function fetch_producto_by_id(id) {
    const data = await fetch(`https://backendtienda1311.000webhostapp.com/listaProductosCRUD.php?datos_especi=all&id_producto=${id}`)
        .then(res => res.json());

    return data;
}

export async function fetch_opiniones_by_id(id) {
    const data = await fetch(`https://backendtienda1311.000webhostapp.com/opinionesCRUD.php?datos_especi=all&id_producto=${id}`)
        .then(res => res.json());

    return data;
}

export async function fetch_datos_alma() {
    const data = await fetch(`https://backendtienda1311.000webhostapp.com/almaCRUD.php?datos_general=all`)
        .then(res => res.json());

    return data;
}

export async function fetch_datos_alma_especi(id) {
    const data = await fetch(`https://backendtienda1311.000webhostapp.com/almaCRUD.php?datos_especi=all&id_alma=${id}`)
        .then(res => res.json());

    return data;
}

export async function fetch_lista_marcas() {
    const data = await fetch(`https://backendtienda1311.000webhostapp.com/marcaCRUD.php?datos_general=all`)
        .then(res => res.json());

    return data;
}

export async function fetch_lista_marcas_especi(id) {
    const data = await fetch(`https://backendtienda1311.000webhostapp.com/marcaCRUD.php?datos_especi=all&id_marca=${id}`)
        .then(res => res.json());

    return data;
}

export async function fetch_lista_memoria_ram() {
    const data = await fetch(`https://backendtienda1311.000webhostapp.com/memoria_ramCRUD.php?datos_general=all`)
        .then(res => res.json());

    return data;
}

export async function fetch_lista_memoria_ram_especi(id) {
    const data = await fetch(`https://backendtienda1311.000webhostapp.com/memoria_ramCRUD.php?datos_especi=all&id_marca=${id}`)
        .then(res => res.json());

    return data;
}

export async function fetch_lista_procesador() {
    const data = await fetch(`https://backendtienda1311.000webhostapp.com/procesadorCRUD.php?datos_general=all`)
        .then(res => res.json());

    return data;
}

export async function fetch_lista_procesador_especi(id) {
    const data = await fetch(`https://backendtienda1311.000webhostapp.com/procesadorCRUD.php?datos_especi=all&id_procesador=${id}`)
        .then(res => res.json());

    return data;
}

export async function fetch_lista_so() {
    const data = await fetch(`https://backendtienda1311.000webhostapp.com/soCRUD.php?datos_general=all`)
        .then(res => res.json());

    return data;
}

export async function fetch_lista_so_especi(id) {
    const data = await fetch(`https://backendtienda1311.000webhostapp.com/soCRUD.php?datos_especi=all&id_so=${id}`)
        .then(res => res.json());

    return data;
}

export async function fetch_valid_user(email) {
    const data = await fetch(`http://localhost/backendTienda/validUsuarios.php?datos_especi=all&email=${email}`)
        .then(res => res.json());

    return data;
}