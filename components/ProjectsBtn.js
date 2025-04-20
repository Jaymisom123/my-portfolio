import Image from "next/image";
import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
  <div className="mx-auto xl:mx-0">
    <Link href={'/work'} className="pb-15 relative w-[150px] h-[150px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat group">
      <Image src={'/rounded-text.png'} 
        width={110} 
        height={117} 
        alt=""
        className="animate-spin-slow w-full h-full max-w-[110px] max-h-[117px] "
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 "/>
    </Link>
  </div>
  );
};

export default ProjectsBtn;
