/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Mail
 */

import React from "react";

const Mail: React.FC<any> = (props) => {
  const { className, ...restProps } = props;

  return (
    <span
      role="img"
      aria-label="Mail"
      className={className}
      style={{ display: "flex", alignItems: "center" }}
      {...restProps}
    >
      <svg
        viewBox="64 64 896 896"
        focusable="false"
        data-icon="mail"
        width="24"
        height="24"
        fill="#da202a"
        aria-hidden="true"
      >
        <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z"></path>
      </svg>
    </span>
  );
};

export default Mail;
