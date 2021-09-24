import React,{useState} from 'react';
import ExploreNavbar from './ExploreNavbar';
import ExploreFooter from './ExploreFooter';

const CreateNFT = () => {

  const [ntitle ,setNtitle]=useState();
  const [ndesc ,setNdesc]=useState();
  const [ntype ,setNtype]=useState();

  const changeTitle=(event)=>{
    setNtitle(event.target.value)
  }

  const changeDesc=(event)=>{
    setNdesc(event.target.value)
  }

  const changeType=(event)=>{
    setNtype(event.target.value)
  }



   const createnft=(event)=>{
     event.preventDefault();
         console.log("nft created");
         console.log(`nfttile is ${ntitle}`);
   }



    return (
        <div className=" bg-gradient-to-tr from-purple-400 via-pink-500 to-indigo-900">
        <ExploreNavbar />
            
     <div className="flex items-center justify-center p-4 lg:w-full">   
    
  <div class=" lg:w-1/2">
   
   
      <form onSubmit={createnft} id="form">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">

          <div >
              <label for="Nfttitle" class="block text-sm font-medium text-gray-700">
                NFT Title
              </label>
              <div class="mt-1">
                <input id="Nfttitle" name="Nfttitle"  value={ntitle} onChange={changeTitle} rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"></input>
              </div>
            </div>
           

            <div >
              <label for="about" class="block text-sm font-medium text-gray-700">
                NFT Description
              </label>
              <div class="mt-1">
                <textarea id="about" name="about" value={ndesc} onChange={changeDesc} rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
              </div>
            </div>
             
             <div>
            <label class="block text-sm font-medium text-gray-700">
          <span class="text-gray-700">NFT Type</span>
               <select class="form-select mt-1 block w-full" value={ntype} onChange={changeType} >
  
                    <option>Image/Gifs</option>
                    <option>Music</option>
                    <option>Video</option>
   
                 </select>
          </label>
              </div>

            {/* <div>
              <label class="block text-sm font-medium text-gray-700">
              Upload NFT file
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex justify-center items-center text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span className="items-center text-center">Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                    </label>
                  
                  </div>
                  <p class="text-xs text-gray-500">
                    PNG, JPG, GIF , Video files 
                  </p>
                </div>
              </div>
            </div> */}

            <div class="custom-file">
  <input type="file" class="custom-file-input" id="customFile"/>
  <label class="custom-file-label" for="customFile">Choose file</label>
</div>
            
            <div>
             <button type="submit" className="btn btn-primary">Create </button>
          </div>
               
          </div>

          
          
        </div>
      </form>
 
  </div>

</div>






  
         
         <ExploreFooter />
        </div>
    )
}

export default CreateNFT
