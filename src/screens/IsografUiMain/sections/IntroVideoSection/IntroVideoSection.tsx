const stats = [
  {
    value: "+800",
    label: "Zufriedene Kunden",
    cardClassName: "absolute top-px left-0 w-[278px] h-[169px]",
    valueClassName:
      "ml-[-0.6px] h-[76px] w-[167px] self-center mt-[23.7px] [font-family:'Libre_Baskerville',Helvetica] font-normal italic text-[#e2ac26] text-[66px] tracking-[0] leading-[75.5px] whitespace-nowrap",
    labelClassName:
      "ml-[60px] w-[157px] h-[26px] [font-family:'DM_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-[26.1px] whitespace-nowrap",
  },
  {
    value: "+20",
    label: "Jahre Erfahrung",
    cardClassName: "absolute top-0 left-[308px] w-[278px] h-[169px]",
    valueClassName:
      "ml-0 h-[76px] w-[123px] self-center mt-[23px] [font-family:'Libre_Baskerville',Helvetica] font-normal italic text-[#e2ac26] text-[66px] tracking-[0] leading-[75.5px] whitespace-nowrap",
    labelClassName:
      "ml-[73.3px] w-[131px] h-[26px] [font-family:'DM_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-[26.1px] whitespace-nowrap",
  },
  {
    value: "+1.200",
    label: "Projekte",
    cardClassName: "absolute top-0 left-[615px] w-[278px] h-[169px]",
    valueClassName:
      "ml-[0.6px] h-[76px] w-[215px] self-center mt-6 [font-family:'Libre_Baskerville',Helvetica] font-normal italic text-[#e2ac26] text-[66px] tracking-[0] leading-[75.5px] whitespace-nowrap",
    labelClassName:
      "ml-[98.6px] w-[69px] h-[26px] [font-family:'DM_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-[26.1px] whitespace-nowrap",
  },
];

export const IntroVideoSection = (): JSX.Element => {
  return (
    <section
      aria-label="Unternehmenskennzahlen"
      className="flex items-center justify-center gap-2.5 px-0 py-10 relative self-stretch w-full flex-[0_0_auto] bg-white"
    >
      <div className="relative w-[893.06px] h-[169px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 shadow-[0px_-40px_36px_#0000000d] rounded-[20px]"
        />
        <dl className="relative w-full h-full m-0">
          {stats.map((stat) => (
            <div
              key={`${stat.value}-${stat.label}`}
              className={`${stat.cardClassName} flex flex-col bg-[#ffffff4c] rounded-[20px] overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[20px] before:[background:linear-gradient(180deg,rgba(226,172,38,1)_0%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className={`${stat.valueClassName} m-0`}>{stat.value}</dd>
              <div className={stat.labelClassName}>{stat.label}</div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
