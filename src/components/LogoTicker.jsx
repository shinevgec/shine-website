export default function LogoTicker() {
  const logoFiles = [
    "/assets/images/ticker-1.avif",
    "/assets/images/ticker-2.avif",
    "/assets/images/ticker-3.avif",
    "/assets/images/ticker-4.avif",
    "/assets/images/ticker-5.avif",
    "/assets/images/ticker-6.avif",
    "/assets/images/ticker-7.avif"
  ];

  const logos = logoFiles.map((file, i) => (
    <div key={i} className="flex-shrink-0 w-48 h-48 card-fill rounded-3xl hairline-x hairline-y flex items-center justify-center mx-4 relative overflow-hidden">
      <img src={file} alt={`Client Logo ${i + 1}`} className="w-full h-full object-cover" />
    </div>
  ));

  return (
    <section className="hairline-t py-16 overflow-hidden relative">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-fit animate-marquee pause-on-hover">
        {/* Double the list for seamless looping */}
        <div className="flex items-center">
          {logos}
        </div>
        <div className="flex items-center">
          {logos}
        </div>
      </div>
    </section>
  );
}
