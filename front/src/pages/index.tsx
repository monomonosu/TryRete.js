import createEditor from "./createEditor";
import { useRete } from "rete-react-render-plugin";

export default function Hoge() {
  const [ref] = useRete(createEditor);

  return (
    <div className="App">
      <div ref={ref} style={{ height: "100vh", width: "100vw" }}></div>
    </div>
  );
}
