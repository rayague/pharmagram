"use client";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { FaHome, FaFlask, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

gsap.registerPlugin(Draggable);

export default function Home() {
  const text = "Pharmagram";
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div className="pb-28 relative flex flex-col px-2 bg-green-200/30 items-center justify-items-center min-h-screen font-sans">
      <div className="lg:w-2/3 md:w-4/5 w-full bg-black/50 my-5 py-4 px-4 rounded-2xl">
        <h3 className="text-3xl font-bold">Acceuil</h3>
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
      <div className="flex items-center justify-center w-full lg:w-2/3 md:w-4/5 my-14">
        <span className="flex-grow border-t border-green-500"></span>
        <span className="mx-4 text-green-500 text-xl lg:text-3xl sm:text-2xl font-semibold">
          À Propos
        </span>
        <span className="flex-grow border-t border-green-500"></span>
      </div>

      <div className="relative isolate overflow-hidden bg-gray-900 w-11/12 lg:w-2/3 md:w-4/5 py-24 mx-auto shadow-lg shadow-black rounded-lg">
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#28a745] to-[#34d399] opacity-20"
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#28a745] to-[#34d399] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Rejoignez-nous
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
              Pharmagram révolutionne le secteur pharmaceutique en connectant
              les professionnels de santé et les patients grâce à une plateforme
              intuitive. Nous mettons à votre disposition des outils innovants
              pour faciliter l&lsquo;accès aux médicaments, améliorer le suivi
              des traitements, et garantir une meilleure prise en charge des
              patients.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full lg:w-2/3 md:w-4/5 my-14">
        <span className="flex-grow border-t border-green-500"></span>
        <span className="mx-4 text-green-500 text-xl lg:text-3xl sm:text-2xl   font-semibold">
          Avantages Pharmacies
        </span>
        <span className="flex-grow border-t border-green-500"></span>
      </div>

      <div className="w-11/12 lg:w-2/3 md:w-4/5 mx-auto bg-slate-900 rounded-xl overflow-hidden mb-6 shadow-lg shadow-black">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/assets/picture2.jpg"
              height={500}
              width={500}
              alt="Gestion des stocks"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">
              Gestion des stocks simplifiée
            </div>
            <p className="mt-2 text-slate-500">
              Suivez en temps réel les quantités de produits disponibles grâce à
              une interface dédiée. Recevez des notifications automatiques
              lorsqu&lsquo;un produit atteint un seuil critique, vous permettant
              d&lsquo;éviter les ruptures de stock et d&lsquo;assurer une
              gestion optimale de vos inventaires.
            </p>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-2/3 md:w-4/5 mx-auto bg-slate-900 rounded-xl overflow-hidden mb-6 shadow-lg shadow-black">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/assets/picture3.jpg"
              height={500}
              width={500}
              alt="Commande en ligne"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">
              Commandes en ligne et gestion centralisée
            </div>
            <p className="mt-2 text-slate-500">
              Recevez des commandes directement via l&lsquo;application et
              suivez chaque détail des commandes depuis leur réception
              jusqu&lsquo;à leur livraison. Gérez toutes vos transactions de
              manière centralisée pour un suivi facile et rapide.
            </p>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-2/3 md:w-4/5 mx-auto bg-slate-900 rounded-xl overflow-hidden mb-6 shadow-lg shadow-black">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/assets/picture4.jpg"
              height={500}
              width={500}
              alt="Statistiques avancées"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">
              Statistiques avancées pour des décisions éclairées
            </div>
            <p className="mt-2 text-slate-500">
              Profitez de tableaux de bord détaillés pour suivre les tendances
              de consommation et les ventes. Identifiez les produits les plus
              populaires et les périodes de forte demande, vous permettant ainsi
              de mieux adapter vos stocks et vos offres.
            </p>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-2/3 md:w-4/5 mx-auto bg-slate-900 rounded-xl overflow-hidden mb-6 shadow-lg shadow-black">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/assets/picture6.jpg"
              height={500}
              width={500}
              alt="Gestion des ordonnances"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">
              Gestion des ordonnances en ligne
            </div>
            <p className="mt-2 text-slate-500">
              Permettez à vos clients d&lsquo;envoyer leurs ordonnances
              directement via la plateforme, simplifiant ainsi le processus de
              commande. Vous pouvez valider et préparer les commandes rapidement
              en fonction des prescriptions reçues.
            </p>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-2/3 md:w-4/5 mx-auto bg-slate-900 rounded-xl overflow-hidden mb-6 shadow-lg shadow-black">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/assets/picture15.jpg"
              height={500}
              width={500}
              alt="Livraison à domicile"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">
              Livraison à domicile
            </div>
            <p className="mt-2 text-slate-500">
              Intégrez facilement un service de livraison pour vos clients.
              Offrez-leur une expérience fluide avec un suivi des colis en temps
              réel, garantissant la satisfaction des utilisateurs et la fidélité
              à votre pharmacie.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full lg:w-2/3 md:w-4/5 my-14">
        <span className="flex-grow border-t border-green-500"></span>
        <span className="mx-4 text-green-500 text-xl lg:text-3xl sm:text-2xl font-semibold">
          Avantages Clients
        </span>
        <span className="flex-grow border-t border-green-500"></span>
      </div>

      <div className="w-11/12 lg:w-2/3 md:w-4/5 mx-auto bg-slate-900 rounded-xl overflow-hidden mb-6 shadow-lg shadow-black">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/assets/picture8.jpg"
              height={500}
              width={500}
              alt="Accès facile aux produits"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">
              Accès facile aux produits
            </div>
            <p className="mt-2 text-slate-500">
              Accédez rapidement à une large gamme de produits de santé,
              médicaments et équipements, directement depuis votre smartphone.
              L&lsquo;interface intuitive vous permet de rechercher facilement
              des articles, parcourir les catégories ou découvrir des
              promotions.
            </p>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-2/3 md:w-4/5 mx-auto bg-slate-900 rounded-xl overflow-hidden mb-6 shadow-lg shadow-black">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/assets/picture17.jpg"
              height={500}
              width={500}
              alt="Téléchargement d’ordonnances"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">
              Téléchargement d&lsquo;ordonnances simplifié
            </div>
            <p className="mt-2 text-slate-500">
              Besoin de commander un médicament ? Téléchargez votre ordonnance
              directement dans l&lsquo;application et laissez notre système
              intelligent identifier rapidement les produits dont vous avez
              besoin. C&lsquo;est simple, rapide et efficace.
            </p>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-2/3 md:w-4/5 mx-auto bg-slate-900 rounded-xl overflow-hidden mb-6 shadow-lg shadow-black">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/assets/picture10.jpg"
              height={500}
              width={500}
              alt="Livraison rapide"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">
              Livraison rapide et fiable
            </div>
            <p className="mt-2 text-slate-500">
              Gagnez du temps grâce à notre service de livraison. Commandez vos
              produits en quelques clics et recevez-les chez vous ou à
              l&lsquo;adresse de votre choix dans les délais les plus courts.
              Suivez en temps réel chaque étape de votre commande.
            </p>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-2/3 md:w-4/5 mx-auto bg-slate-900 rounded-xl overflow-hidden mb-6 shadow-lg shadow-black">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/assets/picture11.jpg"
              height={500}
              width={500}
              alt="Paiements sécurisés"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">
              Paiements sécurisés et flexibles
            </div>
            <p className="mt-2 text-slate-500">
              Profitez d&lsquo;un système de paiement sécurisé adapté à vos
              besoins. Que vous préfériez payer en ligne avec une carte
              bancaire, via des services mobiles ou à la livraison, notre
              plateforme garantit des transactions fiables.
            </p>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-2/3 md:w-4/5 mx-auto bg-slate-900 rounded-xl overflow-hidden mb-6 shadow-lg shadow-black">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/assets/picture13.jpg"
              height={500}
              width={500}
              alt="Assistance client"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">
              Assistance client 24/7
            </div>
            <p className="mt-2 text-slate-500">
              Une question ou une inquiétude ? Notre service client est
              disponible 24h/24 et 7j/7 pour répondre à vos demandes. Obtenez
              des réponses claires et un suivi personnalisé à tout moment.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-11/12 lg:w-2/3 md:w-4/5 mx-auto my-14">
        <span className="flex-grow border-t border-green-500"></span>
        <span className="mx-4 text-green-500 text-xl lg:text-3xl sm:text-2xl font-semibold">
          Téléchargement
        </span>
        <span className="flex-grow border-t border-green-500"></span>
      </div>

      <div className="w-11/12 lg:w-2/3 md:w-4/5 p-4 text-center border rounded-lg shadow sm:p-8 bg-slate-900 border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-white">
          Accédez à nos services où que vous soyez
        </h5>
        <p className="mb-5 text-base sm:text-lg text-gray-400">
          Restez informé et profitez de toutes les fonctionnalités de notre
          application. Disponible sur iOS et Android.
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <a
            href="#"
            className="w-full sm:w-auto focus:ring-4 focus:outline-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-slate-700 hover:bg-gray-600 focus:ring-gray-700"
          >
            <svg
              className="me-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="apple"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              ></path>
            </svg>
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs">Disponible sur</div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                l&lsquo;App Store
              </div>
            </div>
          </a>
          <a
            href="#"
            className="w-full sm:w-auto focus:ring-4 focus:outline-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 bg-gray-900 hover:bg-slate-600 focus:ring-slate-700"
          >
            <svg
              className="me-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google-play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
              ></path>
            </svg>
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs">Téléchargez sur</div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                Google Play
              </div>
            </div>
          </a>
        </div>
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
        <Link href="/" className="flex flex-col items-center text-green-500">
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
