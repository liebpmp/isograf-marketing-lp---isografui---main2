const audienceItems = [
  {
    icon: "https://c.animaapp.com/FwnyGWff/img/689def2521f43fcf044968b4-glass-svg.svg",
    content: (
      <p className="relative [display:-webkit-box] items-center w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-lg tracking-[0] leading-[26.1px] whitespace-nowrap overflow-hidden text-ellipsis [-webkit-line-clamp:0] [-webkit-box-orient:vertical]">
        <span className="font-semibold">
          kleine bis mittelständige Unternehmen{" "}
        </span>
        <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-lg tracking-[0] leading-[26.1px]">
          (Produktion, Handwerk, Gastronomie)
        </span>
      </p>
    ),
  },
  {
    icon: "https://c.animaapp.com/FwnyGWff/img/689def2521f43fcf044968b4-glass-svg-1.svg",
    content: (
      <div className="relative [display:-webkit-box] items-center w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-semibold text-white text-lg leading-[26.1px] overflow-hidden text-ellipsis [-webkit-line-clamp:0] [-webkit-box-orient:vertical] tracking-[0] whitespace-nowrap">
        Bildungsinstitute und Coaches
      </div>
    ),
  },
  {
    icon: "https://c.animaapp.com/FwnyGWff/img/689def2521f43fcf044968b4-glass-svg-2.svg",
    content: (
      <div className="relative [display:-webkit-box] items-center w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-semibold text-white text-lg leading-[26.1px] overflow-hidden text-ellipsis [-webkit-line-clamp:0] [-webkit-box-orient:vertical] tracking-[0] whitespace-nowrap">
        Berater und Dienstleister
      </div>
    ),
  },
];

export const CourseIntroductionSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="course-introduction-heading"
      className="inline-flex flex-col items-start gap-2.5 px-[95px] py-[120px] relative flex-[0_0_auto] bg-[#14213d]"
    >
      <div className="flex flex-col w-[1250px] items-center justify-center gap-10 relative flex-[0_0_auto]">
        <header className="flex flex-col items-center gap-[21px] relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="relative w-[582.75px] h-[71.94px]"
            alt="Warum zum ISOGRAF?"
            src="https://c.animaapp.com/FwnyGWff/img/warum-zum-isograf-@2x.png"
          />
          <h2 id="course-introduction-heading" className="sr-only">
            Warum zum ISOGRAF?
          </h2>
          <p className="relative w-[952px] h-[70px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[26.1px]">
            Viele Unternehmen befassen sich viel zu intensiv und zu umfangreich
            mit der Dokumentation, die für eine Zertifizierung notwendig ist.
            Mit unserer Erfahrung, unserem Fachwissen und modernen Lösungen,
            helfen wir Ihnen dieses Thema schnell und unkompliziert zu lösen
          </p>
        </header>
        <div className="flex items-start justify-center gap-20 relative self-stretch w-full flex-[0_0_auto] rounded-[25px] overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[25px] before:[background:linear-gradient(113deg,rgba(255,233,188,1)_9%,rgba(134,102,40,1)_19%,rgba(253,185,49,1)_26%,rgba(82,66,35,1)_50%,rgba(82,66,35,1)_50%,rgba(255,182,35,1)_73%,rgba(255,234,192,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="flex flex-col w-[780px] h-[488px] items-start justify-center gap-6 px-[52px] py-0 relative">
            <div className="flex flex-col w-[732px] items-start gap-10 relative flex-[0_0_auto] mr-[-56.00px]">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative self-stretch w-full h-[115.52px] ml-[-0.42px]"
                  alt="Denn wer mit ISOGRAF arbeitet, hebt sich automatisch von der Masse ab"
                  src="https://c.animaapp.com/FwnyGWff/img/denn-wer-mit-isograf-arbeitet--hebt-sich-automatisch-von-der-mas@2x.png"
                />
              </div>
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative flex items-center w-[623px] mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-lg tracking-[0] leading-[26.1px]">
                  Für alle, die ihre Leistungen leichter verkaufen und durch
                  staatliche Förderung skalieren wollen – vom bisherigen
                  Selbstzahler-Modell zum echten Wachstumspfad.
                </p>
              </div>
              <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
                {audienceItems.map((item, index) => (
                  <div
                    key={`${item.icon}-${index}`}
                    className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <img
                      className="relative max-w-[732px] flex-[0_0_auto] self-stretch aspect-[0.6]"
                      alt=""
                      aria-hidden="true"
                      src={item.icon}
                    />
                    <div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <img
            className="relative self-stretch w-[509.5px] min-h-[487.59px]"
            alt="Geschäftsmann vor dekorativem Hintergrund"
            src="https://c.animaapp.com/FwnyGWff/img/background@2x.png"
          />
          <div
            aria-hidden="true"
            className="flex flex-col w-[31.00%] h-[106.70%] items-start justify-center absolute top-[-6.70%] left-[70.00%]"
          >
            <div className="relative flex-1 self-stretch w-full grow overflow-hidden">
              <div className="top-[55px] left-[-185px] w-[767px] h-[654px] blur-[18.95px] bg-[url(https://c.animaapp.com/FwnyGWff/img/isografprobleme-2.png)] absolute bg-cover bg-[50%_50%]" />
              <div className="top-[25px] left-[-204px] w-[767px] h-[654px] bg-[url(https://c.animaapp.com/FwnyGWff/img/isografprobleme-3.png)] absolute bg-cover bg-[50%_50%]" />
            </div>
          </div>
        </div>
        <button
          type="button"
          aria-label="Jetzt loslegen"
          className="all-[unset] box-border inline-flex items-start justify-center gap-[50px] px-[60px] py-[15px] relative flex-[0_0_auto] rounded-[15px] border-[none] shadow-[inset_0px_-3px_6.2px_#ffffff91] bg-[linear-gradient(151deg,rgba(238,203,117,0.9)_0%,rgba(226,172,38,0.9)_50%,rgba(238,203,117,0.9)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[15px] before:[background:linear-gradient(43deg,rgba(255,215,0,1)_0%,rgba(250,245,233,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <span className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <span className="[font-family:'Roboto',Helvetica] font-semibold text-white text-lg relative w-fit mt-[-1.00px] tracking-[0] leading-6 whitespace-nowrap">
              Jetzt loslegen
            </span>
          </span>
        </button>
        <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col max-w-[385px] items-start relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <div
                  aria-hidden="true"
                  className="relative max-w-[384.53px] w-[84px] h-7 bg-[url(https://c.animaapp.com/FwnyGWff/img/clients-of-steuern-nein-danke-3@2x.png)] bg-cover bg-[50%_50%]"
                />
              </div>
              <p className="relative w-fit text-base leading-[17.2px] flex items-center [font-family:'DM_Sans',Helvetica] font-normal text-transparent tracking-[0] whitespace-nowrap">
                <span className="font-bold text-white">+800</span>
                <span className="text-[#464445]">&nbsp;</span>
                <span className="text-white">Zufriedene Kunden</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
