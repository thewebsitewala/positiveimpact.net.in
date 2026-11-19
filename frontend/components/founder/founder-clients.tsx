import { clients } from "@/lib/clients";
import ClientWall from "./client-wall";
import { eyebrow, h2, wrap, type Tone } from "./styles";

/** Corporate training history: the client logo wall. */
const FounderClients = ({ tone = "bg-white" }: { tone?: Tone }) => (
  <section aria-labelledby="history-heading" className={`${tone} py-20 md:py-28`}>
    <div className={wrap}>
      <div className="mx-auto max-w-2xl text-center">
        <p className={eyebrow}>Corporate training history</p>
        <h2 id="history-heading" className={h2}>
          Teams she has trained
        </h2>
      </div>
      <ClientWall clients={clients} />
    </div>
  </section>
);

export default FounderClients;
