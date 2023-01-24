import React from "react";

import { Text, Img, Line, Button } from "components";

const PageFour = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto items-center justify-start mx-[auto] w-[100%]">
        <div
          className="bg-cover bg-no-repeat bg-white_A700 flex flex-col gap-[29px] items-center justify-start w-[100%]"
          style={{ backgroundImage: "url('images/img_desktopfond.png')" }}
        >
          <div className="h-[147px] relative w-[100%]">
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
          <div className="h-[848px] max-w-[1401px] ml-[auto] mr-[auto] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] relative w-[100%]">
            <div className="absolute bottom-[0] flex flex-col gap-[306px] md:gap-[40px] sm:gap-[40px] inset-x-[0] justify-start mx-[auto] w-[100%]">
              <Img
                src="images/img_volume.svg"
                className="h-[93px] w-[44px]"
                alt="volume"
              />
              <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[1256px] p-[30px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[12%]">
                <Text
                  className="my-[11px] text-left text-white_A700 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  04
                </Text>
              </div>
            </div>
            <div className="absolute font-montserrat h-[720px] inset-x-[0] mx-[auto] top-[0] md:w-[100%] sm:w-[100%] w-[85%]">
              <div className="h-[717px] m-[auto] w-[100%]">
                <Img
                  src="images/img_carte.svg"
                  className="h-[717px] m-[auto] w-[auto]"
                  alt="Carte"
                />
                <div className="absolute flex flex-row h-[max-content] inset-y-[0] items-start justify-between my-[auto] right-[2%] w-[34%]">
                  <Line className="bg-white_A700 h-[656px] mt-[22px] w-[1px]" />
                  <div className="flex flex-col h-[24px] md:h-[auto] sm:h-[auto] items-start justify-start px-[14px] w-[auto]">
                    <Text
                      className="not-italic text-gray_600 text-left w-[auto]"
                      variant="body3"
                    >
                      Liste de paramètres utilisés
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute flex md:flex-col sm:flex-col flex-row md:gap-[59px] sm:gap-[59px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[97%]">
                <div className="bg-white_A700_33 border border-gray_300 border-solid flex flex-col h-[655px] md:h-[auto] sm:h-[auto] items-start justify-start max-w-[687px] p-[30px] sm:px-[20px] rounded-radius15 w-[100%]">
                  <Text
                    className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] not-italic text-bluegray_900 text-left"
                    as="h6"
                    variant="h6"
                  >
                    {`Le monde d'aujourd'hui est en constante évolution et les entreprises doivent être en mesure de s'adapter rapidement pour rester compétitives. Cependant, la création de contenu de qualité peut prendre beaucoup de temps et d'efforts, ce qui peut être un frein pour les entreprises qui cherchent à publier régulièrement du contenu pour leurs clients.`}
                    <br />
                    <br />
                    {`C'est là qu'intervient notre service Cr. Nous offrons une solution pour vous aider à gagner du temps en fournissant des textes qualitatifs générés par l'intelligence artificielle. Avec notre service, vous pouvez vous concentrer sur ce qui est important pour votre entreprise tout en ayant la garantie d'avoir du contenu de qualité pour vos clients.`}
                    <br />
                    <br />
                    Notre service est également facile à utiliser. Il vous
                    suffit de nous fournir des informations sur le sujet que
                    vous souhaitez aborder et notre IA se chargera du reste.
                    Vous pouvez également personnaliser le contenu en fonction
                    de vos besoins spécifiques.
                    <br />
                    <br />
                    {`En utilisant notre service AI Content Co, vous pouvez économiser beaucoup de temps et d'efforts tout en étant assuré d'avoir du contenu de qualité pour vos clients. Nous comprenons que la création de contenu peut être stressante, c'est pourquoi nous voulons vous aider à vous libérer de cette tâche afin que vous puissiez vous concentrer sur ce qui est vraiment important pour votre entreprise.`}
                  </Text>
                </div>
                <div className="flex flex-col font-roboto h-[635px] md:h-[auto] sm:h-[auto] items-center justify-start sm:w-[100%] w-[403px]">
                  <div className="flex flex-col items-center justify-end p-[14px] md:w-[100%] sm:w-[100%] w-[96%]">
                    <div className="flex flex-col gap-[30px] h-[603px] md:h-[auto] sm:h-[auto] items-center justify-center mt-[4px] w-[328px]">
                      <Button className="cursor-pointer font-normal leading-[normal] min-w-[97%] not-italic text-[18px] text-center text-white_A700 w-[max-content]">
                        Article promotionnel
                      </Button>
                      <Button className="cursor-pointer font-normal leading-[normal] min-w-[97%] not-italic text-[18px] text-center text-white_A700 w-[max-content]">
                        Produit Amazon
                      </Button>
                      <Button className="cursor-pointer font-normal leading-[normal] min-w-[97%] not-italic text-[18px] text-center text-white_A700 w-[max-content]">
                        Post Facebook
                      </Button>
                      <Button className="cursor-pointer font-normal leading-[normal] min-w-[97%] not-italic text-[18px] text-center text-white_A700 w-[max-content]">
                        Post Twitter
                      </Button>
                      <Button className="cursor-pointer font-normal leading-[normal] min-w-[97%] not-italic text-[18px] text-center text-white_A700 w-[max-content]">
                        Description Instagram
                      </Button>
                      <Button className="cursor-pointer font-normal leading-[normal] min-w-[97%] not-italic text-[18px] text-center text-white_A700 w-[max-content]">
                        Scénario publicitaire
                      </Button>
                      <Button className="cursor-pointer font-normal leading-[normal] min-w-[97%] not-italic text-[18px] text-center text-white_A700 w-[max-content]">
                        Email publicitaire
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageFour;
