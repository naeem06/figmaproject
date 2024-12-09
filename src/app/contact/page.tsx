import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";

function page() {
  return (
    <div>
      <div className="h-[316px] w-svw bg-shopimg bg-[100%] flex justify-center ">
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
            <h1>Contact</h1>
          </div>
          <div className="flex justify-center">
            <Image src="/Grp 56.svg" alt="" width={250} height={100} />
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
          <div className="text-center text-[36px] font-[600]">
            <h1>Get In Touch With Us</h1>
          </div>
          <div className="text-[#9F9F9F]">
            <h1>
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </h1>
          </div>
        </div>

      <div className="">
        <div>
          <div className="grid grid-cols-1 w-full gap-5 md:grid-cols-2 mt-10">
            <div className="space-y-5">
              <div className="flex gap-3 md:w-[50%]">
                <div>
                  <MapPin />
                </div>
                <div>
                  <h1 className="w-[212px] font-[500] text-[24px]">Address</h1>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <Phone />
                </div>
                <div>
                  <h1 className="w-[212px] font-[500] text-[24px]">Phone</h1>
                  <p>
                    Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <Clock />
                </div>
                <div>
                  <h1 className="w-[212px] font-[500] text-[24px]">Phone</h1>
                  <p>
                    Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-5  space-y-5 w-svw mt-16 md:mt-0">
              <div className="space-y-3">
                <div className="font-[500]">Your name</div>
                <div className=" h-[75px] border border-[#9F9F9F]  rounded flex items-center text-[#9F9F9F]">
                <input type="text" placeholder="ABC" className="h-full w-full" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="font-[500]">Email address</div>
                <div className=" h-[75px] border border-[#9F9F9F]  rounded flex items-center text-[#9F9F9F]">
                 <input type="text" placeholder=" Abc@def.com" className="h-full w-full" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="font-[500]">Subject</div>
                <div className=" h-[75px] border border-[#9F9F9F]  rounded flex items-center text-[#9F9F9F]">
                <input type="text" placeholder=" This is an optional" className="h-full w-full" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="font-[500]">Messsage</div>
                <div className=" h-[120px] border border-[#9F9F9F]  rounded flex items-center text-[#9F9F9F]">
                <input type="text" placeholder="Hi! i’d like to ask about" className="h-full w-full" />
                  
                </div>
              </div>
              <div>
                <button className="border border-black rounded w-[237px] h-[48px]">
                  Submit
                </button>
              </div>
            </div>
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
  );
}

export default page;
