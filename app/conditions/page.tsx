"use client";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { FaHome, FaFlask, FaShoppingBag, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

gsap.registerPlugin(Draggable);

export default function Home({ text = "Pharmagram" }: { text: string }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div className="pb-28 relative flex flex-col px-2 bg-green-200/30 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="lg:w-2/3 md:w-4/5 w-full bg-black/50 my-5 py-4 px-4 rounded-2xl">
        <h3 className="text-3xl font-bold">Conditions d'Utilisation</h3>
      </div>
      <div className="flex my-4">
        <AnimatePresence>
          {text.split("").map((char, i) => (
            <motion.p
              ref={ref}
              key={i}
              initial={{ opacity: 0, x: -18 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              exit="hidden"
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-5xl my-4 text-center sm:text-6xl font-black tracking-tighter lg:text-8xl md:text-7xl md:leading-[4rem]"
            >
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.p>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center w-full lg:w-2/3 md:w-4/5 my-6">
        <span className="flex-grow border-t border-white"></span>
        <span className="mx-4">Votre Texte Ici</span>
        <span className="flex-grow border-t border-white"></span>
      </div>
      <div className=""></div>
      <div className="w-11/12 lg:w-2/3 md:w-4/5 mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/assets/image1.jpg" // Utilisation d'une image locale
              height={500}
              width={500}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Neque excepturi adipisci dolorem unde. Dignissimos pariatur
              obcaecati, impedit incidunt sit facilis expedita totam quis soluta
              nobis aliquam temporibus sapiente blanditiis vero.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full lg:w-2/3 md:w-4/5 my-6">
        <span className="flex-grow border-t border-white"></span>
        <span className="mx-4">Votre Texte Ici</span>
        <span className="flex-grow border-t border-white"></span>
      </div>

      <footer className="w-11/12 lg:w-2/3 md:w-4/5 flex flex-col gap-4 py-6">
        <div className="flex flex-row w-full items-center justify-center space-x-4 ">
          <Link
            href="/politiques"
            className="text-white underline underline-offset-4 hover:text-green-500"
          >
            Politique de Confidentialité
          </Link>
          <Link
            href=""
            className="text-white underline underline-offset-4 hover:text-green-500"
          >
            Conditions d'Utilisation
          </Link>
          <Link
            href="faqs"
            className="text-white underline underline-offset-4 hover:text-green-500"
          >
            Faqs
          </Link>
        </div>
        {/* <div className="w-11/12 lg:w-2/3 md:w-4/5 flex flex-row"> */}
        <h3 className="text-center font-semibold text-white">
          ©{" "}
          <Link
            href="/"
            className="underline underline-offset-4 text-green-500"
          >
            Pharmagram.
          </Link>{" "}
          Tous droits réservés - 2024
        </h3>
        {/* </div> */}
      </footer>
      <div className="fixed bottom-3 flex flex-row py-2 items-center justify-evenly backdrop-blur-lg backdrop-brightness-75 rounded-2xl w-11/12 lg:w-1/2 sm:w-2/3 h-auto mx-auto">
        <Link href="/" className="flex flex-col items-center">
          <FaHome className=" text-xl" />
          <span>Accueil</span>
        </Link>
        <Link href="/laboratoires" className="flex flex-col items-center">
          <FaFlask className="text-xl" />
          <span>Laboratoire</span>
        </Link>
        <Link href="/contact" className="flex flex-col items-center">
          <FaPhoneAlt className="text-xl" />
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
}
