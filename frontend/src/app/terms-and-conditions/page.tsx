import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { getPolicy } from "@/lib/policies";
import PolicyPage from "../../../components/legal/policy-page";

const policy = getPolicy("terms-and-conditions");

export const metadata: Metadata = pageMeta({
  title: policy.title,
  description: policy.description,
  path: `/${policy.slug}`,
});

export default function Page() {
  return <PolicyPage policy={policy} />;
}
