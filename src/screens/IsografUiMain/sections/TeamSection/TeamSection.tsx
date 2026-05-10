const teamMembers = [
  {
    name: "Volker Rozek",
    role: "Senior Berater",
    description: "Experte für Prozessoptimierung",
    image:
      "https://c.animaapp.com/FwnyGWff/img/cute-smiling-young-man-with-bristle-looking-satisfied-1@2x.png",
    socialIcon: "https://c.animaapp.com/FwnyGWff/img/frame-1000004258.svg",
  },
  {
    name: "Daniel Graf",
    role: "Senior Berater",
    description: "Experte für ISO 9001, AZAV, ISO 14001 sowie 13485 und 27001",
    image:
      "https://c.animaapp.com/FwnyGWff/img/cute-smiling-young-man-with-bristle-looking-satisfied-1-1@2x.png",
    socialIcon: "https://c.animaapp.com/FwnyGWff/img/frame-1000004258-1.svg",
  },
  {
    name: "Christian Engelhardt",
    role: "Geschäftsführung, AZAV Fachmann",
    description: "Zulassung AZAV, Förderanträge, Förderprozess",
    image:
      "https://c.animaapp.com/FwnyGWff/img/cute-smiling-young-man-with-bristle-looking-satisfied-1-2@2x.png",
    socialIcon: "https://c.animaapp.com/FwnyGWff/img/frame-1000004258-2.svg",
    roleClassName:
      "relative flex items-center justify-center w-fit ml-[-4.50px] mr-[-4.50px] [font-family:'DM_Sans',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-[25px] whitespace-nowrap",
  },
  {
    name: "Jeremy Gocht",
    role: "Junior Berater",
    description: "Prozessmanagement und Auditvorbereitung",
    image:
      "https://c.animaapp.com/FwnyGWff/img/cute-smiling-young-man-with-bristle-looking-satisfied-1-3@2x.png",
    socialIcon: "https://c.animaapp.com/FwnyGWff/img/frame-1000004258-3.svg",
    nameClassName:
      "relative flex items-center justify-center self-stretch h-6 mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-bold text-[#19191b] text-lg text-center tracking-[0] leading-7 whitespace-nowrap",
  },
];

export const TeamSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col h-[842px] items-start gap-2.5 relative self-stretch w-full bg-white"
      aria-labelledby="team-section-heading"
    >
      <img
        className="relative w-[1441px] h-[842px] aspect-[1.5] object-cover"
        alt=""
        aria-hidden="true"
        src="https://c.animaapp.com/FwnyGWff/img/u7513919113-architectual-pencil-drawing-of-a-walkway-with-rom-5e-1.png"
      />
      <div className="inline-flex flex-col items-center gap-[65px] absolute top-[calc(50.00%_-_363px)] left-[calc(50.00%_-_523px)]">
        <header className="flex flex-col w-[768px] h-[228px] items-center gap-[30px] relative">
          <div className="relative w-[136px] h-9 bg-[#0827421a] rounded-[16777200px]">
            <img
              className="absolute top-2.5 left-5 w-4 h-4"
              alt=""
              aria-hidden="true"
              src="https://c.animaapp.com/FwnyGWff/img/icon-21.svg"
            />
            <div className="inline-flex items-center justify-center gap-2.5 absolute top-2 left-[50px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-medium text-[#082742] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                Das Team
              </div>
            </div>
          </div>
          <div className="relative w-[769px] h-[76px] ml-[-0.50px] mr-[-0.50px]">
            <h2
              id="team-section-heading"
              className="absolute top-0 left-[104px] [font-family:'DM_Sans',Helvetica] font-normal text-[#101727] text-[66px] text-center leading-[75.5px] whitespace-nowrap"
            >
              <span className="font-[number:var(--greenfield-dm-sans-exbold-h1-48pt-font-weight)] text-black tracking-[var(--greenfield-dm-sans-exbold-h1-48pt-letter-spacing)] font-greenfield-dm-sans-exbold-h1-48pt [font-style:var(--greenfield-dm-sans-exbold-h1-48pt-font-style)] leading-[var(--greenfield-dm-sans-exbold-h1-48pt-line-height)] text-[length:var(--greenfield-dm-sans-exbold-h1-48pt-font-size)]">
                Unser{" "}
              </span>
              <span className="[font-family:'Libre_Baskerville',Helvetica] italic text-black tracking-[-1.42px]">
                starkes
              </span>
              <span className="font-[number:var(--greenfield-dm-sans-exbold-h1-48pt-font-weight)] text-black tracking-[var(--greenfield-dm-sans-exbold-h1-48pt-letter-spacing)] font-greenfield-dm-sans-exbold-h1-48pt [font-style:var(--greenfield-dm-sans-exbold-h1-48pt-font-style)] leading-[var(--greenfield-dm-sans-exbold-h1-48pt-line-height)] text-[length:var(--greenfield-dm-sans-exbold-h1-48pt-font-size)]">
                &nbsp;
              </span>
              <span className="[font-family:'Libre_Baskerville',Helvetica] italic text-black tracking-[0]">
                Team
              </span>
            </h2>
          </div>
          <div className="relative self-stretch w-full h-14">
            <p className="text-black absolute top-0 left-px w-[768px] font-greenfield-dm-sans-reg-b2-14pt font-[number:var(--greenfield-dm-sans-reg-b2-14pt-font-weight)] text-[length:var(--greenfield-dm-sans-reg-b2-14pt-font-size)] text-center tracking-[var(--greenfield-dm-sans-reg-b2-14pt-letter-spacing)] leading-[var(--greenfield-dm-sans-reg-b2-14pt-line-height)] [font-style:var(--greenfield-dm-sans-reg-b2-14pt-font-style)]">
              Transparente Leistungen, nachweisbare Resultate – und ein Prozess,
              der in über <br />
              1+.200 Projekten zuverlässig funktioniert hat.
            </p>
          </div>
        </header>
        <div
          className="inline-flex items-start gap-[50px] relative flex-[0_0_auto]"
          role="list"
          aria-label="Teammitglieder"
        >
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="relative w-56 h-[432px]"
              role="listitem"
            >
              <div className="inline-flex flex-col h-[432px] items-start gap-[var(--spacing-unrelated-elements-SM)] relative">
                <div className="relative w-56 h-56">
                  <img
                    className="w-56 h-56 rounded-[890px] object-cover"
                    alt={member.name}
                    src={member.image}
                  />
                </div>
                <div className="flex flex-col w-56 items-center justify-center gap-[var(--spacing-related-elements-SM)] relative flex-[0_0_auto]">
                  <div className="flex flex-col items-center justify-center gap-[var(--spacing-micro-LG)] relative self-stretch w-full flex-[0_0_auto]">
                    <h3
                      className={
                        member.nameClassName ??
                        "mt-[-1.00px] font-bold text-[#19191b] text-lg leading-7 relative flex items-center justify-center w-fit [font-family:'DM_Sans',Helvetica] text-center tracking-[0] whitespace-nowrap"
                      }
                    >
                      {member.name}
                    </h3>
                    <div
                      className={
                        member.roleClassName ??
                        "font-medium text-black text-sm leading-[25px] relative flex items-center justify-center w-fit [font-family:'DM_Sans',Helvetica] text-center tracking-[0] whitespace-nowrap"
                      }
                    >
                      {member.role}
                    </div>
                  </div>
                  <p className="relative flex items-center justify-center self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#787a82] text-sm text-center tracking-[0] leading-[25px]">
                    {member.description}
                  </p>
                  <img
                    className="relative self-stretch w-full flex-[0_0_auto]"
                    alt=""
                    aria-hidden="true"
                    src={member.socialIcon}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
