import { urlSource } from 'ipfs-http-client';
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import wpdf from './mudranewwhitepaper.pdf';

//hello this is live share test

const Home = () => {

    return (
       <>
       <div className="space-y-4 bg-gradient-to-tr from-gray-400 via-blue-600 to-purple-900">
          <Navbar className="" />

            {/* <!-- cONTENT SECTION STARTS --> */}

<section class="text-black body-font bg-blue-200 object-cover bg-opacity-10 w-full h-full rounded-b-2xl bg-transparent" id="homepage"  style={{
  backgroundImage: `url(images/tenth.jpg)`,
  backgroundPosition:"center",
  backgroundSize:'cover',
  opacity: 0.7,
  objectFit:'cover'

}}>
  <div class="container mx-auto flex py-12  md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font  text-green-900 sm:text-4xl md:text-red-300 text-3xl  mb-4 font-medium  text-opacity-100">Wanna get into a market with more &nbsp;
        <br class="hidden lg:inline-block sm:text-black"/><span className="text-black">exposure and security!!</span>
      </h1>
      <span class="text-white text-3xl text-opacity-100">Join us !!</span><br/>
      <p class="mb-8 leading-relaxed text-2xl md:text-2xl text-black">ShowCase Your <span className="text-2xl text-yellow-600 text-bold animate-bounce">Creativity</span> And Let People Own The Creation.</p>
     
    </div>

  </div>
</section>


<section class="text-gray-600 body-font object-fill rounded-2xl"   style={{
  backgroundImage: `url(images/backimg3.png)`,
  backgroundPosition:"center",
  backgroundSize:'cover',
  opacity: 1}}
  >

<div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
  <img class="object-cover object-center rounded" alt="hero" src="./images/newpicture2.png"/>
</div>
<div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" >What are we??
    <br class="hidden lg:inline-block"/>Just a marketplace to sell    <br class="hidden lg:inline-block"/>
Hell noah!!
  </h1>
  <p class="mb-8 leading-relaxed text-white text-2xl">A smart NFT market place built on BINANCE SMART CHAIN.</p>
 
</div>
</div>
</section>

<section class="text-gray-600 body-font bg-gray-400 rounded-2xl">
<div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-700">BUY, CREATE, SELL and &nbsp;
    <br class="hidden lg:inline-block"/>earn tokens for every transaction.
  </h1>
 
</div>
<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
  <img class="object-cover object-center rounded" alt="hero" src="./images/Business1.png"/>
</div>
</div>
</section>    


{/*OUR COMPANY SECTION DEMO DWCTION  starts*/}

<section class="text-gray-600 body-font rounded-2xl" id="company">
  <div class="container  mx-auto text-center items-center">

  <h3 className="p-2 text-3xl text-gray-700">MUDRA NFT MARKETPLACE </h3>
    <p className="text-xs text-gray-300">ULTIMATE NFT EXPERIENCE</p>

    <p className="px-2 py-4 text-red-200">Mudra – A smart NFT marketplace built on Binance SmartChain has been carefully
     designed and engineered to allow its users to create, buy and sell NFTs in a decentralised 
     permissionless environment.</p>

   

     <p className="text-yellow-50">Mudracc.com’ mission is to push forward the mass adoption of blockchain technology 
     and cryptocurrencies to everyday users</p>

     <div className="flex items-center justify-center object-contain">
       <img src="./images/neww18.png" alt="feature" className="items-center lg:max-w-screen-md "  />
       </div>

    <div class="flex flex-wrap ">


      <div class="md:w-1/2 text-center">
      <p className="text-white">$MUDRA enables the most active creators and collectors on Mudra marketplace 
             to vote for any platform upgrades
              and participate in curation and moderation.

            Approx half of $MUDRA’s total supply is reserved for sellers and buyers on Mudra marketplace,
             who will receive $MUDRA through weekly distribution according to their purchases and sales volumes.</p>

             
        <div class=" w-full  object-cover  sm:w-11/12">
             
             
           
           <img src="./images/token11 copy.png" alt="tokenomics" className="w-full h-full" />
         
        </div>
           <hr className="mt-5 w-54"/>
        <h3><span className="pt-8 text-3xl text-center text-white "> Token Details</span>
        <hr className=" w-54" />
                 <br/> <span className="px-2 py-2 text-gray-200">Token Type - BEP20</span>
               <br/>  <span className="p-4 text-gray-200">  Blockchain - Binance Smart Chain</span>
               <br/>   <span className="mt-2 text-gray-200">Total Supply - 500,000,000 (500 Million)</span>
                 </h3>
                 <br/><br/>
                 <h3 className="text-xl text-gray-900">MUDRA token Contract Address:<hr/><br/>0xbc398b4a43d0ef848b3c72<br/>f0c21ed80b9734f81f</h3>



      </div>
      <div class=" md:w-1/2">
        <div class="h-full overflow-hidden ">
             
             <h3 className="p-4 text-3xl text-center text-gray-300"> TIMELINE</h3>
               <img src="./images/timeline1.png" alt="timeline" className="" />
         
        </div>
      </div>

          <h2 className="p-4 text-xl text-center text-red-100">For more Information about project's Roadmap and others please read our whitepaper here : <a href={wpdf} download className="no-underline hover:text-red-700">Download</a></h2>
      



    </div>
  </div>
</section>
   {/* OUR COMPANY SECTION ENDS */} 



   {/* HOW TO STARTS Section starts */}
    
 <section class="text-gray-600 body-font  bg-gradient-to-r from-purple-200 via-indigo-300 to-indigo-900  flex justify-center items-center rounded-2xl">

<div class="container px-5 py-24 mx-auto flex flex-wrap">
<div><h1 className="items-center text-2xl text-white">How to Start ?</h1></div>
  <div class="flex flex-wrap w-full">
    <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
      <div class="flex relative pb-12">
        <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div class="flex-grow pl-4">
          <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
          <p class="leading-relaxed">Connect your wallet!! <br/>
Don’t worry if you don’t have one, <a href="https://metamask.io" >create here!!</a></p>
        </div>
      </div>
      <div class="flex relative pb-12">
        <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow pl-4">
          <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
          <p class="leading-relaxed">Explore the marketplace , start building your collections.</p>
        </div>
      </div>
      <div class="flex relative pb-12">
        <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="3"></circle>
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
          </svg>
        </div>
        <div class="flex-grow pl-4">
          <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
          <p class="leading-relaxed">Buy , Sell and Resell <br/>
          Earn Tokens as Rewards.</p>
        </div>
      </div>
      <div class="flex relative pb-12">
        <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow pl-4">
          <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
          <p class="leading-relaxed">Got Something in mind ? <br/>
          Create your NFT, quote it well<br/>
Now let your creativity sell itself!</p>
        </div>
      </div>
      <div class="flex relative">
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
        </div>
        <div class="flex-grow pl-4">
          <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">DONE</h2>
         
        </div>
      </div>
    </div>

  </div>
</div>
</section>

{/* How to start section ends  */}

     

 





{/* <!-- TEAM SECTION STARTS --> */}

<section class="text-gray-600 body-font bg-blue-200 flex-col items-center justify-center rounded-2xl " id='team'>
<div class="container px-5 py-12 mx-auto">
<div class="flex flex-col text-center w-full mb-20">
  <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">MEET OUR TEAM</h1>
</div>
<div class="flex flex-wrap -m-2 justify-center">
  <div class="p-4 lg:w-1/4 md:w-1/2">
    <div class="h-full flex flex-col items-center text-center">
      <img alt="team" class="flex-shrink-0 rounded-full h-56 w-56 object-fit object-center mb-4" src="images/devimg/bhanu1.jpg"/>
      <div class="w-full">
        <h2 class="title-font font-medium text-lg text-gray-900">BHANU KUMAR</h2>
        <h3 class="text-gray-500 mb-3">Co-founder and Developer</h3>
        <a href="https://www.telegram.me/bhanuexcalibur" class="fa fa-telegram "></a>
      
      </div>
    </div>
  </div>
  <div class="p-4 lg:w-1/4 md:w-1/2 ">
    <div class="h-full flex flex-col items-center text-center ">
      <img alt="team" class="flex-shrink-0 rounded-full h-56 w-56 object-fit object-center mb-4" src="images/devimg/deepak1.jpg"/>
      <div class="w-full">
        <h2 class="title-font font-medium text-lg text-gray-900">DEEPAK K SINGH</h2>
        <h3 class="text-gray-500 mb-3">Co-founder and Developer</h3>
        <a href="https://www.telegram.me/Deepak986786" class="fa fa-telegram "></a>
        
      </div>
    </div>
  </div>
  <div class="p-4 lg:w-1/4 md:w-1/2">
    <div class="h-full flex flex-col items-center text-center">
      <img alt="team" class="flex-shrink-0 rounded-full h-56 w-56 object-fit object-center mb-4" src="images/devimg/abh1.jpg"/>
      <div class="w-full">
        <h2 class="title-font font-medium text-lg text-gray-900">ABHISHEK RAJ</h2>
        <h3 class="text-gray-500 mb-3">Social Media Manager</h3>
        <a href="https://www.telegram.me/Abhi4856" class="fa fa-telegram "></a>
       
      </div>
    </div>
  </div>
  <div class="p-4 lg:w-1/4 md:w-1/2">
    <div class="h-full flex flex-col items-center text-center">
      <img alt="team" class="flex-shrink-0 rounded-full h-56 w-56 object-fit object-center mb-4" src="images/devimg/sukhi1.jpg"/>
      <div class="w-full">
        <h2 class="title-font font-medium text-lg text-gray-900">SAURAV KR JHA</h2>
        <h3 class="text-gray-500 mb-3">Social Media Manager</h3>
        <a href="https://www.telegram.me/sauravjha902" class="fa fa-telegram "></a>
       
      </div>
    </div>
  </div>
  <div class="p-4 lg:w-1/4 md:w-1/2">
    <div class="h-full flex flex-col items-center text-center">
      <img alt="team" class="flex-shrink-0 rounded-full w-56 h-56 object-fit object-center mb-4" src="images/devimg/muni1.jpg"/>
      <div class="w-full">
        <h2 class="title-font font-medium text-lg text-gray-900">MUNISH SINGH</h2>
        <h3 class="text-gray-500 mb-3">Head of Design</h3>
        <a href="https://www.telegram.me/munishsingh" class="fa fa-telegram"></a>
        
      </div>
    </div>
  </div>
  <div class="p-4 lg:w-1/4 md:w-1/2">
    <div class="h-full flex flex-col items-center text-center">
      <img alt="team" class="flex-shrink-0 rounded-full w-56 h-56 object-fit object-center mb-4" src="./images/devimg/shruti.jpg"/>
      <div class="w-full">
        <h2 class="title-font font-medium text-lg text-gray-900">SHRUTI SALONI </h2>
        <h3 class="text-gray-500 mb-3">Marketing Manager</h3>
        <a href="#" class="fa fa-telegram"></a>
        
      </div>
    </div>
  </div>
</div>
</div>
</section>
{/* <!-- TEAM SECTION ENDS --> */}


{/* FAQ section starts  */}
<div className="rounded-2xl" id="faq">
      <section class="text-gray-700">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Frequently Asked Question
            </h1>
           
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                What is NFT ?
                </summary>

                <span>
                An NFT is a digital asset that represents real-world objects like art, music,
                 in-game items and videos. They are bought and sold online, frequently with cryptocurrency, 
                and they are generally encoded with the same underlying software as many cryptos.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                How can I create nft?
                </summary>

                <span>
                Once you've connected your Wallet to the marketplace, you can go on and create your first NFT. Click on Create in tab menu, and create a collection.
                 Fill in all the information needed, then save.Now you're ready to start the actual minting process of a new NFT.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                 
                  Can i send nft as a gift?
                </summary>

                <span>
                Artists can now gift their work to friends and family via Email or SMS. NFTs are transferred securely
                 using various blockchain technologies.These functionalities are enabled on marketplace in later developmnet process.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                Is wallet compulsory for NFT marketplace?
                </summary>

                <span>
                You need to have a wallet to receive and make payments for selling and buying NFT. So yes, you need to have one.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                Is my money safe over a NFT ?
                </summary>

                <span>
                Yes because its based on a smart blockchain technology so its much more safe than any other marketplace.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                 
                What is verification?
                </summary>

                <span>
                Verification is done as a proof of authenticity for artists and creaters provided with a verification badge depending 
                upon their minting and sold items. We also take into consideration various other factors as other social medias do!!
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                Can I change the price of already created collectible?
                </summary>

                <span class="px-4 py-2">
                Yes absolutely you can do that, it is 
                upto you to decide other than the transaction fee, you just need to confirm that request from the wallet by signing.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                What is royality?
                </summary>

                <span class="px-4 py-2">
                It’s a still developing comcept
                 but simply to undertand you get a certain percentage for a nft you created everytime it sells. Mostly its 2 to 10%
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                Where my nfts are put?
                </summary>

                <span class="px-4 py-2">
                Nfts are in the blockchain
                 system and are same as the crpto currency but its just that it has a unique value upon transactions.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                Can I drop down ideas?
                </summary>

                <span class="px-4 py-2">
                Yes we will opena suggestions window on marketplace to welcome the ideas and make a great experience for users.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                Which platform are you using?
                </summary>

                <span class="px-4 py-2">
                We all know that ethereum chain is little bit costly when we talk about transaction fees(gas fees). So considering this point, we thought of launching
                 our NFT marketplace as well as our coin on Binance Smart Chain(BSC), so that maximum users can gain benefit of this.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                Who are your backers?
                </summary>

                <span class="px-4 py-2">
                Right now we are a growing team having some expert developers in their field. Apart from that we have also been backed by the investors who are not ready to go public. But still we are looking out for some investors and if anyone is willing to invest or lead us
                 to an investor, we will be very glad for that. We will make sure to get the right amount of participation to that person.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
{/* Faq Sectionsd ends */}

      <Footer/>
      </div>
      </>
    )
}

export default Home
