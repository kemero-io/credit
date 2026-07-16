# @kemero/credit

kemeros signatur för sajterna vi bygger.

## Användning

```bash
bun add @kemero/credit@github:kemero-io/credit
```

```tsx
import { KemeroCredit } from "@kemero/credit";

<KemeroCredit caseUrl="https://kemero.io" />
```

Ingen CSS att importera och inga variabler att sätta. Märket färgas med
`currentColor` och ärver footertextens färg, så det följer sajtens tema
automatiskt. Komponenten är rent presentationell och kan renderas
statiskt utan klient-JavaScript.

`caseUrl` är den enda propen. Övriga egenskaper är låsta i paketet.

## Utveckla

```bash
bun install
bun run build
```

`src/credit.template.css` är källan. `src/credit.css` genereras av bygget
och är gitignorerad.

Bygget strippar `src/mark.svg` och bäddar in den som data-URI i CSS:en,
bygger `dist/` med tsup och lägger tillbaka CSS-importen i `dist/index.js`.
`dist/` är committad så att paketet kan konsumeras direkt som git-beroende
utan lifecycle-scripts.

## Licens

Källkoden är synlig men inte licensierad för återanvändning.
Upphovsrätten tillhör kemero.
