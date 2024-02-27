import PropTypes from "prop-types";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function FadeUp({ children }) {
    const ref = useRef();
    const controls = useAnimation();
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1, y: 0, filter: "blur(0)" });
        } else {
            controls.start({ opacity: 0, y: 50, filter: "blur(10px)" });
        }
    }, [controls, isInView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={controls}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}

FadeUp.propTypes = {
    children: PropTypes.node.isRequired,
};
