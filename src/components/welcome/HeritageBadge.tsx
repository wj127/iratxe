import basqueFlagUrl from '../../assets/Flag_of_the_Basque_Country.svg?url';
import canaryFlagUrl from '../../assets/Flag_of_the_Canary_Islands_(simple).svg?url';

export function HeritageBadge() {
  return (
    <div className="inline-flex items-center gap-heritage rounded-heritage border border-border bg-surface px-2 py-1">
      <img
        src={basqueFlagUrl}
        alt="Bandera del País Vasco"
        className="h-[12px] w-[18px] rounded-flag object-cover"
      />
      <img
        src={canaryFlagUrl}
        alt="Bandera de Canarias"
        className="h-[12px] w-[18px] rounded-flag object-cover"
      />
      <span className="font-ui text-heritage font-bold text-muted whitespace-nowrap">
        EUSKADI · CANARIAS
      </span>
    </div>
  );
}
