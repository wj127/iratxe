import { Button } from '../ui/Button';
import { ArrowRightIcon } from '../icons';
import { HeroBanner } from './HeroBanner';

export function WelcomeLanding() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-mobile flex-col justify-between bg-background">
      <div className="flex w-full flex-col">
        <HeroBanner />
      </div>

      <div className="flex w-full flex-col items-center gap-content p-welcome">
        <h2 className="w-full text-center font-display text-welcome-subtitle font-bold text-foreground">
          Taberna Euskalduna en el Atlántico
        </h2>
        <p className="w-full text-center font-ui text-body font-normal text-muted">
          Traditional Basque pintxos, premium local Canarian craft beers, and selected wines with
          ocean breezes.
        </p>
        <Button asChild>
          <a href="/menu">
            Ver Carta / See Menu
            <ArrowRightIcon className="size-[18px]" />
          </a>
        </Button>
      </div>
    </div>
  );
}
