import React from 'react';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import { useMediaQuery } from 'react-responsive'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Helmet } from 'react-helmet';

import arrowdown from './assets/arrow-down.svg';
import arrowtrdark from './assets/arrow-top-right-dark.svg';
import arrowtr from './assets/arrow-top-right.svg';
import buzzingpng from './assets/buzzing-light.svg';
import buzzingdarkpng from './assets/buzzing-dark.svg';
import chart from './assets/chart.svg';
import client1 from './assets/client-1.png';
import client2 from './assets/client-2.png';
import client3 from './assets/client-3.png';
import client4 from './assets/client-4.png';
import moneyblue from './assets/money-bag-blue.png';
import moneygreen from './assets/money-bag-green.png';
import moneyhand from './assets/money-hand.png';
import calculateBg from './assets/calculate-bg.png';
import stars from './assets/stars.png';
import edit from './assets/edit.svg';
import digitalads from './assets/digital-ads.svg';
import buzzer from './assets/buzzer.svg';
import social from './assets/chat.svg';
import appStore from './assets/app-store.svg';
import review from './assets/review.svg';
import trending from './assets/trending.svg';
import ModalCalculate from './modal-calculate';

const whatwedo = [
  { id: 1, title: "Digital Ads", desc: "Boost brand visibility and engagement through targeted ads on platforms like Google, Facebook, and Instagram.", icon: digitalads },
  { id: 2, title: "Buzzer Marketing ", desc: "Leverage buzzer networks to create brand awareness and drive engagement.", icon: buzzer },
  { id: 3, title: "Social Media Engagement", desc: "Increase likes, comments, shares, and follows on social media platforms like Instagram and Twitter.", icon: social },
  { id: 4, title: "App Store Optimization", desc: "Improve app visibility and downloads on the App Store and Google Play Store with keyword and content optimization.", icon: appStore },
  { id: 5, title: "Review Management", desc: "Enhance app and business reviews on platforms like Google Maps and app stores to build credibility.", icon: review },
  { id: 6, title: "Trending Hashtags", desc: "Create and promote viral hashtags to boost brand visibility on social media platforms.", icon: trending },
];

const clients = [
  { img: client1, id: 1 },
  { img: client2, id: 2 },
  { img: client3, id: 3 },
  { img: client4, id: 4 },
]

function App() {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const maxMD = useMediaQuery({ query: '(min-width: 768px)' });
  const maxLG = useMediaQuery({ query: '(min-width: 1024px)' });
  const maxXL = useMediaQuery({ query: '(min-width: 1280px)' });

  const visibleSlides = () => {
    if(maxXL) return 6;
    if(maxLG) return 5;
    if(maxMD) return 4;
    return 3
  }

  const onClickMenu = () => {
    setShowMenu((prev) => !prev);
  }

  const onCLickLink = () => {
    onClickMenu();
  }

  React.useEffect(() => {
      function parallax(event) {
          this.querySelectorAll(".parallax-el").forEach((element) => {
              const position = element.getAttribute("value");
              const translateX = element.getAttribute("percentTranslateX");
              const translateY = element.getAttribute("percentTranslateY");
              const rotate = element.getAttribute("rotate");
  
              const bounding = element.getBoundingClientRect();
              const widthEl = bounding.width / 2;
              const heightEl = bounding.height / 2
  
              const x = (window.innerWidth - event.pageX * position) / widthEl;
              const y = (window.innerHeight - event.pageY * position) / heightEl;
  
              let calX = Number(translateX) + x;
              let calY = Number(translateY) + y;
  
              if(!translateX) {
                  calX = x;
              }
  
              if(!translateY) {
                  calY = y;
              }
  
              element.style.transform = `translateX(${calX}%) translateY(${calY}%) ${rotate ? `rotate(${rotate})` : ""}`;
          });
      }
  
      document.addEventListener("mousemove", parallax);
  }, [])
 
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Buzzing" />
        <meta property="og:site_name" content="Buzzing" />
        <meta property="og:url" content="" />
        <meta property="og:description" content="Boost Your Business with the RightCampaign!
        We help MSMEs reach more customers with measurable and effective strategies." />
        <meta property="og:type" content="" />
        <meta property="og:image" content="https://ik.imagekit.io/p4ukigs1hrvx/Group%2058_GKucLIcP9.png?updatedAt=1734234933561" />
      </Helmet>
      <ModalCalculate show={showModal} setShow={setShowModal} />
      <div className={`w-[80vw] h-screen fixed lg:hidden bg-primary top-0 left-0 flex items-center justify-center transform transition-all duration-500 z-50 translate-x-[-80vw] ${showMenu ? "!translate-x-0 delay-500" : ""}`}>
        <ul className='flex flex-col items-center gap-10 relative z-10'>
        <li className='flex flex-col gap-1 group'>
              <a onClick={onCLickLink} className="text-white font-light" href="#who-are-we">Who Are We</a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className='flex flex-col gap-1 group'>
              <a onClick={onCLickLink} className="text-white font-light" href="#what-we-do">What We Do</a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className='flex flex-col gap-1 group'>
              <a onClick={onCLickLink} className="text-white font-light" href="#our-client">Our Client</a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className='flex flex-col gap-1 group'>
              <a onClick={onCLickLink} className="text-white font-light" href="#cost-calculation">Cost Calculation</a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
          </ul>
      </div>
      <header className="w-full bg-primary py-3 fixed z-40 top-0 left-0">
        <nav className="flex items-center justify-between container-custom">
          <img src={buzzingpng} className="h-[30px]" alt="" />
          <ul className='lg:flex hidden items-center gap-10'>
            <li className='flex flex-col gap-1 group'>
              <a className="text-white font-light" href="#who-are-we">Who Are We</a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className='flex flex-col gap-1 group'>
              <a className="text-white font-light" href="#what-we-do">What We Do</a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className='flex flex-col gap-1 group'>
              <a className="text-white font-light" href="#our-client">Our Client</a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className='flex flex-col gap-1 group'>
              <a className="text-white font-light" href="#cost-calculation">Cost Calculation</a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
          </ul>
          <div className="flex items-center gap-6">
            <button className="border-primary-yellow hidden md:flex border-solid border rounded-full py-2 px-5 text-primary-yellow items-center gap-2">
              LET'S TALK 
              <img src={arrowtr} className='' alt="" />
            </button>
            <button onClick={onClickMenu} className="card-primary-style-white flex lg:hidden items-center py-2 px-4 rounded-xl gap-2 w-fit">
              {showMenu ? "CLOSE" : "MENU"}
            </button>
          </div>
        </nav>
      </header>
      <section className="w-full bg-[url('./assets/jumbotron.png')] bg-center bg-cover min-h-screen relative">
        <div className="container-custom flex items-center min-h-screen">
          <div className="flex-[1.5_1.5_0%] flex-col flex gap-10">
            <h1 className='text-primary font-bold text-5xl lg:text-6xl'>Boost Your Business with the Right 
              <span className='inline-block relative w-fit ml-0 lg:ml-3 items-center justify-center'>
                <span className='absolute w-[120%] h-[120%] inline-block rounded-[100%] border-2 border-[#C650D6] pointer-events-none'></span>
                <span className='bg-clip-text bg-gradient-to-r text-center text-transparent from-[#C650D6] to-[#95ADE5]'>Campaign!</span>
              </span>
            </h1>
            <p className='text-primary font-light text-base lg:text-lg'>We help MSMEs reach more customers with measurable and effective strategies.</p>
            <button className="card-primary-style flex items-center py-3 px-6 rounded-xl gap-2 w-fit">
              LET'S TALK 
              <img src={arrowtrdark} className='' alt="" />
            </button>
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="flex items-center flex-col gap-1 absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <p className='text-sm text-primary'>Scroll down to see more</p>
          <img src={arrowdown} className='w-6 up-down-animation' alt="" />
        </div>
      </section>
      <section className='w-full bg-primary' id='who-are-we'>
        <div className="container-custom flex flex-col md:flex-row py-10 md:py-0 min-h-screen items-center gap-10">
          <div className="flex-1 relative">
            <img src={chart} alt="" />
            <img src={moneygreen} value="0.8" rotate="-45deg" className='parallax-el absolute w-[100px] lg:w-auto -bottom-1/3 right-0 z-10' alt="" />
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <p className='bg-clip-text bg-gradient-to-r text-transparent from-[#C650D6] to-[#95ADE5] text-xl font-semibold'>Our difference is our approach.</p>
            <p className='text-4xl text-white font-bold'>We're your ecommerce growth custodians.</p>
            <p className='text-white text-sm font-light'>Success in ecommerce requires omni-channel targets and long term strategic thinking. You don't need a Shopify developer or a performance marketer. You need a custodian to share the responsibility for the health of your entire ecommerce business.            </p>
            <div className="flex gap-10">
              <div className="">
                <p className='text-primary-yellow font-bold text-2xl'>500K+</p>
                <p className='text-white font-light mt-2'>Community User</p>
              </div>
              <div className="">
                <p className='text-primary-yellow font-bold text-2xl'>500K+</p>
                <p className='text-white font-light mt-2'>Community User</p>
              </div>
              <div className="">
                <p className='text-primary-yellow font-bold text-2xl'>500K+</p>
                <p className='text-white font-light mt-2'>Community User</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full bg-secondary py-20' id='what-we-do'>
        <div className="container-custom flex flex-col items-center gap-10">
          <p className=' font-bold text-xl bg-clip-text bg-gradient-to-r text-transparent from-[#C650D6] to-[#95ADE5]'>What We Do</p>
          <p className='text-primary font-bold text-3xl'>We Do What We Do Best</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 relative">
            <img src={moneyblue} value="-1" rotate="-12deg" className='parallax-el absolute z-20 -top-1/4 right-0 lg:-right-12 pointer-events-none -rotate-12' alt="" />
            <img src={moneyhand} value="2" rotate="12deg" className='parallax-el absolute top-1/2 transform -translate-y-1/2 -left-10 w-[150px] pointer-events-none rotate-12' alt="" />
            {whatwedo.map((el) => (
              <div key={el.id} className="card-primary-style relative z-10 flex flex-col gap-3 p-3 lg:p-7 border-primary border rounded-xl">
                <img src={el.icon} className='w-14' alt="" />
                <p className='text-primary text-base lg:text-xl font-bold'>{el.title}</p>
                <p className='text-primary text-sm lg:text-base font-light'>{el.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='w-full bg-[#FECCB5]' id='our-client'>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={60}
        totalSlides={clients.length * 2}
        visibleSlides={visibleSlides()}
        isPlaying
        infinite
        interval={2000}
        >
          <Slider>
            {clients.concat(clients).map((client, index) => (
              <Slide innerClassName='flex items-center justify-center' index={index} key={index}>
                <img src={client.img} alt={`Client ${index}`} style={{ width: '100px', height: 'auto' }} />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </section>
      <section className='py-20 relative w-full flex items-center justify-center overflow-hidden' id='cost-calculation'>
        <img src={calculateBg} className='w-full h-full absolute top-0 left-0 object-cover' alt="" />
        <img src={stars} alt="" className='top-1/2 transform -translate-y-1/2 absolute left-[10%]' />
        <img src={moneyblue} alt="" className='-bottom-1/4 transform scale-125 absolute right-0' />
        <div className="relative z-10 flex flex-col items-center gap-10">
          <p className='text-4xl font-bold text-primary text-center'>Calculate Your Needs and <br /> Budget Estimation</p>
          <button onClick={() => setShowModal(true)} className="card-primary-style flex items-center py-3 px-6 rounded-xl gap-2 w-fit">
            CALCULATE BUDGET 
            <img src={edit} className='' alt="" />
          </button>
        </div>
      </section>
      <section className='w-full bg-primary py-20' >
        <div className="container-custom flex flex-col md:flex-row gap-10">
          <div className="flex-1 flex flex-col gap-10">
            <p className='text-6xl font-bold bg-clip-text bg-gradient-to-r text-transparent from-[#C650D6] to-[#95ADE5]'>Ready to start the project?</p>
            <p className="text-white font-light">Whether you have a request, a query, or want to work with us, use the form below to get in touch with our team.</p>
          </div>
          <div className="flex-1">
            <form action="" className='w-full flex flex-col gap-3'>
              <input type="text" className='w-full border-b-white border-b-2 outline-none text-white text-lg bg-transparent p-2 pl-0' placeholder='Fill Name' />
              <input type="text" className='w-full border-b-white border-b-2 outline-none text-white text-lg bg-transparent p-2 pl-0' placeholder='Phone Number' />
              <input type="text" className='w-full border-b-white border-b-2 outline-none text-white text-lg bg-transparent p-2 pl-0' placeholder='Email' />
              <input type="text" className='w-full border-b-white border-b-2 outline-none text-white text-lg bg-transparent p-2 pl-0' placeholder='Enter message here' />
              <div className="w-full flex justify-end pt-5">
              <button className="card-primary-style-white flex items-center py-3 px-6 rounded-xl gap-2 w-fit">
                SENT 
                <img src={arrowtrdark} className='' alt="" />
              </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className='transition duration-300 w-full bg-[#FAF3E1] py-14'>
        <div className="container-custom grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-5">
            <img src={buzzingdarkpng} className='h-[40px]' alt="" />
            <div className="">
              <p className="m-0 text-black font-bold text-lg mb-5">Our Contact</p>
              <a href="https://wa.me/6285892758224" className="m-0 text-gray-600 font-light flex items-center mb-2 w-fit"><i className="fa-solid fa-phone mr-2"></i> +62 858-9275-8224</a>
              <a href="mailto:arman@hopesy.co.id" className="m-0 text-gray-600 font-light flex items-center w-fit"><i className="fa-solid fa-envelope mr-2"></i>arman@hopesy.co.id</a>
            </div>
            <div className="">
              <p className="m-0 text-black font-bold text-lg mb-5">Location</p>
              <p className="m-0 text-gray-600 font-light">Gedung Jaya, Jl. M.H. Thamrin No.12 Lantai 5 unit A6, RT.2/RW.1, Kb. Sirih, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10340</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default App
