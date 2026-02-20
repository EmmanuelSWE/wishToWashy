import { createStyles } from "antd-style";

const useRegStyles = createStyles(({ css }) => ({
  wrapper: css`
    display: flex;
    justify-content: center;
  `,
  Form: css`
    background-color: #1d1d1d60;
    width:350px;
    padding:20px;
    border-radius:8px;
  `,

  label:css`
    & .ant-form-item-label > label {
      color: #ffffff !important;
    }
  `,
  
}));

export default useRegStyles;