
import { navlinks, services, socials } from "../config/constants";

function Footer() {

  return (
    <footer className=" w-full border bg-green-900 text-white p-12 ">
      <hr />
      <div  className="flex p-10 gap-24">
      <div>
        <img src="/images/Group 93.png" alt="" />
      </div>
      <div  className="flex flex-col">
        <p className="font-bold text-lg mb-3"> Quick links</p>
        
        {navlinks.map((link) => (
          <a href={link.to} key={link.title} className="hover:text-green-500  text-white/70 ">
            {link.title}
          </a>
        ))}
      </div>
      <div className="flex flex-col">     
        <p className="font-bold text-lg mb-3">Services</p>
        {services.map((service) => (
          <a href="#" key={service} className="hover:text-green-500  text-white/70 ">
            {service}
          </a>
        ))}
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-lg mb-3">About us </p>
          {
            ["Our story", "Work with us"].map((item) => (
              <a href="" key={item} className="hover:text-green-500  text-white/70 ">{item}</a>
            ))
          }
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-lg mb-3">Contact us </p>
        {
            ["Our story", "Work with us"].map((item) => (
              <a href="" key={item} className="hover:text-green-500  text-white/70 ">{item}</a>
            ))
          }
        
      </div>
      <div  className="flex-1  flex items-end justify-end p-5">
        <button className="bg-green-500  rounded-full p-2">
        <img src="/images/email.png" alt="" />
        </button>
    
         </div>
      </div>
        <hr />
        <div className="flex justify-between items-center pt-5">
          <p className="text-white/70 tex-sm">Privacy policy | Terms of use | User agreement |  License</p>
          <div  className="flex">
            {socials.map((social) => (
              <a href={social.link} key={social.name}  className="px-0.5">
                <img src={social.ImageIcon} alt={social.name} className="h-6"/>
              </a>
            ))}
          </div>
      
        </div>
    </footer>
  );
}

export default Footer;
