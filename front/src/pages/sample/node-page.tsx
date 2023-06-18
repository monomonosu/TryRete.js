import NodeComponent from "@/components/Node";
import { useRete } from "rete-react-render-plugin";

export default function NodePage() {
  const [ref] = useRete(NodeComponent);

  return (
    <div>
      <div ref={ref} style={{ height: "100vh", width: "100vw" }}></div>
    </div>
  );
}
