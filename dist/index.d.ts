import * as react from 'react';

type KemeroCreditProps = {
    /** Adressen märket länkar till. */
    caseUrl: string;
    /** Endast för placering i footern. Använd inte för att tona om märket. */
    className?: string;
};
declare function KemeroCredit({ caseUrl, className }: KemeroCreditProps): react.JSX.Element;

export { KemeroCredit, type KemeroCreditProps };
