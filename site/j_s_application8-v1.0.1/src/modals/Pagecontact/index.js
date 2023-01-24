import React from "react";
import ModalProvider from "react-modal";

import { Text, Line, Input, Button } from "components";

const PagecontactModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[83%]"
        overlayClassName="bg-white_A700 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <div className="bg-white_A700_05 flex flex-col gap-[11px] h-[720px] md:h-[auto] sm:h-[auto] items-start justify-start max-w-[1182px] ml-[auto] mr-[auto] mt-[48px] p-[30px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] rounded-radius42 w-[100%]">
            <div className="flex flex-col font-roboto gap-[25px] items-start justify-start md:w-[100%] sm:w-[100%] w-[64%]">
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Contact
              </Text>
              <Line className="bg-black_900 h-[1px] shadow-bs2 w-[100%]" />
            </div>
            <Text
              className="font-roboto text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              N'hésitez pas à nous contacter pour des conseils ou de l'aide
            </Text>
            <div className="flex flex-col font-montserrat h-[32px] md:h-[auto] sm:h-[auto] items-start justify-start max-w-[730px] w-[100%]">
              <Text
                className="self-stretch text-gray_600 text-left w-[auto]"
                variant="body1"
              >
                Nom
              </Text>
            </div>
            <div className="flex flex-col font-montserrat gap-[8px] items-start justify-start sm:w-[100%] w-[388px]">
              <Text
                className="font-normal italic self-stretch text-gray_600 text-left w-[auto]"
                variant="body2"
              >
                Entrez votre nom...
              </Text>
              <Line className="bg-indigo_300 h-[1px] self-stretch w-[100%]" />
            </div>
            <div className="flex flex-col font-montserrat h-[32px] md:h-[auto] sm:h-[auto] items-start justify-start max-w-[730px] w-[100%]">
              <Text
                className="self-stretch text-gray_600 text-left w-[auto]"
                variant="body1"
              >
                Email{" "}
              </Text>
            </div>
            <Input
              className="font-montserrat font-normal italic sm:mx-[0] p-[0] text-[16px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
              wrapClassName="sm:w-[100%] w-[388px]"
              type="email"
              name="FrameEightyEight"
              placeholder="Entrez votre email..."
            ></Input>
            <div className="flex flex-col font-montserrat h-[32px] md:h-[auto] sm:h-[auto] items-start justify-start max-w-[730px] w-[100%]">
              <Text
                className="self-stretch text-gray_600 text-left w-[auto]"
                variant="body1"
              >
                Numéro de téléphone
              </Text>
            </div>
            <Input
              className="font-montserrat font-normal italic sm:mx-[0] p-[0] text-[16px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
              wrapClassName="sm:w-[100%] w-[388px]"
              name="FrameEightyNine"
              placeholder="Entrez votre numéro..."
            ></Input>
            <div className="flex flex-col font-montserrat items-start justify-start md:w-[100%] sm:w-[100%] w-[61%]">
              <Text
                className="md:ml-[0] sm:ml-[0] ml-[3px] text-gray_600 text-left w-[auto]"
                variant="body1"
              >
                Message
              </Text>
              <div className="bg-white_A700_33 border border-gray_300 border-solid flex flex-col h-[142px] md:h-[auto] sm:h-[auto] items-start justify-start max-w-[680px] pl-[16px] pr-[8px] py-[14px] rounded-radius4 w-[100%]">
                <Text
                  className="font-normal italic text-gray_600 text-left w-[auto]"
                  variant="body2"
                >
                  Entrez votre message...
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-normal font-roboto leading-[normal] min-w-[23%] not-italic text-[18px] text-black_900 text-center w-[max-content]"
              size="md"
              variant="OutlineBlack900"
            >
              Envoyer
            </Button>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default PagecontactModal;
