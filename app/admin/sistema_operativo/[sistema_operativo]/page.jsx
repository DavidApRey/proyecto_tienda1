'use client';

import { fetch_lista_so_especi, fetch_lista_marcas } from '@/app/lib/data';
import Link from 'next/link';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Page({ params }) {

    const [id_cons, setIdCons] = useState('');

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

    const datos_edit = async (id) => {
        const data = await fetch_lista_so_especi(id);

        let select_marca_edit = document.getElementById('select_marca_edit');
        let version_so_edit = document.getElementById('version_so_edit');
        let sistema_operativo_edit = document.getElementById('sistema_operativo_edit');

        setIdCons(data[0].id_cons);

        select_marca_edit.value = data[0].id_marca;
        version_so_edit.value = data[0].version_so;
        sistema_operativo_edit.value = data[0].sistema_operativo;

        await call_select_estado_edit(data[0].estado);
        await call_select_marca(data[0].id_marca);
    }

    const call_select_estado_edit = async (estado) => {
        let estado_edit = document.getElementById('estado_edit');
        estado_edit.innerHTML = '';

        let option = document.createElement('option');
        option.value = '';
        option.text = 'Seleccione';

        let option1 = document.createElement('option');
        option1.value = 'Y';
        option1.text = 'Activo';

        let option2 = document.createElement('option');
        option2.value = 'N';
        option2.text = 'Inactivo';

        if (estado == 'Y') {
            option1.selected = true;
        } else {
            option2.selected = true;
        }

        estado_edit.appendChild(option);
        estado_edit.appendChild(option1);
        estado_edit.appendChild(option2);
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

    const editar_enviar = () => {

        let select_marca_edit = document.getElementById('select_marca_edit');
        let estado_edit = document.getElementById('estado_edit');
        let version_so_edit = document.getElementById('version_so_edit');
        let sistema_operativo_edit = document.getElementById('sistema_operativo_edit');

        const postData = {
            id_cons: id_cons,
            id_marca: select_marca_edit.value,
            version_so: version_so_edit.value,
            sistema_operativo: sistema_operativo_edit.value,
            estado: estado_edit.value
        }

        fetch(`http://tiendatecnolo.softdevdsrp.com.co/soCRUD.php`, {
            method: 'PUT',
            body: JSON.stringify(postData),
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
                        title: "Actualizacion exitosa"
                    });
                } else {
                    Toast.fire({
                        icon: "error",
                        title: "No se pudo realizar la actualización"
                    });
                }
            })
            .catch((error) => {
                console.error('error', error)
            });
    }

    datos_edit(params.sistema_operativo);

    return (
        <div className='flex justify-center bg-white w-[50%]'>
            <div>
                <div className='max-w-sm mx-auto space-y-6'>
                    <h2 className="text-2xl font-bold text-black">Editar Sistema Operativo</h2>
                    <hr className="my-6" />

                    <input type="hidden" id='id_cons_edit' value={id_cons} className='text-black' />

                    <label className="uppercase text-sm font-bold opacity-70 text-black">Marca</label>
                    <select id='select_marca_edit' className="w-full text-black p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none">
                    </select>

                    <label className="uppercase text-sm font-bold opacity-70 text-black">Velocidad SO</label>
                    <input type="text" id='version_so_edit' className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded text-black" />

                    <label className="uppercase text-sm font-bold opacity-70 text-black">Sistema Operativo</label>
                    <input type="text" id='sistema_operativo_edit' className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded text-black" />
                    
                    <label className="uppercase text-sm font-bold opacity-70 text-black">Estado</label>
                    <select id='estado_edit' className="w-full text-black p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none">
                    </select>

                    <Link href="../../admin/sistema_operativo" className="py-3 px-6 my-2 bg-emerald-500 text-white font-medium rounded hover:bg-indigo-500 cursor-pointer ease-in-out duration-300" onClick={async () => await editar_enviar()}>Actualizar</Link>
                </div>
            </div>
        </div>
    )
}

export default Page
