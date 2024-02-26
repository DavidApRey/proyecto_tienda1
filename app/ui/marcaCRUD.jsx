'use client';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';

function MarcaCRUD({ data }) {

    console.log(data)

    const columns = [
        {
            accessorKey: 'id_cons', //access nested data with dot notation
            header: 'Id',
            size: 150,
        },
        {
            accessorKey: 'marca',
            header: 'Marca',
            size: 150,
        },
        {
            accessorKey: 'capacidad', //normal accessorKey
            header: 'Capacidad',
            size: 200,
        },
        {
            accessorKey: 'tipo_disco',
            header: 'Tipo Disco',
            size: 150,
        },
        {
            accessorKey: 'estado',
            header: 'Estado',
            size: 150,
        },
    ];

    return (
        <div className='m-5'>
            {/* <MaterialReactTable
                columns={columns}
                data={data}
                localization={MRT_Localization_ES}
            /> */}
        </div>
    )
}

export default MarcaCRUD
