import type { Item } from '../../constants/items';

type MenuItemRowProps = {
  item: Item;
};

function formatEuro(cents: number) {
  return `€${(cents / 100).toFixed(2)}`;
}

export function MenuItemRow({ item }: MenuItemRowProps) {
  const description = item.description.trim();

  return (
    <article className="flex w-full items-start justify-between gap-3 py-row">
      <div className="flex min-w-0 flex-1 flex-col gap-element-sm">
        <h2 className="font-display text-menu-item font-bold text-foreground">{item.name}</h2>
        {description ? (
          <p className="font-ui text-menu-desc font-normal text-muted">{description}</p>
        ) : null}
      </div>
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
