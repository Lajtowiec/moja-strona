"use client";

import Image from "next/image";
import { useState } from "react";
import { platformScreens } from "@/components/platform/platform-screens";

type PlatformScreensShowcaseProps = {
  priority?: boolean;
};

export function PlatformScreensShowcase({ priority = false }: PlatformScreensShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeScreen = platformScreens[activeIndex] ?? platformScreens[0];

  return (
    <div className="grid gap-4">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-300/18 bg-slate-950/60 p-3 shadow-[0_22px_60px_rgba(0,0,0,0.25)]">
        <div className="h-[30rem] overflow-y-auto overscroll-contain rounded-[1.35rem] bg-white [scrollbar-color:rgba(98,220,255,0.5)_rgba(15,23,42,0.6)] [scrollbar-width:thin] md:h-[34rem]">
          <Image
            key={activeScreen.src}
            src={activeScreen.src}
            alt={`Platforma Edukacyjna PAE - ${activeScreen.label}`}
            width={720}
            height={1303}
            priority={priority}
            sizes="(max-width: 768px) 100vw, 42vw"
            className="h-auto w-full"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-3 bottom-3 h-24 rounded-b-[1.35rem] bg-gradient-to-t from-slate-950/82 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100">
            Platforma PAE
          </p>
          <p className="mt-2 text-lg font-semibold text-white">{activeScreen.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {platformScreens.map((screen, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={screen.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              className={`overflow-hidden rounded-[1.25rem] border bg-slate-950/44 text-left ${
                isActive
                  ? "border-cyan-300/55 shadow-[0_0_0_1px_rgba(98,220,255,0.18),0_18px_38px_rgba(8,145,178,0.16)]"
                  : "border-white/12 hover:border-cyan-300/30"
              }`}
            >
              <Image
                src={screen.src}
                alt={`Platforma Edukacyjna PAE - ${screen.label}`}
                width={720}
                height={1303}
                sizes="(max-width: 768px) 50vw, 16vw"
                className="h-48 w-full object-cover object-top sm:h-56 lg:h-44"
              />
              <span className="block border-t border-white/10 px-3 py-3">
                <p className="text-sm font-semibold text-white">{screen.label}</p>
                <p className="mt-1 text-xs leading-5 text-slate-300">{screen.description}</p>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
