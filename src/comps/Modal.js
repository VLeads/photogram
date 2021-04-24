import React from 'react';
import { motion } from 'framer-motion';
import {RiDeleteBinLine} from "react-icons/ri";
// import '../index.css';

const Modal = ({ setSelectedImg, selectedImg }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }

    const imgDelete = (e) => {
        
    }

    return (
        <div>
        <motion.div className="backdrop" onClick={handleClick}
            initial={{opacity: 0.1}}
            animate={{opacity: 1}} > 
                <button onClick={imgDelete}><RiDeleteBinLine size={25} /></button>
                <motion.img src={selectedImg} alt="enlarged pic"
                    initial={{ y: "-100vh"}}
                    animate={{ y: "0"}}
                />
                
        </motion.div>
        </div>
    )

}

export default Modal;