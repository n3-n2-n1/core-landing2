import React from "react";
import Section from "./Section";
import { collabApps, collabContent, collabText } from "../constant";
import brainwaveSymbol from "../assets/roadmap/a.png";
import graf from "../assets/roadmap/b2c.png";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
export default function Collabration() {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-[4rem]">
          Combining AI and Blockchain technology to transform professional sports
          </h2>
          <ul className="block">
            {collabContent.map((item, i) => (
              <li key={i} className="mb-3 py-3">
                <div className="flex items-center gap-x-6 ">
                  <h6 className="body-2">{item.title}</h6>
                </div>
                {item.text && (
                  <h6 className="body-2 mt-2 text-n-4">{item.text}</h6>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:ml-auto  xl:w-[38rem] mt-4">
          <p className="mb-8 body-2 text-n-4  md:mb-16 lg:mb-32 lg:w-[32rem]">
            {collabText}
          </p>
          <img
                    className="m-auto"
                    width={1000}
                    height={1000}
                    src={graf}
                    alt="symbol"
                  />
        </div>
      </div>
    </Section>
  );
}
