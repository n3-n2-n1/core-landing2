import React from "react";
import Heading from "./Heading";
import Section from "./Section";
import { benefits } from "../constant";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
export default function Benifits() {
  return (
    <Section id={"benifits"} className={`sm:my-11 `}>
      <div className="container relative z-2">
        <Heading title="Our vision matches reality with full access to technology in order to increase effectiveness."></Heading>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-10 mb-10 px-2">
        {benefits.map((card) => (
          <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            style={{
              backgroundImage: `url(${card.backgroundUrl})`,
            }}
            key={card.id}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <h5 className="h5 mb-5">{card.title}</h5>
              <p className="body-2 mb-6 text-n-3">{card.text}</p>
              <div className="flex items-center mt-auto">
                <img
                  src={card.iconUrl}
                  width={48}
                  height={48}
                  alt={card.title}
                />
              </div>
            </div>

          </div>
        ))}
      </div>
    </Section>
  );
}
