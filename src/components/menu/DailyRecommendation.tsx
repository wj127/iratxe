import { useLocale } from '../../i18n/LanguageContext';
import { StarIcon } from '../icons';

export function DailyRecommendation() {
  const { translate } = useLocale();

  return (
    <div className="flex w-full items-center gap-3 rounded-daily-recommend bg-daily-recommend p-4">
      <StarIcon className="size-6 shrink-0 text-brand" />
      <div className="flex flex-col gap-0.5">
        <p className="font-display text-daily-title font-bold text-foreground">{t('dailyTitle')}</p>
        <p className="font-ui text-[13px] font-normal text-muted">{translate('dailyText')}</p>
      </div>
    </div>
  );
}
