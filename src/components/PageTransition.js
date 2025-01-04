import { motion } from "framer-motion";

const PageTransition = () => {
  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "150vh",
          zIndex: 30,
          backgroundColor: "#D9D9D9 ",
          transform: "translateY(-20rem)",
        }}
        initial={{ x: "0%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <motion.div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: 20,
          width: "100vw",
          height: "150vh",
          backgroundColor: "#FAFAFA ",
          transform: "translateY(-20rem)",
        }}
        initial={{ x: "0%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />

      {/* Mavi Ekran */}
      <motion.div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "150vh",
          zIndex: 10,
          backgroundColor: "#3D3C3C",
          transform: "translateY(-20rem)",
        }}
        initial={{ x: "0%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};

export default PageTransition;
