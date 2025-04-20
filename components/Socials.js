import Link from "next/link";
import {
  RiTwitterLine,
  RiLinkedinLine,
  RiWhatsappLine,
} from 'react-icons/ri';


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href='https://x.com/JaymisomRodrigo?t=elT5_O9YHZl-OFFpaVnJuw&s=08' target="_blank" className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link href='https://www.linkedin.com/in/jaime-r%C3%AAgo-farias-b42a01360/' target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href='https://wa.me/5594991518569 ' target="_blank" className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine />
      </Link>
    </div>
  );
};

export default Socials;
