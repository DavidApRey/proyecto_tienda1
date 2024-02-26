import React from 'react'

async function SelectMarca(id = '') {

    const resp_lista_marcas = await fetch_lista_marcas();

    return (
        <div>
            <select className="w-full text-black p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none">
                {resp_lista_marcas.map(item => {
                    <option value={item.id_cons}>{item.marca}</option>
                })}
            </select>
        </div>
    )
}

export default SelectMarca
