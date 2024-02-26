import { fetch_datos_alma_especi, fetch_lista_marcas } from '@/app/lib/data';
import { Box } from '@mui/material';
import { useState } from 'react';

const style_edit = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Modal_edit_alma({ id }) {

    const [id_cons, setIdCons] = useState('');
    const [capacidad, setCapacidad] = useState('');
    const [tipo_disco, setTipoDisco] = useState('');
    const [estado, setEstado] = useState('');

    const datos_edit = async (id) => {
        const data = await fetch_datos_alma_especi(id);
        
        setIdCons(data[0].id_cons);
        setCapacidad(data[0].capacidad);
        setTipoDisco(data[0].tipo_disco);
        setEstado(data[0].estado);
        
        await call_select_marca(data[0].id_marca);
    }

    const call_select_marca = async (id) => {
        const resp_lista_marcas = await fetch_lista_marcas();
        let select_marca_edit = document.getElementById('select_marca_edit');
        select_marca_edit.innerHTML = '';

        let option1 = document.createElement('option');
        option1.value = '';
        option1.text = 'Seleccione';
        select_marca_edit.appendChild(option1);

        resp_lista_marcas.forEach(item => {
            let option = document.createElement('option');
            option.value = item.id_cons;
            option.text = item.marca;

            if (id == item.id_cons) {
                option.selected = true;
            }

            select_marca_edit.appendChild(option);
        });
    }

    datos_edit(id);

    return (
        <Box sx={style_edit}>
            <div className='flex flex-row'>
                <div className='max-w-md mx-auto space-y-6'>
                    <form action="">
                        <h2 className="text-2xl font-bold text-black">Editar Almacenamiento</h2>
                        <hr className="my-6" />

                        <input type="hidden" id='id_cons_edit' value={id_cons} className='text-black' />

                        <label className="uppercase text-sm font-bold opacity-70 text-black">Marca</label>
                        <select id='select_marca_edit' className="w-full text-black p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none">
                        </select>

                        <label className="uppercase text-sm font-bold opacity-70 text-black">Capacidad</label>
                        <input type="text" id='capacidad_editar' value={capacidad} className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded text-black" />

                        <label className="uppercase text-sm font-bold opacity-70 text-black">Tipo Disco</label>
                        <input type="text" id='tipo_disco_edit' value={tipo_disco} className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded text-black" />

                        <label className="uppercase text-sm font-bold opacity-70 text-black">Estado</label>
                        <select id='estado_edit' value={estado} className="w-full text-black p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none">
                            <option value="Y">Activo</option>
                            <option value="N">Inactivo</option>
                        </select>

                        <input type="submit" className="py-3 px-6 my-2 bg-emerald-500 text-white font-medium rounded hover:bg-indigo-500 cursor-pointer ease-in-out duration-300" value="Actualizar" />
                    </form>
                </div>
            </div>
        </Box>
    )
}

export default Modal_edit_alma
