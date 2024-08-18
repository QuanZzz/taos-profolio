import { Typography } from "./Typography";

export const HightlightSection = () => (
  <>
    <div className="flex flex-col md:flex-row items-center md:items-end bg-white">
      <div className="py-16 md:py-10 w-full md:w-3/12 min-w-[300px] md:max-w-[400px] flex flex-col md:ml-4 font-montserrat tracking-[0.2rem] uppercase">
        <Typography
          semiBold={true}
          className="mx-16 md:mx-0 text-xl md:max-w-[300px] w-full text-left"
        >
          Project
        </Typography>
        <Typography
          semiBold={true}
          className="mx-16 md:mx-0 text-3xl md:max-w-[300px] pb-4"
        >
          Lakeshore
        </Typography>
        <Typography className="text-sm px-16 md:px-0 md:max-w-[300px] pt-5">
          <span className="text-xl">A</span>n opulent, high-quality modern
          lakeside estate, boasting over{" "}
          <span className="text-xl font-semibold">18,000 SQFT</span> of
          luxurious living space and breathtaking panoramic views.
        </Typography>
      </div>
      <div className="pt-5 md:pt-0 md:pl-10">
        <img src="/images/22.jpg" />
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center md:items-end bg-white">
      <div className="md:pr-10 pb-10 md:pb-0">
        <img src="/images/20.webp" />
      </div>
      <div className="py-16 md:py-10 w-full w-3/12 min-w-[300px] max-w-[400px] md:px-5 flex flex-col md:items-end font-montserrat tracking-[0.2rem] uppercase">
        <Typography
          semiBold={true}
          className="mx-16 md:mx-0 text-xl md:max-w-[300px] w-full text-left md:text-right"
        >
          Project
        </Typography>
        <Typography
          semiBold={true}
          className="mx-16 md:mx-0 text-3xl md:max-w-[300px] pb-4"
        >
          Oakville 160
        </Typography>
        <Typography className="text-sm px-16 md:px-0 md:max-w-[300px] pt-5">
          <span className="text-xl">T</span>he rooftop terrace of a modern
          Oakville Condos, meticulously crafted and rendered by TAOSCO. This
          stunning sanctuary seamlessly blends breathtaking water features with
          inviting seating areas, creating an ambiance of comfort and
          tranquility.
        </Typography>
      </div>
    </div>

    {/* remove opacity if needed */}
    <div className="flex flex-col md:flex-row items-center md:items-end bg-white">
      <div className="py-16 md:py-10 w-full md:w-3/12 min-w-[300px] md:max-w-[400px] md:px-5 flex flex-col md:items-center font-montserrat tracking-[0.2rem] uppercase">
        <Typography
          semiBold={true}
          className="mx-16 md:mx-0 text-xl md:max-w-[300px] w-full text-left"
        >
          Project
        </Typography>
        <Typography
          semiBold={true}
          className="mx-16 md:mx-0 text-3xl md:max-w-[300px] pb-4"
        >
          Toronto Back Alley
        </Typography>
        <Typography className="text-sm px-16 md:px-0 md:max-w-[300px] pt-5">
          <span className="text-xl">A</span> hidden gem nestled in the back
          alleys of Toronto, providing a fresh, affordable solution to the
          city&apos;s housing crunch. Designed by TAOSCO&Unikhouse.
        </Typography>
      </div>
      <div className="pt-5 md:pt-0 md:pl-10">
        <img src="/images/5.webp" />
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center md:items-end bg-white">
      <div className="md:pr-10 pb-10 md:pb-0">
        <img src="/images/14.webp" />
      </div>
      <div className="py-16 md:py-10 w-full w-3/12 min-w-[300px] max-w-[400px] md:px-5 flex flex-col md:items-end font-montserrat tracking-[0.2rem] uppercase">
        <Typography
          semiBold={true}
          className="mx-16 md:mx-0 text-xl md:max-w-[300px] w-full text-left md:text-right"
        >
          Project
        </Typography>
        <Typography
          semiBold={true}
          className="mx-16 md:mx-0 text-3xl md:max-w-[300px] pb-4"
        >
          Park Royal
        </Typography>
        <Typography className="text-sm px-16 md:px-0 md:max-w-[300px] pt-5">
          <span className="text-xl">A</span> timeless blend of modern
          architecture and natural beauty, where stone and wood intertwine in
          perfect harmony. Designed by KEYSTONE HOME X TAOSCO.
        </Typography>
      </div>
    </div>
  </>
);
