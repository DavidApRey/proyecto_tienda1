'use client';

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetch_lista_marcas, fetch_lista_procesador } from '../lib/data';

function ListaProductos({ datos }) {

    const [dataFilter, setDataFilter] = useState(datos);
    const [marca, setMarca] = useState('');
    const [procesador, setProcesador] = useState('');

    console.log(datos)

    useEffect(() => {
        aplicarFiltro();
    }, []);

    const aplicarFiltro = () => {

        let data_filter;

        let select_marca = document.getElementById('select_marca');
        let select_procesador = document.getElementById('select_procesador');

        if (select_marca.value == '' && select_procesador.value == '') {
            data_filter = datos;
            setDataFilter(data_filter);
            setMarca(select_marca.value);
            setProcesador(select_procesador.value);
        } else if (select_marca.value != '' && select_procesador.value == '') {
            data_filter = datos.filter(item => item.marca == select_marca.value);
            setDataFilter(data_filter);
            setMarca(select_marca.value);
            setProcesador(select_procesador.value);
        } else if (select_marca.value == '' && select_procesador.value != '') {
            data_filter = datos.filter(item => item.procesador == select_procesador.value);
            setDataFilter(data_filter);
            setMarca(select_marca.value);
            setProcesador(select_procesador.value);
        } else if (select_marca.value != '' && select_procesador.value != '') {
            data_filter = datos.filter(item => item.procesador == select_procesador.value && item.marca == select_marca.value);
            setDataFilter(data_filter);
            setMarca(select_marca.value);
            setProcesador(select_procesador.value);
        }
    }

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
            option.value = item.marca;
            option.text = item.marca;

            if (marca == item.marca) {
                option.selected = true;
            }

            select_marca.appendChild(option);
        });
    }

    const call_select_procesador = async () => {
        const resp_lista_procesador = await fetch_lista_procesador();
        let select_procesador = document.getElementById('select_procesador');
        select_procesador.innerHTML = '';

        let option1 = document.createElement('option');
        option1.value = '';
        option1.text = 'Seleccione';
        select_procesador.appendChild(option1);

        resp_lista_procesador.forEach(item => {
            let option = document.createElement('option');
            option.value = item.modelo;
            option.text = item.modelo;

            if (procesador == item.modelo) {
                option.selected = true;
            }

            select_procesador.appendChild(option);
        });
    }

    call_select_marca();
    call_select_procesador();

    return (
        <div className='m-6'>
            <div className='flex flex-rows my-4'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-8 h-8 mx-2">
                    <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
                </svg>
                <h1 className='text-black text-xl font-bold'>Administrador Inventario</h1>
            </div>

            <div className="flex flex-row">
                <div className="flex flex-col">
                    <div>
                        <strong className="text-black m-2">Marca Equipo</strong>
                    </div>
                    <select id="select_marca" className="m-2 p-2 rounded-lg border-sky-950 border-2 text-black bg-slate-300 w-[10rem]">

                    </select>
                </div>

                <div className="flex flex-col">
                    <div>
                        <strong className="text-black m-2">Procesador</strong>
                    </div>
                    <select id="select_procesador" className="m-2 p-2 rounded-md border-sky-950 border-2 text-black bg-slate-300 w-[10rem]">
                    </select>
                </div>
            </div>
            <button onClick={() => aplicarFiltro()} className="text-black border-sky-950 rounded-lg border-2 m-2 p-2 hover active:bg-slate-500 active:text-white">Buscar</button>

            {dataFilter.map(item => {
                return (
                    <Link className="bg-slate-300 flex flex-row rounded-lg m-2 my-5 w-[75vw]" href={`/lista_productos/${item.id_cons}`} key={item.id_cons}>
                        <div className="flex md:flex-row sm:flex-col xs:flex-col">

                            {/* Imagen del producto */}
                            <div
                                className=" 
                                xs:w-[20vw]
                                xm:w-[20vw]
                                md:w-[20vw]
                                lg:w-[25vw]
                                m-2
                                flex
                                justify-center
                                ">
                                <Image
                                    alt="Producto Muestra"
                                    className="rounded-xl"
                                    width="270"
                                    height="270"
                                    src={item.imagen}
                                />
                            </div>

                            {/* Datos Equipo */}
                            <div className="relative xs:w-[20vw] md:w-[30vw] lg:w-[30vw] m-2 p-2">

                                <div className="flex flex-row">
                                    <div className="text-black rounded-xl border-spacing-3 p-1 border-2 border-sky-950 hover:bg-slate-400 m-1">{item.codigo_marca[0].marca}</div>
                                    <div className="text-black text-center w-[7rem] rounded-xl border-spacing-3 p-1 border-2 border-sky-950 hover:bg-slate-400 m-1">Envio Gratis</div>
                                </div>

                                <div>
                                    <h1 className="text-black text-md font-bold">{item.nombre_producto}</h1>
                                </div>

                                <br />

                                <div>
                                    <table className="border-collapse border border-black">
                                        <tbody>
                                            <tr>
                                                <th className="border border-black bg-slate-600 text-left text-[14px] p-1">Procesador</th>
                                                <td className="border border-black text-black text-left text-[14px] p-1">{item.codigo_procesador[0].modelo}</td>
                                            </tr>
                                            <tr>
                                                <th className="border border-black bg-slate-600 text-left text-[14px] p-1">Capacidad de Disco</th>
                                                <td className="border border-black text-black text-left text-[14px] p-1">{item.codigo_almacenamiento[0].tipo_disco} - {item.codigo_almacenamiento[0].capacidad} GB</td>
                                            </tr>
                                            <tr>
                                                <th className="border border-black bg-slate-600 text-left text-[14px] p-1">Memoria RAM</th>
                                                <td className="border border-black text-black text-left text-[14px] p-1">{item.codigo_memoria_ram[0].capacidad} GB</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <br />

                                <div className="">
                                    <p className="text-red-600">Precio</p>
                                    <h1 className="text-red-600 font-medium text-xl">${item.precio} Hoy</h1>
                                </div>
                            </div>
                        </div>

                    </Link>
                );
            })}
        </div>
    )
}

export default ListaProductos
