import { Typography } from "./Typography";

export const HightlightSection = () => (
  <>
    <div className="flex flex-col md:flex-row items-center bg-[#e6f3f4] md:pl-10 font-rubik">
      <div className="py-16 md:py-0 w-full md:w-3/12 min-w-[300px] md:max-w-[400px] md:px-5 flex flex-col md:items-center">
        <Typography
          bold={true}
          className="mx-16 md:mx-0 text-3xl md:max-w-[200px] md:mx-auto pb-10 md:border-b md:border-b-[3px] md:border-b-black"
        >
          Project Lorne Park
        </Typography>
        <hr className="md:hidden border-2 border-black w-5/12 mx-16" />
        <Typography
          semiBold={true}
          className="text-base md:text-lg px-16 md:px-0 md:max-w-[200px] mx-auto pt-5"
        >
          The backyard sanctuary of an opulent estate, where every detail
          whispers indulgence and tranquility. Here, a glistening pool beckons
          under the sun&apos;s warm embrace, surrounded by lush greenery that
          dances with the breeze. The spacious terrace, adorned with plush
          furnishings, invites you to unwind and savor moments of leisure in
          utmost comfort. This is more than a home; it&apos;s a retreat, where
          luxury intertwines effortlessly with the serenity of nature, promising
          a life of unparalleled richness and relaxation.
        </Typography>
      </div>
      <div className="pt-5 md:pt-0 md:pl-10">
        <img src="/images/1.webp" />
      </div>
    </div>

    <div className="flex flex-col md:flex-row md:items-center bg-[#eaeaea] md:pr-10">
      <div className="md:pr-10 pb-10 md:pb-0">
        <img src="/images/20.webp" />
      </div>
      <div className="py-16 md:py-0 w-full w-3/12 min-w-300[px] max-w-[400px] md:px-5 flex flex-col md:items-center">
        <Typography
          bold={true}
          className="mx-16 md:mx-0 text-3xl md:max-w-[200px] md:mx-auto pb-10 md:border-b md:border-b-[3px] md:border-b-black"
        >
          Oakville 160 condominium
        </Typography>
        <hr className="md:hidden border-2 border-black w-5/12 mx-16" />
        <Typography
          semiBold={true}
          className="text-base md:text-lg px-16 md:px-0 md:max-w-[200px] mx-auto pt-5"
        >
          The rooftop terrace of a modern Oakville Condos, meticulously crafted
          and rendered by TAOSCO. This stunning sanctuary seamlessly blends
          breathtaking water features with inviting seating areas, creating an
          ambiance of comfort and tranquility. As the sun sets, basking the
          apartment in a warm glow, it ignites endless dreams and possibilities.
        </Typography>
      </div>
    </div>

    {/* remove opacity if needed */}
    <div className="flex flex-col md:flex-row items-center bg-[#f4eee3] opacity-95 md:pl-10">
      <div className="py-16 w-full md:w-3/12 min-w-300[px] md:max-w-[400px] md:px-5 flex flex-col md:items-center">
        <Typography
          bold={true}
          className="mx-16 md:mx-0 text-3xl md:max-w-[200px] md:mx-auto pb-10 md:border-b md:border-b-[3px] md:border-b-black"
        >
          Introducing our latest creation
        </Typography>
        <hr className="md:hidden border-2 border-black w-5/12 mx-16" />
        <Typography
          semiBold={true}
          className="text-base md:text-lg px-16 md:px-0 md:max-w-[200px] mx-auto pt-5"
        >
          A hidden gem nestled in the back alleys of Toronto, providing a fresh,
          affordable solution to the city&apos;s housing crunch. Designed by
          TAOSCO&Unikhouse, this innovative space maintains a high-quality
          design aesthetic while remaining budget-friendly. Large
          floor-to-ceiling windows flood the interiors with natural light,
          creating a bright and inviting atmosphere.
        </Typography>
      </div>
      <div className="pt-5 md:pt-0 md:pl-10">
        <img src="/images/5.webp" />
      </div>
    </div>

    <div className="flex flex-col md:flex-row md:items-center bg-[#313b20] md:pr-10">
      <div className="md:pr-10 pb-10 md:pb-0">
        <img src="/images/14.webp" />
      </div>
      <div className="py-16 md:py-0 w-full w-3/12 min-w-[300px] max-w-[400px] md:px-5 flex flex-col md:items-center">
        <Typography
          bold={true}
          className="mx-16 md:mx-0 text-3xl md:max-w-[200px] md:mx-auto pb-10 md:border-b md:border-b-[3px] md:border-b-black"
        >
          Project Park Royal
        </Typography>
        <hr className="md:hidden border-2 border-black w-5/12 mx-16" />
        <Typography
          semiBold={true}
          className="text-base md:text-lg px-16 md:px-0 md:max-w-[200px] mx-auto pt-5"
        >
          A timeless blend of modern architecture and natural beauty, where
          stone and wood intertwine in perfect harmony. This classic
          mountain-inspired residence captures the hearts of homeowners with its
          seamless fusion of materials and exquisite craftsmanship, creating a
          sanctuary that resonates with tranquility and elegance.
        </Typography>
      </div>
    </div>
  </>
);
