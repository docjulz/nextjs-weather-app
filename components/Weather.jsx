import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  // console data object to access key/pair elements
  console.log(data);

  //   Convert UNIX Time for Sunrise/Sunset HERE

  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      {/* Top */}
      <div className="relative flex justify-around pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className=" text-2xl">{data.weather[0].main}</p>
        </div>
        <p className=" text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
      </div>

      {/* BOTTOM */}
      <div className=" bg-black/50 relative p-10 rounded-md">
        <p className=" text-2xl text-center pb-8">Weather in {data.name}</p>
        <div className=" flex justify-between text-center gap-8">
          <div>
            <p className=" text-2xl md:text-5xl">
              {data.wind.speed.toFixed(0)}
              <span className=" text-2xl">mph</span>
            </p>
            <p className=" text-lg md:text-3xl">Wind Speed</p>
          </div>
          <div>
            <p className=" text-2xl md:text-5xl">
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
            <p className=" text-lg md:text-3xl">Feels Like</p>
          </div>
          <div>
            <p className=" text-2xl md:text-5xl">
              {data.main.humidity.toFixed(0)}%
            </p>
            <p className=" text-lg md:text-3xl">Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
