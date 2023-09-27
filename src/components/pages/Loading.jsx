import { motion, AnimatePresence } from "framer-motion"
 
export default function Loading(props){
    return(
        <AnimatePresence>
            {props.isLoading && (
            <motion.div
                className="loading-screen"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >

                <p>Alex Christodoulou</p>
                <div className="loading-bar"></div>
            </motion.div>
            )}
        </AnimatePresence>
    )
}