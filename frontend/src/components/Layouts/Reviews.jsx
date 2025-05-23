import React, { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {HiOutlineUser } from 'react-icons/hi'

const reviews = [
  {
    name: "Vani",
    rating: 5,
    location: "Machilipatnam",
    service: "House Painting",
    review:"Really happy with the painting work by house painting services. The walls look fantastic, and they paid great attention to detail. Finished the work before deadline and kept everything clean. Highly recommend!",
    
    
  },
  {
    name: "Yaga Balla",
    rating: 5,
    location: "machilipatnam",
    service: "Exterior Painting",
    review:
      "An excellent work done by the boys like Pros. They did for my home it's simply superb. Finished work agreed time lines. Best part is stict to the committed no more talks about price also. Whatever they said they took. if we ask for an extra work if it's a small they'll do it without any hesitation. Incase of higher amounts they will ask an extra money. Thanks Paramesh Sonti. Strongly recommended.",
   
  },
  {
    name: "Nani Kesana",
    rating: 4,
    location: "Pedana",
    service: "house painting",
    review:
      "Good work, good behaviour and time best painter,",
    
  },
  {
    name: "Jampana Syam",
    rating: 4,
    location: "Godugupet,Machilipatnam",
    service: "Wall paintings,Interior painting",
    review:
      "Super good work 💯💯 wow painting is very beautiful paints are quality 👌👌",
    
  },
  {
    name: "Suravarapu Srinu",
    rating: 5,
    location: "Edepalli,machilipatnam",
    service: "Exterior painting,ceiling designs",
    review:
     "Good worker nice Desion Painting Is Perfect 💯💯",
    
  },
  {
    name: "Rocky nani G",
    rating: 4,
    location: "vijaywada",
    service: "house painting",
    review:
      "Nice work.professional painter.Highly recommended",
    
  },
];




const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "fill-current" : "text-gray-300"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.92-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      ))}
    </div>
  );
};





const Reviews = () => {
    const scrollRef=useRef(null);
    const[isDragging,setIsDragging]=useState(false);
    const [startX,setStartX]=useState(0);
    const [scrollLeft,setScrollLeft]=useState(false);
    const [canScrollLeft,setCanScrollleft]=useState(false);
    const [canScrollRight,setCanscrollright]=useState(true);
   
     const handleMouseDown=(e)=>{
        setIsDragging(true);
        setStartX(e.pageX-scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);

    };

    const handleMouseMove=(e)=>{
        if(!isDragging) return;
        const x=e.pageX-scrollRef.current.offsetLeft;
        const walk=x-startX;
        scrollRef.current.scrollLeft=scrollLeft-walk;
        
    }

    const handleMouseUpOrLeave=()=>{
        setIsDragging(false);
    }


  const scroll=(direction)=>{
        const scrollAmount=direction==="left" ? -300:300;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

    }

     const updateSCrollButtons=()=>{
        const container=scrollRef.current;
        if(container){
            const leftScroll=container.scrollLeft;
            const rightScrollable = container.scrollWidth - container.scrollLeft - container.clientWidth > 1;


            setCanScrollleft(leftScroll>0);
            setCanscrollright(rightScrollable)
        }



    }
     

    useEffect(()=>{
        const container=scrollRef.current;
        if(container){
           container.addEventListener("scroll",updateSCrollButtons);
           updateSCrollButtons();
           return ()=>container.removeEventListener("scroll",updateSCrollButtons)
        }
    },[])

  return (
    <section className="py-16 bg-gray-50 text-center px-4">
       <div className="conatiner mx-auto text-center mb-10 relative">
     <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
           What Our Customers Say
</h2>
      <p className="text-gray-600 mb-12 max-w-xl mx-auto">
      Customer satisfaction is the final touch on every project.
      </p>
       {/* scrolling buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
            <button onClick={()=>scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${canScrollLeft ? "bg-white text-black":"bg-gray-200 text-gray-400 cursor-not-allowed"}`}>

                <FiChevronLeft className='text-2xl'/>
            </button>
            <button onClick={()=>scroll("right")}
              disabled={!canScrollRight}
            className={`p-2 rounded border ${canScrollRight ? "bg-white text-black":"bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
            
                <FiChevronRight className='text-2xl'/>
            </button>
        </div>
        </div>
    




      {/* scrollable content */}
        <div ref={scrollRef}
         className={`container mx-auto overflow-x-scroll flex space-x-6 relative${isDragging ? "cursor-grabbing":"cursor-grab"}`}
         onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUpOrLeave}
         onMouseLeave={handleMouseUpOrLeave}
         >
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="min-w-[90%] sm:min-w-[50%] lg:min-w-[40%] space-x-2 relative bg-white rounded-lg shadow-md p-6 max-w-sm w-full"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div><HiOutlineUser className="w-10 h-10 rounded-full"/></div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </div>

            <StarRating rating={review.rating} />

            <p className="mt-4 italic text-gray-700">"{review.review}"</p>
            <p className="mt-3 text-sm font-medium text-gray-600">
              Service: <span className="text-gray-800">{review.service}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Reviews