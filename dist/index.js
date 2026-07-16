import "./index.css";
import { jsxs, jsx } from 'react/jsx-runtime';

// src/index.tsx
function KemeroCredit({ caseUrl, className }) {
  return /* @__PURE__ */ jsxs("p", { className: className ? `kemero-credit ${className}` : "kemero-credit", children: [
    /* @__PURE__ */ jsx("span", { children: "Sajt av" }),
    /* @__PURE__ */ jsx(
      "a",
      {
        "aria-label": "kemero, se caset f\xF6r den h\xE4r sajten",
        className: "kemero-credit__link",
        href: caseUrl,
        rel: "noopener noreferrer",
        target: "_blank",
        children: /* @__PURE__ */ jsx("span", { className: "kemero-credit__mark" })
      }
    )
  ] });
}

export { KemeroCredit };
