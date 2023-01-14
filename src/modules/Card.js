import React from "react";
import ReactDOM from "react-dom";
import {motion} from "framer-motion";

const Card = () => {
    return (
        <motion.Card>
            <motion.Card.Img variant="top" src="https://picsum.photos/">
                All Good!
            </motion.Card.Img>
        </motion.Card>

    )
}

export default Card;