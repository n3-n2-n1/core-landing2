import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import s1 from "../assets/services/service-1.png";
import s2 from "../assets/services/service-2.png";
import s3 from "../assets/roadmap/skeleton.png";
import { brainwaveServices, brainwaveServicesIcons } from "../constant";
import { check } from "../assets";
import GeneratingText from "./GeneratingText";
import {
  Gradient,
  PhotoChatMessage,
  VideoChatMessage,
  VideoBar,
} from "./design/Services";
export default function Services() {
  return (
    <Section id={"how-to-ues"} className={"mt-20"}>
      <div className="container">
        <Heading
          title={"Combining Computer Vision"}
          text={"Unlocking the potential of AI-powered applications"}
          id="unlock"
        ></Heading>

        <div className="relative ">
          <div className="relative z-1 flex items-center h-[39rem] rounded-3xl overflow-hidden  lg:p-20 xl:h-[46rem] border border-n-6 ">
            <div className=" w-full h-full pointer-event-none">
            <video autoPlay loop muted className="w-[100%] h-[100%] object-cover p-8">
              <source src="/metricsbox.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>

            <div className="relative z-2 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-5">Smartest Ai</h4>
              <p className="body-2 mb-[3rem]">
                CORE unlocks the potential of AI Powered application and Sports
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <GeneratingText
              className={
                "absolute left-4 right-4 bottom-4 border border-n-4 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2"
              }
            />
          </div>

          <div className="relative z-1 grid gap-5 my-7 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
              <img
                  src={s3}
                  className="w-full h-full object-cover"
                  width={220}
                  height={400}
                  alt="Scary robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4 text-white">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature.
                </p>
              </div>

            </div>

            <div className="p-4 bg-n-1 rounded-3xl overflow-hidden lg:min-h-[46rem] border-black border-2">


              <div className="relative h-[20rem] bg-n-1 rounded-xl overflow-hidden md:h-[25rem]">
                
              <video autoPlay loop muted className="w-[100%] h-[100%] object-cover p-4">
              <source src="/snowtest2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

              </div>
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4 text-dark">Wide Sports Recognition</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  An approach to different models who share data and serve your analytics needs.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
}
