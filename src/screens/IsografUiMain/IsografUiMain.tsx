import { CertificationAssuranceSection } from "./sections/CertificationAssuranceSection";
import { CertificationFactorsSection } from "./sections/CertificationFactorsSection";
import { CertificationHeroSection } from "./sections/CertificationHeroSection";
import { ConsultationSection } from "./sections/ConsultationSection";
import { CourseIntroductionSection } from "./sections/CourseIntroductionSection";
import { CourseModulesSection } from "./sections/CourseModulesSection/CourseModulesSection";
import { ExamPrepEbookSection } from "./sections/ExamPrepEbookSection";
import { FooterSection } from "./sections/FooterSection";
import { IntroVideoSection } from "./sections/IntroVideoSection";
import { MobileAppFeaturesSection } from "./sections/MobileAppFeaturesSection";
import { RelatedContentSection } from "./sections/RelatedContentSection";
import { SevenPointMethodSection } from "./sections/SevenPointMethodSection";
import { TeamSection } from "./sections/TeamSection";
import { ValuePropositionSection } from "./sections/ValuePropositionSection";

const navigationItems = [
  { label: "Leistungen", active: false, href: "#leistungen" },
  { label: "Über uns", active: false, href: "#ueber-uns" },
  { label: "Ergebnisse", active: true, href: "#ergebnisse" },
  { label: "Ressourcen", active: false, href: "#ressourcen" },
  { label: "Karriere", active: false, href: "#karriere" },
];

export const IsografUiMain = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-center relative bg-white overflow-hidden"
      data-model-id="0:398"
      data-spacing-mode="normal"
    >
      <header className="flex flex-col h-[88px] items-start justify-center pt-0 pb-px px-[65px] relative self-stretch w-full bg-[#fffffff2] border-b [border-bottom-style:solid] border-[#f2f4f6]">
        <div className="flex w-[1317px] h-11 items-center gap-[385px] relative mr-[-6.00px]">
          <a
            href="/"
            aria-label="ISOGRAF Startseite"
            className="inline-flex items-center gap-[5.34px] relative flex-[0_0_auto]"
          >
            <img
              className="relative w-[28.81px] h-[17.87px]"
              alt="ISOGRAF Logo"
              src="https://c.animaapp.com/FwnyGWff/img/vector.svg"
            />
            <div className="relative w-fit mt-[-0.27px] [font-family:'DM_Sans',Helvetica] font-bold text-black text-[26.4px] tracking-[-1.85px] leading-[normal]">
              ISOGRAF
            </div>
          </a>
          <div className="flex w-[794px] items-center justify-end gap-[47px] relative mr-[-0.15px]">
            <nav
              aria-label="Hauptnavigation"
              className="flex items-center justify-end gap-[47px]"
            >
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]"
                >
                  <div
                    className={`relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-medium text-base tracking-[0] leading-6 whitespace-nowrap ${
                      item.active ? "text-[#e2ac26]" : "text-black"
                    }`}
                  >
                    {item.label}
                  </div>
                </a>
              ))}
            </nav>
            <button
              type="button"
              className="all-[unset] box-border inline-flex items-center justify-center gap-2.5 px-5 py-2.5 relative flex-[0_0_auto] rounded-[10px] bg-[linear-gradient(58deg,rgba(255,229,172,1)_0%,rgba(245,194,83,1)_39%,rgba(241,181,61,1)_56%,rgba(255,229,172,1)_83%,rgba(238,203,117,1)_100%)] cursor-pointer"
              aria-label="Jetzt starten"
            >
              <div className="[font-family:'DM_Sans',Helvetica] font-normal text-black text-base relative w-fit mt-[-1.00px] tracking-[0] leading-6 whitespace-nowrap">
                Jetzt starten
              </div>
            </button>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center relative self-stretch w-full">
        <CertificationHeroSection />
        <IntroVideoSection />
        <img
          className="relative w-[1440.5px] h-[1078px]"
          alt="Vier-Spalten Inhaltsgrafik"
          src="https://c.animaapp.com/FwnyGWff/img/4-coloumns.png"
        />
        <CourseModulesSection />
        <CourseIntroductionSection />
        <ExamPrepEbookSection />
        <CertificationFactorsSection />
        <CertificationAssuranceSection />
        <ValuePropositionSection />
        <MobileAppFeaturesSection />
        <SevenPointMethodSection />
        <RelatedContentSection />
        <TeamSection />
        <ConsultationSection />
      </main>
      <FooterSection />
    </div>
  );
};
