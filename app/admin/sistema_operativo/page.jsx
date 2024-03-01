'use client';
import { IconButton, Box } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import Swal from 'sweetalert2';

import {
    Edit as EditIcon,
    Delete as DeleteIcon,
} from '@mui/icons-material';

import { useState } from 'react';
import { fetch_lista_so } from '@/app/lib/data';
import Link from 'next/link';

function Page() {

    const [data, setData] = useState([]);

    const setingDatos = async () => {
        const int_data = await fetch_lista_so();
        setData(int_data);
    }

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const showSwal = (id) => {
        Swal.fire({
            title: "¿Desea eliminar el sistema operativo seleccionado?",
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: `No`
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`https://backendtienda1311.000webhostapp.com/soCRUD.php`, {
                    method: 'DELETE',
                    body: JSON.stringify({ id_cons: id }),
                    Headers: {
                        Accept: 'application/json',
                        'Content-Type': 'text/html'
                    }
                })
                    .then((response) => response.text())
                    .then((responseData) => {
                        if (responseData == "200") {
                            Toast.fire({
                                icon: "success",
                                title: "Sistema Operativo eliminado con exito"
                            });
                        } else {
                            Toast.fire({
                                icon: "error",
                                title: "No se pudo realizar la eliminacion, por favor verificar si existe un articulo con dicho Sistema Operativo"
                            });
                        }
                    })
                    .catch((error) => {
                        console.error('error', error)
                    });
            }
        });
    }

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
            accessorKey: 'version_so', //normal accessorKey
            header: 'Version',
            size: 200,
        },
        {
            accessorKey: 'sistema_operativo',
            header: 'Sistema Operativo',
            size: 150,
        },
        {
            accessorKey: 'estado',
            header: 'Estado',
            size: 150,
            Cell: ({ renderedCellValue }) => (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                    }}
                >
                    <div className={`center relative inline-block select-none whitespace-nowrap rounded-full ${renderedCellValue == 'Y' ? 'bg-green-500' : 'bg-red-500'} px-3.5 py-1.5 align-baseline font-sans text-xs shadow-xl font-bold uppercase leading-none text-white`}>
                        <span>{renderedCellValue == 'Y' ? 'Activo' : 'Inactivo'}</span>
                    </div>
                </Box>
            ),
        },
    ];

    setingDatos()

    return (
        <>
            <div className='flex flex-rows m-6'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-black w-8 h-8 mx-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                </svg>
                <h1 className='text-black text-xl font-bold'>Sistemas operativos</h1>
            </div>

            <div className='m-5'>

                <Link className="
                            inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all 
                            rounded-lg cursor-pointer bg-sky-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md 
                            bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs m-2" href="./sistema_operativo/crear_sistema_operativo">Añadir</Link>

                <MaterialReactTable
                    columns={columns}
                    data={data}
                    localization={MRT_Localization_ES}
                    enableRowActions
                    renderRowActions={({ row }) => (
                        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
                            <IconButton color="secondary">
                                <Link href={`/admin/sistema_operativo/${row.original.id_cons}`}>
                                    <EditIcon />
                                </Link>
                            </IconButton>
                            <IconButton color="error" onClick={() => showSwal(row.original.id_cons)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    )}
                />
            </div>

        </>
    )
}

export default Page
