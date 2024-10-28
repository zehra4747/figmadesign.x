import Recentpost from "./component/page"
import Featurework from "./components/page"

export default function Home(){
  return(
    <div className="relative">
    {/* First Section */}
    <div className="bg-[rgba(195,192,192,1)] w-[1440px] h-[800px] flex flex-col relative">
      <div className="font-inter text-[20px] font-medium leading-[24.2px] text-left absolute w-[283px] h-[24px] left-[1088px] top-[66px] flex space-x-6">
        <ul className="flex space-x-6">
          <li>Work</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </div>
  
      <div className="relative w-[1030px] h-[308px] left-[231px] top-[246px]">
        <div className="font-heebo text-[#21243d] text-[48px] font-extrabold leading-[61px] tracking-[2px] text-left backdrop-blur-[4px]">
          <p>Hi, I am John,<br /> Creative Technologist</p>
        </div>
      </div>
  
      <div className="absolute w-[497px] h-[66px] left-[231px] top-[402px] font-heebo font-normal text-[16px] leading-[24px] text-[#21243D]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </div>
  
      <button className="absolute w-[205px] h-[50px] left-[231px] top-[504px] bg-[#F98585] shadow-md rounded-[2px]">
        <span className="absolute left-[13.17%] right-[13.17%] top-[24%] bottom-[24%] font-heebo font-small text-[15px] leading-[26px] text-white">
          Download Resume
        </span>
      </button>
  
      <img
        src="/hero-image.png"
        alt="Hero Image"
        className="absolute w-[292px] h-[299px] left-[969px] top-[246px] rounded-md"
      />
    </div>
  
    {/* Second Section */}
    <div className="relative w-[1440px] h-[502px] bg-[rgba(244,226,226,1)] mt-0"> 
 
<div className="flex">
 <div className="absolute w-[120px] h-[32px] top-[26px] left-[237px] font-heebo text-[22px] font-medium leading-[32.31px] text-left">
   Recent Post
 </div>

 <div className="absolute w-[77px] h-[32px] top-[26px] left-[1168px] font-heebo text-red-400 text-[22px] font-medium leading-[32.31px] text-left">
   View All
 </div>
 </div>
 <div className="flex gap-9 mt-10 md:mt-20 ml-60">
<Recentpost/>

<Recentpost/>
</div>
<div className="bg-[rgba(250,245,245,1)] flex flex-col min-h-screen mt-5">
  <div className="w-[919px] mx-auto mt-10">
    <p className="font-heebo text-[22px] font-medium leading-[32.31px] text-left">
      Featured Works
    </p>
    <div className="mt-5">
      <div className="flex gap-10 mt-10">
        <img
          src="/1.png"
          className="w-[246px] h-[180px] rounded-[6px]"
        />
        <Featurework />
      </div>
      <div className="flex gap-10 mt-10">
        <img
          src="/Rectangle 32.png"
          className="w-[246px] h-[180px] rounded-[6px]"
        />
        <Featurework />
      </div>
      <div className="flex gap-10 mt-10">
        <img
          src="/Rectangle 34.png"
          className="w-[246px] h-[184px] rounded-[6px]"
        />
        <Featurework />
      </div>
    </div>
    <div className="w-[279px]
h-[30px] flex gap-20 ml-80 mt-20
top-[2288px] flex 
left-[578px]
gap-0px">
  <img
  src="/fb.png"
  className="w-[30px]
h-[30px]
top-[2288px]
left-[578px]
gap-0px
"/>
<img
src="/insta.png"
className="w-[30px]
h-[30px]
top-[2288px]
left-[659px]
gap-0px
"
/>
<img
src="/vector.png"
className="w-[30px]
h-[30px]
top-[2288px]
left-[740px]
gap-0px
"
/>
<img
src="/Linkedin.png"
className="w-[30px]
h-[30px]
top-[2288px]
left-[827px]
gap-0px
"
/>
</div>
<div className="w-[354px]
h-[32px]
top-[2354.67px] 
left-[543px] ml-80 mb-20
gap-0px"><p className="secoundary-text
font-Heebo
text-[22px] mt-10 
font-weight-500
line-height-32.31px
">Copyright ©2020 All rights reserved </p></div>
  </div>
</div>

    </div>
    </div>




    





    

  

  )
}