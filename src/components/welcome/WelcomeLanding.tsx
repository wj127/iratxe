import { LanguageProvider, useLocale } from '../../i18n/LanguageContext';
import { Button } from '../ui/Button';
import { ArrowRightIcon } from '../icons';
import { HeroBanner } from './HeroBanner';

function WelcomeLandingContent() {
  const { translate } = useLocale();

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-mobile flex-col justify-between bg-background">
      <div className="flex w-full flex-col">
        <HeroBanner />
      </div>

      <div className="flex w-full flex-col items-center gap-content p-welcome">
        <h2 className="w-full text-center font-display text-welcome-subtitle font-bold text-foreground">
          {translate('welcomeSubtitle')}
        </h2>
        <p className="w-full text-center font-ui text-body font-normal text-muted">
          {translate('welcomeDescription')}
        </p>
        <Button asChild>
          <a href="/menu">
            {translate('ctaSeeMenu')}
            <ArrowRightIcon className="size-[18px]" />
          </a>
        </Button>
      </div>
    </div>
  );
}

export function WelcomeLanding() {
  return (
    <LanguageProvider>
      <WelcomeLandingContent />
    </LanguageProvider>
  );
}
