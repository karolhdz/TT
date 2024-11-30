import React, { useRef, useState, useEffect } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { TabView, TabPanel } from 'primereact/tabview';
import LineChart from "./LineChart";
import PolarChart from "./PolarChart";
import { Messages } from 'primereact/messages';
import { ScrollPanel } from 'primereact/scrollpanel';
import { getResumen } from "../utils/ajax";
import { Toast } from 'primereact/toast';
// import './ScrollPanelDemo.css';


const Main = () => {
    const msgs = useRef(null);
    const toast = useRef(null);

    const [spechData, setSpechData] = useState(null);
    useEffect(() => {
        if (spechData != null) {
            if (spechData.error) {
                toast.current.show({ severity: 'error', detail: spechData.error });
            } else {
                let message = {}
                if (false) {
                    message = { id: '1', sticky: true, severity: 'error', detail: 'Este texto cuenta con técnicas de persuación', closable: false }
                } else{
                    message = { id: '1', sticky: true, severity: 'success', detail: 'Este texto NO cuenta con técnicas de persuación', closable: false }
                }
                if (msgs.current) {
                    msgs.current.clear();
                    msgs.current.show(message);
                }
            }
        }
    }, [spechData]);


    const onSubmit = () => {
        const discurss = document.getElementById("discurss").value;
        getResumen(discurss).then(response =>{
            setSpechData(response)
        }).catch(error => {
            setSpechData({error: "Hubo un error de conexión"})
        })
        // console.log(response)
        
    }

    const formatTechniques = (tecs) => {
        if(tecs != null){
            return [tecs.appeal, tecs.discreting, tecs.loaded_language];
        }
    }

    return (
        <>
            <Toast ref={toast} />
            <div className='flex w-full mt-6 px-6 gap-8 h-fit md:flex-row flex-col' id="How-it-works">
                <div className='md:w-1/2 w-full'>
                    <div className="card flex justify-content-center flex-col gap-3">
                        <span className="text-xl font-semibold text-guinda">Ingresa el discurso</span>
                        <InputTextarea id="discurss" rows={10} cols={100} autoResize={false} />
                        <div className="flex justify-center">
                            <button className="rounded-md bg-blue-title w-24 px-2 py-2 text-white hover:bg-blue-h" onClick={onSubmit}>Enviar</button>
                        </div>

                    </div>
                </div>
                <div className='md:w-1/2 h-fit w-full'>
                    <TabView>
                        <TabPanel header="Resumen">
                            <div className="flex flex-col gap-4">
                                <ScrollPanel style={{ width: '100%', height: '160px' }} className="custombar1">
                                    <p>{spechData?.summary ? spechData.summary : "No haz ingresado ningún discurso"}</p>
                                </ScrollPanel>
                                <Messages ref={msgs} />
                            </div>
                        </TabPanel>
                        <TabPanel header="Gráfica de Barras" disabled={spechData?.binary ? spechData.binary : true}>
                            <LineChart techniques={formatTechniques(spechData?.techniques ? spechData.techniques : null)}/>
                        </TabPanel>
                        <TabPanel header="Gráfica Polar" disabled={spechData?.binary ? spechData.binary : true}>
                            <PolarChart techniques={formatTechniques(spechData?.techniques ? spechData.techniques : null)}/>
                        </TabPanel>
                    </TabView>
                </div>
            </div>
        </>

    )
}

export default Main
