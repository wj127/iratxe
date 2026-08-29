import heroBannerUrl from '../../assets/hero-banner.png?url';
import { useLocale } from '../../i18n/LanguageContext';
import { LanguageSelect } from '../ui/LanguageSelect';

export function HeroBanner() {
  const { translate } = useLocale();

  return (
    <div className="relative flex h-[460px] w-full flex-col justify-between overflow-hidden p-hero">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img src={heroBannerUrl} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="relative flex items-center">
        <LanguageSelect />
      </div>

      <div className="relative flex w-full flex-col gap-card">
        <h1 className="font-display-italic text-hero-brand font-bold text-white whitespace-nowrap">
          Iratxe
        </h1>
        <div className="h-[2px] w-full bg-accent-gold" />
        <p className="font-ui text-hero-tagline font-medium text-white opacity-90 whitespace-nowrap">
          {translate('heroTagline')}
        </p>
      </div>
    </div>
  );
}
