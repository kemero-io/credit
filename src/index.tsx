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
      {/*
        Etiketten namnger byrån, inte destinationen.

        Den sa "kemero, se caset för den här sajten", vilket var ett löfte
        komponenten inte kan hålla: caseUrl är den enda propen och sätts av
        sajten som konsumerar paketet, alltså kan den peka på ett case, på
        kemero.io eller på vad som helst. En skärmläsare lovade ett case och
        länken gav en startsida.

        "Sajt av" står redan i klartext bredvid, så etiketten behöver bara
        bära det märket säger och som en skärmläsare annars missar, alltså
        namnet.
      */}
      <a
        aria-label="kemero"
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
