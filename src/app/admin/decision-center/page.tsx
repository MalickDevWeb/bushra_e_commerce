import { Metadata } from "next";
import DecisionCenterPage from "@/modules/decision/ui/DecisionCenterPage";

export const metadata: Metadata = {
  title: "Decision Center | Bushra Admin",
  description: "Centre de décision IA",
};

export default function Page() {
  return <DecisionCenterPage />;
}
