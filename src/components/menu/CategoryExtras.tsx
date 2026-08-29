import type { Extra } from '../../constants/extras';
import { formatEuro } from '../../utils/helpers';

type CategoryExtrasProps = {
  extras: Extra['extras'];
};

export function CategoryExtras({ extras }: CategoryExtrasProps) {
  if (extras.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-card rounded-card border border-border bg-daily-recommend p-page">
      <div className="flex flex-col gap-element-sm">
        <h2 className="font-display-italic text-section-heading font-bold text-brand">Extras</h2>
        <p className="font-ui text-menu-desc font-normal text-muted">
          Añade lo que quieras por un pequeño precio adicional.
        </p>
      </div>
      <ul className="flex flex-col gap-badge">
        {extras.map((extra) => (
          <li key={extra.modifier_id} className="flex items-baseline justify-between gap-3">
            <span className="font-ui text-menu-desc font-normal text-foreground">{extra.name}</span>
            <span className="font-ui text-price font-bold text-brand">
              +{formatEuro(extra.price)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
