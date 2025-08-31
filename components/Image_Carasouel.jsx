"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



const Image_Carasouel = ({ members }) => {

  const [plusSlides, setplusSlides] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(2);

  const goToPrevious = () => {
    setplusSlides((prev) => prev <= 0 ? Math.max(0, members.length - itemsToShow) : prev - 1);
  };

  const maxSlide = Math.max(0, members.length - itemsToShow);

  const goToNext = () => {
    setplusSlides((prev) => {
      const maxSlide = Math.max(0, members.length - itemsToShow);
      return prev >= maxSlide ? 0 : prev + 1;
    });
  };


  // // Will move to next image every 6 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const maxSlide = Math.max(0, members.length - itemsToShow);
  //     setplusSlides((prev) => {
  //       const maxSlide = Math.max(0, members.length - itemsToShow);
  //       return prev >= maxSlide ? 0 : prev + 1;
  //     });
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, [members.length]);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);





  return (
    <section className="w-full  flex items-center justify-center">
      <div className="  text-center px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-full gap-4">
            {/* Left Arrow */}
            <img className="p-4 w-20 h-20  mx-3  text-8xl font-light select-none  rounded-2xl hover:scale-105 transition-colors duration-300" src="/arrowpast.png" onClick={() => { goToPrevious() }}></img>

            {/* Image List */}
            {itemsToShow == 1 &&

              <div className="flex-1 max-w-md mx-8">
                <div className="relative rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={members[plusSlides]?.image}
                    className="w-full h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">
                      {members[plusSlides]?.name}
                    </h3>
                  </div>
                </div>
              </div>

            }

            {/* First Image */}
            {itemsToShow == 2 && (
              <ImageList className='flex flex-row items-center'
                sx={{
                  width: '100%',
                  maxWidth: '100%',
                  display: 'grid',
                  gridTemplateColumns: itemsToShow === 1 ? '1fr' : 'repeat(2, 1fr)',
                  gap: 16,
                }}
              >
                {/* First Image */}
                <ImageListItem>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 bg-white w-full h-full hover:scale-105 flex items-center justify-center ">
                    <img
                      src={members[plusSlides]?.image}
                      alt={members[plusSlides]?.name || 'Member'}
                      className="max-w-full max-h-full w-full h-72 object-cover"
                      loading="lazy"
                    />
                    <ImageListItemBar
                      style={{ height: '38%', fontFamily: 'var(--conthrax)' }}
                      className="absolute bottom-0 left-0 right-0 !bg-black/90 p-6 !rounded-b-2xl !text-3xl"
                      title={members[plusSlides]?.name}
                      subtitle={members[plusSlides]?.role}
                    />
                  </div>
                </ImageListItem>

                {/* Second Image */}
                {plusSlides < members.length - 1 && (
                  <ImageListItem>
                    <div className="relative rounded-2xl ml-5 overflow-hidden shadow-lg transform transition-transform duration-300 bg-white w-full h-full hover:scale-105 flex items-center justify-center">
                      <img
                        src={members[plusSlides + 1]?.image}
                        alt={members[plusSlides + 1]?.name || 'Member'}
                        className="max-w-full max-h-full w-full h-72 object-cover"
                        loading="lazy"
                      />
                      <ImageListItemBar
                        style={{ height: '38%', fontFamily: 'var(--conthrax)' }}
                        className="absolute bottom-0 left-0 right-0 !bg-black/90 p-6 !rounded-b-2xl !text-3xl"
                        title={members[plusSlides + 1]?.name}
                        subtitle={members[plusSlides + 1]?.role}
                      />
                    </div>
                  </ImageListItem>
                )}
              </ImageList>
            )}



            {/* Right Arrow */}

            <img className="p-4 w-20 h-20  mx-3 rotate-180 text-8xl font-light select-none  rounded-2xl hover:scale-105 transition-colors duration-300" src="/arrowpast.png" onClick={() => { goToNext() }}></img>


          </div>
          {/* Slide Indicators */}
          {members.length > itemsToShow && (
            <div className="flex gap-2 mt-6">
              {Array.from({ length: maxSlide + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setPlusSlides(index)}
                  className={`w-3 h-3 rounded-full transition-all ${plusSlides === index
                    ? 'bg-green-600 scale-125'
                    : 'bg-gray-400 hover:bg-gray-300'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}


        </div>
      </div>
    </section >
  );
};

export default Image_Carasouel
