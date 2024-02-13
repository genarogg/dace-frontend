import Form from "./form/Form";
import Layout from "@layout";
import Header from "./Header";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <Layout where="home"header={<Header where="home" />}>
      <Form />
    </Layout>
  );
};

export default Home;
