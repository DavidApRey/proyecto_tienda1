'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetch_lista_productos } from "../lib/data";

const datos = fetch_lista_productos();

function page() {

    const [marca, setMarca] = useState('');
    const [procesador, setProcesador] = useState('');
    const [dataFilter, setDataFilter] = useState(datos)

    useEffect(() => {
        aplicarFiltro();
    }, []);

    const aplicarFiltro = () => {

        let data_filter;

        if (marca == '' && procesador == '') {
            data_filter = datos;
            setDataFilter(data_filter);
        } else if (marca != '' && procesador == '') {
            data_filter = datos.filter(item => item.marca == marca);
            setDataFilter(data_filter);
        } else if (marca == '' && procesador != '') {
            data_filter = datos.filter(item => item.procesador == procesador);
            setDataFilter(data_filter);
        } else if (marca != '' && procesador != '') {
            data_filter = datos.filter(item => item.procesador == procesador && item.marca == marca);
            setDataFilter(data_filter);
        }
    }

    return (
        <>
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <div>
                        <strong className="text-black m-2">Marca Equipo</strong>
                    </div>
                    <select name="marca" onChange={(e) => setMarca(e.target.value)} className="m-2 p-2 rounded-lg border-sky-950 border-2 text-black bg-slate-300 w-[10rem]">
                        <option value=""></option>
                        <option value="ASUS">ASUS</option>
                        <option value="LENOVO">LENOVO</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <div>
                        <strong className="text-black m-2">Procesador</strong>
                    </div>
                    <select name="procesador" onChange={(e) => setProcesador(e.target.value)} className="m-2 p-2 rounded-md border-sky-950 border-2 text-black bg-slate-300 w-[10rem]">
                        <option value=""></option>
                        <option value="Intel Core I3">Intel Core I3</option>
                        <option value="AMD R5">AMD R5</option>
                    </select>
                </div>
            </div>
            <button onClick={() => aplicarFiltro()} className="text-black border-sky-950 rounded-lg border-2 m-2 p-2 hover active:bg-slate-500 active:text-white">Buscar</button>

            {dataFilter.map(item => {
                return (
                    <Link className="bg-slate-300 flex flex-row rounded-lg m-2 my-5 w-[75vw]" href={`/lista_productos/${item.id}`} key={item.id}>
                        <div className="flex md:flex-row sm:flex-col xs:flex-col">

                            {/* Imagen del producto */}
                            <div
                                className=" 
                                xs:w-[20vw]
                                xm:w-[20vw]
                                md:w-[20vw]
                                lg:w-[25vw]
                                m-2">
                                <img
                                    className="rounded-xl"
                                    src={item.ruta_imagen}
                                />
                            </div>

                            {/* Datos Equipo */}
                            <div className="relative xs:w-[20vw] md:w-[30vw] lg:w-[30vw] m-2 p-2">

                                <div className="flex flex-row">
                                    <div className="text-black rounded-xl border-spacing-3 p-1 border-2 border-sky-950 hover:bg-slate-400 m-1">{item.marca}</div>
                                    <div className="text-black text-center w-[7rem] rounded-xl border-spacing-3 p-1 border-2 border-sky-950 hover:bg-slate-400 m-1">Envio Gratis</div>                                </div>

                                <div>
                                    <h1 className="text-black text-xl font-bold">{item.nombre_producto}</h1>
                                </div>

                                <br />

                                <div>
                                    <table className="border-collapse border border-black">
                                        <tbody>
                                            <tr>
                                                <th className="border border-black bg-slate-600 text-left text-[14px] p-1">Procesador</th>
                                                <td className="border border-black text-black text-left text-[14px] p-1">{item.procesador}</td>
                                            </tr>
                                            <tr>
                                                <th className="border border-black bg-slate-600 text-left text-[14px] p-1">Capacidad de Disco</th>
                                                <td className="border border-black text-black text-left text-[14px] p-1">{item.capacidad_disco}</td>
                                            </tr>
                                            <tr>
                                                <th className="border border-black bg-slate-600 text-left text-[14px] p-1">Memoria RAM</th>
                                                <td className="border border-black text-black text-left text-[14px] p-1">{item.memoria_ram}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <br />

                                <div className="m-1">
                                    <p className="text-red-600">Precio</p>
                                    <h1 className="text-red-600 font-medium text-3xl">${item.precio} Hoy</h1>
                                </div>
                            </div>
                        </div>

                    </Link>
                );
            })}

        </>
    )

}

export default page
