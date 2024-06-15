export default function CartCard() {
  return (
    <article className="w-[340px] lg:w-[680px] md:h-[220px] flex justify-between items-center rounded-md px-[30px] py-[15px] lg:py-[30px] m-[10px] bg-[#f2f2f2]">
      <img
        className="hidden lg:inline-block w-[140px] h-[140px] rounded-sm"
        src="https://i.postimg.cc/kX8PKZpq/ipad.jpg"
        alt="ipad"
      />
      <div className="flex flex-col justify-start flex-grow">
        <div className="lg:h-[120px] flex flex-col justify-between flex-grow p-[10px]">
          <span>
            <strong className="block lg:inline-block text-[16px]">
              iPad Pro 13
            </strong>
            <span className="block lg:inline-block text-[12px]">- Silver</span>
          </span>
          <p className="hidden lg:inline-block w-[340px] truncate text-[12px]">
            The iPad Pro 13 is a stunning piece of technology, boasting a large
            12.9-inch Retina display with ProMotion technology. With 256GB of
            storage, this iPad provides ample space for all your files, apps,
            and multimedia content. The sleek and slim design, combined with the
            silver color, gives it a sophisticated look. Enjoy seamless
            connectivity with the WiFi feature. Capture your memorable moments
            with the high-quality camera and relive them on the impressive
            screen. Whether you're a professional artist, student, or just
            someone who appreciates cutting-edge technology, the iPad Pro 12.9
            is a versatile device that meets all your needs.
          </p>
          <input
            className="w-[70px] rounded-sm border-1 border-[#eaeaea] p-[5px] pl-[15px] text-[14px]"
            type="number"
            name="quantity"
            defaultValue="1"
            min="1"
            id="P7Q8R90"
          />
        </div>
        <strong className="text-start lg:text-end text-[14px] px-[10px]">
          AR$ $800000
        </strong>
      </div>
    </article>
  );
}
