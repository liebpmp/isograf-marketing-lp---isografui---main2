const benefits = [
  {
    text: "Mehr Umsatz. Mehr Vertrauen. Mehr Wachstum.",
    width: "w-[471px]",
    textWidth: "w-[401px]",
  },
  {
    text: "Alles mit staatlicher Unterstützung.",
    width: "w-[370px]",
    textWidth: "w-[286px]",
  },
  {
    text: "100% Erfolgsgarantie.",
    width: "w-fit",
    textWidth: "w-[194px]",
  },
];

export const CertificationHeroSection = (): JSX.Element => {
  return (
    <section
      className="relative w-[1440px] h-[932px] bg-[url(https://c.animaapp.com/FwnyGWff/img/placeholder-image.png)] bg-[100%_100%]"
      aria-labelledby="certification-hero-heading"
    >
      <div
        className="top-[294px] left-[564px] w-[1055px] h-[728px] blur-[36.75px] opacity-[0.63] bg-[url(https://c.animaapp.com/FwnyGWff/img/isografprobleme.png)] absolute bg-cover bg-[50%_50%]"
        aria-hidden="true"
      />
      <div
        className="top-[214px] left-[504px] w-[1055px] h-[728px] bg-[url(https://c.animaapp.com/FwnyGWff/img/isografprobleme-1.png)] absolute bg-cover bg-[50%_50%]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[663px] left-0 w-[1440px] h-[269px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]"
        aria-hidden="true"
      />
      <div className="absolute top-[calc(50.00%_-_370px)] left-40 w-[687px] h-[734px]">
        <div
          className="flex w-[583px] h-11 items-center gap-[9.16px] px-[18.33px] py-0 absolute top-0 left-0 bg-[#efefef57] rounded-[19215770px] border-[1.15px] border-solid border-[#ececec]"
          role="img"
          aria-label="4,9 von 5,0 – Deutschlands bestbewertete Zertifizierungsexperten"
        >
          <img
            className="relative w-[100.79px] h-[18.33px]"
            alt="Isograf"
            src="https://c.animaapp.com/FwnyGWff/img/isografhero.svg"
          />
          <div className="relative flex-1 grow h-[22.91px]">
            <p className="absolute -top-px left-0 [font-family:'Roboto',Helvetica] font-normal text-[#4d4d4d] text-base tracking-[0] leading-[22.9px] whitespace-nowrap">
              4,9/5,0 - Deutschlands bestbewertete Zertifizierungsexperten
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[845px] items-start gap-[39px] absolute top-[calc(50.00%_-_317px)] left-0">
          <header className="flex flex-col items-start gap-[39px]">
            <h1
              id="certification-hero-heading"
              className="relative w-[768px] h-[152px] mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-black text-[66px] leading-[80px]"
            >
              <span className="font-medium tracking-[-1.42px]">
                Der einfache Weg <br />
              </span>
              <span className="[font-family:'Libre_Baskerville',Helvetica] italic tracking-[-1.42px]">
                zu deiner{" "}
              </span>
              <span className="[font-family:'Libre_Baskerville',Helvetica] italic tracking-[0]">
                Zertifizierung
              </span>
            </h1>
            <p className="relative w-[604px] [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0] leading-[28.8px]">
              Wir strukturieren, optimieren und zertifizieren Ihr Unternehmen –
              mit der Erfahrung aus über 1.000 Projekten.
            </p>
          </header>
          <div className="inline-flex flex-col items-start gap-[47px] relative flex-[0_0_auto]">
            <ul className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto] list-none p-0 m-0">
              {benefits.map((benefit) => (
                <li
                  key={benefit.text}
                  className={`flex ${benefit.width} h-[62px] items-center gap-3 pl-6 pr-0 py-0 relative bg-[#ececec80] rounded-[14px] border border-solid border-[#e0e0e0]`}
                >
                  <img
                    className="relative w-5 h-5"
                    alt=""
                    aria-hidden="true"
                    src="https://c.animaapp.com/FwnyGWff/img/container-2.svg"
                  />
                  <div className={`relative ${benefit.textWidth} h-7`}>
                    <p className="absolute top-px left-0 [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                      {benefit.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="inline-flex flex-col items-start gap-[50px] px-[60px] py-5 relative flex-[0_0_auto] rounded-[15px] border-[none] shadow-[inset_0px_-3px_6.2px_#ffffff91] bg-[linear-gradient(151deg,rgba(238,203,117,0.9)_0%,rgba(226,172,38,0.9)_50%,rgba(238,203,117,0.9)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[15px] before:[background:linear-gradient(43deg,rgba(255,215,0,1)_0%,rgba(250,245,233,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none cursor-pointer"
              aria-label="Jetzt kostenloses Erstgespräch sichern und passende Zertifizierung finden"
            >
              <span className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-black text-lg tracking-[0] leading-6 whitespace-nowrap">
                  Jetzt kostenloses Erstgespräch sichern
                </span>
                <span className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-black text-sm tracking-[0] leading-5 whitespace-nowrap">
                  und passende Zertifizierung finden
                </span>
              </span>
            </button>
          </div>
          <div className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
            <p className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-black text-[23.9px] tracking-[0] leading-[38.2px] whitespace-nowrap">
              Bekannt aus
            </p>
            <img
              className="relative flex-[0_0_auto]"
              alt="Logos bekannter Medien"
              src="https://c.animaapp.com/FwnyGWff/img/frame-1597884221.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
