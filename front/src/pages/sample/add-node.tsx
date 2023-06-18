import AddNodeComponent from "@/components/AddNode";
import { useRete } from "rete-react-render-plugin";

export default function AddNodePage() {
  const [ref] = useRete(AddNodeComponent);

  return (
    <div>
      <div ref={ref} style={{ height: "100vh", width: "100vw" }}></div>
    </div>
  );
}
