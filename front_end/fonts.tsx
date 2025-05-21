//fonts 

import {
  Inter,
  Montserrat,
  Bebas_Neue,
  Dancing_Script,
  Rubik
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
});

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing",
});

export const rubik=Rubik({
    subsets: ["latin"],
    display:"swap",
    variable:"--font-rubic",
})
