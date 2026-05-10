export const ConsultationSection = (): JSX.Element => {
  const customerStat = {
    image:
      "https://c.animaapp.com/FwnyGWff/img/clients-of-steuern-nein-danke-3@2x.png",
    alt: "Kundenbewertungen",
    count: "+800",
    label: "Zufriedene Kunden",
  };

  return (
    <section
      aria-labelledby="consultation-section-heading"
      className="relative flex w-full self-stretch flex-[0_0_auto] flex-col items-center justify-center gap-2.5 bg-white px-0 py-[110px]"
    >
      <div className="relative h-[353px] w-[896px] overflow-hidden rounded-3xl border border-solid border-[#e2ac264c] bg-[linear-gradient(149deg,rgba(20,33,61,1)_0%,rgba(71,86,119,1)_100%)] max-md:h-auto max-md:w-[calc(100%-32px)] max-md:min-h-[353px]">
        <div className="absolute left-[49px] top-[47px] flex h-9 w-[798px] max-md:left-6 max-md:top-8 max-md:w-[calc(100%-48px)]">
          <h2
            id="consultation-section-heading"
            className="ml-[2.3px] h-9 w-[374px] text-center [font-family:'DM_Sans',Helvetica] text-3xl font-normal leading-9 tracking-[0] text-white whitespace-nowrap max-md:ml-0 max-md:w-full max-md:whitespace-normal max-md:text-left"
          >
            Bereit für Ihre Zertifizierung?
          </h2>
        </div>
        <div className="absolute left-10 top-[99px] flex h-[85px] w-[695px] max-md:left-6 max-md:top-[106px] max-md:h-auto max-md:w-[calc(100%-48px)]">
          <p className="mt-px ml-3.5 h-[84px] w-[470px] [font-family:'Roboto',Helvetica] text-lg font-normal leading-7 tracking-[0] text-[#ffffffb2] max-md:ml-0 max-md:h-auto max-md:w-full">
            Vereinbaren Sie jetzt ein kostenloses Erstgespräch und <br />
            erfahren Sie, wie wir Sie auf dem Weg zur Zertifizierung <br />
            unterstützen können.
          </p>
        </div>
        <div className="absolute left-[calc(50.00%_-_396px)] top-[214px] flex w-[350px] flex-col items-start justify-center gap-5 max-md:left-6 max-md:top-[220px] max-md:w-[calc(100%-48px)]">
          <button
            type="button"
            aria-label="Jetzt loslegen"
            className="all-[unset] relative inline-flex box-border flex-[0_0_auto] items-start justify-center gap-[50px] rounded-[15px] border-[none] bg-[linear-gradient(151deg,rgba(238,203,117,0.9)_0%,rgba(226,172,38,0.9)_50%,rgba(238,203,117,0.9)_100%)] px-[60px] py-[15px] shadow-[inset_0px_-3px_6.2px_#ffffff91] transition-transform duration-200 ease-out before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[15px] before:p-px before:content-[''] before:[background:linear-gradient(43deg,rgba(255,215,0,1)_0%,rgba(250,245,233,1)_100%)] before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] hover:scale-[1.01] focus-visible:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span className="relative inline-flex flex-[0_0_auto] items-center justify-center gap-2.5">
              <span className="relative mt-[-1.00px] w-fit [font-family:'Roboto',Helvetica] text-lg font-semibold leading-6 tracking-[0] text-white whitespace-nowrap">
                Jetzt loslegen
              </span>
            </span>
          </button>
          <div className="relative flex w-full max-w-[385px] flex-[0_0_auto] flex-col items-start">
            <div className="relative inline-flex flex-[0_0_auto] items-center gap-5">
              <div className="relative inline-flex flex-[0_0_auto] items-center gap-2">
                <img
                  src={customerStat.image}
                  alt={customerStat.alt}
                  className="relative h-7 w-[84px] max-w-[384.53px] object-cover"
                />
              </div>
              <p className="relative flex w-fit items-center [font-family:'DM_Sans',Helvetica] text-base font-normal leading-[17.2px] tracking-[0] text-white whitespace-nowrap">
                <span className="font-bold">{customerStat.count} </span>
                <span className="font-medium">{customerStat.label}</span>
              </p>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute left-[55.52%] top-[-34.84%] flex h-[134.84%] w-[39.53%] flex-col items-start justify-center max-md:right-0 max-md:left-auto max-md:top-0 max-md:h-full max-md:w-[45%]"
        >
          <div className="relative mr-[-43.78px] flex-1 grow overflow-hidden max-md:mr-0 max-md:w-full">
            <div className="absolute left-[-169px] top-[50px] h-[598px] w-[701px] bg-[url(https://c.animaapp.com/FwnyGWff/img/isografprobleme-6.png)] bg-cover bg-[50%_50%] blur-[17.32px]" />
            <div className="absolute left-[-186px] top-[23px] h-[598px] w-[701px] bg-[url(https://c.animaapp.com/FwnyGWff/img/isografprobleme-7.png)] bg-cover bg-[50%_50%]" />
          </div>
        </div>
      </div>
    </section>
  );
};
