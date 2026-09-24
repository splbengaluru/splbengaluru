"use client";
// Renders any form from lib/forms.js in the SPL.BLR style and posts it to /api/forms/[type].
import { useState } from "react";
import { FORMS } from "@/lib/forms";

function Field({ f, error }) {
  const id = "f-" + f.name;
  const req = f.required ? <b className="req" aria-hidden="true">*</b> : null;
  const hint = f.hint ? <small className="hint">{f.hint}</small> : null;
  const err = error ? <small className="err" role="alert">{error}</small> : null;
  if (f.type === "checkbox")
    return (
      <div className={"fld check" + (error ? " bad" : "")}>
        <label><input type="checkbox" name={f.name} required={f.required} /> <span>{f.label}</span></label>{err}
      </div>
    );
  if (f.type === "radio" || f.type === "checkboxes")
    return (
      <fieldset className={"fld choices" + (error ? " bad" : "")}>
        <legend>{f.label}{req}</legend>
        {f.options.map((o, i) => (
          <label key={o.value} className="chip">
            <input type={f.type === "radio" ? "radio" : "checkbox"} name={f.name} value={o.value} defaultChecked={f.type === "radio" && i === 0} />
            <span>{o.label}</span>
          </label>
        ))}
        {hint}{err}
      </fieldset>
    );
  return (
    <div className={"fld" + (error ? " bad" : "")}>
      <label htmlFor={id}>{f.label}{req}</label>
      {f.type === "select" ? (
        <select id={id} name={f.name} required={f.required} defaultValue="">
          <option value="" disabled>Pick one</option>
          {f.options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      ) : f.type === "textarea" ? (
        <textarea id={id} name={f.name} rows={4} maxLength={f.max} placeholder={f.placeholder} />
      ) : (
        <input id={id} name={f.name} type={f.type} required={f.required} maxLength={f.type === "number" ? undefined : f.max}
          min={f.min} max={f.type === "number" ? f.max : undefined} placeholder={f.placeholder} autoComplete={f.autoComplete} />
      )}
      {hint}{err}
    </div>
  );
}

export default function BrandForm({ type }) {
  const form = FORMS[type];
  const [state, setState] = useState({ status: "idle", errors: {}, message: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = {};
    for (const f of form.fields) {
      if (f.type === "checkboxes") body[f.name] = fd.getAll(f.name);
      else if (f.type === "checkbox") body[f.name] = fd.get(f.name) === "on";
      else body[f.name] = fd.get(f.name) ?? "";
    }
    body.company_fax = fd.get("company_fax") || "";
    body.source = new URLSearchParams(window.location.search).get("src") || "";
    setState({ status: "sending", errors: {}, message: "" });
    try {
      const r = await fetch("/api/forms/" + type, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const d = await r.json().catch(() => ({}));
      if (r.ok && d.ok) return setState({ status: "done", errors: {}, message: form.success });
      setState({ status: "error", errors: d.errors || {}, message: d.error || "Something broke. Try again." });
    } catch {
      setState({ status: "error", errors: {}, message: "No connection. Try again." });
    }
  }

  if (state.status === "done")
    return (
      <div className="bf-done" role="status">
        <span className="bf-stamp">Done</span>
        <h3>You're in.</h3>
        <p>{state.message}</p>
      </div>
    );

  return (
    <form className="bf" onSubmit={onSubmit} noValidate>
      {form.fields.map((f) => <Field key={f.name} f={f} error={state.errors[f.name]} />)}
      <div className="hp" aria-hidden="true"><label>Company fax<input name="company_fax" tabIndex={-1} autoComplete="off" /></label></div>
      {state.status === "error" && <p className="bf-msg" role="alert">{state.message}</p>}
      <button className="btn btn-accent bf-submit" type="submit" disabled={state.status === "sending"}>
        {state.status === "sending" ? "Sending..." : form.submitLabel + " →"}
      </button>
    </form>
  );
}
