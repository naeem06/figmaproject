import { Link } from "lucide-react"
import Image from "next/image"

function page() {
  return (
    <div>
        <div className="h-[316px] w-svw bg-shopimg bg-[100%] flex justify-center ">
        <div className="h-[132px] w-[124px] ">
          <div className="flex justify-center"><Image src="/Meubel House_Logos-05.svg" alt="" width={100} height={150}/></div>
          <div className="text-center text-[36px] font-[700]"><h1>My Account</h1></div>
          <div>
            <Image src="/acc.svg" alt="" width={250} height={100} />
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="md:flex">
            <div className="">
              <Image src="/Group 116.svg" alt="img" width={500} height={150}/>
            </div>

            <div>
            <Image src="/Group 117.svg" alt="img" width={500} height={150}/>
            </div>
            </div>
      </div>
      <div className="h-full py-10">
        <div className="flex">
          <div >
            <h1 className="text-[32px] font-[500]" >Free Delivery</h1>
            <p className="text-[20px] text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
          </div>
          <div><h1 className="text-[32px] font-[500]" >90 Days Return</h1><p className="text-[20px] text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p></div>
          <div><h1 className="text-[32px] font-[500]"  >Secure Payment</h1><p className="text-[20px] text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p></div>
        </div>
      </div>
    </div>
  )
}

export default page