import React from 'react'
import BounceLoader from "react-spinners/BounceLoader";

const Loading = () => {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    return (
        <>
            <div className='fixed bg-white blur-md opacity-40 z-40 w-full h-full'>
            </div>
            <div className='fixed w-full h-full flex z-50 flex-col items-center justify-center gap-3'>
                <BounceLoader
                    color={"#6D1A42"}
                    loading={true}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                <h1 className='font-semibold text-3xl text-guinda'>Cargando...</h1>
            </div>
        </>


    )
}

export default Loading
