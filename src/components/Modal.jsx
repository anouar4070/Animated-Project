import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  //const hiddenAnimationState = { opacity: 0, y: 30 };
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      {/* <motion.div
        className="backdrop"
        onClick={onClose}
        variants={{
          hidden: { opacity: 0, pointerEvents: "none" },
          visible: { opacity: 1, pointerEvents: "auto" },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      /> */}

      {/* <motion.dialog
        initial={hiddenAnimationState}
        animate={{ opacity: 1, y: 0 }}
        exit={hiddenAnimationState}
        open
        className="modal"
      > */}
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        //whileHover="hidden"
        //transition={{ duration: 0.5 }}
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
