import React, { useState } from 'react'

const Hoc = (OriginalComponent) => {
const NewComponent = () => {
    const [fontSize, setFontsize] = useState(11);

    const hoverfontSize = () => {
        setFontsize(fontSize+1);
    }
    return <OriginalComponent fontSize={fontSize} hoverfontSize={hoverfontSize}/>
}

 return NewComponent
}

export default Hoc