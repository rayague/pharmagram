"use client";
import Image from "next/image";
import React from "react";
import { FaHome, FaFlask, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

export default function Page() {
  return (
    <div className=" pb-28 flex flex-col px-2 bg-green-200/30 items-center justify-items-center min-h-screen font-sans">
      <div className="lg:w-2/3 md:w-4/5 w-full bg-black/50 my-5 py-4 px-4 rounded-2xl">
        <h3 className="text-3xl font-bold">Laboratoires</h3>
      </div>
      <div className="flex items-center justify-center w-full lg:w-2/3 md:w-4/5 my-14">
        <span className="flex-grow border-t border-green-500"></span>
        <span className="mx-4 text-green-500 text-xl lg:text-3xl sm:text-2xl font-semibold">
          Infos
        </span>
        <span className="flex-grow border-t border-green-500"></span>
      </div>

      <div className="grid w-11/12 lg:w-2/3 md:w-4/5 mb-8 rounded-lg shadow-lg shadow-black md:mb-12 md:grid-cols-2 bg-slate-900">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-slate-900 border-b border-gray-600 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <h3 className="text-lg font-semibold text-white">Pfizer</h3>
            <p className="my-4">
              Pfizer est l&lsquo;un des plus grands laboratoires pharmaceutiques
              mondiaux, célèbre pour ses médicaments dans divers domaines,
              notamment les vaccins, l&lsquo;oncologie, et les traitements
              cardiovasculaires.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <Image
              className="rounded-full w-9 h-9"
              src="/assets/picture28.jpg"
              height={500}
              width={500}
              alt="Pfizer logo"
            />
            <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
              <div>Pfizer Inc.</div>
              <div className="text-sm text-gray-500">
                Laboratoire pharmaceutique
              </div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center justify-center p-8 text-center bg-slate-900 border-b border-gray-600 md:rounded-se-lg">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <h3 className="text-lg font-semibold text-white">
              Johnson & Johnson
            </h3>
            <p className="my-4">
              Johnson & Johnson est une entreprise de santé mondiale offrant des
              produits pharmaceutiques, des dispositifs médicaux et des produits
              de consommation, avec une grande renommée dans le traitement des
              maladies auto-immunes et du cancer.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <Image
              className="rounded-full w-9 h-9"
              src="/assets/picture31.jpg"
              height={500}
              width={500}
              alt="Johnson & Johnson logo"
            />
            <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
              <div>Johnson & Johnson</div>
              <div className="text-sm text-gray-500">
                Multinationale de la santé
              </div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center justify-center p-8 text-center bg-slate-900 border-b border-gray-600 md:rounded-es-lg md:border-b-0 md:border-e">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <h3 className="text-lg font-semibold text-white">Roche</h3>
            <p className="my-4">
              Roche est un laboratoire pharmaceutique suisse reconnu pour son
              expertise dans les médicaments anticancéreux et les traitements de
              maladies infectieuses.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <Image
              className="rounded-full w-9 h-9"
              src="/assets/picture29.jpg"
              height={500}
              width={500}
              alt="Roche logo"
            />
            <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
              <div>Roche</div>
              <div className="text-sm text-gray-500">
                Laboratoire pharmaceutique suisse
              </div>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center justify-center p-8 text-center rounded-b-lg md:rounded-se-lg bg-slate-900 border-gray-600">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <h3 className="text-lg font-semibold text-white">Novartis</h3>
            <p className="my-4">
              Novartis est une entreprise pharmaceutique mondiale spécialisée
              dans les traitements pour les maladies neurologiques, le cancer,
              et les troubles cardiovasculaires.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <Image
              className="rounded-full w-9 h-9"
              src="/assets/picture30.jpg"
              height={500}
              width={500}
              alt="Novartis logo"
            />
            <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
              <div>Novartis</div>
              <div className="text-sm text-gray-500">
                Leader en biopharmacie
              </div>
            </div>
          </figcaption>
        </figure>
      </div>

      <footer className="w-11/12 lg:w-2/3 md:w-4/5 flex flex-col gap-4 py-6">
        <div className="flex flex-col lg:flex-row md:flex-row space-y-2 lg:space-y-0 w-full items-center justify-center space-x-4 ">
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
            Conditions d&lsquo;Utilisation
          </Link>
          <Link
            href=""
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
            className=" text-green-500 underline underline-offset-4"
          >
            Pharmagram.
          </Link>{" "}
          Tous droits réservés - 2024
        </h3>
        {/* </div> */}
      </footer>

      <div className="fixed bottom-3 flex flex-row py-2 items-center justify-evenly backdrop-blur-lg backdrop-brightness-75 rounded-2xl w-11/12 lg:w-1/2 sm:w-2/3 h-auto mx-auto">
        <Link href="/" className="flex flex-col items-center ">
          <FaHome className=" text-xl" />
          <span>Accueil</span>
        </Link>
        <Link href="" className="flex flex-col items-center text-green-500">
          <FaFlask className="text-xl" />
          <span>Laboratoire</span>
        </Link>
        <Link href="contact" className="flex flex-col items-center">
          <FaPhoneAlt className="text-xl" />
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
}
