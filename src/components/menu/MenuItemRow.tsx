import type { Item } from '../../constants/items';
import { formatEuro } from '../../utils/helpers';

type MenuItemRowProps = {
  item: Item;
  isBocadillos: boolean;
};

export function MenuItemRow({ item, isBocadillos }: MenuItemRowProps) {
  const description = item.description.trim();

  const header = (
    <div className="flex min-w-0 flex-1 flex-col gap-element-sm">
      <h2 className="font-display text-menu-item font-bold text-foreground">{item.name}</h2>
      {description ? (
        <p className="font-ui text-menu-desc font-normal text-muted">{description}</p>
      ) : null}
    </div>
  );

  if (item.variants.length > 1 && !isBocadillos) {
    return (
      <article className="flex w-full flex-col gap-element-sm py-row">
        {header}
        <ul className="flex flex-col gap-element-sm">
          {item.variants.map((variant) => (
            <li
              key={variant.variant_id}
              className="flex items-baseline justify-between gap-3 pl-3"
            >
              <span className="font-ui text-menu-desc font-normal text-foreground">
                {variant.name.trim()}
              </span>
              <span className="font-ui text-price font-bold text-brand">
                {formatEuro(variant.price.amount.value)}
              </span>
            </li>
          ))}
        </ul>
      </article>
    );
  }

  return (
    <article className="flex w-full items-start justify-between gap-3 py-row">
      {header}
      <div className="flex shrink-0 flex-wrap items-start justify-end gap-x-price gap-y-2">
        {item.variants.map((variant) => {
          const label = variant.name.trim();

          return (
            <div key={variant.variant_id} className="flex flex-col items-end gap-0.5">
              {label ? (
                <span className="font-ui text-serving-label font-semibold uppercase text-muted">
                  {label}
                </span>
              ) : null}
              <span className="font-ui text-price font-bold text-brand">
                {formatEuro(variant.price.amount.value)}
              </span>
            </div>
          );
        })}
      </div>
    </article>
  );
}
