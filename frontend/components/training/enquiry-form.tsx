"use client";

import { useId, useState, type FormEvent } from "react";
import { trainings } from "@/lib/trainings";
import { liveCourses as courses } from "@/lib/courses";
import { contact, KEYNOTE } from "@/lib/site";

type Fields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  training: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "sending" | "sent" | "error";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Please enter your name.";
  if (!f.email.trim()) e.email = "Please enter your work email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
    e.email = "That email doesn't look right.";
  if (!f.phone.trim()) e.phone = "Please enter a phone number.";
  else if (f.phone.replace(/\D/g, "").length < 8)
    e.phone = "Please enter a valid phone number.";
  return e;
}

interface Props {
  /** Pre-selects the training in the dropdown. */
  defaultTraining?: string;
  /** Called after a successful send (the popup uses it to offer "Close"). */
  onDone?: () => void;
  /** Tighter spacing, used in the popup so it fits without scrolling. */
  compact?: boolean;
}

const EnquiryForm = ({ defaultTraining = "", onDone, compact = false }: Props) => {
  const uid = useId();
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    phone: "",
    company: "",
    training: defaultTraining,
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set =
    (key: keyof Fields) =>
    (e: { target: { value: string } }) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      // NOTE: the backend does not expose /enquiries yet; until it does this
      // request fails and the form shows the email fallback below.
      const res = await fetch(`${API_URL}/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, source: window.location.pathname }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="py-6">
        <div className="flex size-11 items-center justify-center rounded-full bg-caramel/15 text-caramel">
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-medium tracking-tight text-espresso">
          Thank you, we&apos;ve got your enquiry
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-walnut">
          Our team will get back to you within 24 hours on working days.
        </p>
        {onDone && (
          <button
            type="button"
            onClick={onDone}
            className="mt-6 inline-flex h-11 items-center rounded-full border border-sand px-5 text-sm font-medium text-espresso transition hover:border-walnut/40 active:scale-[0.98]"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  const input =
    `${compact ? "mt-1.5 py-2.5" : "mt-2 py-3"} block w-full rounded-xl border bg-white px-4 text-[15px] text-espresso placeholder:text-walnut/40 transition focus:outline-none focus:ring-2 focus:ring-caramel/30`;
  const border = (k: keyof Fields) =>
    errors[k] ? "border-red-400 focus:border-red-400" : "border-sand focus:border-caramel";
  const label = "block text-sm font-medium text-espresso";
  const errorText = "mt-1.5 text-[13px] text-red-600";

  const field = (
    key: keyof Fields,
    text: string,
    props: { type?: string; autoComplete?: string; required?: boolean; placeholder?: string },
  ) => (
    <div>
      <label htmlFor={`${uid}-${key}`} className={label}>
        {text}
        {props.required && <span className="text-caramel"> *</span>}
      </label>
      <input
        id={`${uid}-${key}`}
        name={key}
        type={props.type ?? "text"}
        autoComplete={props.autoComplete}
        placeholder={props.placeholder}
        value={fields[key]}
        onChange={set(key)}
        aria-invalid={!!errors[key]}
        aria-describedby={errors[key] ? `${uid}-${key}-error` : undefined}
        className={`${input} ${border(key)}`}
      />
      {errors[key] && (
        <p id={`${uid}-${key}-error`} className={errorText}>
          {errors[key]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className={compact ? "space-y-4" : "space-y-5"}>
      <div className={`grid sm:grid-cols-2 ${compact ? "gap-4" : "gap-5"}`}>
        {field("name", "Full name", { autoComplete: "name", required: true })}
        {field("company", "Company", { autoComplete: "organization" })}
        {field("email", "Work email", { type: "email", autoComplete: "email", required: true })}
        {field("phone", "Phone", { type: "tel", autoComplete: "tel", required: true })}
      </div>

      <div>
        <label htmlFor={`${uid}-training`} className={label}>
          Training of interest
        </label>
        <div className="relative">
          <select
            id={`${uid}-training`}
            name="training"
            value={fields.training}
            onChange={set("training")}
            className={`${input} ${border("training")} appearance-none pr-11`}
          >
            <option value="">Not sure yet</option>
            <optgroup label="Training specialities">
              {trainings.map((t) => (
                <option key={t.slug} value={t.title}>
                  {t.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="Courses">
              {courses.map((c) => (
                <option key={c.slug} value={c.title}>
                  {c.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="Speaking">
              <option value={KEYNOTE}>{KEYNOTE}</option>
            </optgroup>
          </select>
          <svg
            viewBox="0 0 20 20"
            aria-hidden
            className="pointer-events-none absolute right-4 top-1/2 mt-1 size-4 -translate-y-1/2 text-walnut"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M5.5 7.5l4.5 4.5 4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div>
        <label htmlFor={`${uid}-message`} className={label}>
          What would you like to achieve?
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={compact ? 3 : 4}
          value={fields.message}
          onChange={set("message")}
          placeholder="Team size, level, preferred format or dates"
          className={`${input} ${border("message")} resize-none`}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-700">
          We couldn&apos;t send your enquiry just now. Please email us at{" "}
          <a href={contact.emailHref} className="font-medium underline underline-offset-2">
            {contact.email}
          </a>{" "}
          or call{" "}
          <a href={contact.phoneHref} className="font-medium underline underline-offset-2">
            {contact.phone}
          </a>
          .
        </p>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-walnut/70">We reply within 24 hours on working days.</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center rounded-full bg-espresso px-7 text-sm font-medium text-white transition hover:-translate-y-px hover:bg-ink active:translate-y-0 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
      </div>
    </form>
  );
};

export default EnquiryForm;
