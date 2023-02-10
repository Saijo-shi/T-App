import { EuiTabbedContentProps } from "@elastic/eui";
import Yur from "./Yur";
import Fiz from "./Fiz";

const tabs: EuiTabbedContentProps["tabs"] = [
  {
    id: "fiz",
    name: "Физические лица",
    content: <Fiz />,
  },
  {
    id: "yur",
    name: "Юридические лица",
    content: <Yur />,
  },
];
export default tabs;
