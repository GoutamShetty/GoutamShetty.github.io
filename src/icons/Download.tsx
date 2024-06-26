/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Download
 */

import React from "react";

const Download: React.FC<any> = (props) => {
  const { className, ...restProps } = props;

  return (
    <span
      role="img"
      aria-label="Download"
      className={className}
      style={{ display: "flex", alignItems: "center" }}
      {...restProps}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 24.0083V42H42V24"
          stroke="#333"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M33 23L24 32L15 23"
          stroke="#333"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23.9917 6V32"
          stroke="#333"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  );
};

export default Download;
