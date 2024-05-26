import { useLoaderData } from "react-router-dom";

export function useShoes() {
    const shoes = useLoaderData()
    return shoes;
}

// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const useShoes = () => {
//     const shoes = useLoaderData()
//     return (
//         <div>

//         </div>
//     );
// };

// export default useShoes;