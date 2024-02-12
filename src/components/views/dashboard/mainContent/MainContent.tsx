interface MainContentProps {
  context: string;
}

const MainContent: React.FC<MainContentProps> = ({ context }) => {
  switch (context) {
    case "initial":
      return (
        <div className="container-img" style={{ marginLeft: "200px" }}>
          <div
            className=""
            style={{ width: "100px", height: "100px", backgroundColor: "#333" }}
          ></div>
          <div
            className=""
            style={{ width: "100px", height: "100px", backgroundColor: "#333" }}
          ></div>
          <div
            className=""
            style={{ width: "100px", height: "100px", backgroundColor: "#333" }}
          ></div>
          <div
            className=""
            style={{ width: "100px", height: "100px", backgroundColor: "#333" }}
          ></div>
          <div
            className=""
            style={{ width: "100px", height: "100px", backgroundColor: "#333" }}
          ></div>
          <div
            className=""
            style={{ width: "100px", height: "100px", backgroundColor: "#333" }}
          ></div>
        </div>
      );
    // ...
    default:
      return <p>hola</p>;
  }
};

export default MainContent;
