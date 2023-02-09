import * as React from "react";
import { Link } from "gatsby";

const Price = () => (
    <section
        id="cennik"
        className=" scroll-m-12 flex items-center flex-wrap justify-center text-base md:text-lg text-center globalWrapper px-3 sm:px-8 py-8 md:pt-16 md:pb-0"
    >
        <div class="p-4 md:w-1/2 w-full" className="globalWrapper px-1 mx-auto">
            <div className="flex flex-col text-center w-full">
                <h3 className="text-2xl lg:text-3xl font-medium title-font mb-2 text-gray-900">
                    Nie trzeba przepłacać za swoją stronę internetową!
                </h3>
                <p>
                    Nasze ceny są przystępne dla każdego i dopasowujemy je do
                    indywidualnych potrzeb każdego klienta. Skontaktuj się z
                    nami, aby uzyskać{" "}
                    <Link
                        to="/kontakt"
                        className="underline text-orange-500 font-semibold hover:text-amber-400 transition-colors duration-200"
                    >
                        darmową wycenę
                    </Link>{" "}
                    i rozpocząć współpracę już dziś!
                </p>
            </div>
            <div className="flex flex-wrap mt-6 md:mt-16">
                <div className="py-4 px-4 lg:px-10 lg:py-6 xl:w-1/3 md:w-1/2 w-full mx-auto ">
                    <div className="group bg-white/90 hover:shadow-xl h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:scale-105 hover:rotate-2 ease-in-out hover:border-amber-300 transition-all duration-500">
                        <h2 className="text-sm text-start tracking-widest title-font mb-1 font-medium">
                            BASE
                        </h2>
                        <p className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>od 300</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">
                                zł
                            </span>
                        </p>
                        <p className="flex items-center text-gray-800 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Strona{" "}
                            <Link
                                className="underline underline-offset-2 text-orange-600 ml-1"
                                to="/pomoc"
                            >
                                One Page
                            </Link>
                        </p>
                        <p className="flex items-center text-gray-800 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Roczny{" "}
                            <Link
                                className="underline underline-offset-2 text-orange-600 ml-1"
                                to="/pomoc"
                            >
                                Hosting
                            </Link>
                        </p>
                        <p className="flex items-center text-gray-800 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            <Link
                                className="underline underline-offset-2 text-orange-600"
                                to="/pomoc"
                            >
                                Responsywność
                            </Link>
                        </p>

                        <p className="flex items-center text-gray-800 mb-6">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Formularz Kontaktowy
                        </p>
                        <Link
                            to="/kontakt"
                            className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none rounded group-hover:bg-gray-700 transition-colors duration-500"
                        >
                            Sprawdz
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-4 h-4 ml-auto"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <p className="text-xs text-gray-500 mt-3 text-start">
                            Termin Realizacji od 3 do 4 dni
                        </p>
                    </div>
                </div>
                <div className="py-4 px-4  lg:px-10 xl:w-1/3 md:w-1/2 w-full mx-auto">
                    <div className="group bg-white/90 hover:shadow-xl h-full p-6 rounded-lg border-2 border-orange-500 flex flex-col relative overflow-hidden hover:scale-105 hover:rotate-2 ease-in-out hover:border-amber-300 transition-all duration-500">
                        <span className="bg-orange-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl group-hover:bg-amber-400 transition-colors duration-500">
                            POPULARNY
                        </span>
                        <h2 className="text-sm text-start tracking-widest title-font mb-1 font-medium">
                            PRO
                        </h2>
                        <h2 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200 group-hover:border-white transition-colors duration-500">
                            <span>od 500</span>
                            <span className="text-lg ml-1 font-normal text-gray-500 ">
                                zł
                            </span>
                        </h2>
                        <p className="flex items-center text-gray-800 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>

                            <Link
                                className="underline underline-offset-2 text-orange-600 ml-1"
                                to="/pomoc"
                            >
                                Multi Page/One Page
                            </Link>
                        </p>
                        <p className="flex items-center text-gray-800 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Animacje
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Darmowy{" "}
                            <Link
                                className="underline underline-offset-2 text-orange-600 ml-1"
                                to="/pomoc"
                            >
                                Hosting
                            </Link>
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            2x Darmowe Modyfikacje
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Darmowa{" "}
                            <Link
                                className="underline underline-offset-2 text-orange-600 ml-1"
                                to="/pomoc"
                            >
                                Domena
                            </Link>
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            <Link
                                className="underline underline-offset-2 text-orange-600"
                                to="/pomoc"
                            >
                                Responsywność
                            </Link>
                        </p>
                        <p className="flex items-center text-gray-800 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Formularz Kontaktowy
                        </p>
                        <p className="flex items-center text-gray-600 mb-6">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Roczna Opieka
                        </p>
                        <Link
                            to="/kontakt"
                            className="flex items-center mt-auto text-white bg-gray-700 border-0 py-2 px-4 w-full focus:outline-none  rounded group-hover:bg-gray-500 transition-colors duration-500"
                        >
                            Sprawdz
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-4 h-4 ml-auto"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <p className="text-xs text-gray-500 mt-3 text-start">
                            Termin Realizacji od 5 do 10 dni
                        </p>
                    </div>
                </div>

                <div className="py-4 px-4 lg:px-10 lg:py-6 xl:w-1/3 md:w-1/2 w-full mx-auto">
                    <div className="group bg-white/90 hover:shadow-xl h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:scale-105 hover:rotate-2 ease-in-out hover:border-amber-300 transition-all duration-500 ">
                        <h2 className="text-sm text-start tracking-widest title-font mb-1 font-medium">
                            SPECIAL
                        </h2>
                        <h2 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>od 1400</span>
                            <span className="text-lg ml-1 font-normal text-gray-500">
                                zł
                            </span>
                        </h2>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Dowolna Strona / Sklep
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            <Link
                                className="underline underline-offset-2 text-orange-600"
                                to="/pomoc"
                            >
                                Responsywność
                            </Link>
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Unikalne Animacje!
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            3x Darmowe Modyfikacje
                        </p>

                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Darmowa{" "}
                            <Link
                                className="underline underline-offset-2 text-orange-600 ml-1"
                                to="/pomoc"
                            >
                                Domena
                            </Link>
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Darmowy{" "}
                            <Link
                                className="underline underline-offset-2 text-orange-600 ml-1"
                                to="/pomoc"
                            >
                                Hosting
                            </Link>
                        </p>

                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            System CMS
                        </p>
                        <p className="flex items-center text-gray-800 mb-6">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 group-hover:bg-green-500 transition-colors duration-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2.5"
                                    className="w-3 h-3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>
                            Formularz Kontaktowy
                        </p>
                        <Link
                            to="/kontakt"
                            className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none rounded group-hover:bg-gray-700 transition-colors duration-500"
                        >
                            Sprawdz
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-4 h-4 ml-auto"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <p className="text-xs text-gray-500 mt-3 text-start">
                            Termin Realizacji od 7 do 14 dni
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-6 md:py-24">
            <p className="font-semibold">
                {" "}
                Strony, które przyciągają wzrok, skutecznie przekazują
                informacje i prowadzą do sukcesu!
            </p>
            <p className="pb-6 md:pb-24 pt-1 md:pt-2 text-gray-800">
                *Dla każdej strony wcześniejszy darmowy projekt!
            </p>
        </div>
    </section>
);

export default Price;
