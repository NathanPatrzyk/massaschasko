import React from "react";
import Container from "./Container";

const PageContainer = ({ className, children }) => {
  return (
    <>
      <div className="h-16 bg-green-600"></div>
      <Container className={`py-8 md:py-16 ${className}`}>{children}</Container>
    </>
  );
};

export default PageContainer;
