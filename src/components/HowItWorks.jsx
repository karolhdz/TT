import React from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion';

const HowItWorks = () => {
    return (
        <div>
            <Accordion >
                <AccordionTab header="¿Cómo funciona?">
                    <div className='w-full flex md:px-8'>
                        <div className="md:w-2/3 w-full">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className='w-1/3 flex items-center justify-center md:block hidden'>
                            <img src='../img/how-it-works.webp' alt='how-it-works' className='h-48 '/>
                        </div>
                    </div>

                </AccordionTab>
            </Accordion>
        </div>
    )
}

export default HowItWorks
