import Form from "./form/Form";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <>
      <div className="containerAll">
        <Form />
      </div>
    </>
  );
};

export default Home;
