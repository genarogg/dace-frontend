import Form from "./form/Form";
import Layout from "@layout";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <Layout where="home">
      <Form />
    </Layout>
  );
};

export default Home;
