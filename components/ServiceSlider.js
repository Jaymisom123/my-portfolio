'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { 
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'As a passionate and skilled junior fullstack web developer, I specialize in weaving together cutting-edge technologies to build dynamic and captivating web experiences. From crafting pixel-perfect front-end designs that engage your users to architecting robust back-end solutions that ensure seamless functionality, I am dedicated to turning your ideas into reality.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'As a dynamic and creative junior web designer, I am dedicated to crafting visually compelling digital experiences that leave a lasting impact. With a keen focus on design aesthetics and user experience, I bring your ideas to life by blending innovation with functionality.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'As a dedicated junior fullstack web developer, I am driven by a passion for coding and a commitment to delivering top-tier digital solutions. With a diverse skill set and a problem-solving mindset, I thrive on turning complex challenges into elegant and functional web applications. From crafting pixel-perfect front-end interfaces that engage users to architecting robust back-end systems that ensure seamless performance, I am dedicated to bringing your ideas to life through the power of development. With an insatiable curiosity for emerging technologies and best coding practices, I constantly strive to stay at the forefront of the ever-evolving web development landscape.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'As a passionate and skilled junior copywriter, I am dedicated to crafting words that breathe life into your brand and resonate with your target audience. With a flair for storytelling and a keen understanding of persuasive language, I bring your unique voice to every piece of content. From captivating website copy that captures the essence of your brand to engaging blog posts that drive traffic and conversions, I am committed to delivering copy that leaves a lasting impression.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: "As a dedicated junior SEO specialist, I am passionate about optimizing your digital presence for enhanced visibility and organic growth. With a deep understanding of search engine algorithms and best SEO practices, I am committed to elevating your website's rankings and driving valuable traffic to your business. With a data-driven approach and a focus on continuous improvement, I monitor and analyze performance metrics to make data-backed decisions that lead to tangible results.",
  },
];

const ServiceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {serviceData.map((item, index) => (
        <div key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal text-xs'>{item.description}</p>
            </div>
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ServiceSlider;
