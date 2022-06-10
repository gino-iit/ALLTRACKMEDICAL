import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import { StarIcon as Full } from "@heroicons/react/outline";
import { StarIcon as Outline } from "@heroicons/react/solid";

// favorites_add



export default function BackButton (props){
  const [starFull, setStarFull] = React.useState(false);



useEffect(() => {
  if (typeof window !== "undefined") {

    if (localStorage.getItem("Favorites")){
      const json = JSON.parse(localStorage.getItem("Favorites"));
          if (json.map(x => x.MaterialItemID).includes(props.id.MaterialItemID)){
            // console.log(props.id.MaterialItemID)
            setStarFull(true);
          }
        }    
    }

  return () => {
    
  }
}, [starFull]);




    function addToFavorites(id) {
      var favorites = localStorage.getItem("Favorites");

      var data = {
        "MaterialTypeName": id.MaterialTypeName,
        "MaterialItemID": id.MaterialItemID,
        "Name": id.Name,
      }

      // Als er nog niets is, maak een nieuwe array aan
      if (favorites == null) {
        favorites = [data];
        localStorage.setItem("Favorites", JSON.stringify(favorites));
    
      } 
      // Anders, voeg het toe aan de array
      else {
        favorites = JSON.parse(favorites);
        console.log(favorites);

        // }

        
        if (favorites.map(x => JSON.stringify(x)).includes( JSON.stringify(data))) {

          favorites = favorites.filter(x => JSON.stringify(x) !== JSON.stringify(data));
          console.log(favorites);
          localStorage.setItem("Favorites", JSON.stringify(favorites));
          setStarFull(false);

        } 
        // Anders, voeg het toe
        else {
          favorites.push(data);
          setStarFull(!starFull);

        }
      }
      console.log(favorites);
      localStorage.setItem("Favorites", JSON.stringify(favorites));
    }


    
    return(

<div class="bg-primary show md:hidden ">
<div class="max-w-7xl mx-auto px-4 sm:px-6">
  <div class="pb-3">
    <nav class="flex" aria-label="Breadcrumb">
      <div class="flex sm:hidden">
        <a
          href="/"
          class="group inline-flex space-x-3 text-sm font-medium text-white"
        >
          <svg
            class="flex-shrink-0 h-5 w-5 text-white"
            x-description="Heroicon name: arrow-narrow-left"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Terug</span>
        </a>

        <button
        //   href="/favorites_add"
        onClick={() => addToFavorites(props.id)}
          class="group inline-flex space-x-3 text-sm font-medium text-white absolute right-7"
        >         <svg
        class="flex-shrink-0 h-6 w-5 text-white"
        x-description="Heroicon name: arrow-narrow-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
   {starFull == false ? (<Full/>) : (<Outline/>)}
      </svg></button>





      </div>
      <div class="hidden sm:block">
        <ol class="flex items-center space-x-4">
          <li>
            <div>
              <a href="#" class="text-white">
                <svg
                  class="flex-shrink-0 h-5 w-5"
                  x-description="Heroicon name: home"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  ></path>
                </svg>
                <span class="sr-only">Home</span>
              </a>
            </div>
          </li>

          <li>
            <div class="flex items-center">

                                <svg
                class="flex-shrink-0 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
              </svg>


              <a href="/" class="ml-4 text-sm font-medium text-white"
                >Categorie</a
              >
            </div>
          </li>

{/* {props && props.children.map(item => (<a>item</a>))} */}


        </ol>
      </div>
    </nav>
  </div>
</div>
</div>
    )
}



