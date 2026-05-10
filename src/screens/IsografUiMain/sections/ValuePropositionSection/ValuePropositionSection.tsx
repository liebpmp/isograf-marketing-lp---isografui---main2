const socialProof = [
  {
    id: 1,
    image:
      "https://c.animaapp.com/FwnyGWff/img/clients-of-steuern-nein-danke-3@2x.png",
    imageAlt: "Logos zufriedener Kunden",
    value: "+800",
    label: "Zufriedene Kunden",
  },
];

export const ValuePropositionSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-2.5 px-0 py-[110px] relative self-stretch w-full flex-[0_0_auto] bg-white"
      aria-labelledby="value-proposition-heading"
    >
      <div className="relative w-[896px] h-[353px] rounded-3xl border border-solid border-[#e2ac264c] bg-[linear-gradient(149deg,rgba(20,33,61,1)_0%,rgba(71,86,119,1)_100%)] overflow-hidden">
        <div className="absolute top-[47px] left-[49px] w-[798px] h-9 flex">
          <h2
            id="value-proposition-heading"
            className="w-[374px] h-9 ml-[2.3px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-3xl text-center tracking-[0] leading-9 whitespace-nowrap"
          >
            Bereit für Ihre Zertifizierung?
          </h2>
        </div>
        <div className="absolute top-[99px] left-10 w-[695px] h-[85px] flex">
          <p className="mt-px w-[470px] h-[84px] ml-3.5 [font-family:'Roboto',Helvetica] font-normal text-[#ffffffb2] text-lg tracking-[0] leading-7">
            Vereinbaren Sie jetzt ein kostenloses Erstgespräch und <br />
            erfahren Sie, wie wir Sie auf dem Weg zur Zertifizierung <br />
            unterstützen können.
          </p>
        </div>
        <div className="flex flex-col w-[350px] items-start justify-center gap-5 absolute top-[214px] left-[calc(50.00%_-_396px)]">
          <button
            type="button"
            className="all-[unset] box-border inline-flex items-start justify-center gap-[50px] px-[60px] py-[15px] relative flex-[0_0_auto] rounded-[15px] border-[none] shadow-[inset_0px_-3px_6.2px_#ffffff91] bg-[linear-gradient(151deg,rgba(238,203,117,0.9)_0%,rgba(226,172,38,0.9)_50%,rgba(238,203,117,0.9)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[15px] before:[background:linear-gradient(43deg,rgba(255,215,0,1)_0%,rgba(250,245,233,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Jetzt loslegen"
          >
            <span className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
              <span className="[font-family:'Roboto',Helvetica] font-semibold text-white text-lg relative w-fit mt-[-1.00px] tracking-[0] leading-6 whitespace-nowrap">
                Jetzt loslegen
              </span>
            </span>
          </button>
          <div className="flex flex-col max-w-[385px] items-start relative w-full flex-[0_0_auto]">
            {socialProof.map((item) => (
              <div
                key={item.id}
                className="inline-flex items-center gap-5 relative flex-[0_0_auto]"
              >
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <div
                    role="img"
                    aria-label={item.imageAlt}
                    className="relative max-w-[384.53px] w-[84px] h-7 bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </div>
                <p className="relative flex items-center w-fit [font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-[17.2px] whitespace-nowrap">
                  <span className="font-bold">{item.value} </span>
                  <span className="font-medium">{item.label}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-col w-[39.53%] h-[134.84%] items-start justify-center absolute top-[-34.84%] left-[55.52%]"
          aria-hidden="true"
        >
          <div className="relative flex-1 w-[398px] grow mr-[-43.78px] overflow-hidden">
            <div className="top-[50px] left-[-169px] w-[701px] h-[598px] blur-[17.32px] bg-[url(https://c.animaapp.com/FwnyGWff/img/isografprobleme-4.png)] absolute bg-cover bg-[50%_50%]" />
            <div className="absolute top-[23px] left-[-186px] w-[701px] h-[598px] bg-[url(https://c.animaapp.com/FwnyGWff/img/isografprobleme-7.png)] bg-cover bg-[50%_50%]" />
          </div>
        </div>
      </div>
    </section>
  );
};
