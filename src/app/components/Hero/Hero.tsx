import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="h-full w-svw overflow-hidden">
      <div className="h-full w-svw bg-[#FBEBB5] flex items-center ">
        <div className="pl-2 md:flex ">
          <div className="w-[464px] h-[256px] pt-20 md:w-[350px]">
            <div className="h-[150px] text-[54px] font-[700]">
              <h1>Rocket single seater</h1>
            </div>
            <div className="h-[49px] flex items-center">
              <div className="shadow border-b border-black w-[121px] text-center text-[24px] font-[500] mt-20">
                <Link href={"/shop"}>Shop Now</Link>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center w-svw md:justify-start lg:justify-center">
              <div>
                <Image
                  src={"/Rocketsingleseater.svg"}
                  alt=""
                  height={100}
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="2nddiv" className="h-full flex items-center justify-center">
        <div className="md:flex">
          <div className="space-y-4 md:flex md:space-x-20">
            <div className="">
              <Image
                src={"/Granite square side table 1.svg"}
                alt="img"
                width={250}
                height={150}
              />
              <h1 className="text-center font-[500] text-[36px] ">
                Side table
              </h1>
              <div className="text-center  font-[500]">
                <Link href={"/shop"}>
                  <button>View More</button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src={"/Mask group (5).svg"}
                alt="img"
                width={250}
                height={150}
              />
              <h1 className="text-center font-[500] text-[36px] ">
                Side table
              </h1>
              <div className="text-center font-[500]">
                <Link href={"/shop"}>
                  <button>View More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="border-b border-black w-[100px]  text-center text-[20px] font-[700] mt-8">
          <Link href={"/shop"}>Shop Now</Link>
        </div>
      </div>
      <div id="3rddiv" className="h-full pt-20">
        <div className="h-full">
          <div className="text-[28px] font-[500] text-center">
            <h1>Top Picks For You</h1>
          </div>
          <div className="text-[16px] font-[500] text-center text-[#9F9F9F]">
            <h1>
              Find a bright ideal to suit your taste with our great selection of
              suspension, floor and table lights.
            </h1>
          </div>
          <div className="flex justify-center h-full ">
            <div className="grid grid-cols-2 grid-rows-2 h-full md:flex md:space-x-4">
              <div className="">
                <Image
                  src={"/Group 18.svg"}
                  alt="img"
                  width={200}
                  height={150}
                />
              </div>
              <div>
                <Image
                  src={"/Group 15.svg"}
                  alt="img"
                  width={200}
                  height={150}
                />
              </div>
              <div>
                <Image
                  src={"/Group 16.svg"}
                  alt="img"
                  width={200}
                  height={150}
                />
              </div>
              <div>
                <Image
                  src={"/Group 17.svg"}
                  alt="img"
                  width={200}
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className=" w-[100px]  text-center text-[20px] font-[700] pb-5 pt-10">
            <Link href={"/shop"}>View More</Link>
          </div>
        </div>
      </div>
      <div
        id="4thdiv"
        className="grid grid-rows-6 grid-cols-1 h-full bg-[#FFF9E5] md:grid-cols-4 md:grid-rows-3"
      >
        <div className="flex justify-center row-span-4 md:col-span-3 md:row-span-3">
          <Image
            src={"/Asgaard sofa 1.svg"}
            alt="img"
            width={400}
            height={150}
          />
        </div>
        <div className="row-span-2 md:row-span-3 md:place-content-around">
          <div className="">
            <div className="text-center font-[500]">New Arrivals</div>
            <div className="text-center font-[700] text-[36px]">
              Asgaard sofa
            </div>
            <Link href={"/shop"}>
              <div className="text-center font-[500] pt-6">
                <button className="w-[125px] h-[40px] border border-black">
                  Order Now
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        id="5thdiv"
        className="grid grid-cols-1 grid-rows-12 h-full md:grid-rows-6"
      >
        <div className="text-center text-[36px] font-[500] mt-10">
          Our Blogs
        </div>
        <div className="text-[16px] font-[500] text-center text-[#9F9F9F]">
          Find a bright ideal to suit your taste with our great selection
        </div>
        <div className="row-span-9 flex justify-center md:row-span-3">
          <div className="space-y-4 md:flex md:space-x-4">
            <Image src={"/Group 50.svg"} alt="img" width={230} height={150} />
            <Image src={"/Group 49.svg"} alt="img" width={230} height={150} />
            <Image src={"/Group 48.svg"} alt="img" width={230} height={150} />
          </div>
        </div>
        <Link href={"/about"}>
          <div className="text-[20px] font-[500] flex items-center justify-center mt-10">
            View All Post
          </div>
        </Link>
      </div>
      <div className="h-[500px] w-svw bg-pattern bg-[100%] flex justify-center items-center">
        <div className="text-center">
          <div className="text-[60px] font-[700]">Our Instagram</div>
          <div className="text-[20px] font-[500]">
            Follow our store on Instagram
          </div>
          <Link href={"/"}>
            <button className="text-[20px] shadow font-[500] w-[225px] h-[64px] rounded-[50px] mt-10">
              Follow Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
