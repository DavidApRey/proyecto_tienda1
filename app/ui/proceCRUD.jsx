'use client';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';

function ProceCRUD({ data_procesa }) {

    const columns = [
        {
            accessorKey: 'marca', //access nested data with dot notation
            header: 'Marca',
            size: 150,
        },
        {
            accessorKey: 'referencia',
            header: 'Referencia',
            size: 150,
        },
        {
            accessorKey: 'modelo', //normal accessorKey
            header: 'Modelo',
            size: 200,
        },
        {
            accessorKey: 'procesador',
            header: 'Procesador',
            size: 150,
        },
        {
            accessorKey: 'ram',
            header: 'RAM',
            size: 150,
        },
        {
            accessorKey: 'almacenamiento',
            header: 'Almacenamiento',
            size: 150,
        }
    ];

    return (
        <div className='m-5'>
            {/* <MaterialReactTable
                columns={columns}
                data={data_procesa}
                localization={MRT_Localization_ES}
            /> */}
        </div>
    )
}

export default ProceCRUD
