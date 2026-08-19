import type { Category } from '../../constants/categories';

const FALLBACK_GRADIENTS: Record<Category['type'], string> = {
  drink: 'bg-gradient-to-br from-brand to-[#7a1519]',
  food: 'bg-gradient-to-br from-[#c98a1e] to-[#7a4a06]',
  other: 'bg-gradient-to-br from-muted to-foreground',
};

const TYPE_LABELS: Record<Category['type'], string> = {
  drink: 'Bebidas',
  food: 'Comida',
  other: 'Otros',
};

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  const { name, items_count, image_url, type, category_id } = category;

  return (
    <a
      href={`/menu/${category_id}`}
      className="relative flex h-category-card w-full flex-col justify-between overflow-hidden rounded-card p-4 outline-none transition-transform duration-200 hover:scale-[1.01] focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {image_url ? (
          <>
            <img src={image_url.src} alt="" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-image-overlay/35" />
          </>
        ) : (
          <div className={`absolute inset-0 ${FALLBACK_GRADIENTS[type]}`} />
        )}
      </div>

      <div className="relative flex w-full items-start justify-between">
        <span className="rounded-heritage bg-card-tag px-2 py-1 font-ui text-card-tag font-bold uppercase text-white">
          {TYPE_LABELS[type]}
        </span>
        <span className="font-ui text-item-count font-bold text-white opacity-90">
          {items_count} items
        </span>
      </div>

      <h3 className="relative font-display text-section-heading font-bold text-white">{name}</h3>
    </a>
  );
}
