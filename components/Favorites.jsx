import React, { useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { StarIcon as Full } from "@heroicons/react/outline";
import { StarIcon as Outline } from "@heroicons/react/solid";
import Link from "next/link";

// favorites_add



export default function Favorites (props){

  const [Favorites, setFavorites] = useState([]);

  useEffect(function() {
    console.log(window.localStorage);
    console.log(JSON.parse(window.localStorage.getItem("Favorites")));

    setFavorites(JSON.parse(window.localStorage.getItem("Favorites")));
    
},[]);

  return(
    <div>
      {Favorites && 
<div>
             <h3 className="text-xl font-medium leading-normal mb-4 mt-5">Mijn favorieten</h3>

<ul className="divide-y divide-gray-200">
  {/* 1 */}
  {/* <div className='grid-cols-2 '></div> */}
  <div className="grid md:grid-cols-2 md:gap-4 gap-2">

  {Favorites && Favorites?.map(id => 
    <Link href={"/item/" + id.MaterialItemID} >

      {/* <a href={"/category/" + item.MaterialTypeID + "/" + item.MaterialItemID} className="flex border mb-2 bg-white px-6  border-gray-200 group text-gray-900 flex items-center px-3  text-sm font-medium rounded-md hover:bg-primary shadow-sm hover:border-primary transition duration-300 ease-in-out" aria-current="page"> */}
      <div className="cursor-pointer flex border mb-2 bg-white px-6  border-gray-200 group text-gray-900 flex items-center px-3  text-sm font-medium rounded-md hover:bg-primary shadow-sm hover:border-primary transition duration-300 ease-in-out" aria-current="page">

        <li className="py-4 flex">
          {/* <img src="https://www.svgrepo.com/show/20306/hospital.svg" alt="" class="flex-shrink-0 h-6 w-6 rounded-full"/> */}

          <img src="https://www.svgrepo.com/show/5127/star.svg" className="h-8 w-8 m-auto my-auto" />
          {/* <CameraIcon className="h-8 w-8 m-auto my-auto" /> */}

          <div className="ml-3">
            <p className="text-sm group-hover:text-white font-medium text-gray-900">{id.MaterialTypeName} </p>
            <p className="text-sm group-hover:text-white font-light text-gray-500"> {id.MaterialTypeName}</p>
          </div>
        </li>

      </div>

    </Link>





  
  )
  
}    </div>


</ul></div>
}
    </div>
    )
    
}








