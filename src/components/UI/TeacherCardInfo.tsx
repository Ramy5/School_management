import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { ShineBorder } from "./shine-border";
import { ICardsInfo, ISinglePageData } from "@/lib/constants";

const CardInfo = (props: ISinglePageData) => {
  const { infoData, cardsInfo } = props;
  const { blood, date, email, desc, phone, name, imageUrl } = infoData;

  return (
    <div className={cn("flex flex-col relative gap-4 mb-4", "lg:flex-row")}>
      {/* USER INFO CARD */}
      <div className={cn("bg-mainSky px-4 py-6 rounded-xl flex flex-1 gap-4")}>
        <div className={cn("lg:w-1/3")}>
          <Image
            src={imageUrl}
            alt="avatar"
            width={144}
            height={144}
            className={cn(
              "w-28 h-28 hidden lg:block rounded-full object-cover"
            )}
          />
        </div>

        <div
          className={cn("lg:w-2/3 w-full flex flex-col justify-between gap-4")}
        >
          <h1 className={cn("text-xl font-semibold")}>{name}</h1>
          <p className={cn("text-sm text-gray-500")}>{desc}</p>
          <div
            className={cn(
              "flex items-center gap-2 justify-between flex-wrap text-xs font-medium",
              "mixin/userInfo:w-full mixin/userInfo:md-1/3 mixin/userInfo:lg:w-full mixin/userInfo:2xl:w-1/3 mixin/userInfo:flex mixin/userInfo:items-center mixin/userInfo:gap-2"
            )}
          >
            <div className={cn("mixin/userInfo")}>
              <Image src={"/blood.png"} alt="blood" width={14} height={14} />
              <span>{blood}</span>
            </div>
            <div className={cn("mixin/userInfo")}>
              <Image src={"/date.png"} alt="date" width={14} height={14} />
              <span>{date}</span>
            </div>
            <div className={cn("mixin/userInfo")}>
              <Image src={"/mail.png"} alt="mail" width={14} height={14} />
              <span>{email}</span>
            </div>
            <div className={cn("mixin/userInfo")}>
              <Image src={"/phone.png"} alt="phone" width={14} height={14} />
              <span>{phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* SMALL CARDS */}
      <div className={cn("flex-1 flex gap-4 justify-between flex-wrap")}>
        {cardsInfo.map((cardInfo: ICardsInfo, i: number) => {
          return (
            <ShineBorder
              key={i}
              className={cn(
                "bg-white p-4 rounded-md flex gap-4 !min-w-0 w-full",
                "md:w-1[48%] xl:w-[45%] 2xl:w-[48%]"
              )}
              color={["#43beeb", "#7876f5", "#e9ca40"]}
            >
              <Image
                src={cardInfo.image}
                alt={cardInfo.title}
                width={24}
                height={24}
                className={cn("w-6 h-6")}
              />
              <div>
                <h1 className={cn("text-xl font-semibold")}>
                  {cardInfo.title}
                </h1>
                <span className={cn("text-sm text-gray-400")}>
                  {cardInfo.desc}
                </span>
              </div>
            </ShineBorder>
          );
        })}
      </div>
    </div>
  );
};

export default CardInfo;
