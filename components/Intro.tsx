import Image from 'next/image';
import React from 'react'

export default function Intro() {
    
const intro = ["office", "food", "hospitality", "industrial", "retail"];
    
    return (
      <div className="flex w-full justify-evenly">
        {intro.map((item, index) => (
          <div className="justify-center my-5" key={index}>
            <p className="text-center capitalize text-2xl">{item}</p>
            <Image
              className="w-40 h-56 my-5 rounded-lg"
              src={`/intro/${item}.png`}
              alt="secondaryPic"
              width={150}
              height={150}
              priority
            />
          </div>
        ))}
      </div>
    );
  }