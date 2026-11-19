import type { Metadata } from "next";
import { getPolicy } from "@/lib/policies";
import PolicyPage from "../../../components/legal/policy-page";

const policy = getPolicy("privacy-policy");

export const metadata: Metadata = {
  title: `${policy.title} | Positive Impact`,
  description: policy.description,
};

export default function Page() {
  return <PolicyPage policy={policy} />;
}
