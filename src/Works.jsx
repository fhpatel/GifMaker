import React, { useState, useEffect } from 'react';
import './index.css';

function Works(){
    return(
        <div class='content-center pt-10'>
            <div class='grid grid-cols-3 gap-0 max-w-5xl m-auto'>
                <div class='p-6 w-80 mx-auto bg-yellow-500 rounded-xl shadow-md flex items-center flex-col text-white'>
                    <h2 class='flex justify-center font-semibold text-2xl'> Step 1 </h2>
                    <img class='h-20'src='./icons/upload.png'></img>
                    <span class='font-semibold'> Select your video to upload  </span>
                </div>
                <div class='p-6 w-80 mx-auto bg-yellow-500 rounded-xl shadow-md flex items-center flex-col text-white'>
                    <h2 class='font-semibold text-2xl pb-5'> Step 2 </h2>
                    <img class='h-12 mx-0' src='./icons/convert.png'></img>
                    <span class='pt-5 font-semibold'> Click convert and let the magic happen </span>
                </div>
                <div class='p-6 w-80 mx-auto bg-yellow-500 rounded-xl shadow-md flex items-center flex-col text-white'>
                    <h2 class='font-semibold text-2xl pb-5'> Step 3 </h2>
                    <img class='h-12' src='./icons/share.png'></img>
                    <span class='pt-5 font-semibold'> Share Share Share!</span>
                </div>
            </div>
        </div>

    )
}

export default Works;