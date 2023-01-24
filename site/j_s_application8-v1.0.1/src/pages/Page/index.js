import React from "react";

import { Text, Line } from "components";

const Page = () => {
  return (
    <>
      <div className="bg-bluegray_101 flex flex-col font-roboto items-center justify-start mx-[auto] pb-[26px] w-[100%]">
        <div className="flex flex-col gap-[26px] items-start justify-start w-[100%]">
          <div className="bg-gray_400 flex flex-col items-start justify-start pb-[43px] sm:pr-[20px] md:pr-[40px] pr-[43px] shadow-bs4 w-[100%]">
            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[14%]">
              <div className="flex flex-col h-[74px] md:h-[auto] sm:h-[auto] items-start justify-start sm:pl-[20px] md:pl-[40px] pl-[41px] pt-[30px] w-[182px]">
                <Text
                  className="text-left text-white_A700_b2 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Créativ’IA
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row gap-[31px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[3px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[73%]">
            <aside className="md:hidden sm:hidden md:mt-[0] sm:mt-[0] mt-[68px] p-[40px] sm:px-[20px] w-[361px]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[25px] h-[568px] md:h-[auto] sm:h-[auto] items-start justify-between w-[285px]">
                  <Text
                    className="font-normal font-roboto leading-[150.00%] not-italic self-stretch text-black_900 text-left"
                    as="h2"
                    variant="h2"
                  >
                    Bonjour,
                    <br />
                    Je suis Créativ’IA
                  </Text>
                  <Line className="bg-black_900_7f h-[1px] self-stretch w-[100%]" />
                  <Text
                    className="font-roboto leading-[150.00%] max-w-[285px] self-stretch text-black_900 text-left"
                    as="h5"
                    variant="h5"
                  >
                    Explorer les nouvelles frontières de la création
                  </Text>
                  <Text
                    className="font-light font-ubuntu leading-[150.00%] self-stretch text-black_900 text-left"
                    as="h6"
                    variant="h6"
                  >
                    <span className="text-black_900 text-[20px] font-roboto">
                      Je suis capable de générer en un temps record des contenus{" "}
                    </span>
                    <span className="text-black_900 text-[20px] font-roboto font-medium">
                      originaux
                    </span>
                    <span className="text-black_900 text-[20px] font-roboto">
                      ,{" "}
                    </span>
                    <span className="text-black_900 text-[20px] font-roboto font-medium">
                      uniques
                    </span>
                    <span className="text-black_900 text-[20px] font-roboto">
                      {" "}
                      et{" "}
                    </span>
                    <span className="text-black_900 text-[20px] font-roboto font-medium">
                      adaptés à vos besoins
                    </span>
                    <span className="text-black_900 text-[20px] font-roboto">
                      {" "}
                      <br />
                      <br />
                      J’utilise des algorithmes avancés pour comprendre les
                      tendances du marché et les préférences de vos clients, ce
                      qui garantit que le contenu généré est pertinent et de
                      qualité supérieure.
                    </span>
                  </Text>
                </div>
              </div>
            </aside>
            <div className="bg-white_A700 h-[855px] shadow-bs5 w-[63%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
