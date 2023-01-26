import React from "react";
import { indexStyles } from "./styles";

const Table = ({tableWidth, children, border=true}) => {
  const styles = indexStyles(tableWidth, border);

  return (
      <div css={styles.formWrapper}>
        <div css={styles.loginForm}>
          {children}
        </div>
      </div>
  );
};

export default Table;

