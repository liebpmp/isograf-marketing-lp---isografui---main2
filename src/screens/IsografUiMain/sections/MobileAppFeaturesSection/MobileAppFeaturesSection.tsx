const featureCards = [
  {
    company: "EduVision Coaching GmbH",
    category: "Business Coaching",
    before: "80.000 €",
    after: "340.000 €",
    growth: "+325% Wachstum",
    note: "durch KOMPASS + AZAV",
    containerSrc: "https://c.animaapp.com/FwnyGWff/img/container-3.svg",
    size: "side" as const,
  },
  {
    company: "TrainUp Institut",
    category: "Leadership Training",
    before: "50.000 €",
    after: "410.000 €",
    growth: "+720% Wachstum",
    note: "durch Qualifizierungschancengesetz + ISO",
    containerSrc: "https://c.animaapp.com/FwnyGWff/img/container-4.svg",
    size: "center" as const,
  },
  {
    company: "MindGrow Academy",
    category: "Digitales Coaching",
    before: "9.000 €/M",
    after: "46.000 €/M",
    growth: "+411% Wachstum",
    note: "durch ZFU-Freigabe",
    containerSrc: "https://c.animaapp.com/FwnyGWff/img/container-5.svg",
    size: "side" as const,
  },
];

export const MobileAppFeaturesSection = (): JSX.Element => {
  return (
    <section
      className="relative flex flex-col items-start gap-2.5 self-stretch w-full flex-[0_0_auto] overflow-hidden bg-white"
      aria-labelledby="mobile-app-features-heading"
    >
      <img
        className="relative w-[1441px] h-[960.67px] aspect-[1.5] object-cover"
        alt=""
        aria-hidden="true"
        src="https://c.animaapp.com/FwnyGWff/img/u7513919113-architectual-pencil-drawing-of-a-walkway-with-rom-5e.png"
      />
      <div className="inline-flex flex-col items-center gap-[65px] absolute top-[calc(50.00%_-_390px)] left-[calc(50.00%_-_512px)]">
        <header className="flex flex-col w-[768px] h-[228px] items-center gap-[30px] relative">
          <div className="relative w-40 h-9 bg-[#0827421a] rounded-[16777200px]">
            <img
              className="absolute top-2.5 left-5 w-4 h-4"
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/FwnyGWff/img/icon-16.svg"
            />
            <div className="absolute top-2 left-[27px] w-[137px] h-5 flex">
              <div className="mt-[-0.5px] w-[97px] h-5 ml-5 [font-family:'DM_Sans',Helvetica] font-medium text-[#082742] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                Die Ergebnisse
              </div>
            </div>
          </div>
          <div className="relative w-[769px] h-[76px] ml-[-0.50px] mr-[-0.50px]">
            <h2
              id="mobile-app-features-heading"
              className="absolute top-0 left-[82px] [font-family:'DM_Sans',Helvetica] font-normal text-[#101727] text-[66px] text-center leading-[75.5px] whitespace-nowrap"
            >
              <span className="font-[number:var(--greenfield-dm-sans-exbold-h1-48pt-font-weight)] text-black tracking-[var(--greenfield-dm-sans-exbold-h1-48pt-letter-spacing)] font-greenfield-dm-sans-exbold-h1-48pt [font-style:var(--greenfield-dm-sans-exbold-h1-48pt-font-style)] leading-[var(--greenfield-dm-sans-exbold-h1-48pt-line-height)] text-[length:var(--greenfield-dm-sans-exbold-h1-48pt-font-size)]">
                Bisherige{" "}
              </span>
              <span className="[font-family:'Libre_Baskerville',Helvetica] italic text-black tracking-[0]">
                Ergebnisse
              </span>
            </h2>
          </div>
          <div className="relative self-stretch w-full h-14">
            <p className="absolute top-0 left-px w-[768px] [font-family:'DM_Sans',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-[31.7px]">
              Transparente Leistungen, nachweisbare Resultate – und ein Prozess,
              der in über <br />
              +1.200 Projekten zuverlässig funktioniert hat.
            </p>
          </div>
        </header>
        <div
          className="flex w-[1025px] h-[486px] items-center justify-center gap-8 relative shadow-[4px_3px_11px_#e9d5a00f,15px_11px_19px_#e9d5a00f,35px_26px_26px_#e9d5a008,61px_46px_31px_#e9d5a003,96px_72px_34px_transparent]"
          role="list"
          aria-label="Ergebnisbeispiele"
        >
          {featureCards.map((card) =>
            card.size === "center" ? (
              <article
                key={card.company}
                className="relative w-[363.01px] h-[485.89px] bg-[#ffffffa6] rounded-[19.45px] border-[none] backdrop-blur-[16.17px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(16.17px)_brightness(100%)] aspect-[0.75] before:content-[''] before:absolute before:inset-0 before:p-[1.22px] before:rounded-[19.45px] before:[background:linear-gradient(180deg,rgba(253,185,49,1)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                role="listitem"
                aria-label={`${card.company}: ${card.before} vorher, ${card.after} nachher`}
              >
                <div className="w-[363px] h-[486px] flex flex-col gap-[19.4px]">
                  <div className="ml-[30.4px] w-[302.24px] h-[67.1px] mt-[39.0px] flex flex-col gap-[9.7px]">
                    <div className="w-[302.24px] h-[33.06px] flex">
                      <h3 className="mt-[0.6px] w-[173px] h-[34px] ml-0 [font-family:'DM_Sans',Helvetica] font-semibold text-[#272525] text-[24.3px] tracking-[-0.49px] leading-[33.1px] whitespace-nowrap not-italic">
                        {card.company}
                      </h3>
                    </div>
                    <div className="flex ml-0 w-[302.24px] h-[24.31px] relative flex-col items-start pt-[-0.61px] pl-0 pr-[153.82px] pb-0">
                      <div className="relative self-stretch w-full h-[24.31px]">
                        <p className="absolute -top-px left-px [font-family:'Roboto',Helvetica] font-normal text-[#6a7282] text-[17px] tracking-[0] leading-[24.3px] whitespace-nowrap">
                          {card.category}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-[30.4px] w-[302.24px] h-[63.2px] flex flex-col gap-[4.9px]">
                    <div className="flex w-[302.24px] h-[24.31px] relative flex-col items-start pt-[-0.61px] pl-0 pr-[252.15px] pb-0">
                      <div className="relative self-stretch w-full h-[24.31px]">
                        <p className="-top-px left-px text-[17px] leading-[24.3px] absolute [font-family:'Roboto',Helvetica] font-normal text-[#6a7282] tracking-[0] whitespace-nowrap">
                          Vorher
                        </p>
                      </div>
                    </div>
                    <div className="flex ml-0 w-[302.24px] h-[34.03px] relative flex-col items-start pl-0 pr-[217.26px] pt-[0.61px] pb-0">
                      <div className="relative self-stretch w-full h-[34.03px] mb-[-0.61px]">
                        <p className="absolute top-px left-px [font-family:'Roboto',Helvetica] font-normal text-black text-[21.9px] tracking-[0] leading-[34.0px] whitespace-nowrap">
                          {card.before}
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="ml-[30.4px] w-[302.24px] h-[24.31px]"
                    alt=""
                    aria-hidden="true"
                    src={card.containerSrc}
                  />
                  <div className="ml-[30.4px] w-[302.24px] h-[73.51px] flex flex-col gap-[4.9px]">
                    <div className="flex w-[302.24px] h-[24.31px] relative flex-col items-start pt-[-0.61px] pl-0 pr-[238.4px] pb-0">
                      <div className="relative self-stretch w-full h-[24.31px]">
                        <p className="-top-px left-px text-[17px] leading-[24.3px] absolute [font-family:'Roboto',Helvetica] font-normal text-[#6a7282] tracking-[0] whitespace-nowrap">
                          Nachher
                        </p>
                      </div>
                    </div>
                    <div className="ml-0 w-[302.24px] h-[44.34px] flex">
                      <p className="w-[178px] h-[45px] [font-family:'DM_Sans',Helvetica] font-semibold text-[#272525] text-[38.9px] tracking-[-1.17px] leading-[44.3px] whitespace-nowrap">
                        {card.after}
                      </p>
                    </div>
                  </div>
                  <div className="flex ml-[30.4px] w-[177.37px] h-[57.13px] relative flex-col items-start pt-[15.8px] pb-[1.22px] px-[20.66px] bg-[#e2ac2626] rounded-[12.15px] border-[1.22px] border-solid border-[#e2ac264c]">
                    <div className="relative self-stretch w-full h-[25.52px]">
                      <p className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-normal text-[#e2ac26] text-[17px] tracking-[0] leading-[25.5px] whitespace-nowrap">
                        {card.growth}
                      </p>
                    </div>
                  </div>
                  <div className="flex ml-[30.4px] w-[302.24px] h-[24.31px] relative flex-col items-start pt-[-0.61px] pr-[-16.57px] pl-0 pb-0">
                    <div className="relative self-stretch w-full h-[24.31px]">
                      <p className="absolute -top-px left-px [font-family:'Roboto',Helvetica] font-normal text-[#6a7282] text-[17px] tracking-[0] leading-[24.3px] whitespace-nowrap">
                        {card.note}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ) : (
              <article
                key={card.company}
                className="relative w-[298.66px] h-[399.77px] bg-[#ffffffa6] rounded-2xl border-[none] blur-[3.5px] backdrop-blur-[13.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(13.3px)_brightness(100%)] opacity-80 before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(180deg,rgba(253,185,49,1)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                role="listitem"
                aria-label={`${card.company}: ${card.before} vorher, ${card.after} nachher`}
              >
                <div className="w-[299px] h-[400px] flex flex-col gap-4">
                  <div className="ml-[25px] w-[248.66px] h-[55.2px] mt-[32.1px] flex flex-col gap-2">
                    <div className="w-[248.66px] h-[27.2px] flex">
                      <h3 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#272525] text-xl tracking-[-0.40px] leading-[27.2px] whitespace-nowrap not-italic">
                        {card.company}
                      </h3>
                    </div>
                    <div className="flex w-[248.66px] h-5 relative flex-col items-start pt-[-0.5px] pl-0 pb-0">
                      <div className="relative self-stretch w-full h-5">
                        <p className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5 whitespace-nowrap">
                          {card.category}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-[25px] w-[248.66px] h-[52px] flex flex-col gap-1">
                    <div className="flex w-[248.66px] h-5 relative flex-col items-start pt-[-0.5px] pl-0 pb-0">
                      <div className="relative self-stretch w-full h-5">
                        <p className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5 whitespace-nowrap">
                          Vorher
                        </p>
                      </div>
                    </div>
                    <div className="flex w-[248.66px] h-7 relative flex-col items-start pl-0 pt-[0.5px] pb-0">
                      <div className="relative self-stretch w-full h-7 mb-[-0.50px]">
                        <p className="absolute top-px left-0 [font-family:'Roboto',Helvetica] font-normal text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                          {card.before}
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="ml-[25px] w-[248.66px] h-5"
                    alt=""
                    aria-hidden="true"
                    src={card.containerSrc}
                  />
                  <div className="ml-[25px] w-[248.66px] h-[60.48px] flex flex-col gap-1">
                    <div className="flex w-[248.66px] h-5 relative flex-col items-start pt-[-0.5px] pl-0 pb-0">
                      <div className="relative self-stretch w-full h-5">
                        <p className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5 whitespace-nowrap">
                          Nachher
                        </p>
                      </div>
                    </div>
                    <div className="w-[248.66px] h-[36.48px] flex">
                      <p className="w-[178px] h-[37px] [font-family:'DM_Sans',Helvetica] font-semibold text-[#272525] text-[32px] tracking-[-0.96px] leading-[36.5px] whitespace-nowrap">
                        {card.after}
                      </p>
                    </div>
                  </div>
                  <div className="flex ml-[25px] w-[145.93px] h-[47px] relative flex-col items-start pt-[13px] pb-px px-[17px] bg-[#e2ac2626] rounded-[10px] border border-solid border-[#e2ac264c]">
                    <div className="relative self-stretch w-full h-[21px]">
                      <p className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-normal text-[#e2ac26] text-sm leading-[21px] tracking-[0] whitespace-nowrap">
                        {card.growth}
                      </p>
                    </div>
                  </div>
                  <div className="flex ml-[25px] w-[248.66px] h-5 relative flex-col items-start pt-[-0.5px] pl-0 pb-0">
                    <div className="relative self-stretch w-full h-5">
                      <p className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5 whitespace-nowrap">
                        {card.note}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
