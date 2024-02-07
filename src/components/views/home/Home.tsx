import { toast } from "react-toastify";
import Form from "./form/Form";
import Layout from "@layout";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <Layout>
      <div className="containerAll">
        <Form />
      </div>

      <button
        style={{ position: "fixed", bottom: "30px", right: "0" }}
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
        notificacion
      </button>

      <button
        onClick={() => {
          const body = document.getElementById("containerFormAll");
          body?.classList.toggle("active-right");
        }}
      >
        voltear
      </button>
    </Layout>
  );
};

export default Home;
