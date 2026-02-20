import MachineList from '../../components/machines/MachineList';
import Layout from '../../layouts/Layout';
import { withAuth } from '../../hoc/withAuth';

const Home = () => {
  return (
    <Layout>
      <MachineList />
    </Layout>
  );
};

export default withAuth(Home);
