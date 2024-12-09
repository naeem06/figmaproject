import Link from "next/link"
function Footer() {
  return (
    <div className='h-full w-svw overflow-hidden font-[500]'>
        <div className='md:flex md:place-content-evenly'>
            <div className='text-center text-[#9F9F9F] text-[16px] font-[400] md:w-[285px] md:pt-[45px]'>400 University Drive Suite 200 Coral Gables,
            FL 33134 USA</div>
            <div className='h-[400px] text-center place-content-center space-y-9 md:h-[250px]'>
                <div className='text-[#9F9F9F]'>Links</div>
                 <div><Link href={"/"}>Home</Link></div>              
                 <div><Link href={"/shop"}>Shop</Link></div>              
                 <div><Link href={"/about"}>About</Link></div>              
                 <div><Link href={"/contact"}>Contact</Link></div>              
           </div>
            <div className='h-full text-center place-content-center  space-y-9'>
                <div className='text-[#9F9F9F]'>Help</div>
                <div>Payment Options</div>
                <div>Returns</div>
                <div>Privacy Policies</div>
           </div>
            <div >
                <div className='text-center mt-4 text-[#9F9F9F]  md:pl-3'>Newsletter</div>
                <div className='flex items-center justify-center gap-4 text-[#9F9F9F]'> <div><input type="text" placeholder="Enter Your Email Address" className="border-b border-[#9F9F9F]" /></div><div className='text-black font-[500]'>SUBSCRIBE</div></div>
           </div>          
        </div>
        <div className='w-[1500px] border border-[#D9D9D9] overflow-hidden mt-5 mb-5'></div>
        <div className='text-center'>2022 Meubel House. All rights reverved</div>
    </div>
  )
}

export default Footer