import { Box } from '@mui/material'
import React from 'react'

function Modal_delete_alma() {
    return (
        <Box sx={style_edit}>
            <div className='flex flex-row'>
                <div className='max-w-md mx-auto space-y-6'>
                    <form action="">
                        <h2 className="text-2xl font-bold text-black"></h2>
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

export default Modal_delete_alma
