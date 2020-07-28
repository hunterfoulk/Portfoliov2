import React from "react";
import { Transition } from "react-spring/renderprops";
// import { Transition, animated } from "react-spring";

const ModalTransition = ({ modal, children }) => {
  return (
    <Transition
      items={modal}
      config={{ zIndex: "500" }}
      from={{
        transform: "translate3d(0,-0px,0)",
      }}
      enter={{ transform: "translate3d(0,50,0)" }}
      leave={{
        opacity: 0,
        transform: "translate3d(0,10px,0)",
        pointerEvents: "none",
      }}
      delay={1}
    >
      {(open) => open && ((props) => <div style={props}>{children}</div>)}
    </Transition>
  );
};

export default ModalTransition;
