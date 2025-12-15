import { PropsWithChildren, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type MotionSectionProps = PropsWithChildren<
  Omit<HTMLMotionProps<"section">, "ref">
> & { id?: string };

export const MotionSection = forwardRef<HTMLElement, MotionSectionProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        {...props}
      >
        {children}
      </motion.section>
    );
  },
);

export default MotionSection;
