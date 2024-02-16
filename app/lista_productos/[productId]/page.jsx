'use client'

import { fetch_opiniones_by_id, fetch_producto_by_id } from "@/app/lib/data";

async function page({ params }) {

    const datos = await fetch_producto_by_id(params.productId);
    const opiniones = await fetch_opiniones_by_id(params.productId);

    return (
        <>
            {datos.map(item => {
                return (
                    <>
                        <div className="m-2">
                            <h1 className="text-black xs:w-[30vw] md:w-[50vw] lg:w-[70vw] text-xl font-bold">{item.nombre_producto}</h1>
                            <p className="text-gray-500 text-sm">Código: {item.codigo_equipo}</p>

                            <div className="flex justify-start">
                                <div className="text-black text-sm text-center m-1 w-[6rem] rounded-xl border-spacing-3 p-1 border-2 border-sky-950 hover:bg-slate-400">Envio Gratis</div>
                                <div className="text-black text-sm text-center m-1 w-[11rem] rounded-xl border-spacing-3 p-1 border-2 border-sky-950 hover:bg-slate-400">Compra y gana premios</div>
                            </div>
                        </div>

                        <div className="flex md:flex-row sm:flex-col xs:flex-col">

                            <div className="basic-1/2 m-2 xs:w-[20vw] xm:w-[20vw] md:w-[20vw] lg:w-[25vw]">
                                <img className="rounded-xl" src={item.ruta_imagen} alt="" />
                            </div>

                            <div className="basic-1/2 shadow-2xl rounded-lg p-2 md:w-[50%] sm:w-[100%] xs:w-[97%]">
                                <h1 className="text-red-600 font-medium text-3xl text-center">$1.749.000 Hoy</h1>

                                <div className="flex flex-row">
                                    <div className={`bg-slate-400 text-center m-2 w-[50%] rounded-md shadow-xl p-2 hover:bg-slate-800`}>

                                        <div className="flex justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                            </svg>
                                        </div>

                                        <h3>Envio a Tu direccion</h3>

                                        <h3 className="font-bold text-blue-600">GRATIS</h3>

                                    </div>

                                    <div className={`bg-slate-400 text-center m-2 w-[50%] rounded-md shadow-xl p-2 hover:bg-slate-800`}>

                                        <div className="flex justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                            </svg>
                                        </div>

                                        <h3>Recoge en tienda</h3>

                                        <h3 className="font-bold text-blue-600">GRATIS</h3>

                                    </div>
                                </div>

                                <p className="text-xs text-black m-2">Puedes recibir tu pedido AL DÍA SIGUIENTE. Conoce el tiempo exacto, una vez confirmes tu dirección de entrega.</p>

                                <div className="flex flex-row">
                                    <div className="m-2">
                                        <p className="text-xs text-black">Cantidad</p>
                                        <select className="rounded-lg w-[4vw] text-black">
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                        </select>
                                    </div>
                                    <div className="m-2 flex justify-center">
                                        <button className="md:w-[23vw] sm:w-[18vw] bg-red-600 text-white font-bold p-3 rounded-lg">Agregar al Carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />

                        <div className="flex md:flex-row sm:flex-col xs:flex-col bg-slate-400 shadow-2xl rounded-lg">

                            <div className="basis-1/2 md:w-[50%] sm:w-[97%] xs:w-[97%] m-4" >
                                <div className="w-[45%] text-center">
                                    <h2 className="font-bold">Características importantes</h2>
                                </div>
                                {item.caract_import.map(item2 => {
                                    return (
                                        <li>{item2}</li>
                                    );
                                })}
                            </div>

                            <div className="basis-1/2 md:w-[50%] sm:w-[97%] xs:w-[97%] m-4">
                                <div className="w-[45%] text-center">
                                    <h2 className="font-bold">Sobre este producto</h2>
                                </div>

                                <p>{item.sinopsis}</p>
                            </div>

                        </div>

                        <br />

                        {/* Especificaciones Tecnicas */}
                        <div className="bg-slate-400 shadow-2xl rounded-lg p-2">

                            <div className="mx-6">
                                <h1 className="font-bold text-xl">Especificaciones técnicas</h1>
                            </div>

                            <div className="mx-4">
                                <h2 className="font-bold text-md">Informacion Basica</h2>
                            </div>

                            <div className="m-3">
                                <table className="border-collapse border border-slate-500">
                                    <tbody>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Tonalidad de Color</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.info_basica[0].color}</td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Fuentes de Alimentacion de Energia</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">
                                                {item.info_basica[0].fuente.map(item3 => {
                                                    return (
                                                        <p>{item3}</p>
                                                    );
                                                })}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Linea Modelo Referencia</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.info_basica[0].modelo}</td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left"></th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mx-4">
                                <h2 className="font-bold text-md">Almacenamiento y Procesamiento</h2>
                            </div>

                            {/* Especificaciones Tecnicas */}
                            <div className="m-3">
                                <table className="border-collapse border border-slate-500">
                                    <tbody>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Memoria RAM</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.almacen_procesa[0].memoria_ram}</td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Capacidad de Disco</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.almacen_procesa[0].capacidad_disco}</td>
                                        </tr>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Tipos de Discos que Incluye</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.almacen_procesa[0].incluye_disco}</td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Sistema Operativo</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.almacen_procesa[0].sistema_operativo}</td>
                                        </tr>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Version Sistema Operativo</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.almacen_procesa[0].ver_sistema_operativo}</td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Procesador</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.almacen_procesa[0].procesador}</td>
                                        </tr>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Velocidad del Procesador</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.almacen_procesa[0].velocidad_procesa}</td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Nucleos del Procesador</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.almacen_procesa[0].nucleo_procesa}</td>
                                        </tr>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Marca del Procesador</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.almacen_procesa[0].marca_procesa}</td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Modelo del Procesador</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.almacen_procesa[0].modelo_procesa}</td>
                                        </tr>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Marca Tarjeta de Video/Grafica</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.almacen_procesa[0].marca_tarjeta_video}</td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left"></th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mx-4">
                                <h2 className="font-bold text-md">Imagen y Pantalla</h2>
                            </div>

                            <div className="m-3">
                                <table className="border-collapse border border-slate-500">
                                    <tbody>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Tamaño Pantalla</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.imagen_pantalla[0].tamaño_pantalla}</td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Resolucion Pantalla</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.imagen_pantalla[0].resolucion_pantalla}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mx-4">
                                <h2 className="font-bold text-md">Conectividad</h2>
                            </div>

                            <div className="m-3">
                                <table className="border-collapse border border-slate-500">
                                    <tbody>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Tipos de Puertos Entradas y Salidas</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">
                                                {item.conectividad[0].puertos_e_i.map(item4 => {
                                                    return (
                                                        <p>{item4}</p>
                                                    );
                                                })}
                                            </td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">No. Puertos USB</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.conectividad[0].puertos_usb}</td>
                                        </tr>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">No. Puertos HDMI</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.conectividad[0].puerto_hdmi}</td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">No. Puertos USB tipo C</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.conectividad[0].puerto_tipo_c}</td>
                                        </tr>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">No. Salidas de Audio</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.conectividad[0].puerto_salida_audio}</td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left"></th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mx-4">
                                <h2 className="font-bold text-md">Características Técnicas</h2>
                            </div>

                            <div className="m-3">
                                <table className="border-collapse border border-slate-500">
                                    <tbody>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Opciones de Conectividad</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">
                                                {item.caract_tecnica[0].opciones_conect.map(item5 => {
                                                    return (
                                                        <p>{item5}</p>
                                                    );
                                                })}
                                            </td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Duracion de la Bateria</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.caract_tecnica[0].duracion_bateria}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mx-4">
                                <h2 className="font-bold text-md">Características Físicas</h2>
                            </div>

                            <div className="m-3">
                                <table className="border-collapse border border-slate-500">
                                    <tbody>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Caracteristicas del Teclado</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">
                                                {item.caract_fisica[0].caract_teclado.map(item6 => {
                                                    return (
                                                        <p>{item6}</p>
                                                    );
                                                })}
                                            </td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Peso</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.caract_fisica[0].peso}</td>
                                        </tr>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Resolucion Camara WEB</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.caract_fisica[0].resolucion_camara_web}</td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Unidad CD/DVD Integrada</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.caract_fisica[0].unidad_cd_dvd}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mx-4">
                                <h2 className="font-bold text-md">Detalles del Producto</h2>
                            </div>

                            <div className="m-3">
                                <table className="border-collapse border border-slate-500">
                                    <tbody>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Nivel de Uso</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.detalles_productos[0].nivel_uso}</td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Caracteristicas Especiales</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">
                                                {item.detalles_productos[0].caract_especiales.map(item7 => {
                                                    return (
                                                        <p>{item7}</p>
                                                    );
                                                })}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mx-4">
                                <h2 className="font-bold text-md">Información Adicional Relevante</h2>
                            </div>

                            <div className="m-3">
                                <table className="border-collapse border border-slate-500">
                                    <tbody>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Garantía</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.info_relevante[0].garantia}</td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Qué incluye el producto</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.info_relevante[0].incluye}</td>
                                        </tr>
                                        <tr>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left">Aviso Legal</th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left">{item.info_relevante[0].aviso_legal}</td>
                                            <th className="p-2 border border-slate-800 bg-slate-600 w-[25%] text-left"></th>
                                            <td className="p-2 border border-slate-600 w-[25%] text-left"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <br />
                    </>
                );
            })}


            <div className="flex flex-col bg-slate-400 shadow-2xl rounded-lg">

                <div className="mx-6">
                    <h1 className="font-bold text-xl">Opiniones de clientes</h1>
                </div>

                {opiniones[0].lista_opiniones.map(opi => {
                    return (
                        <div className="m-3 p-3 shadow-2xl rounded-xl bg-slate-100">
                            <h1 className="text-black"><strong>{opi.fecha} </strong> Publicado por <strong>{opi.autor}</strong></h1>

                            <div className="flex flex-row">
                                <div>
                                    <h1 className={opi.compra_verifi == true ? 'text-green-600' : 'text-red-600'}>{opi.compra_verifi == true ? 'Compra Verificada' : 'Compra No Verificada'}</h1>
                                </div>
                                <div className={opi.compra_verifi == true ? 'text-green-600' : 'text-red-600'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <p className="text-black">{opi.texto}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default page
