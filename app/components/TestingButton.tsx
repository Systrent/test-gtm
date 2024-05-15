"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import Image from "next/image";

export const TestingButton = () => {
  return (
    <button
      type="button"
      id="gtm-button"
      onClick={() => sendGTMEvent({ event: "buttonClicked", value: "Discord Invitation" })}
      className="absolute bottom-8 right-8 border border-[#5865f2] rounded-lg p-4 flex gap-4 justify-center items-center text-gray-800 bg-white"
    >
      <Image src={"/discord.svg"} width={30} height={30} alt="Discord logo" />
      Join our community!
    </button>
  );
};
