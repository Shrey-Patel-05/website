"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



const Image_Carasouel = () => {
  const members = [{ "name": "Sean bechofer", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "Lead dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }, { "name": "Shrey Patel", "image": "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=", "role": "dev", "linkedin": "", "github": "" }];
  const [plusSlides, setplusSlides] = useState(0);


  // Will move to next image every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setplusSlides((prev) => (prev + 1) % members.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [members.length]);






  return (
    <section className=" w-full">
      <div className="max-w-7xl mx-auto text-center px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-full gap-4">
            {/* Left Arrow */}
            <button
              onClick={() => setplusSlides(Math.max(plusSlides - 1, 0))}
              className="text-3xl font-bold text-black bg-gray-600 hover:text-gray-400 transition rounded-2xl p-1"
            >
              &#10094;
            </button>

            {/* Image List */}
            <ImageList
              sx={{
                width: '100%',
                maxWidth: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: 16
              }}
            >
              <ImageListItem className=''>
                <img
                  src={members[plusSlides].image}
                  className=" object-cover w-full rounded-md"
                  loading="lazy"
                />
                <ImageListItemBar
                 style={{ height: '38%' }}
                  title={members[plusSlides].name}
                />
              </ImageListItem>
              {plusSlides <= members.length - 2 &&

                <ImageListItem className=''>
                  <img
                    src={members[plusSlides + 1].image}
                    className=" object-cover w-full rounded-md"
                    loading="lazy"
                  />
                  <ImageListItemBar
                    style={{ height: '38%' }}
                    title={members[plusSlides + 1].name}
                  />
                </ImageListItem>
              }


            </ImageList>

            {/* Right Arrow */}
            <button
              onClick={() => setplusSlides(Math.min(plusSlides + 1, members.length - 1))}
              className="text-3xl font-bold text-black hover:text-gray-400 bg-gray-600 transition p-1 rounded-2xl"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Image_Carasouel
