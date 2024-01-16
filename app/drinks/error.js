"use client";

const error = (e) => {
  console.log(e)
  return <div>{e.error.message}</div>;
};

export default error;
