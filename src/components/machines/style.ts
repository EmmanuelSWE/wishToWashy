import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css}) => ({
   Card: css`
    background-color: #1c1c1c;
    width: 600px;
    margin: 10px;
    border-radius: 8px;
    border-color: #2a2a2a;
    .ant-card-body {
      padding: 10px !important
  `,

  metaContentFix: css`
    margin-top:90px;
    .ant-list-item {
      margin-top:8px;
      padding: 0 !important;
    }

    .ant-list-item-meta-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      padding: 0px !important;
    }
    
    .ant-list-item-meta-avatar {
      margin-inline-end: 12px !important; 
    }
  `,


  machineData: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    text-align: left;
  `,



  machineTitle: css`
    font-size: 25px;
    font-weight: 700;
    color: white;
    padding:0px !important;
  `,

  machineDescription: css`
    color: #d0cece;
    font-size:18px;
  `,

  machineState:css`
    font-size:15px;
    background-color:rgba(0, 69, 27, 0.3);
    padding:5px;
    border-radius:5px;
    color: #08ac31;
  `,

  machineAvatar:css`
     border-radius: 8px !important;
  `,


}));
