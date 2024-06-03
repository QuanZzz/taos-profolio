import { Typography } from "./Typography";

export const HightlightSection = () => (
  <>
    <div className="flex flex-col md:flex-row items-center bg-white md:pl-10 font-rubik">
      <div className="py-16 md:py-0 w-full md:w-3/12 min-w-[300px] md:max-w-[400px] md:px-5 flex flex-col md:items-center">
        <Typography
          bold={true}
          className="mx-16 md:mx-0 text-3xl md:max-w-[200px] md:mx-auto pb-10 md:border-b md:border-b-[3px] md:border-b-black"
        >
          Project Lakeshore
        </Typography>
        <hr className="md:hidden border-2 border-black w-5/12 mx-16" />
        <Typography
          semiBold={true}
          className="text-base md:text-lg px-16 md:px-0 md:max-w-[200px] mx-auto pt-5"
        >
          An opulent, high-quality modern lakeside estate, boasting over 18,000
          SQFT of luxurious living space and breathtaking panoramic views.
        </Typography>
      </div>
      <div className="pt-5 md:pt-0 md:pl-10">
        <img src="/images/1.webp" />
      </div>
    </div>

    <div className="flex flex-col md:flex-row md:items-center bg-white md:pr-10">
      <div className="md:pr-10 pb-10 md:pb-0">
        <img src="/images/20.webp" />
      </div>
      <div className="py-16 md:py-0 w-full w-3/12 min-w-300[px] max-w-[400px] md:px-5 flex flex-col md:items-center">
        <Typography
          bold={true}
          className="mx-16 md:mx-0 text-3xl md:max-w-[200px] md:mx-auto pb-10 md:border-b md:border-b-[3px] md:border-b-black"
        >
          Project Oakville 160
        </Typography>
        <hr className="md:hidden border-2 border-black w-5/12 mx-16" />
        <Typography
          semiBold={true}
          className="text-base md:text-lg px-16 md:px-0 md:max-w-[200px] mx-auto pt-5"
        >
          The rooftop terrace of a modern Oakville Condos, meticulously crafted
          and rendered by TAOSCO. This stunning sanctuary seamlessly blends
          breathtaking water features with inviting seating areas, creating an
          ambiance of comfort and tranquility.
        </Typography>
      </div>
    </div>

    {/* remove opacity if needed */}
    <div className="flex flex-col md:flex-row items-center bg-white opacity-95 md:pl-10">
      <div className="py-16 w-full md:w-3/12 min-w-300[px] md:max-w-[400px] md:px-5 flex flex-col md:items-center">
        <Typography
          bold={true}
          className="mx-16 md:mx-0 text-3xl md:max-w-[200px] md:mx-auto pb-10 md:border-b md:border-b-[3px] md:border-b-black"
        >
          Project Toronto Back Alley
        </Typography>
        <hr className="md:hidden border-2 border-black w-5/12 mx-16" />
        <Typography
          semiBold={true}
          className="text-base md:text-lg px-16 md:px-0 md:max-w-[200px] mx-auto pt-5"
        >
          A hidden gem nestled in the back alleys of Toronto, providing a fresh,
          affordable solution to the city's housing crunch. Designed by
          TAOSCO&Unikhouse.
        </Typography>
      </div>
      <div className="pt-5 md:pt-0 md:pl-10">
        <img src="/images/5.webp" />
      </div>
    </div>

    <div className="flex flex-col md:flex-row md:items-center bg-white md:pr-10">
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
          stone and wood intertwine in perfect harmony. Designed by KEYSTONE
          HOME X TAOSCO.
        </Typography>
      </div>
    </div>
  </>
);
