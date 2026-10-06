import Image from "next/image";

const logos = [
  {
    name: "HDFC",
    url: "https://finbros.s3.ap-south-1.amazonaws.com/website/hdfc_logo_4d94ad391f.png",
  },
  {
    name: "Kotak",
    url: "https://finbros.s3.ap-south-1.amazonaws.com/website/Kotak_1_400859aa1a.png",
  },
  {
    name: "Aditya Birla",
    url: "https://finbros.s3.ap-south-1.amazonaws.com/website/Aditya_Birla_logo_e43c0110d0.png",
  },
  {
    name: "Finnable",
    url: "https://finbros.s3.ap-south-1.amazonaws.com/website/finnable_afeb1ba462.png",
  },
  {
    name: "Paysense",
    url: "https://finbros.s3.ap-south-1.amazonaws.com/website/Paysense_logo_6a3e21f36b.png",
  },
];

const duplicatedLogos = [...logos, ...logos,...logos]; // Duplicate the logos to create a seamless loop

export default function PartnerMarquee() {
  return (
    <div className="mt-8 min-[820px]:mt-10 ">
      <div className="relative w-[80%] overflow-hidden mx-auto">
        <div
          className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-white to-transparent min-[820px]:w-28 min-[1024px]:w-36"
          style={{ background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)" }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-white to-transparent min-[820px]:w-28 min-[1024px]:w-36"
          style={{ background: "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)" }}
        />

        <div className="marquee-track flex w-max" aria-label="Partner logos carousel">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="mx-3 flex flex-shrink-0 items-center justify-center px-3 py-2 min-[820px]:mx-4 min-[1024px]:mx-5"
            >
              <Image
                src={logo.url}
                alt={logo.name}
                width={120}
                height={72}
                className="h-7 w-auto object-contain min-[820px]:h-8 min-[1024px]:h-9"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
