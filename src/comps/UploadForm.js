import React, {useState} from "react";
import ProgressBar from './ProgressBar';




const UploadForm = () => {

    const [file, setFile] = useState('');
    const [error, setError ] = useState(null);

    const format = ['image/png', 'image/jpeg', 'image/jpg'];

    const changeHandler= (e) => {
        let selected = e.target.files[0];
    
        if(selected && format.includes(selected.type)) {
            setFile(selected);
            setError(null);
        } else {
            setFile(null);
            setError('choose only supported format (png/jpeg/jpg)');
        } 
    }
    

    return (
        <form> 
            <label>
            <input className="label" type="file" onChange={changeHandler} placeholder="+"/>
            <span>+</span>
            </label>
                <div className="output">
                    { file && <div>{file.name}</div> } 
                    {error && <div className="error" >{error}</div> }
                    {file && <ProgressBar file={file} setFile={setFile} /> }
                </div>
        </form>
                
    )
}

export default UploadForm;