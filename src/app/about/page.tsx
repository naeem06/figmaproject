import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"



function page() {
  return (
    <div>
        <div id="1st" className="h-[316px] w-svw bg-shopimg bg-[100%] flex justify-center ">
        <div className="h-[132px] w-[124px] ">
          <div className="flex justify-center">
            <Image
              src="/Meubel House_Logos-05.svg"
              alt=""
              width={100}
              height={150}
            />
          </div>
          <div className="text-[56px] flex justify-center font-[700]">
            <h1>Blog</h1>
          </div>
          <div className="flex justify-center">
            <Image src="/blog.svg" alt="" width={250} height={100} />
          </div>
        </div>
      </div>
      <div id="2nd" className="h-full mt-14 md:flex md:place-content-around">
        <div id="images" className="grid grid-rows-3">
           <div className="space-y-3">
           <div className="md:hidden">
            <div><Image src={"/blogpic.svg"} alt="" width={400} height={150}/></div>
           <div><Image src={"/adminblog.svg"} alt="" width={200} height={150}/></div>
           </div>
           <div className="hidden md:block">
            <div><Image src={"/blogpic.svg"} alt="" width={600} height={150}/></div>
           <div><Image src={"/adminblog.svg"} alt="" width={200} height={150}/></div>
           </div>
           <div><p className="text-[#9F9F9F] md:w-[600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p></div>
           <button className="border-b border-black">Read more</button>
           </div>
           <div className="space-y-3 ">
           <div className="md:hidden">
            <div><Image src={"/blogpic1.svg"} alt="" width={400} height={150}/></div>
           <div><Image src={"/adminblog.svg"} alt="" width={200} height={150}/></div>
           </div>
           <div className="hidden md:block">
            <div><Image src={"/blogpic1.svg"} alt="" width={600} height={150}/></div>
           <div><Image src={"/adminblog.svg"} alt="" width={200} height={150}/></div>
           </div>
           <div><p className="text-[#9F9F9F] md:w-[600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p></div>
           <button className="border-b border-black">Read more</button>
           </div>
           <div className="space-y-3  mb-10">
           <div className="md:hidden">
            <div><Image src={"/blogpic2.svg"} alt="" width={400} height={150}/></div>
           <div><Image src={"/adminblog.svg"} alt="" width={200} height={150}/></div>
           </div>
           <div className="hidden md:block">
            <div><Image src={"/blogpic2.svg"} alt="" width={600} height={150}/></div>
           <div><Image src={"/adminblog.svg"} alt="" width={200} height={150}/></div>
           </div>
           <div><p className="text-[#9F9F9F] md:w-[600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p></div>
           <button type="submit" className="border-b border-black">Read more</button>
           </div>
        </div>
        <div className="3rd">
            <div className="w-[300px]">
             <div className="border border-[#9F9F9F] w-full rounded flex justify-end h-[38px] md:h-14 items-center " ><input type="text" placeholder="Search" className="h-full border-none w-full" /><Search/></div>
             <div className="grid grid-rows-6 w-full">
                <div className="text-[36px] font-[600]">Categories</div>
                <div className="text-[#9F9F9F] flex place-content-between"> <div>Crafts</div>5<div></div></div>
                <div className="text-[#9F9F9F] flex place-content-between"> <div>Design</div>8<div></div></div>
                <div className="text-[#9F9F9F] flex place-content-between"> <div>Handmade</div>1<div></div></div>
                <div className="text-[#9F9F9F] flex place-content-between"> <div>Interior</div>3<div></div></div>
                <div className="text-[#9F9F9F] flex place-content-between"> <div>Wood</div>10<div></div></div>
             </div>
            </div>
            <div>
                <div><Image src={"/Group 183.svg"}alt="" width={250} height={150}/></div>
            </div>
        </div>

      </div>
      <div className="h-full py-10">
        <div className="flex">
          <div>
            <h1 className="text-[32px] font-[500]">Free Delivery</h1>
            <p className="text-[20px] text-[#9F9F9F]">
              For all oders over $50, consectetur adipim scing elit.
            </p>
          </div>
          <div>
            <h1 className="text-[32px] font-[500]">90 Days Return</h1>
            <p className="text-[20px] text-[#9F9F9F]">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>
          <div>
            <h1 className="text-[32px] font-[500]">Secure Payment</h1>
            <p className="text-[20px] text-[#9F9F9F]">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page