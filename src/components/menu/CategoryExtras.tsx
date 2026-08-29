import type { Extra } from '../../constants/extras';
import { localizeExtraName } from '../../i18n/content';
import { useLocale } from '../../i18n/LanguageContext';
import { formatEuro } from '../../utils/helpers';

type CategoryExtrasProps = {
  extras: Extra['extras'];
};

export function CategoryExtras({ extras }: CategoryExtrasProps) {
  const { locale, translate } = useLocale();

  if (extras.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-card rounded-card border border-border bg-daily-recommend p-page">
      <div className="flex flex-col gap-element-sm">
        <h2 className="font-display-italic text-section-heading font-bold text-brand">
          {translate('extrasTitle')}
        </h2>
        <p className="font-ui text-menu-desc font-normal text-muted">{translate('extrasSubtitle')}</p>
      </div>
      <ul className="flex flex-col gap-badge">
        {extras.map((extra) => (
          <li key={extra.modifier_id} className="flex items-baseline justify-between gap-3">
            <span className="font-ui text-menu-desc font-normal text-foreground">
              {localizeExtraName(extra.modifier_id, extra.name, locale)}
            </span>
            <span className="font-ui text-price font-bold text-brand">
              +{formatEuro(extra.price)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
