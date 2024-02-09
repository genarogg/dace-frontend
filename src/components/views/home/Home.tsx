import { toast } from "react-toastify";
import Form from "./form/Form";
import Layout from "@layout";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <Layout where="home">
      <Form />

      {/* <button
        style={{
          position: "fixed",
          bottom: "30px",
          right: "0",
          background: "#fff",
          border: "1px solid #000",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={() =>
          toast.success("🦄 Wow so easy!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        }
      >
        probar notificacion (test)
      </button> */}
    </Layout>
  );
};

export default Home;
