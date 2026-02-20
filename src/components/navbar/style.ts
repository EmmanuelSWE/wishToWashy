import { createStyles } from "antd-style";

export const useNavStyles = createStyles(({ css }) => ({
  nav: css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0; /* This ensures it stretches to the right edge without overflow */
    height: 70px;
    background-color: #1c1c1c;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    
    /* Add this to prevent padding from adding to the width */
    box-sizing: border-box; 
  `,

  brand: css`
    font-size: 24px;
    font-weight: bold;
    color: white;
  `,

  actions: css`
    display: flex;
    align-items: center;
    gap: 15px;
    color: white;
  `,

  username: css`
    font-weight: 500;
  `,

  addButton: css`
    background-color: #00c850;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #00a63c;
    }
  `,
}));
