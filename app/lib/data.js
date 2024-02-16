export function fetch_lista_productos() {

    // const data = [
    //     {
    //         id: '1',
    //         ruta_imagen: '/images/pc1.jpg',
    //         codigo_equipo: '4711387326398',
    //         marca: 'ASUS',
    //         caract_import: [
    //             {
    //                 id: 1,
    //                 datos: 'Incluye Maletín y Mouse alámbrico',
    //             },
    //             {
    //                 id: 2,
    //                 datos: 'Escudo de privacidad de la cámara web física',
    //             },
    //             {
    //                 id: 3,
    //                 datos: 'Inicio de sesión seguro con sensor de huellas dactilares',
    //             },
    //             {
    //                 id: 4,
    //                 datos: 'Bajas emisiones de luz azul certificado por TÜV Rheinland',
    //             },
    //             {
    //                 id: 5,
    //                 datos: 'Certificado de grado militar MIL-STD-810H'
    //             }
    //         ],
    //         sinopsis: 'La ASUS Vivobook Go 15 es liviana, es compacta, diseñada para que seas productivo y te mantengas entretenido donde quiera que vayas. Con su bisagra plana de 180°, el protector físico de la cámara web y un montón de características de diseño bien pensadas, incluida una hermosa pantalla con bordes ultradelgados, ¡Vivobook Go 15 es un portátil que te permite hacer todo! ¡Llévala ya!',
    //         info_basica: [{
    //             color: 'Negro mezclado',
    //             fuente: [
    //                 {
    //                     id: 1,
    //                     datos: 'Batería Recargable Interna',
    //                 },
    //                 {
    //                     id: 2,
    //                     datos: 'Energía Eléctrica'
    //                 }
    //             ],
    //             modelo: 'E1504FA-NJ843W'
    //         }],
    //         almacen_procesa: [{
    //             memoria_ram: '8 GB',
    //             capacidad_disco: 'Estado Solido SSD 256 GB ',
    //             incluye_disco: 'Disco Estado Solido (SSD)',
    //             sistema_operativo: 'Windows',
    //             ver_sistema_operativo: 'Windows 11 Home',
    //             procesador: 'AMD R5',
    //             velocidad_procesa: '2.8 GHz',
    //             nucleo_procesa: '4  Nucleos',
    //             marca_procesa: 'AMD',
    //             modelo_procesa: 'R5 7520U',
    //             marca_tarjeta_video: 'No Tiene Tarjeta Video/Grafica Independiente'
    //         }],
    //         imagen_pantalla: [{
    //             tamaño_pantalla: '15.6  Pulgadas',
    //             resolucion_pantalla: 'Full HD'
    //         }],
    //         conectividad: [{
    //             puertos_e_i: [
    //                 {
    //                     id: 1,
    //                     datos: 'Puerto HDMI'
    //                 },
    //                 {
    //                     id: 2,
    //                     datos: 'Puerto USB 2.0'
    //                 },
    //                 {
    //                     id: 3,
    //                     datos: 'Puerto USB 3.2',
    //                 },
    //                 {
    //                     id: 4,
    //                     datos: 'Puerto USB Tipo C',
    //                 },
    //                 {
    //                     id: 5,
    //                     datos: 'Salida de Audífonos'
    //                 }
    //             ],
    //             puertos_usb: '2 Puertos',
    //             puerto_hdmi: '1 Puertos',
    //             puerto_tipo_c: '1 Puertos',
    //             puerto_salida_audio: '1 Puertos',
    //         }],
    //         caract_tecnica: [{
    //             opciones_conect: [
    //                 {
    //                     id: 1,
    //                     datos: 'Bluetooth',
    //                 },
    //                 {
    //                     id: 2,
    //                     datos: 'USB', 
    //                 },
    //                 {
    //                     id: 3,
    //                     datos: 'WiFi'
    //                 }
    //             ],
    //             duracion_bateria: '8 Horas Aproximadas'
    //         }],
    //         caract_fisica: [{
    //             caract_teclado: [
    //             {
    //                 id: 1,
    //                 datos: 'Alfanumérico'
    //             }
    //         ],
    //             peso: '1.63 Kilogramos',
    //             resolucion_camara_web: 'HD',
    //             unidad_cd_dvd: 'No tiene Unidad de CD/DVD Integrada'
    //         }],
    //         detalles_productos: [{
    //             nivel_uso: 'Avanzado',
    //             caract_especiales: [
    //                 {
    //                     id: 1,
    //                     datos: 'Cámara WEB Integrada',
    //                 },
    //                 {
    //                     id: 2,
    //                     datos: 'Lector de Huella'
    //                 }
    //             ]
    //         }],
    //         info_relevante: [{
    //             garantia: '12 Meses',
    //             incluye: 'Maletín y Mouse alámbrico',
    //             aviso_legal: 'En Los computadores PORTATILES La duración de la batería es un valor aproximado y depende del uso que se le de al equipo. (Los computadores De escritorio NO tienen batería)'
    //         }],
    //         nombre_producto: 'Computador Portátil ASUS Vivobook Go 15.6" Pulgadas E1504FA - AMD Ryzen 5 - RAM 8GB - Disco SSD 256 GB - Negro',
    //         procesador: 'AMD R5',
    //         capacidad_disco: 'Estado Solido SSD 512 GB',
    //         memoria_ram: '8 GB',
    //         precio: '1.749.000'
    //     },
    //     {
    //         id: '2',
    //         ruta_imagen: '/images/pc2.jpg',
    //         codigo_equipo: '197532261327',
    //         marca: 'LENOVO',
    //         caract_import: [
    //             'Resolución Full HD, imágenes mas nítidas.',
    //             'Película antirreflejo, trabaja en cualquier condición de luz.',
    //             'Dolby Audio, mayor calidad en sonido.',
    //             'TrueBlock privacidad para tu cámara',
    //             'Webcam Full HD, videollamadas mas claras'
    //         ],
    //         sinopsis: 'En el portátil LENOVO IdeaPad Slim 3 color gris, encuentra todo el rendimiento que necesitas, un portátil accesible que cubre tus necesidades, su combinación generosa de memoria Ram y almacenamiento en estado solido, es perfecto para tus tareas diarias, con un diseño extraordinario, este equipo superará tus expectativas. Así mismo, te brindará un entretenimiento superior gracias a su sonido Dolby Audio, y te sentirás seguro gracias a su obturador de privacidad en su cámara, cuando termines tus reuniones o videollamadas solo tienes que cerrarlo. Aprovecha ¡lleva el tuyo ahora!',
    //         info_basica: [{
    //             color: 'Gris Artico',
    //             fuente: ['Batería Recargable Interna'],
    //             modelo: '82X7006WLM'
    //         }],
    //         almacen_procesa: [{
    //             memoria_ram: '8 GB',
    //             capacidad_disco: 'Estado Solido SSD 256 GB ',
    //             incluye_disco: 'Disco Estado Solido (SSD)',
    //             sistema_operativo: 'Windows',
    //             ver_sistema_operativo: '11 Home español',
    //             procesador: 'Intel Core I3',
    //             velocidad_procesa: '(1P + 4E) / 6T, P-core 1,6/4,5 Ghz, E-core 1,2/3,3 Ghz, 10 MB',
    //             nucleo_procesa: '5 Nucleos',
    //             marca_procesa: 'INTEL',
    //             modelo_procesa: '1305U',
    //             marca_tarjeta_video: 'No Tiene Tarjeta Video/Grafica Independiente'
    //         }],
    //         imagen_pantalla: [{
    //             tamaño_pantalla: '15.6  Pulgadas',
    //             resolucion_pantalla: 'Full HD'
    //         }],
    //         conectividad: [{
    //             puertos_e_i: [
    //                 'Entrada Tarjeta SD',
    //                 'Puerto HDMI',
    //                 'Puerto USB 3.2',
    //                 'Puerto USB Tipo C',
    //                 'Salida de Audífonos'
    //             ],
    //             puertos_usb: '2 Puertos',
    //             puerto_hdmi: '1 Puertos',
    //             puerto_tipo_c: '1 Puertos',
    //             puerto_salida_audio: '1 Puertos',
    //         }],
    //         caract_tecnica: [{
    //             opciones_conect: [
    //                 'Bluetooth',
    //                 'WiFi'
    //             ],
    //             duracion_bateria: '8 Horas Aproximadas'
    //         }],
    //         caract_fisica: [{
    //             caract_teclado: ['Alfanumérico'],
    //             peso: '1.63 Kilogramos',
    //             resolucion_camara_web: 'FHD 1080p',
    //             unidad_cd_dvd: 'No tiene Unidad de CD/DVD Integrada'
    //         }],
    //         detalles_productos: [{
    //             nivel_uso: 'Avanzado',
    //             caract_especiales: [
    //                 'Lector de Huella'
    //             ]
    //         }],
    //         info_relevante: [{
    //             garantia: '12 Meses',
    //             incluye: 'Prueba militar MIL-STD-810H ',
    //             aviso_legal: 'En Los computadores PORTATILES La duración de la batería es un valor aproximado y depende del uso que se le de al equipo. (Los computadores De escritorio NO tienen batería)'
    //         }],
    //         nombre_producto: 'Computador Portátil LENOVO 15,6" Pulgadas IdeaPad Slim 3 Táctil - Intel Core i3 - RAM 8GB - Disco SSD 512GB - Gris',
    //         procesador: 'Intel Core I3',
    //         capacidad_disco: 'Estado Solido SSD 512 GB',
    //         memoria_ram: '8 GB',
    //         precio: '1.799.000'
    //     },
    //     {
    //         id: '3',
    //         ruta_imagen: '/images/pc3.jpg',
    //         codigo_equipo: '4711387145708',
    //         marca: 'ASUS',
    //         caract_import: [
    //             'Escudo de privacidad de la cámara web física',
    //             'Inicio de sesión seguro con sensor de huellas dactilares',
    //             'Carga hasta el 60% en solo 49 minutos',
    //             'Bajas emisiones de luz azul certificado por TÜV Rheinland',
    //             'Certificado de grado militar MIL-STD-810H'
    //         ],
    //         sinopsis: 'El potente ASUS Vivobook GO 15 negro brinda el máximo rendimiento gracias a su procesador Ryzen y los gráficos AMD Radeon Graphics. Su pantalla OLED NanoEdge validada por Pantone tiene hasta 600nits de brillo. Compacto y ligero de 1,6Kg. SSD PCIe 3.0. WiFi 6 ultrarrápido. Inicio de sesión seguro con sensor de huellas dactilares. Vivobook 15 OLED saca lo mejor de su creatividad gracias a las funciones avanzadas en la GPU que incluyen trazado de rayos, aceleración de IA y memoria LPDDR5 rápida. Cámara frontal de 720p HD. Sonido Sonic Master con cancelación de ruido. ¡Cómpralo ya!',
    //         info_basica: [{
    //             color: 'Negro mezclado',
    //             fuente: ['Batería Recargable Interna', 'Energía Eléctrica'],
    //             modelo: 'E1504FA-L1112W'
    //         }],
    //         almacen_procesa: [{
    //             memoria_ram: '8 GB',
    //             capacidad_disco: 'Estado Solido SSD 256 GB ',
    //             incluye_disco: 'Disco Estado Solido (SSD)',
    //             sistema_operativo: 'Windows',
    //             ver_sistema_operativo: 'Windows 11 Home',
    //             procesador: 'AMD R5',
    //             velocidad_procesa: '2.8 GHz (4-core/8-thread, 4MB cache, up to 4.3 GHz max boost)',
    //             nucleo_procesa: '4 Nucleos',
    //             marca_procesa: 'AMD',
    //             modelo_procesa: 'AMD Ryzen 5 7520U Processor 2.8 GHz',
    //             marca_tarjeta_video: 'No Tiene Tarjeta Video/Grafica Independiente'
    //         }],
    //         imagen_pantalla: [{
    //             tamaño_pantalla: '15.6  Pulgadas',
    //             resolucion_pantalla: 'OLED'
    //         }],
    //         conectividad: [{
    //             puertos_e_i: [
    //                 'Puerto HDMI',
    //                 'Puerto USB 2.0',
    //                 'Puerto USB 3.2',
    //                 'Puerto USB Tipo C'
    //             ],
    //             puertos_usb: '2 Puertos',
    //             puerto_hdmi: '1 Puertos',
    //             puerto_tipo_c: '1 Puertos',
    //             puerto_salida_audio: '1 Puertos',
    //         }],
    //         caract_tecnica: [{
    //             opciones_conect: [
    //                 'Bluetooth',
    //                 'USB',
    //                 'WiFi'
    //             ],
    //             duracion_bateria: '8 Horas Aproximadas'
    //         }],
    //         caract_fisica: [{
    //             caract_teclado: [
    //                 'Alfanumérico',
    //                 'Diseño Ergonómico',
    //                 'Numérico Separado'
    //             ],
    //             peso: '1.63 Kilogramos',
    //             resolucion_camara_web: 'HD',
    //             unidad_cd_dvd: 'No tiene Unidad de CD/DVD Integrada'
    //         }],
    //         detalles_productos: [{
    //             nivel_uso: 'Avanzado',
    //             caract_especiales: [
    //                 'Cámara WEB Integrada',
    //                 'Lector de Huella'
    //             ]
    //         }],
    //         info_relevante: [{
    //             garantia: '12 Meses',
    //             incluye: 'Pantalla OLED',
    //             aviso_legal: 'En Los computadores PORTATILES La duración de la batería es un valor aproximado y depende del uso que se le de al equipo. (Los computadores De escritorio NO tienen batería)'
    //         }],
    //         nombre_producto: 'Computador Portátil ASUS Vivobook OLED 15,6" Pulgadas E1504 - AMD Ryzen 5 - RAM 8GB - Disco SSD 512 GB - Negro',
    //         procesador: 'AMD R5',
    //         capacidad_disco: 'Estado Solido SSD 512 GB',
    //         memoria_ram: '8 GB',
    //         precio: '2.199.000'
    //     },
    // ];

    const data = [
        {
            id: '1',
            ruta_imagen: '/images/pc1.jpg',
            codigo_equipo: '4711387326398',
            marca: 'ASUS',
            caract_import: [
                {
                    id: 1,
                    datos: 'Incluye Maletín y Mouse alámbrico',
                },
                {
                    id: 2,
                    datos: 'Escudo de privacidad de la cámara web física',
                },
                {
                    id: 3,
                    datos: 'Inicio de sesión seguro con sensor de huellas dactilares',
                },
                {
                    id: 4,
                    datos: 'Bajas emisiones de luz azul certificado por TÜV Rheinland',
                },
                {
                    id: 5,
                    datos: 'Certificado de grado militar MIL-STD-810H'
                }
            ],
            sinopsis: 'La ASUS Vivobook Go 15 es liviana, es compacta, diseñada para que seas productivo y te mantengas entretenido donde quiera que vayas. Con su bisagra plana de 180°, el protector físico de la cámara web y un montón de características de diseño bien pensadas, incluida una hermosa pantalla con bordes ultradelgados, ¡Vivobook Go 15 es un portátil que te permite hacer todo! ¡Llévala ya!',
            info_basica: [{
                color: 'Negro mezclado',
                fuente: [
                    {
                        id: 1,
                        datos: 'Batería Recargable Interna',
                    },
                    {
                        id: 2,
                        datos: 'Energía Eléctrica'
                    }
                ],
                modelo: 'E1504FA-NJ843W'
            }],
            almacen_procesa: [{
                memoria_ram: '8 GB',
                capacidad_disco: 'Estado Solido SSD 256 GB ',
                incluye_disco: 'Disco Estado Solido (SSD)',
                sistema_operativo: 'Windows',
                ver_sistema_operativo: 'Windows 11 Home',
                procesador: 'AMD R5',
                velocidad_procesa: '2.8 GHz',
                nucleo_procesa: '4  Nucleos',
                marca_procesa: 'AMD',
                modelo_procesa: 'R5 7520U',
                marca_tarjeta_video: 'No Tiene Tarjeta Video/Grafica Independiente'
            }],
            imagen_pantalla: [{
                tamaño_pantalla: '15.6  Pulgadas',
                resolucion_pantalla: 'Full HD'
            }],
            conectividad: [{
                puertos_e_i: [
                    {
                        id: 1,
                        datos: 'Puerto HDMI'
                    },
                    {
                        id: 2,
                        datos: 'Puerto USB 2.0'
                    },
                    {
                        id: 3,
                        datos: 'Puerto USB 3.2',
                    },
                    {
                        id: 4,
                        datos: 'Puerto USB Tipo C',
                    },
                    {
                        id: 5,
                        datos: 'Salida de Audífonos'
                    }
                ],
                puertos_usb: '2 Puertos',
                puerto_hdmi: '1 Puertos',
                puerto_tipo_c: '1 Puertos',
                puerto_salida_audio: '1 Puertos',
            }],
            caract_tecnica: [{
                opciones_conect: [
                    {
                        id: 1,
                        datos: 'Bluetooth',
                    },
                    {
                        id: 2,
                        datos: 'USB',
                    },
                    {
                        id: 3,
                        datos: 'WiFi'
                    }
                ],
                duracion_bateria: '8 Horas Aproximadas'
            }],
            caract_fisica: [{
                caract_teclado: [
                    {
                        id: 1,
                        datos: 'Alfanumérico'
                    }
                ],
                peso: '1.63 Kilogramos',
                resolucion_camara_web: 'HD',
                unidad_cd_dvd: 'No tiene Unidad de CD/DVD Integrada'
            }],
            detalles_productos: [{
                nivel_uso: 'Avanzado',
                caract_especiales: [
                    {
                        id: 1,
                        datos: 'Cámara WEB Integrada',
                    },
                    {
                        id: 2,
                        datos: 'Lector de Huella'
                    }
                ]
            }],
            info_relevante: [{
                garantia: '12 Meses',
                incluye: 'Maletín y Mouse alámbrico',
                aviso_legal: 'En Los computadores PORTATILES La duración de la batería es un valor aproximado y depende del uso que se le de al equipo. (Los computadores De escritorio NO tienen batería)'
            }],
            nombre_producto: 'Computador Portátil ASUS Vivobook Go 15.6" Pulgadas E1504FA - AMD Ryzen 5 - RAM 8GB - Disco SSD 256 GB - Negro',
            procesador: 'AMD R5',
            capacidad_disco: 'Estado Solido SSD 512 GB',
            memoria_ram: '8 GB',
            precio: '1.749.000'
        },
    ];

    return data;
}

export async function fetch_producto_by_id(id) {

    const data = [
        {
            id: '1',
            ruta_imagen: '/images/pc1.jpg',
            codigo_equipo: '4711387326398',
            marca: 'ASUS',
            caract_import: [
                {
                    id: 1,
                    datos: 'Incluye Maletín y Mouse alámbrico',
                },
                {
                    id: 2,
                    datos: 'Escudo de privacidad de la cámara web física',
                },
                {
                    id: 3,
                    datos: 'Inicio de sesión seguro con sensor de huellas dactilares',
                },
                {
                    id: 4,
                    datos: 'Bajas emisiones de luz azul certificado por TÜV Rheinland',
                },
                {
                    id: 5,
                    datos: 'Certificado de grado militar MIL-STD-810H'
                }
            ],
            sinopsis: 'La ASUS Vivobook Go 15 es liviana, es compacta, diseñada para que seas productivo y te mantengas entretenido donde quiera que vayas. Con su bisagra plana de 180°, el protector físico de la cámara web y un montón de características de diseño bien pensadas, incluida una hermosa pantalla con bordes ultradelgados, ¡Vivobook Go 15 es un portátil que te permite hacer todo! ¡Llévala ya!',
            info_basica: [{
                color: 'Negro mezclado',
                fuente: [
                    {
                        id: 1,
                        datos: 'Batería Recargable Interna',
                    },
                    {
                        id: 2,
                        datos: 'Energía Eléctrica'
                    }
                ],
                modelo: 'E1504FA-NJ843W'
            }],
            almacen_procesa: [{
                memoria_ram: '8 GB',
                capacidad_disco: 'Estado Solido SSD 256 GB ',
                incluye_disco: 'Disco Estado Solido (SSD)',
                sistema_operativo: 'Windows',
                ver_sistema_operativo: 'Windows 11 Home',
                procesador: 'AMD R5',
                velocidad_procesa: '2.8 GHz',
                nucleo_procesa: '4  Nucleos',
                marca_procesa: 'AMD',
                modelo_procesa: 'R5 7520U',
                marca_tarjeta_video: 'No Tiene Tarjeta Video/Grafica Independiente'
            }],
            imagen_pantalla: [{
                tamaño_pantalla: '15.6  Pulgadas',
                resolucion_pantalla: 'Full HD'
            }],
            conectividad: [{
                puertos_e_i: [
                    {
                        id: 1,
                        datos: 'Puerto HDMI'
                    },
                    {
                        id: 2,
                        datos: 'Puerto USB 2.0'
                    },
                    {
                        id: 3,
                        datos: 'Puerto USB 3.2',
                    },
                    {
                        id: 4,
                        datos: 'Puerto USB Tipo C',
                    },
                    {
                        id: 5,
                        datos: 'Salida de Audífonos'
                    }
                ],
                puertos_usb: '2 Puertos',
                puerto_hdmi: '1 Puertos',
                puerto_tipo_c: '1 Puertos',
                puerto_salida_audio: '1 Puertos',
            }],
            caract_tecnica: [{
                opciones_conect: [
                    {
                        id: 1,
                        datos: 'Bluetooth',
                    },
                    {
                        id: 2,
                        datos: 'USB',
                    },
                    {
                        id: 3,
                        datos: 'WiFi'
                    }
                ],
                duracion_bateria: '8 Horas Aproximadas'
            }],
            caract_fisica: [{
                caract_teclado: [
                    {
                        id: 1,
                        datos: 'Alfanumérico'
                    }
                ],
                peso: '1.63 Kilogramos',
                resolucion_camara_web: 'HD',
                unidad_cd_dvd: 'No tiene Unidad de CD/DVD Integrada'
            }],
            detalles_productos: [{
                nivel_uso: 'Avanzado',
                caract_especiales: [
                    {
                        id: 1,
                        datos: 'Cámara WEB Integrada',
                    },
                    {
                        id: 2,
                        datos: 'Lector de Huella'
                    }
                ]
            }],
            info_relevante: [{
                garantia: '12 Meses',
                incluye: 'Maletín y Mouse alámbrico',
                aviso_legal: 'En Los computadores PORTATILES La duración de la batería es un valor aproximado y depende del uso que se le de al equipo. (Los computadores De escritorio NO tienen batería)'
            }],
            nombre_producto: 'Computador Portátil ASUS Vivobook Go 15.6" Pulgadas E1504FA - AMD Ryzen 5 - RAM 8GB - Disco SSD 256 GB - Negro',
            procesador: 'AMD R5',
            capacidad_disco: 'Estado Solido SSD 512 GB',
            memoria_ram: '8 GB',
            precio: '1.749.000'
        },
    ];

    const filter_data = data.filter(item => item.id == id);
    return filter_data;
}

export async function fetch_opiniones_by_id(id) {
    const data = [
        {
            id: '1',
            ruta_imagen: '/images/pc1.jpg',
            codigo_equipo: '4711387326398',
            marca: 'ASUS',
            caract_import: [
                {
                    id: 1,
                    datos: 'Incluye Maletín y Mouse alámbrico',
                },
                {
                    id: 2,
                    datos: 'Escudo de privacidad de la cámara web física',
                },
                {
                    id: 3,
                    datos: 'Inicio de sesión seguro con sensor de huellas dactilares',
                },
                {
                    id: 4,
                    datos: 'Bajas emisiones de luz azul certificado por TÜV Rheinland',
                },
                {
                    id: 5,
                    datos: 'Certificado de grado militar MIL-STD-810H'
                }
            ],
            sinopsis: 'La ASUS Vivobook Go 15 es liviana, es compacta, diseñada para que seas productivo y te mantengas entretenido donde quiera que vayas. Con su bisagra plana de 180°, el protector físico de la cámara web y un montón de características de diseño bien pensadas, incluida una hermosa pantalla con bordes ultradelgados, ¡Vivobook Go 15 es un portátil que te permite hacer todo! ¡Llévala ya!',
            info_basica: [{
                color: 'Negro mezclado',
                fuente: [
                    {
                        id: 1,
                        datos: 'Batería Recargable Interna',
                    },
                    {
                        id: 2,
                        datos: 'Energía Eléctrica'
                    }
                ],
                modelo: 'E1504FA-NJ843W'
            }],
            almacen_procesa: [{
                memoria_ram: '8 GB',
                capacidad_disco: 'Estado Solido SSD 256 GB ',
                incluye_disco: 'Disco Estado Solido (SSD)',
                sistema_operativo: 'Windows',
                ver_sistema_operativo: 'Windows 11 Home',
                procesador: 'AMD R5',
                velocidad_procesa: '2.8 GHz',
                nucleo_procesa: '4  Nucleos',
                marca_procesa: 'AMD',
                modelo_procesa: 'R5 7520U',
                marca_tarjeta_video: 'No Tiene Tarjeta Video/Grafica Independiente'
            }],
            imagen_pantalla: [{
                tamaño_pantalla: '15.6  Pulgadas',
                resolucion_pantalla: 'Full HD'
            }],
            conectividad: [{
                puertos_e_i: [
                    {
                        id: 1,
                        datos: 'Puerto HDMI'
                    },
                    {
                        id: 2,
                        datos: 'Puerto USB 2.0'
                    },
                    {
                        id: 3,
                        datos: 'Puerto USB 3.2',
                    },
                    {
                        id: 4,
                        datos: 'Puerto USB Tipo C',
                    },
                    {
                        id: 5,
                        datos: 'Salida de Audífonos'
                    }
                ],
                puertos_usb: '2 Puertos',
                puerto_hdmi: '1 Puertos',
                puerto_tipo_c: '1 Puertos',
                puerto_salida_audio: '1 Puertos',
            }],
            caract_tecnica: [{
                opciones_conect: [
                    {
                        id: 1,
                        datos: 'Bluetooth',
                    },
                    {
                        id: 2,
                        datos: 'USB',
                    },
                    {
                        id: 3,
                        datos: 'WiFi'
                    }
                ],
                duracion_bateria: '8 Horas Aproximadas'
            }],
            caract_fisica: [{
                caract_teclado: [
                    {
                        id: 1,
                        datos: 'Alfanumérico'
                    }
                ],
                peso: '1.63 Kilogramos',
                resolucion_camara_web: 'HD',
                unidad_cd_dvd: 'No tiene Unidad de CD/DVD Integrada'
            }],
            detalles_productos: [{
                nivel_uso: 'Avanzado',
                caract_especiales: [
                    {
                        id: 1,
                        datos: 'Cámara WEB Integrada',
                    },
                    {
                        id: 2,
                        datos: 'Lector de Huella'
                    }
                ]
            }],
            info_relevante: [{
                garantia: '12 Meses',
                incluye: 'Maletín y Mouse alámbrico',
                aviso_legal: 'En Los computadores PORTATILES La duración de la batería es un valor aproximado y depende del uso que se le de al equipo. (Los computadores De escritorio NO tienen batería)'
            }],
            nombre_producto: 'Computador Portátil ASUS Vivobook Go 15.6" Pulgadas E1504FA - AMD Ryzen 5 - RAM 8GB - Disco SSD 256 GB - Negro',
            procesador: 'AMD R5',
            capacidad_disco: 'Estado Solido SSD 512 GB',
            memoria_ram: '8 GB',
            precio: '1.749.000'
        },
    ];

    const filter_data = data.filter(item => item.id == id);
    return filter_data;
}