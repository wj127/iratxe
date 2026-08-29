import { formatEuro } from '../../utils/helpers';

type ExtraRowProps = {
  name: string;
  price: number;
  categoryName: string;
};

export function ExtraRow({ name, price, categoryName }: ExtraRowProps) {
  return (
    <article className="flex w-full items-start justify-between gap-3 rounded-card border border-border bg-daily-recommend px-4 py-row">
      <div className="flex min-w-0 flex-1 flex-col gap-element-sm">
        <span className="w-fit rounded-heritage bg-subtle-fill px-2 py-0.5 font-ui text-card-tag font-bold uppercase text-muted">
          Extra · {categoryName}
        </span>
        <h2 className="font-display text-menu-item font-bold text-foreground">{name}</h2>
      </div>
      <span className="shrink-0 font-ui text-price font-bold text-brand">+{formatEuro(price)}</span>
    </article>
  );
}
