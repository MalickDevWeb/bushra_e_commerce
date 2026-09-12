import Image from "next/image";

export function MobileAdvisorBanner() {
  return (
    <section className="relative mx-4 mt-6 h-[175px] overflow-hidden rounded-[19px] border border-[#b78b2a]/70 bg-[#21170b]">
      <Image src="/images/mobile/advisor-scene.png" alt="Conseil Bushra sur le thiouraye" fill className="object-cover" sizes="100vw" />
    </section>
  );
}
