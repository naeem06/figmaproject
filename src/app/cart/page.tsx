import Image from "next/image";

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
          <div className="text-center text-[56px] font-[700]">Cart</div>
          <div className="">
            <Image src="/Group 566.svg" alt="" width={250} height={100} />
          </div>
        </div>
      </div>
      <div className="md:flex md:place-content-around mt-10">
        <div className="grid grid-cols-4 h-[216px]">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
          <div className=" text-[#9F9F9F]">
            <Image
              src={"/Asgaard sofa 2.svg"}
              alt="img"
              height={250}
              width={50}
            />
            <div className=" text-[#9F9F9F]">Asgaard sofa</div>
          </div>
          <div className=" text-[#9F9F9F]">Rs. 250,000.00</div>
          <div>
            <h1 className="border border-black w-[20px] rounded text-center">
              1
            </h1>
          </div>
          <div className=" text-[#9F9F9F]">Rs. 250,000.00</div>
        </div>
        <div className="grid grid-cols-3 mb-10 text-center">
          <div className="col-span-3 font-[600] text-[32px] mb-5">
            Cart Totals
          </div>
          <div className="font-[500]">Subtotal</div>
          <div className="col-span-2">Rs. 250,000.00</div>
          <div className="font-[500]">Total</div>
          <div className="text-[#B88E2F] col-span-2">Rs. 250,000.00</div>
          <div className="col-span-3  flex items-center justify-center">
            <h1 className="w-[222px] h-[58px] rounded border border-black mt-5 flex items-center justify-center text-[20px]">
              Check Out
            </h1>
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
