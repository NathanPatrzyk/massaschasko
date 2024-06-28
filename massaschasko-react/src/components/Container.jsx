import React from "react";

const Container = ({ className, children }) => {
  return <div className={`px-8 md:px-16 ${className}`}>{children}</div>;
};

export default Container;
