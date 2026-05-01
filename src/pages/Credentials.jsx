import React from "react";
import FloatingSocial from "../components/FloatingSocial";

const badges = [
  {
    title: "CompTIA A+ ce",
    img: "https://images.credly.com/images/f6d62c5d-1e1d-4de6-92ee-8dc8c80b1c7b/blob",
  },
  {
    title: "CompTIA Security+ ce",
    img: "https://images.credly.com/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob",
  },
  {
    title: "ITIL 4 Foundation (PeopleCert)",
    img: "https://badges.peoplecert.org/Badges/Template/en/180/63804148-665A-4881-AAC6-EAEC58799A85",
    href: "https://badges.peoplecert.org/Badge/en/3/66D4E3A9-3AA5-433A-BEA5-340230C0686B",
  },
  {
    title: "ISC2 Candidate",
    img: "https://images.credly.com/images/9180921d-4a13-429e-9357-6f9706a554f0/image.png",
  },
  {
    title: "AI in Agile Delivery",
    img: "https://images.credly.com/images/10c0e6f1-88f4-4ec2-b328-27e00a54b7eb/blob",
  },
  {
    title: "CompTIA Project+ ce",
    img: "https://images.credly.com/images/16e139a1-0b3d-4bef-a0c6-56356ad944a6/blob",
  },
  {
    title: "CompTIA Server+ ce",
    img: "https://images.credly.com/images/07378420-4407-4f09-a4d7-9301d87dec34/blob",
  },
  {
    title: "CompTIA CNIP",
    img: "https://images.credly.com/images/f308a5b0-18e3-4e93-ae15-9f27dd0a94cc/CompTIA_CNIP.png",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    img: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
  },
  {
    title: "CompTIA CIOS",
    img: "https://images.credly.com/images/7f7657b9-4d1b-4b8d-b5ee-5fdf6d7ccd71/04294_CompTIA_Cert_Badges_Specialist_-_CIOS.png",
  },
  {
    title: "CompTIA CSIS",
    img: "https://images.credly.com/images/8090280a-311f-425f-a1cd-a32770b5a444/CompTIA_CSIS.png",
  },
  
  
];

const Credentials = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const script = document.createElement("script");
    script.src = "https://cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      try {
        document.body.removeChild(script);
      } catch {
        /* ignore */
      }
    };
  }, []);

  return (
    <section className="portfolio-page-shell min-h-screen px-6 pt-28 pb-20 text-[var(--ethereal-ivory)]">
      <FloatingSocial />

      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-semibold">Credentials</h1>
            <p className="mt-2 text-[var(--muted-ivory)]">Verified badges from Credly.</p>
          </div>
          <a
            href="https://www.credly.com/users/nick-coury"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--seal-gold)] underline"
          >
            View on Credly
          </a>
        </div>

        <div className="mt-8 flex flex-col items-start gap-8 lg:flex-row">
          <div className="shrink-0">
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="162e9f4a-cefd-46f7-94de-3ae6ebdc78f0" data-share-badge-host="https://www.credly.com"></div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {badges.map((b) => {
              return (
                <div
                  key={b.title}
                  className="flex flex-col items-center text-center"
                  aria-hidden={false}
                >
                  <div className="h-28 w-28 overflow-hidden rounded-md bg-[var(--panel-bg-2)] p-3">
                    <img src={b.img} alt={b.title} className="h-full w-full object-contain" />
                  </div>
                  <div className="mt-2 text-sm text-[var(--muted-ivory)]">{b.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
