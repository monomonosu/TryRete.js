import createEditor from "../../components/createEditor";
import { useRete } from "rete-react-render-plugin";

export default function Sample() {
  const [ref] = useRete(createEditor);

  return (
    <div className="App">
      <div ref={ref} style={{ height: "100vh", width: "100vw" }}></div>
    </div>
  );
}
