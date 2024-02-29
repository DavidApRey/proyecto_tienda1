'use client';

import { fetch_lista_marcas } from '@/app/lib/data';
import Link from 'next/link';
import React from 'react'
import Swal from 'sweetalert2';

function Page() {

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

    const call_select_marca = async () => {
        const resp_lista_marcas = await fetch_lista_marcas();
        let select_marca = document.getElementById('select_marca');
        select_marca.innerHTML = '';

        let option1 = document.createElement('option');
        option1.value = '';
        option1.text = 'Seleccione';
        select_marca.appendChild(option1);

        resp_lista_marcas.forEach(item => {
            let option = document.createElement('option');
            option.value = item.id_cons;
            option.text = item.marca;
            select_marca.appendChild(option);
        });
    }

    call_select_marca()

    const crear_enviar = () => {
        let select_marca = document.getElementById('select_marca');
        let capacidad = document.getElementById('capacidad');
        let velocidad = document.getElementById('velocidad');
        let socket = document.getElementById('socket');
        let estado = document.getElementById('estado');

        fetch(`https://backendtienda1311.000webhostapp.com/memoria_ramCRUD.php`, {
            method: 'POST',
            body: JSON.stringify(
                {
                    id_marca: select_marca.value,
                    capacidad: capacidad.value,
                    velocidad: velocidad.value,
                    socket: socket.value,
                    estado: estado.value
                }
            ),
            Headers: {
                Accept: 'application/json',
                'Content-Type': 'text/html'
            }
        })
            .then((response) => response.text())
            .then((responseData) => {
                console.log(responseData)
                if (responseData == "200") {
                    Toast.fire({
                        icon: "success",
                        title: "Memoria Ram creado con exito"
                    });
                } else {
                    Toast.fire({
                        icon: "error",
                        title: "Error en la creacion de Memoria Ram"
                    });
                }
            })
            .catch((error) => {
                console.error('error', error)
            });
    }

    return (
        <div className='flex justify-center bg-white w-[50%]'>
            <div>
                <div className='max-w-sm mx-auto space-y-6'>
                    <h2 className="text-2xl font-bold text-black">Crear Almacenamiento</h2>
                    <hr className="my-6" />

                    <label className="uppercase text-sm font-bold opacity-70 text-black">Marca</label>
                    <select id='select_marca' className="w-full text-black p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none">
                    </select>

                    <label className="uppercase text-sm font-bold opacity-70 text-black">Capacidad</label>
                    <input type="text" id='capacidad' className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded text-black" />

                    <label className="uppercase text-sm font-bold opacity-70 text-black">Velocidad</label>
                    <input type="text" id='velocidad' className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded text-black" />

                    <label className="uppercase text-sm font-bold opacity-70 text-black">Socket</label>
                    <input type="text" id='socket' className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded text-black" />

                    <label className="uppercase text-sm font-bold opacity-70 text-black">Estado</label>
                    <select id='estado' className="w-full text-black p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none">
                        <option value="">Seleccione</option>
                        <option value="Y">Activo</option>
                        <option value="N">Inactivo</option>
                    </select>

                    <Link href="../../../admin/memoria_ram" onClick={async () => await crear_enviar()} className="py-3 px-6 my-2 bg-emerald-500 text-white font-medium rounded hover:bg-indigo-500 cursor-pointer ease-in-out duration-300">Actualizar</Link>
                </div>
            </div>
        </div>
    )
}

export default Page
