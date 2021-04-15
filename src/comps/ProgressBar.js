import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({file, setFile}) => {

    const {url, progress} = useStorage(file);
    
    useEffect(() => {
        if (url) {
            setFile(null);
        } 
    }, [setFile, url])

    return (
        <div className="progress-bar" style={{width: progress + '%'}}></div>
        // <div className="progress-bar ">progress</div>
    )

}
export default ProgressBar;