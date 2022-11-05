import iconsPath from "@/data/iconsPath";

const Gallery = () => {
  return (
    <div className='grid place-items-center h-full w-full mt-20'>
      <div className='w-full grid place-items-center'>
        <h3 className='uppercase text-3xl'>
          Technologies used in this template
        </h3>
      </div>
      <div className='grid place-items-center grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] mx-auto my-12 gap-2.5   w-4/5'>
        {iconsPath.map((item, index) => (
          <div key={index} className='grid border w-20 h-20 place-items-center'>
            <img
              className='w-16 h-16'
              id={item.name.replace(" ", "").toLowerCase()}
              src={item.path}
              alt={item.name}
              title={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
