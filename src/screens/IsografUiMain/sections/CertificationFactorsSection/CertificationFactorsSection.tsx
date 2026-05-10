const content = {
  image: {
    src: "https://c.animaapp.com/FwnyGWff/img/rectangle-8.png",
    alt: "Person at a desk representing certification and business growth",
  },
  heading: {
    prefix: "Zertifizierung, Die Ihr ",
    emphasis: "Wachstum Trägt.",
  },
  description:
    "Et eleifend consectetur tellus consectetur nibh non urna lobortis. Quis sapien enim posuere mollis risus. Nec dictumst ullamcorper et leo. Varius praesent tinc.",
  ctaLabel: "Jetzt loslegen",
};

export const CertificationFactorsSection = (): JSX.Element => {
  return (
    <section
      className="inline-flex items-center gap-[107px] px-[140px] py-[105px] relative flex-[0_0_auto] ml-[-4.50px] mr-[-4.50px]"
      aria-labelledby="certification-factors-heading"
    >
      <img
        className="relative w-[540px] h-[528px] object-cover shrink-0"
        alt={content.image.alt}
        src={content.image.src}
        loading="lazy"
      />
      <div className="flex flex-col w-[523px] items-start gap-7 relative">
        <h2
          id="certification-factors-heading"
          className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-black text-[66px] leading-[75.5px]"
        >
          <span className="font-medium tracking-[-1.42px]">
            {content.heading.prefix}
          </span>
          <span className="[font-family:'Libre_Baskerville',Helvetica] italic tracking-[0]">
            {content.heading.emphasis}
          </span>
        </h2>
        <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-black text-lg tracking-[0.36px] leading-[28.8px]">
          {content.description}
        </p>
        <button
          type="button"
          className="all-[unset] box-border inline-flex items-start justify-center gap-[50px] px-[60px] py-[15px] relative flex-[0_0_auto] rounded-[15px] border-[none] shadow-[inset_0px_-3px_6.2px_#ffffff91] bg-[linear-gradient(151deg,rgba(238,203,117,0.9)_0%,rgba(226,172,38,0.9)_50%,rgba(238,203,117,0.9)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[15px] before:[background:linear-gradient(43deg,rgba(255,215,0,1)_0%,rgba(250,245,233,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e2ac26]"
          aria-label={content.ctaLabel}
        >
          <span className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <span className="[font-family:'Roboto',Helvetica] font-semibold text-white text-lg relative w-fit mt-[-1.00px] tracking-[0] leading-6 whitespace-nowrap">
              {content.ctaLabel}
            </span>
          </span>
        </button>
      </div>
    </section>
  );
};
