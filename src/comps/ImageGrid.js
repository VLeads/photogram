import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid= ({ setSelectedImg }) => {

    const { docs }  = useFirestore('images');
    console.log(docs);

    return (
        <div className="img-grid" >
            {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                    layout  /*just giving motion to change img position when new img uploaded */
                    whileHover={{opacity: 1}}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="uploaded pic" 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}} 
                    transition={{delay: 1}}
                    /> {/*when image is being added it's opacity will be zero and slowly 
                                                it will increase to 1, but after 1 sec as transition */}
                </motion.div>
            ) ) }
        </div>
    )
}

export default ImageGrid;
