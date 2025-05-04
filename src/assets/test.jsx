import { motion } from 'framer-motion';

const Test = () => {
    const list = {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      };
      
      const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };

      const containerVariants = {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.5, // delay between children
          },
        },
      };
      const itemVariants = {
        hidden: { opacity: 0, x: 30 },
        show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
      };
            
  return (
<>
    <motion.div
      initial={{ opacity: 0 }}      // Initial state
      animate={{ opacity: 1 }}      // Final state
      transition={{ duration: 2 }}  // Duration of the animation
    >
      <h1>Welcome to My Animated App!</h1>
    </motion.div>
        <motion.div
        drag
        style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: '8px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
        }}
    >
        Drag me!
    </motion.div>
    <motion.div
      animate={{
        x: [0, 100, 0],    // Move left to right and back
        y: [0, -100, 0],   // Move top to bottom and back
        opacity: [1, 0, 1], // Fade out and back in
      }}
      transition={{
        duration: 2,
        repeat: Infinity,   // Repeat animation
        repeatType: 'loop', // Infinite loop
      }}
    >
      <h1>Keyframe Animation</h1>
    </motion.div>

    <motion.ul
    variants={list}
    initial="hidden"
    animate="visible"
    >
    {[1, 2, 3].map(i => (
        <motion.li key={i} variants={item}>
        Item {i}
        </motion.li>
    ))}
    </motion.ul>
    <motion.div
        drag
        dragConstraints={{ top: 0, bottom: 100, left: 0, right: 100 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
            width: 100,
            height: 100,
            backgroundColor: "skyblue",
            borderRadius: 10,
        }}
        >
        Drag Me
    </motion.div>

    <motion.div
  variants={containerVariants}
  initial="hidden"
  animate="show"
>
  {[
    {
      title: "Expenses Tracker",
      text: "Our comprehensive collection of medications,\n supplements, and healthcare products.",
      lineColor: "bg-green-950",
      bgColor: "bg-lime-100",
    },
    {
      title: "Crypto Connection",
      text: "From advanced imaging technology such as MRI\n and CT scanners to precision surgical tools.",
      lineColor: "bg-gray-300",
      bgColor: "bg-gray-100",
    },
    {
      title: "Automated Invoicing",
      text: "We're committed to leveraging the latest\n innovations in medical technology.",
      lineColor: "bg-gray-300",
      bgColor: "bg-gray-100",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="flex flex-sm-row gap-1"
    >
      <div className={`rounded-full w-1 h-20 ${item.lineColor} mt-2`}></div>
      <div className={`rounded-xl ${item.bgColor} w-80 py-2 mt-2 ml-2`}>
        <h3 className="font-bold text-black text-sm tracking-wider mx-3 mt-1">{item.title}</h3>
        <p className="text-[12px] font-semibold mt-1 mx-3">{item.text}</p>
      </div>
    </motion.div>
  ))}
</motion.div>


</>
  );
};

export default Test;
