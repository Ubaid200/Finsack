import Image from "next/image";

export default function LoanCard({ title, description, icon }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 bg-white rounded-xl p-7 min-[820px]:p-8 shadow-[0_4px_24px_rgba(100,80,180,0.10),0_2px_8px_rgba(100,80,180,0.07)]">
      
      {/* Icon */}
      <div className="w-12 h-12 shrink-0">
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-[var(--color-dark-teal)] m-0 text-[1rem] leading-[1.3] min-[820px]:text-[1.125rem]">
        {title}
      </h3>

      {/* Description */}
      <p className="font-normal text-[var(--color-text-secondary)] m-0 text-[16px] leading-[1.6]">
        {description}
      </p>
    </div>
  );
}