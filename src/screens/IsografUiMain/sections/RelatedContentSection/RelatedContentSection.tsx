const relatedContentImages = [
  {
    src: "https://c.animaapp.com/FwnyGWff/img/rectangle-22@2x.png",
    alt: "Related content image 1",
    className: "relative w-[387px] h-[400px] object-cover",
  },
  {
    src: "https://c.animaapp.com/FwnyGWff/img/rectangle-23@2x.png",
    alt: "Related content image 2",
    className: "relative w-[387px] h-[400px] object-cover",
  },
  {
    src: "https://c.animaapp.com/FwnyGWff/img/rectangle-21@2x.png",
    alt: "Related content image 3",
    className: "relative w-[387px] h-[400px]",
  },
];

export const RelatedContentSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="related-content-heading"
      className="inline-flex flex-col items-center gap-[55px] px-[95px] py-20 relative flex-[0_0_auto] ml-[-4.00px] mr-[-4.00px]"
    >
      <div className="flex flex-col w-[929px] items-center gap-[5px] relative flex-[0_0_auto]">
        <h2
          id="related-content-heading"
          className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-black text-[66px] text-center tracking-[-1.00px] leading-[75.5px] whitespace-nowrap"
        >
          <span className="font-medium tracking-[-0.66px]">Ich bin eine </span>
          <span className="[font-family:'Libre_Baskerville',Helvetica] italic tracking-[-0.66px]">
            Headline
          </span>
        </h2>
        <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-medium text-black text-lg text-center tracking-[0.18px] leading-[28.8px]">
          Interdum ac tincidunt molestie facilisis. Nulla at erat odio bibendum
          diam quam. Scelerisque mus vel egestas justo, purus consequat nibh
          eget. Non risus feugiat porta integer.
        </p>
      </div>
      <div
        className="inline-flex items-center gap-[49px] relative flex-[0_0_auto]"
        role="list"
        aria-label="Related content gallery"
      >
        {relatedContentImages.map((image, index) => (
          <figure key={index} className="relative m-0" role="listitem">
            <img
              className={image.className}
              alt={image.alt}
              src={image.src}
              loading="lazy"
              decoding="async"
            />
          </figure>
        ))}
      </div>
    </section>
  );
};
