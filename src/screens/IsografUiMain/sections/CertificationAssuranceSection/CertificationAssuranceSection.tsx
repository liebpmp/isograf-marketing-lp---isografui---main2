const testimonialCards = [
  {
    id: 1,
    containerClassName:
      "absolute top-[268px] left-[190px] w-[276px] h-[130px] blur-[3.35px]",
    cardClassName:
      "absolute top-0 left-0 w-[270px] h-[130px] bg-white rounded-[9.93px] shadow-[-3.97px_19.85px_19.85px_#00000085]",
    avatarClassName: "absolute top-3.5 left-[18px] w-[35px] h-[35px]",
    avatarSrc: "https://c.animaapp.com/FwnyGWff/img/ellipse-1.svg",
    nameClassName:
      "absolute top-3.5 left-[61px] [font-family:'Roboto',Helvetica] font-medium text-black text-[11.9px] tracking-[0] leading-[normal] whitespace-nowrap",
    companyClassName:
      "absolute top-8 left-[61px] [font-family:'Roboto',Helvetica] font-semibold text-[#b9b9b9] text-[7.9px] tracking-[0] leading-[normal] whitespace-nowrap",
    copyClassName:
      "absolute top-[52px] left-[61px] w-[178px] [font-family:'Roboto',Helvetica] font-normal text-[#1a1b1d] text-[8px] tracking-[0.16px] leading-[11.6px]",
    starsWrapperClassName:
      "flex w-[55px] h-2.5 items-center gap-[0.8px] absolute top-[109px] left-[62px]",
    starClassName: "relative w-[9.91px] h-[9.42px] aspect-[1]",
    starSrc: "https://c.animaapp.com/FwnyGWff/img/star-5.svg",
  },
  {
    id: 2,
    containerClassName:
      "absolute top-[148px] left-0 w-[276px] h-[130px] blur-[1.41px]",
    cardClassName:
      "w-[270px] h-[130px] rounded-[9.91px] shadow-[-3.96px_19.82px_19.82px_#00000085] absolute top-0 left-0 bg-white",
    avatarClassName: "absolute top-3.5 left-[18px] w-[35px] h-[35px]",
    avatarSrc: "https://c.animaapp.com/FwnyGWff/img/ellipse-1-1.svg",
    nameClassName:
      "top-3.5 left-[60px] text-[11.9px] absolute [font-family:'Roboto',Helvetica] font-medium text-black tracking-[0] leading-[normal] whitespace-nowrap",
    companyClassName:
      "top-8 left-[60px] text-[7.9px] whitespace-nowrap absolute [font-family:'Roboto',Helvetica] font-semibold text-[#b9b9b9] tracking-[0] leading-[normal]",
    copyClassName:
      "top-[51px] left-[60px] w-[178px] text-[8px] tracking-[0.16px] leading-[11.6px] absolute [font-family:'Roboto',Helvetica] font-normal text-[#1a1b1d]",
    starsWrapperClassName:
      "flex w-[55px] h-2.5 gap-[0.8px] top-[109px] left-[62px] items-center absolute",
    starClassName: "relative w-[9.89px] h-[9.41px] aspect-[1]",
    starSrc: "https://c.animaapp.com/FwnyGWff/img/star-5-1.svg",
  },
  {
    id: 3,
    containerClassName:
      "absolute top-0 left-[162px] w-[253px] h-[119px] blur-[1.28px]",
    cardClassName:
      "w-[247px] h-[119px] rounded-[9.07px] shadow-[-3.63px_18.15px_18.15px_#00000085] absolute top-0 left-0 bg-white",
    avatarClassName: "absolute top-[13px] left-4 w-8 h-8",
    avatarSrc: "https://c.animaapp.com/FwnyGWff/img/ellipse-1-2.svg",
    nameClassName:
      "top-[13px] left-[55px] text-[10.9px] absolute [font-family:'Roboto',Helvetica] font-medium text-black tracking-[0] leading-[normal] whitespace-nowrap",
    companyClassName:
      "top-[29px] left-[55px] text-[7.3px] absolute [font-family:'Roboto',Helvetica] font-semibold text-[#b9b9b9] tracking-[0] leading-[normal]",
    copyClassName:
      "top-[47px] left-[55px] w-[163px] text-[7.3px] tracking-[0.15px] leading-[10.6px] absolute [font-family:'Roboto',Helvetica] font-normal text-[#1a1b1d]",
    starsWrapperClassName:
      "flex w-[51px] h-2.5 gap-[0.73px] top-[100px] left-[57px] items-center absolute",
    starClassName: "relative w-[9.06px] h-[8.62px] aspect-[1]",
    starSrc: "https://c.animaapp.com/FwnyGWff/img/star-5-2.svg",
  },
  {
    id: 4,
    containerClassName: "absolute top-[97px] left-[222px] w-[343px] h-[162px]",
    cardClassName:
      "w-[337px] h-[162px] rounded-[12.38px] shadow-[-4.95px_24.77px_24.77px_#00000085] absolute top-0 left-0 bg-white",
    avatarClassName: "absolute top-[17px] left-[22px] w-[43px] h-[43px]",
    avatarSrc: "https://c.animaapp.com/FwnyGWff/img/ellipse-1-3.svg",
    nameClassName:
      "top-[17px] left-[76px] text-[14.9px] absolute [font-family:'Roboto',Helvetica] font-medium text-black tracking-[0] leading-[normal] whitespace-nowrap",
    companyClassName:
      "top-10 left-[76px] text-[9.9px] absolute [font-family:'Roboto',Helvetica] font-semibold text-[#b9b9b9] tracking-[0] leading-[normal]",
    copyClassName:
      "top-16 left-[76px] w-[222px] text-[10px] tracking-[0.20px] leading-[14.5px] absolute [font-family:'Roboto',Helvetica] font-normal text-[#1a1b1d]",
    starsWrapperClassName:
      "inline-flex gap-px top-[136px] left-[77px] items-center absolute",
    starClassName: "relative w-[12.36px] h-[11.76px] aspect-[1]",
    starSrc: "https://c.animaapp.com/FwnyGWff/img/star-5-3.svg",
  },
];

export const CertificationAssuranceSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="certification-assurance-heading"
      className="relative w-[1440px] h-[1332px] bg-white"
    >
      <div className="flex flex-col w-[1250px] items-center justify-center gap-10 relative top-[calc(50.00%_-_593px)] left-[calc(50.00%_-_624px)]">
        <header className="flex flex-col items-center gap-[21px] relative self-stretch w-full flex-[0_0_auto]">
          <h2
            id="certification-assurance-heading"
            className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#272525] text-[66px] text-center leading-[75.5px] whitespace-nowrap"
          >
            <span className="font-medium text-black tracking-[-1.42px]">
              Zertifizierung, die Ihr{" "}
            </span>
            <span className="[font-family:'Libre_Baskerville',Helvetica] italic text-black tracking-[0]">
              Wachstum trägt.
            </span>
          </h2>
          <p className="relative w-[952px] h-[51px] [font-family:'DM_Sans',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-[26.1px]">
            Mit ISOGRAF führen wir Sie unkompliziert und sicher durch den
            gesamten <br />
            Zertifizierungsprozess – vollständig begleitet.
          </p>
        </header>
        <div
          className="relative w-[1226px] h-[836px]"
          aria-label="Vorteile und Kundenstimmen"
        >
          <div className="inline-flex items-center gap-6 absolute top-0 left-0">
            <article
              className="relative w-[772px] h-[387px] rounded-[20px] overflow-hidden"
              aria-label="Kundenstimmen und Referenzen"
            >
              <div className="relative top-[-57px] left-[-329px] w-[1211px] h-[602px] overflow-hidden">
                <div className="absolute top-[57px] left-[724px] w-[377px] h-[387px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(213,220,232,1)_100%)]" />
                <img
                  className="absolute top-[57px] left-[329px] w-[772px] h-[387px]"
                  alt="Teamfoto von ISOGRAF"
                  src="https://c.animaapp.com/FwnyGWff/img/dsc01322-1.png"
                />
                <div className="absolute top-[242px] left-[294px] w-[480px] h-[427px] bg-[#1a2a4d] rounded-[240px/213.26px] blur-[100px]" />
                <div className="absolute top-[170px] left-[13px] w-[480px] h-[427px] bg-[#203c79] rounded-[240px/213.26px] blur-[100px]" />
                <div className="absolute top-[46px] -left-1 w-[480px] h-[427px] bg-[#203c79] rounded-[240px/213.26px] blur-[100px]" />
                <div className="absolute w-[559px] h-[398px] top-[51px] left-[612px]">
                  {testimonialCards.map((card) => (
                    <article
                      key={card.id}
                      className={card.containerClassName}
                      aria-label={`Kundenbewertung ${card.id}`}
                    >
                      <div className={card.cardClassName} />
                      <img
                        className={card.avatarClassName}
                        alt={`Profilbild Persona ${card.id}`}
                        src={card.avatarSrc}
                      />
                      <div className={card.nameClassName}>Persona 1</div>
                      <div className={card.companyClassName}>
                        Musterfirma GmbH
                      </div>
                      <p className={card.copyClassName}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis.
                      </p>
                      <div
                        className={card.starsWrapperClassName}
                        aria-label="5 von 5 Sternen"
                      >
                        {Array.from({ length: 5 }).map((_, index) => (
                          <img
                            key={index}
                            className={card.starClassName}
                            alt=""
                            aria-hidden="true"
                            src={card.starSrc}
                          />
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </article>
            <article
              className="relative w-[430px] h-[387px] bg-[#1a2a4d] rounded-[20px] overflow-hidden"
              aria-label="Über 20 Jahre Erfahrung"
            >
              <div className="absolute top-[-93px] left-11 w-[341px] h-[359px] bg-[#708ac1] rounded-[170.5px/179.5px] blur-[118.65px]" />
              <div className="absolute w-[113.26%] h-[153.23%] top-[-24.09%] left-[-2.56%] aspect-[0.82] bg-[url(https://c.animaapp.com/FwnyGWff/img/689f075c3678cb3139d24593-chatgpt-20image-209-20-d0-b8-d1-8e-d0-b.png)] bg-cover bg-[50%_50%]" />
              <div className="absolute top-[143px] left-[-119px] w-[668px] h-[250px] rounded-[135px] bg-[linear-gradient(184deg,rgba(26,42,77,0)_0%,rgba(26,42,77,1)_61%)]" />
              <p className="top-[237px] h-[37px] text-[32px] leading-[36.7px] absolute left-[43px] flex items-center [font-family:'DM_Sans',Helvetica] font-normal text-transparent tracking-[0] whitespace-nowrap">
                <span className="font-semibold text-[#fffefe]">+20 Jahre </span>
                <span className="[font-family:'Libre_Baskerville',Helvetica] italic text-[#fdb931]">
                  Erfahrung
                </span>
              </p>
              <p className="absolute top-[293px] left-[47px] h-[52px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffb2] text-lg tracking-[0] leading-[26.1px]">
                sowohl bei Dienstleistern, als auch bei <br />
                Gewerbekunden.
              </p>
              <div className="absolute top-[-180px] left-[245px] w-[341px] h-[359px] bg-[#3d68c6] rounded-[170.5px/179.5px] blur-[118.65px]" />
            </article>
          </div>
          <div className="inline-flex items-center gap-6 absolute top-[449px] left-0">
            <article
              className="relative w-[430px] h-[387px] bg-[#1a2a4e] rounded-[20px] overflow-hidden"
              aria-label="Unkomplizierter Prozess"
            >
              <div className="absolute top-[-211px] left-[54px] w-[341px] h-[359px] bg-[#708ac1] rounded-[170.5px/179.5px] blur-[118.65px]" />
              <div className="absolute top-[-211px] left-[265px] w-[341px] h-[359px] bg-[#3d68c6] rounded-[170.5px/179.5px] blur-[118.65px]" />
              <div className="absolute w-[67.64%] h-[75.15%] top-[-20.41%] left-[16.17%] flex rotate-[-7.45deg] shadow-[0px_31.44px_47.16px_#7a7aa166]">
                <div className="flex-1 w-[290.83px] relative">
                  <img
                    className="absolute w-[96.46%] h-[72.83%] top-[27.17%] left-[3.54%] rotate-[7.45deg]"
                    alt="Sternförmiges Qualitätssiegel"
                    src="https://c.animaapp.com/FwnyGWff/img/star-14.svg"
                  />
                  <img
                    className="absolute w-[84.55%] h-[72.76%] top-[27.24%] left-[15.45%] rotate-[7.45deg]"
                    alt="Rechteckiger Hintergrund des Siegels"
                    src="https://c.animaapp.com/FwnyGWff/img/rectangle-1488.svg"
                  />
                  <img
                    className="absolute w-[129.05%] h-[73.17%] top-[26.83%] left-[-29.05%] rotate-[7.45deg]"
                    alt="Check-Symbol"
                    src="https://c.animaapp.com/FwnyGWff/img/icon-navigation-check-24px.svg"
                  />
                  <img
                    className="absolute w-[84.49%] h-[72.75%] top-[27.25%] left-[15.51%] rotate-[7.45deg]"
                    alt="Elliptischer Akzent"
                    src="https://c.animaapp.com/FwnyGWff/img/ellipse-25.svg"
                  />
                </div>
              </div>
              <p className="absolute top-[237px] left-[43px] h-[37px] text-3xl leading-[36.7px] flex items-center [font-family:'DM_Sans',Helvetica] font-normal text-transparent tracking-[0] whitespace-nowrap">
                <span className="font-semibold text-[#fffefe]">
                  Unkomplizierter{" "}
                </span>
                <span className="[font-family:'Libre_Baskerville',Helvetica] italic text-[#fdb931]">
                  Prozess
                </span>
              </p>
              <p className="absolute top-[293px] left-[47px] h-[52px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffb2] text-lg tracking-[0] leading-[26.1px]">
                mit der Erfahrung aus über <br />
                1.200 Projekten.
              </p>
            </article>
            <article
              className="relative w-[772px] h-[387px] bg-white rounded-[20px] overflow-hidden"
              aria-label="Echtes Wachstum"
            >
              <img
                className="absolute top-0 left-[232px] w-[540px] h-[387px] aspect-[1.33] object-cover"
                alt="Architektonische Illustration eines Gerichtsgebäudes"
                src="https://c.animaapp.com/FwnyGWff/img/namewithd-architectual-pencil-drawing-of-a-majestic-court-bui-19.png"
              />
              <div className="absolute top-[-181px] left-[-373px] w-[927px] h-[895px] rounded-[463.5px/447.5px] blur-[100px] bg-[linear-gradient(90deg,rgba(26,42,77,1)_50%,rgba(60,98,179,0)_100%)]" />
              <div className="absolute top-[161px] left-[-215px] w-[582px] h-[613px] bg-[#3d68c6] rounded-[291.13px/306.5px] blur-[202.6px]" />
              <img
                className="absolute top-0 left-0 w-[772px] h-[387px]"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/FwnyGWff/img/line.svg"
              />
              <p className="top-[109px] h-[53px] text-[42.9px] leading-[52.4px] absolute left-[43px] flex items-center [font-family:'DM_Sans',Helvetica] font-normal text-transparent tracking-[0] whitespace-nowrap">
                <span className="font-semibold text-[#fffefe]">Echtes </span>
                <span className="[font-family:'Libre_Baskerville',Helvetica] italic text-[#fdb931]">
                  Wachstum
                </span>
              </p>
              <p className="absolute top-[177px] left-[47px] h-[98px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffb2] text-xl tracking-[0] leading-[32.5px]">
                Die meisten Unternehmen scheitern <br />
                an der Komplexität der Zertifizierungsprozesse. <br />
                Wir übernehmen den gesamten Prozess für Sie.
              </p>
            </article>
          </div>
        </div>
        <button
          type="button"
          aria-label="Jetzt loslegen"
          className="all-[unset] box-border inline-flex items-start justify-center gap-[50px] px-[60px] py-[15px] relative flex-[0_0_auto] rounded-[15px] border-[none] shadow-[inset_0px_-3px_6.2px_#ffffff91] bg-[linear-gradient(151deg,rgba(238,203,117,0.9)_0%,rgba(226,172,38,0.9)_50%,rgba(238,203,117,0.9)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[15px] before:[background:linear-gradient(43deg,rgba(255,215,0,1)_0%,rgba(250,245,233,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
        >
          <span className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <span className="[font-family:'Roboto',Helvetica] font-semibold text-white text-lg relative w-fit mt-[-1.00px] tracking-[0] leading-6 whitespace-nowrap">
              Jetzt loslegen
            </span>
          </span>
        </button>
        <div
          className="inline-flex flex-col max-w-[385px] items-start relative flex-[0_0_auto]"
          aria-label="Kundenzufriedenheit"
        >
          <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <div
                className="relative max-w-[384.53px] w-[84px] h-7 bg-[url(https://c.animaapp.com/FwnyGWff/img/clients-of-steuern-nein-danke-3@2x.png)] bg-cover bg-[50%_50%]"
                aria-hidden="true"
              />
            </div>
            <p className="relative w-fit text-base leading-[17.2px] flex items-center [font-family:'DM_Sans',Helvetica] font-normal text-transparent tracking-[0] whitespace-nowrap">
              <span className="font-bold text-[#272525]">800+</span>
              <span className="text-[#464445]">&nbsp;</span>
              <span className="text-[#272525]">Zufriedene Kunden</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
