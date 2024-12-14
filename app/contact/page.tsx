/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaHome, FaFlask, FaShoppingBag, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

export default function Page() {
  return (
    <div className="pb-28 flex flex-col px-2 bg-green-200/30 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="lg:w-2/3 md:w-4/5 w-full bg-black/50 my-5 py-4 px-4 rounded-2xl">
        <h3 className="text-3xl font-bold">Contact</h3>
      </div>

      <div className="w-11/12 lg:w-2/3 md:w-4/5 mx-auto">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Reprenez votre croissance avec{" "}
          <span className="text-green-500">
            Pharmagram, la plateforme numéro 1
          </span>{" "}
          pour la gestion des produits pharmaceutiques.
        </h1>
        <p className="text-lg font-normal text-gray-200 lg:text-xl dark:text-gray-400">
          Chez Pharmagram, nous nous concentrons sur les marchés où la
          technologie, l'innovation et les solutions digitales peuvent débloquer
          une valeur à long terme et stimuler la croissance de l'industrie
          pharmaceutique. Notre plateforme est conçue pour améliorer
          l'efficacité des pharmacies, des laboratoires et des professionnels de
          santé dans le monde entier.
        </p>
      </div>

      <div className="flex items-center justify-center w-full lg:w-2/3 md:w-4/5 my-14">
        <span className="flex-grow border-t border-green-500"></span>
        <span className="mx-4 text-green-500 text-xl lg:text-3xl sm:text-2xl font-semibold">
          Nous Contacter
        </span>
        <span className="flex-grow border-t border-green-500"></span>
      </div>

      <div className="lg:w-2/3 md:w-4/5 w-full bg-white rounded-lg shadow-lg shadow-black m-4 py-3 dark:bg-gray-800">
        <div className="w-full mx-auto p-4 flex text-center items-center justify-center">
          <span className="text-sm text-center text-gray-400">
            <strong>Notre Bureau : </strong>
            123 Rue Pharmagram, Quartier Innovant, Ville X, Pays Y
          </span>
        </div>
      </div>

      <div className="lg:w-2/3 md:w-4/5 w-full bg-white rounded-lg shadow-lg shadow-black m-4 py-3 dark:bg-gray-800">
        <div className="w-full mx-auto p-4 flex text-center items-center justify-center">
          <span className="text-sm text-center text-gray-400">
            <strong>Téléphone : </strong>
            <a href="tel:+123456789" className="hover:underline mx-2">
              +1 (234) 567-89
            </a>

            <a href="tel:+987654321" className="hover:underline mx-2">
              +9 (876) 543-21
            </a>
          </span>
        </div>
      </div>
      <div className="lg:w-2/3 md:w-4/5 w-full items-center justify-center bg-white rounded-lg shadow-lg shadow-black m-4 py-3 dark:bg-gray-800">
        <div className=" justify-center text-center mx-auto p-4 md:flex items-center">
          <span className="text-sm text-gray-400 text-center ">
            <strong>Email : </strong>
            <a href="mailto:contact@pharmagram.com" className="hover:underline">
              contact@pharmagram.com
            </a>
          </span>
        </div>
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
        <Link href="" className="flex flex-col items-center text-green-500">
          <FaPhoneAlt className="text-xl" />
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
}
