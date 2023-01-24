import React from "react";

import { Img, Text, Line } from "components";

const PageThree = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto items-center justify-end mx-[auto] w-[100%]">
        <div className="bg-white_A700 h-[1034px] relative w-[100%]">
          <Img
            src="images/img_photomain.png"
            className="h-[1034px] m-[auto] object-cover w-[100%]"
            alt="photomain"
          />
          <div className="absolute flex sm:flex-col flex-row sm:gap-[40px] h-[max-content] inset-y-[0] items-center justify-between left-[3%] my-[auto] w-[47%]">
            <Img
              src="images/img_volume.svg"
              className="h-[93px] w-[44px]"
              alt="volume"
            />
            <div className="flex flex-col gap-[25px] h-[568px] md:h-[auto] sm:h-[auto] items-start justify-between sm:w-[100%] w-[536px]">
              <Text
                className="font-normal not-italic self-stretch text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Conseils d’utilisation{" "}
              </Text>
              <Line className="bg-black_900_7f h-[1px] self-stretch w-[100%]" />
              <Text
                className="leading-[150.00%] max-w-[536px] self-stretch text-black_900 text-left"
                as="h5"
                variant="h5"
              >
                Générez des contenus originaux et adaptés à vos besoins en un
                temps record
              </Text>
              <Text
                className="font-light leading-[150.00%] self-stretch text-black_900 text-left"
                as="h6"
                variant="h6"
              >
                {`Idéale pour tous les propriétaires de sites web ou de pages de médias sociaux qui cherchent à augmenter leur présence en ligne. Je génère des contenus de qualité en un rien de temps pour divers utilisations, comme les blogs, les pages de médias sociaux, les sites web d'entreprise, les campagnes publicitaires, les courriels marketing et plus encore. `}
                <br />
                <br />
                De plus, notre plateforme vous offre également la possibilité de
                personnaliser le contenu en fonction de vos objectifs marketing
                spécifiques, que ce soit pour générer des leads, augmenter les
                conversions ou améliorer le SEO.
              </Text>
            </div>
          </div>
          <div className="absolute bottom-[1%] flex flex-col items-center justify-start p-[33px] sm:px-[20px] right-[0] w-[12%]">
            <Text
              className="my-[8px] text-left text-white_A700 w-[auto]"
              as="h1"
              variant="h1"
            >
              03
            </Text>
          </div>
          <div className="absolute h-[147px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
            <div className="absolute flex flex-row md:gap-[40px] sm:gap-[40px] inset-x-[0] items-start justify-between mx-[auto] pb-[29px] shadow-bs3 top-[0] w-[100%]">
              <div className="flex flex-col h-[74px] md:h-[auto] sm:h-[auto] items-start justify-start sm:pl-[20px] md:pl-[40px] pl-[41px] pt-[30px] w-[182px]">
                <Text
                  className="text-left text-white_A700_b2 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Créativ’IA
                </Text>
              </div>
              <Img
                src="images/img_play.svg"
                className="h-[78px] w-[78px]"
                alt="play"
              />
            </div>
            <div className="absolute flex md:flex-col sm:flex-col flex-row font-inter gap-[50px] md:h-[auto] sm:h-[auto] h-[max-content] inset-[0] items-start justify-center m-[auto] pt-[39px] w-[auto]">
              <div className="flex flex-col h-[108px] md:h-[auto] sm:h-[auto] items-start justify-start w-[auto]">
                <Text
                  className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  <span className="text-white_A700_b2 text-[20px] font-roboto">
                    EN SAVOIR PLUS{" "}
                  </span>
                  <span className="text-white_A700_b2 text-[11px] font-roboto">
                    ▼
                  </span>
                </Text>
              </div>
              <div className="flex flex-col font-roboto items-start justify-start w-[auto]">
                <Text
                  className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  DÉMONSTRATION
                </Text>
              </div>
              <div className="flex flex-col font-roboto items-start justify-start w-[auto]">
                <Text
                  className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  F.A.Q
                </Text>
              </div>
              <div className="flex flex-col font-roboto items-start justify-start w-[auto]">
                <Text
                  className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  CONTACTEZ NOUS
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageThree;
