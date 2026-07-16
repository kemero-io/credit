import "./credit.css";

/*
  kemeros signatur. Komponenten tar bara emot caseUrl; övriga egenskaper
  är låsta i paketet. Rent presentationell utan hooks, så den kan
  renderas statiskt utan klient-JavaScript.
*/
export type KemeroCreditProps = {
  /** Adressen märket länkar till. */
  caseUrl: string;
  /** Endast för placering i footern. Använd inte för att tona om märket. */
  className?: string;
};

export function KemeroCredit({ caseUrl, className }: KemeroCreditProps) {
  return (
    <p className={className ? `kemero-credit ${className}` : "kemero-credit"}>
      <span>Sajt av</span>
      <a
        aria-label="kemero, se caset för den här sajten"
        className="kemero-credit__link"
        href={caseUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="kemero-credit__mark" />
      </a>
    </p>
  );
}
