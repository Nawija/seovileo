import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import w1 from "../images/portfolio/w1.png";
import w2 from "../images/portfolio/w2.png";
import w3 from "../images/portfolio/w3.png";
import zw from "../images/portfolio/zw.png";

const Portfolio = () => (
    <Layout>
        <div class="flex flex-col sm:flex-row flex-wrap justify-center px-4 py-8 md:py-16">
            <div class="relative rounded-lg shadow-lg  bg-white max-w-sm overflow-hidden m-4 h-96">
                <img
                    className="hover:scale-110 object-contain transition duration-300 ease-in-out rounded-t-lg"
                    src={w1}
                    alt="Strona Internetowa"
                />
                <div class=" absolute bottom-0 bg-no-repeat z-10 bg-white w-full">
                    <div class="p-6">
                        {/* <Link
                            to="https://seovileo.pl"
                            class="text-gray-900 text-xl font-medium mb-2 "
                        >
                            https://seovileo.pl
                        </Link> */}
                        <p class="text-gray-700 text-lg sm:mb-4">
                            Jacht na wakacje, Rezerwacja jachtu jest prosta i
                            szybka, a strona zapewnia także wsparcie i pomoc w
                            każdej chwili.
                        </p>
                    </div>
                </div>
            </div>

            <div class="relative rounded-lg shadow-lg bg-white max-w-sm overflow-hidden m-4 h-96">
                <img
                    className="hover:scale-110 object-contain transition duration-300 ease-in-out rounded-t-lg"
                    src={w2}
                    alt="Strona Internetowa"
                />
                <div class=" absolute bottom-0 bg-no-repeat z-10 bg-white w-full">
                    <div class="p-6">
                        {/* <Link
                            to="https://seovileo.pl"
                            class="text-gray-900 text-xl font-medium mb-2 "
                        >
                            https://seovileo.pl
                        </Link> */}
                        <p class="text-gray-700 text-lg sm:mb-4">
                            Platforma umożliwiająca rejestrację na różne
                            wycieczki i wyprawy. Zawiera ona opisy tras, daty i
                            ceny
                        </p>
                    </div>
                </div>
            </div>

            <div class="relative rounded-lg shadow-lg bg-white max-w-sm overflow-hidden m-4 h-96">
                <img
                    className="hover:scale-110 object-contain transition duration-300 ease-in-out rounded-t-lg"
                    src={w3}
                    alt="Strona Internetowa"
                />
                <div class=" absolute bottom-0 bg-no-repeat z-10 bg-white w-full">
                    <div class="p-6">
                        {/* <Link
                            to="https://seovileo.pl"
                            class="text-gray-900 text-xl font-medium mb-2 "
                        >
                            https://seovileo.pl
                        </Link> */}
                        <p class="text-gray-700 text-lg sm:mb-4">
                            Miejsce gdzie można łatwo znaleźć i wynająć idealne
                            miejsce nie tylko nawakacje
                        </p>
                    </div>
                </div>
            </div>

            <div class="relative rounded-lg shadow-lg bg-white max-w-sm overflow-hidden m-4 h-96">
                <img
                    className="hover:scale-110 object-contain transition duration-300 ease-in-out rounded-t-lg"
                    src={zw}
                    alt="Strona Internetowa"
                />
                <div class=" absolute bottom-0 bg-no-repeat z-10 bg-white w-full">
                    <div class="p-6">
                        {/* <Link
                            to="https://seovileo.pl"
                            class="text-gray-900 text-xl font-medium mb-2 "
                        >
                            https://seovileo.pl
                        </Link> */}
                        <p class="text-gray-700 text-lg sm:mb-4">
                            Już niedługo będziecie mogli zobaczyć więcej zdjęć,
                            Nie możemy się już doczekać aby pokazać Wam naszą
                            pełną galerię
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export const Head = () => <Seo title="Portfolio" />;

export default Portfolio;
