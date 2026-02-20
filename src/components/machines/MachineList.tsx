import React, { useEffect } from "react";
import { useMachineState, useMachineActions } from "../../providers/machineProvider";
import { List, Avatar,Card,Tag} from "antd";
import { useStyles } from "./style";

const MachineList = () => {
  const { machines, isPending, isError } = useMachineState();
  const { getMachines } = useMachineActions();
  const {styles}=useStyles();

  useEffect(() => {
    getMachines();
  }, [getMachines]);

  if (isPending) return <p>Loading machines...</p>;
  if (isError) return <p>Error loading machines.</p>;

  return (
    <>
        <List
            className={styles.metaContentFix}
            dataSource={machines}
            renderItem={(machine) => (
                <Card className={styles.Card}>
                    <List.Item key={machine.id}>
                    <List.Item.Meta
                        avatar={<Avatar src={machine.image} size={130} className={styles.machineAvatar}/>}
                        title={<span className={styles.machineTitle}>{machine.name}</span>}
                        description={
                        <div className={styles.machineData}>
                            <div className={styles.machineDescription}>
                            {machine.description}
                            </div>

                            <p className={styles.machineState}>
                            {machine.state}
                            </p>
                        </div>
                        }
                    />
                    </List.Item>
                </Card>

                )}
            />
        
    </>
    
  );
};

export default MachineList;
