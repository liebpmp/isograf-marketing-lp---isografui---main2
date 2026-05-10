const footerLinkGroups = [
  {
    title: "Leistungen",
    items: [
      {
        label: "KOMPASS-Förderung",
        widthClass: "w-[132px]",
        mrClass: "mr-[-0.48px]",
      },
      {
        label: "AZAV-Zulassung",
        widthClass: "w-[103px]",
        mrClass: "mr-[-0.56px]",
      },
      {
        label: "ZFU-Zulassung",
        widthClass: "w-[94px]",
        mrClass: "mr-[-0.16px]",
      },
      { label: "ISO 9001", widthClass: "w-[57px]", mrClass: "mr-[-0.30px]" },
    ],
  },
  {
    title: "Unternehmen",
    items: [
      { label: "Über uns", widthClass: "w-[55px]", mrClass: "mr-[-0.74px]" },
      { label: "Team", widthClass: "w-[35px]", mrClass: "" },
      { label: "Karriere", widthClass: "w-[49px]", mrClass: "mr-[-0.24px]" },
      { label: "Kontakt", widthClass: "w-12", mrClass: "mr-[-0.81px]" },
    ],
  },
  {
    title: "Ressourcen",
    items: [
      { label: "Blog", widthClass: "w-7", mrClass: "mr-[-0.02px]" },
      { label: "FAQ", widthClass: "w-[25px]", mrClass: "mr-[-0.73px]" },
      { label: "Leitfäden", widthClass: "w-[58px]", mrClass: "mr-[-0.52px]" },
      { label: "Support", widthClass: "w-[49px]", mrClass: "mr-[-0.59px]" },
    ],
  },
] as const;

const legalLinks = [
  { label: "Datenschutz", widthClass: "flex-1 grow" },
  { label: "Impressum", widthClass: "w-[70.44px]" },
  { label: "AGB", widthClass: "w-[27.32px]" },
] as const;

export const FooterSection = (): JSX.Element => {
  return (
    <footer
      className="relative self-stretch w-full h-[342px] bg-[#14213d]"
      aria-labelledby="footer-brand"
    >
      <div className="flex flex-col w-[1441px] h-[341px] items-start gap-8 pt-12 pb-0 px-8 relative top-px">
        <div className="grid grid-cols-4 grid-rows-1 h-40 gap-8 w-full">
          <div className="relative row-[1_/_2] col-[1_/_2] w-full h-full flex flex-col items-start gap-5">
            <div className="flex h-10 items-center gap-3 relative self-stretch w-full">
              <div className="relative w-[159px] h-10">
                <div className="inline-flex items-center gap-[6.15px] relative top-px left-px">
                  <img
                    className="relative w-[33.21px] h-[20.6px]"
                    alt=""
                    aria-hidden="true"
                    src="https://c.animaapp.com/FwnyGWff/img/vector-1.svg"
                  />
                  <div
                    id="footer-brand"
                    className="relative w-fit mt-[-0.31px] [font-family:'DM_Sans',Helvetica] font-bold text-white text-[30.4px] tracking-[-2.13px] leading-[normal]"
                  >
                    ISOGRAF
                  </div>
                </div>
              </div>
            </div>
            <div className="relative self-stretch w-full h-10">
              <p className="absolute top-0 left-0 w-[195px] [font-family:'Roboto',Helvetica] font-normal text-[#697282] text-sm tracking-[0] leading-5">
                Qualität, die fördert. Über 1.200 erfolgreiche Projekte.
              </p>
            </div>
            <img
              className="relative self-stretch w-full h-10"
              alt="Social Media Links"
              src="https://c.animaapp.com/FwnyGWff/img/container-6.svg"
            />
          </div>
          {footerLinkGroups.map((group, groupIndex) => (
            <nav
              key={group.title}
              aria-label={group.title}
              className={`relative row-[1_/_2] col-[${groupIndex + 2}_/_${groupIndex + 3}] w-full h-full flex flex-col items-start gap-4`}
            >
              <div className="relative self-stretch w-full h-6">
                <div className="absolute top-px left-0 [font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                  {group.title}
                </div>
              </div>
              <ul className="flex flex-col h-[116px] items-start gap-3 relative self-stretch w-full">
                {group.items.map((item) => (
                  <li
                    key={item.label}
                    className="relative self-stretch w-full h-5 list-none"
                  >
                    <div
                      className={`flex ${item.widthClass} h-4 items-start relative top-0.5`}
                    >
                      <div
                        className={`relative w-fit mt-[-1.00px] mb-[-2.50px] ${item.mrClass} [font-family:'Roboto',Helvetica] font-normal text-[#697282] text-sm tracking-[0] leading-5 whitespace-nowrap`}
                      >
                        {item.label}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="flex h-[53px] items-center justify-between relative self-stretch w-full border-t [border-top-style:solid] border-[#fffefe1a]">
          <div className="relative w-[262.02px] h-5">
            <p className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-normal text-[#697282] text-sm tracking-[0] leading-5 whitespace-nowrap">
              © 2025 ISOGRAF. Alle Rechte vorbehalten.
            </p>
          </div>
          <nav
            aria-label="Rechtliches"
            className="flex w-[223.8px] h-5 items-center gap-6 relative"
          >
            {legalLinks.map((link) => (
              <div
                key={link.label}
                className={`relative ${link.widthClass} h-5`}
              >
                <div className="absolute top-0 left-0 [font-family:'Roboto',Helvetica] font-normal text-[#697282] text-sm tracking-[0] leading-5 whitespace-nowrap">
                  {link.label}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
