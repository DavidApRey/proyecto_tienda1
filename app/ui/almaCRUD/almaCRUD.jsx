import { IconButton, Box, Typography, Modal } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import {
    Edit as EditIcon,
    Delete as DeleteIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { fetch_datos_alma_especi, fetch_lista_marcas } from '@/app/lib/data';
import Modal_edit_alma from './modal_edit_alma';

function AlmaCRUD({ data }) {

    const [open_edit, setOpen_edit] = useState(false);
    const handleOpen_edit = () => setOpen_edit(true);
    const handleClose_edit = () => setOpen_edit(false);
    const [id_cons, setIdCons] = useState('');
    const [inputValue, setInputValue] = useState('')

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

    const showSwal = () => {
        Swal.fire({
            title: "¿Desea eliminar el almacenamiento seleccionado?",
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: `No`
        }).then((result) => {
            if (result.isConfirmed) {
                Toast.fire({
                    icon: "success",
                    title: "Almacenamiento eliminado con exito"
                });
            }
        });
    }

    const editar_alma = async (id) => {
        setIdCons(id);
        handleOpen_edit();
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

    return (
        <>
            <div className='m-5'>
                <MaterialReactTable
                    columns={columns}
                    data={data}
                    localization={MRT_Localization_ES}
                    enableRowActions
                    renderRowActions={({ row }) => (
                        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
                            <IconButton
                                color="secondary"
                                onClick={() => {
                                    editar_alma(row.original.id_cons)
                                }}
                            >
                                <EditIcon />
                            </IconButton>
                            <IconButton
                                color="error"
                                onClick={() => {
                                    showSwal();
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    )}
                />
            </div>

            <Modal
                open={open_edit}
                onClose={handleClose_edit}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Modal_edit_alma id={id_cons} />
            </Modal>


        </>
    )
}

export default AlmaCRUD
