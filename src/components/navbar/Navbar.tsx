import { useAuthState } from "../../providers/authProvider";
import { useNavStyles } from "./style";
import AddMachineModal from "../add-machine/addMachine";


const Nav = () => {
  const { user } = useAuthState(); // get current user
  const { styles } = useNavStyles();

  return (
    <nav className={styles.nav}>
      <div className="logo">Wish 2 Washy</div>

      <div className={styles.actions}>
        {user && <span>{user.username}</span>}
        {user && <AddMachineModal />}
      </div>
    </nav>
  );
};

export default Nav;
