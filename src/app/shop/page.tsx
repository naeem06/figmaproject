import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="pb-20">
      <div className="h-[316px] w-svw bg-shopimg bg-[100%] flex justify-center items-center">
        <div className="h-[132px] w-[124px] ">
          <Image src="/Group 55.svg" alt="" width={122} height={100} />
          <div>
            <Image src="/Group 56.svg" alt="" width={100} height={100} />
          </div>
        </div>
      </div>
      <div className="h-[50px] w-svw grid grid-cols-2 grid-rows-1 bg-[#FAF4F4]">
        <div className="flex items-center">
          <div>
            <Image src="/Group 57.svg" alt="img" width={70} height={100} />
          </div>
          <div>
            <Image
              src="/ci_grid-big-round.svg"
              alt="img"
              width={20}
              height={100}
            />
          </div>
          <div>
            <Image src="/bi_view-list.svg" alt="img" width={20} height={100} />
          </div>
          <div>
            <Image src="/Group 62.svg" alt="img" width={100} height={100} />
          </div>
        </div>
        <div className="flex items-center">
          {" "}
          <div>
            <Image src="/Group 60.svg" alt="img" width={80} height={100} />
          </div>
          <div>
            <Image src="/Group 61.svg" alt="img" width={90} height={100} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 place-content-evenly">
        <div>
          <Image src={"/Group 18.svg"} alt="img" height={250} width={250} />
        </div>
        <div>
          <Image src={"/Group 15.svg"} alt="img" height={250} width={250} />
        </div>
        <div>
          <Image src={"/Group 16.svg"} alt="img" height={250} width={250} />
        </div>
        <div>
          <Image src={"/Group 17.svg"} alt="img" height={250} width={250} />
        </div>

        <div>
          <Image
            src={"/Mask group (4).svg"}
            alt="img"
            height={250}
            width={250}
          />
          <div>
            <Image src={"/Group 11.svg"} alt="img" width={110} height={100} />
          </div>
        </div>
        <div>
          <Image
            src={"/Mask group (5).svg"}
            alt="img"
            height={250}
            width={250}
          />
          <div>
            <Image
              src={"/Group 12.svg"}
              alt="img"
              width={150}
              height={100}
            />
          </div>
        </div>

        <div>
          <Image src={"/mg.svg"} alt="img" height={250} width={250} />
          <div>
            <Image src={"/gp.svg"} alt="img" width={120} height={100} />
          </div>
        </div>

        <div>
          <Image src={"/mg1.svg"} alt="img" height={250} width={250} />
          <div>
            <Image src={"/gp1.svg"} alt="img" width={150} height={100} />
          </div>
        </div>

        <div>
          <Image
            src={"/Mask group (9).svg"}
            alt="img"
            height={250}
            width={250}
          />
          <div>
            <Image src={"/gp.svg"} alt="img" width={130} height={100} />
          </div>
        </div>

        <div className="mt-10">
          <Image
            src={"/Asgaard sofa 2.svg"}
            alt="img"
            height={250}
            width={250}
          />
          <div>
            <Image src={"/gp15.svg"} alt="img" width={160} height={100} />
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center p-10">
        <Image src={"/Group 72.svg"} alt="" height={150} width={280} />
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
  );
}

export default page;
