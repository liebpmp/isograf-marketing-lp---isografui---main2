const badges = [
  {
    label: "Einfachheit",
    widthClass: "w-36",
    icon: "https://c.animaapp.com/FwnyGWff/img/icon-19.svg",
    textClass:
      "absolute top-2.5 left-[49px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[17.2px] whitespace-nowrap",
  },
  {
    label: "Expertise & Erfahrung",
    widthClass: "w-[215px]",
    icon: "https://c.animaapp.com/FwnyGWff/img/icon-19.svg",
    textClass:
      "absolute top-2.5 left-12 [font-family:'DM_Sans',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[17.2px] whitespace-nowrap",
  },
  {
    label: "Vertrauen & Entlastung",
    widthClass: "w-[214px]",
    icon: "https://c.animaapp.com/FwnyGWff/img/icon-20.svg",
    textClass:
      "absolute top-2.5 left-12 [font-family:'DM_Sans',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[17.2px] whitespace-nowrap",
  },
];

const steps = [
  {
    number: "01",
    title: "Analyse & Strategie",
    description:
      "Wir analysieren Ihre aktuelle Situation und entwickeln eine maßgeschneiderte Strategie für Ihre Zertifizierung.",
    image: "https://c.animaapp.com/FwnyGWff/img/imagewithfallback-4.png",
    reverse: false,
    numberClass:
      "absolute -top-px left-[-13px] [font-family:'Libre_Baskerville',Helvetica] font-normal italic text-[#e2ac26] text-[62px] text-right tracking-[-1.24px] leading-[74.4px] whitespace-nowrap",
    titleWrapperClass: "relative self-stretch w-full h-9",
    titleClass:
      "absolute top-0 left-[203px] font-greenfield-dm-sans-semibold-h3-36pt font-[number:var(--greenfield-dm-sans-semibold-h3-36pt-font-weight)] text-white text-[length:var(--greenfield-dm-sans-semibold-h3-36pt-font-size)] text-right tracking-[var(--greenfield-dm-sans-semibold-h3-36pt-letter-spacing)] leading-[var(--greenfield-dm-sans-semibold-h3-36pt-line-height)] whitespace-nowrap [font-style:var(--greenfield-dm-sans-semibold-h3-36pt-font-style)]",
    textWrapperClass: "relative w-[448px] h-[71px]",
    descriptionClass:
      "absolute top-px left-[9px] w-[440px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffb2] text-lg text-right tracking-[0] leading-[29.2px]",
    contentAlignClass: "items-end",
    contentGapClass: "gap-4",
  },
  {
    number: "02",
    title: "Dokumentation",
    description:
      "Wir erstellen alle notwendigen Dokumente, Prozesse und Handbücher nach aktuellen Standards.",
    image: "https://c.animaapp.com/FwnyGWff/img/imagewithfallback-5.png",
    reverse: true,
    numberClass:
      "-left-1.5 absolute -top-px [font-family:'Libre_Baskerville',Helvetica] font-normal italic text-[#e2ac26] text-[62px] text-right tracking-[-1.24px] leading-[74.4px] whitespace-nowrap",
    titleWrapperClass:
      "flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",
    titleClass:
      "relative w-fit mt-[-1.00px] font-greenfield-dm-sans-semibold-h3-36pt font-[number:var(--greenfield-dm-sans-semibold-h3-36pt-font-weight)] text-white text-[length:var(--greenfield-dm-sans-semibold-h3-36pt-font-size)] text-right tracking-[var(--greenfield-dm-sans-semibold-h3-36pt-letter-spacing)] leading-[var(--greenfield-dm-sans-semibold-h3-36pt-line-height)] whitespace-nowrap [font-style:var(--greenfield-dm-sans-semibold-h3-36pt-font-style)]",
    textWrapperClass: "relative w-[448px] h-[71px]",
    descriptionClass:
      "top-px left-1 absolute w-[440px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffb2] text-lg tracking-[0] leading-[29.2px]",
    contentAlignClass: "items-start",
    contentGapClass: "gap-4",
  },
  {
    number: "03",
    title: "Implementierung",
    description:
      "Ihr Team wird geschult und alle Prozesse werden in Ihrem Unternehmen implementiert.",
    image: "https://c.animaapp.com/FwnyGWff/img/imagewithfallback-6.png",
    reverse: false,
    numberClass:
      "left-[-15px] absolute -top-px [font-family:'Libre_Baskerville',Helvetica] font-normal italic text-[#e2ac26] text-[62px] text-right tracking-[-1.24px] leading-[74.4px] whitespace-nowrap",
    titleWrapperClass: "relative self-stretch w-full h-9",
    titleClass:
      "absolute top-0 left-[247px] font-greenfield-dm-sans-semibold-h3-36pt font-[number:var(--greenfield-dm-sans-semibold-h3-36pt-font-weight)] text-white text-[length:var(--greenfield-dm-sans-semibold-h3-36pt-font-size)] text-right tracking-[var(--greenfield-dm-sans-semibold-h3-36pt-letter-spacing)] leading-[var(--greenfield-dm-sans-semibold-h3-36pt-line-height)] whitespace-nowrap [font-style:var(--greenfield-dm-sans-semibold-h3-36pt-font-style)]",
    textWrapperClass: "relative w-[448px] h-[71px]",
    descriptionClass:
      "absolute top-px left-[9px] w-[440px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffb2] text-lg text-right tracking-[0] leading-[29.2px]",
    contentAlignClass: "items-end",
    contentGapClass: "gap-4",
  },
  {
    number: "04",
    title: "Audit-Vorbereitung",
    description:
      "Wir simulieren das Audit und bereiten Sie optimal auf die Prüfung vor. Keine Überraschungen.",
    image: "https://c.animaapp.com/FwnyGWff/img/imagewithfallback-7.png",
    reverse: true,
    numberClass:
      "-left-0.5 absolute -top-px [font-family:'Libre_Baskerville',Helvetica] font-normal italic text-[#e2ac26] text-[62px] text-right tracking-[-1.24px] leading-[74.4px] whitespace-nowrap",
    titleWrapperClass:
      "flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",
    titleClass:
      "relative w-fit mt-[-1.00px] font-greenfield-dm-sans-semibold-h3-36pt font-[number:var(--greenfield-dm-sans-semibold-h3-36pt-font-weight)] text-white text-[length:var(--greenfield-dm-sans-semibold-h3-36pt-font-size)] text-right tracking-[var(--greenfield-dm-sans-semibold-h3-36pt-letter-spacing)] leading-[var(--greenfield-dm-sans-semibold-h3-36pt-line-height)] whitespace-nowrap [font-style:var(--greenfield-dm-sans-semibold-h3-36pt-font-style)]",
    textWrapperClass: "relative w-[448px] h-[71px]",
    descriptionClass:
      "top-px left-[7px] absolute w-[440px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffb2] text-lg tracking-[0] leading-[29.2px]",
    contentAlignClass: "items-start",
    contentGapClass: "gap-4",
  },
  {
    number: "05",
    title: "Zertifizierung",
    description:
      "Wir begleiten Sie beim Audit und feiern gemeinsam Ihre erfolgreiche Zertifizierung.",
    image: "https://c.animaapp.com/FwnyGWff/img/imagewithfallback-8.png",
    reverse: false,
    numberClass:
      "-left-3 absolute -top-px [font-family:'Libre_Baskerville',Helvetica] font-normal italic text-[#e2ac26] text-[62px] text-right tracking-[-1.24px] leading-[74.4px] whitespace-nowrap",
    titleWrapperClass: "relative self-stretch w-full h-9",
    titleClass:
      "absolute top-0 left-[315px] font-greenfield-dm-sans-semibold-h3-36pt font-[number:var(--greenfield-dm-sans-semibold-h3-36pt-font-weight)] text-white text-[length:var(--greenfield-dm-sans-semibold-h3-36pt-font-size)] text-right tracking-[var(--greenfield-dm-sans-semibold-h3-36pt-letter-spacing)] leading-[var(--greenfield-dm-sans-semibold-h3-36pt-line-height)] whitespace-nowrap [font-style:var(--greenfield-dm-sans-semibold-h3-36pt-font-style)]",
    textWrapperClass: "relative w-[448px] h-[71px]",
    descriptionClass:
      "top-1 left-[15px] text-right absolute w-[440px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffb2] text-lg tracking-[0] leading-[29.2px]",
    contentAlignClass: "items-end",
    contentGapClass: "gap-4",
  },
];

export const SevenPointMethodSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col h-[2937px] items-center gap-[150px] px-0 py-[51px] relative self-stretch w-full bg-[#14213d]"
      aria-labelledby="seven-point-method-heading"
    >
      <div className="relative w-[1287px] h-[2801px]">
        <div className="relative left-16 flex w-[1153px] h-[2801px] flex-col gap-7">
          <header className="flex ml-px h-[349px] w-[842px] self-center relative flex-col items-center gap-[30px]">
            <div className="relative w-40 h-9 bg-[#0827421a] rounded-[16777200px]">
              <img
                className="absolute top-2.5 left-5 w-4 h-4"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/FwnyGWff/img/icon-17.svg"
              />
              <div className="absolute top-[9px] left-4 flex h-5 w-[137px]">
                <div className="mt-[-1.5px] ml-8 h-5 w-[90px] [font-family:'DM_Sans',Helvetica] text-sm font-medium leading-5 tracking-[0] text-white text-center whitespace-nowrap">
                  Die 5-Phasen
                </div>
              </div>
            </div>
            <div className="relative w-[769px] h-[76px]">
              <img
                className="absolute top-[5px] left-[-136px] h-14 w-[1048px]"
                alt="Unsere bewährte 5-Phasen-Methode"
                src="https://c.animaapp.com/FwnyGWff/img/unsere-bew-hrte-5-phasen-methode@2x.png"
              />
              <h2 id="seven-point-method-heading" className="sr-only">
                Unsere bewährte 5-Phasen-Methode
              </h2>
            </div>
            <div className="relative self-stretch w-full h-14">
              <p className="text-white absolute top-0 left-px w-[768px] font-greenfield-dm-sans-reg-b2-14pt font-[number:var(--greenfield-dm-sans-reg-b2-14pt-font-weight)] text-[length:var(--greenfield-dm-sans-reg-b2-14pt-font-size)] text-center tracking-[var(--greenfield-dm-sans-reg-b2-14pt-letter-spacing)] leading-[var(--greenfield-dm-sans-reg-b2-14pt-line-height)] [font-style:var(--greenfield-dm-sans-reg-b2-14pt-font-style)]">
                Mit unserem strukturierten Prozess führen wir Sie Schritt für
                Schritt durch die gesamte <br />
                Zertifizierung – transparent, effizient und ohne unnötige
                Komplexität.
              </p>
            </div>
            <ul className="inline-flex items-center gap-5 relative flex-[0_0_auto] list-none p-0 m-0">
              {badges.map((badge) => (
                <li
                  key={badge.label}
                  className={`relative h-[38px] ${badge.widthClass} rounded-[16777200px] border border-solid border-white bg-[#14213d]`}
                >
                  <img
                    className="absolute top-[11px] left-[17px] w-4 h-4"
                    alt=""
                    aria-hidden="true"
                    src={badge.icon}
                  />
                  <div className={badge.textClass}>{badge.label}</div>
                </li>
              ))}
            </ul>
          </header>
          <div className="ml-[0.5px] relative w-[1152px] h-[1478px]">
            <div className="absolute top-px left-[576px] w-px h-[2424px] bg-[#14213d] border border-solid border-transparent rotate-[-0.01deg] [border-image:linear-gradient(180deg,rgba(226,172,38,1)_48%,rgba(226,172,38,1)_100%)_1]" />
            <ol className="flex flex-col w-[1152px] h-[2424px] items-start gap-24 absolute top-0 left-0 list-none m-0 p-0">
              {steps.map((step) => (
                <li
                  key={step.number}
                  className="relative self-stretch w-full h-[408px]"
                >
                  <article className="absolute top-0 left-0 flex w-[1152px] items-center justify-between">
                    {step.reverse ? (
                      <>
                        <div className="flex flex-col w-[544px] items-start gap-2.5 relative">
                          <div
                            className="relative self-stretch w-full h-[408px] rounded-3xl shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] bg-cover bg-[50%_50%]"
                            style={{ backgroundImage: `url(${step.image})` }}
                            role="img"
                            aria-label={step.title}
                          />
                        </div>
                        <div
                          className={`flex flex-col w-[544px] ${step.contentAlignClass} ${step.contentGapClass} relative`}
                        >
                          <div className="relative w-[55.62px] h-[60px]">
                            <div className={step.numberClass}>
                              {step.number}
                            </div>
                          </div>
                          <div className={step.titleWrapperClass}>
                            <h3 className={step.titleClass}>{step.title}</h3>
                          </div>
                          <div className={step.textWrapperClass}>
                            <p className={step.descriptionClass}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className={`flex flex-col w-[544px] ${step.contentAlignClass} ${step.contentGapClass} relative`}
                        >
                          <div className="relative w-[55.62px] h-[60px]">
                            <div className={step.numberClass}>
                              {step.number}
                            </div>
                          </div>
                          <div className={step.titleWrapperClass}>
                            <h3 className={step.titleClass}>{step.title}</h3>
                          </div>
                          <div className={step.textWrapperClass}>
                            <p className={step.descriptionClass}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col w-[544px] items-start gap-2.5 relative">
                          <div
                            className="relative self-stretch w-full h-[408px] rounded-3xl shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] bg-cover bg-[50%_50%]"
                            style={{ backgroundImage: `url(${step.image})` }}
                            role="img"
                            aria-label={step.title}
                          />
                        </div>
                      </>
                    )}
                  </article>
                  <div className="absolute top-48 left-[564px] w-6 h-6 bg-[#14213d] rounded-[16777200px] border-4 border-solid border-white shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
