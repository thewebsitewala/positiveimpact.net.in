"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { TeamMember } from "@/lib/about";

/** Team card: photo, name, role and a bio that opens with "Show more". */
const TeamCard = ({ member }: { member: TeamMember }) => {
  const [open, setOpen] = useState(false);
  const bioId = useId();

  return (
    <li className="flex flex-col overflow-hidden rounded-3xl border border-sand bg-white">
      <div className="relative aspect-[4/4] bg-[#f4e0c7]">
        <Image
          src={member.photo}
          alt={`Portrait of ${member.name}`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover object-[center_20%]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-xl font-medium tracking-tight text-espresso">{member.name}</h3>
        <p className="mt-1.5 text-[13px] font-medium leading-snug text-caramel">{member.role}</p>

        <div id={bioId} className="mt-5 space-y-3 text-[15px] leading-relaxed text-walnut">
          {open ? (
            member.bio.map((p) => <p key={p.slice(0, 20)}>{p}</p>)
          ) : (
            <p className="line-clamp-3">{member.bio[0]}</p>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={bioId}
          className="mt-3 inline-flex min-h-11 items-center gap-1.5 self-start text-[13px] font-medium text-espresso transition-colors hover:text-caramel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
        >
          {open ? "Show less" : "Show more"}
          <svg
            viewBox="0 0 20 20"
            aria-hidden
            className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M5.5 7.5l4.5 4.5 4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default TeamCard;
