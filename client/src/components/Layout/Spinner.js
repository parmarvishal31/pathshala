import React, { useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Spinner = () => {
    const [color, setColor] = useState('#36d7b7');

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="grid place-items-center">
                <HashLoader color={color} size={70} />
            </div>
        </div>
    );
};

export default Spinner;
