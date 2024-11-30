import React from 'react'
import { Card } from 'primereact/card';

const Authors = () => {
    return (
        <div className='px-6' id='Authors'>
            <h1 className='mb-6 text-2xl font-semibold text-guinda'>Autores</h1>
            <div className='w-full flex md:flex-row flex-col gap-5 items-center justify-center'>
                <Card className='w-1/2 md:h-80'>
                    <div className='flex md:flex-row md:items-center flex-col-reverse'>
                        <div className='md:w-2/3 w-full px-10'>
                            <h1 className='text-3xl font-semibold mb-3'>Kevin Ramírez Mendéz</h1>
                            <p>Es estudiante de la Licenciatura en Ciencia de Datos en la Escuela Superior de Cómputo (ESCOM) del Instituto Politécnico Nacional. </p>
                        </div>
                        <div className='md:w-1/3 w-full flex flex-col items-center'>
                            <img src="../img/krm.jpg" alt="Kevin Mendez" className='rounded-full w-48 h-48' />

                        </div>
                    </div>

                </Card>

                <Card className='w-1/2 md:h-80'>
                    <div className='flex md:flex-row md:items-center flex-col-reverse'>
                        <div className='md:w-2/3 w-full px-10'>
                            <h1 className='text-3xl font-semibold mb-3'>Erin Mondolla Cervantes</h1>
                            <p>Es estudiante de octavo semestre de la Licenciatura en Ciencia de Datos en la Escuela Superior de Cómputo (ESCOM) del Instituto Politécnico Nacional. </p>
                        </div>
                        <div className='md:w-1/3 w-full flex flex-col items-center'>
                            <img src="../img/emc.jpg" alt="Kevin Mendez" className='rounded-full w-48 h-48' />

                        </div>


                    </div>

                </Card>

            </div>
        </div>
    )
}

export default Authors
