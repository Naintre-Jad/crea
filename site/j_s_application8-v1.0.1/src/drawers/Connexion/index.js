import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Text, Button, Img } from "components";
import { useGoogleLogin } from "@react-oauth/google";

const ConnexionDrawer = (props) => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  return (
    <>
      <Drawer placement="left" className="!w-[43%]" {...props}>
        <div>
          <div className="flex flex-col items-start justify-start mx-[auto] md:w-[100%] sm:w-[100%]">
            <div className="bg-white_A700_05 border border-deep_purple_A200_33 border-solid flex flex-col items-start justify-center p-[38px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] rounded-bl-[0] rounded-br-[40px] rounded-tl-[0] rounded-tr-[40px] w-[100%]">
              <div className="flex flex-col gap-[12px] h-[730px] md:h-[auto] sm:h-[auto] items-start justify-center my-[44px] py-[25px] sm:w-[100%] w-[551px]">
                <div className="flex flex-col gap-[10px] h-[105px] md:h-[auto] sm:h-[auto] items-start justify-center px-[19px] py-[16px] w-[auto]">
                  <Text
                    className="font-ubuntu not-italic text-black_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Creer un compte
                  </Text>
                  <Text
                    className="font-hairline font-roboto text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    En moins de 2min
                  </Text>
                </div>
                <Button
                  className="flex items-center justify-center text-center w-[428px]"
                  onClick={googleSignIn}
                  leftIcon={
                    <div className="h-[24px] mr-[1px] w-[24px] bg-white_A700 text-center p-[1px] flex justify-center items-center">
                      <Img
                        src="images/img_google.svg"
                        className="text-center"
                        alt="google"
                      />
                    </div>
                  }
                  shape="RoundedBorder10"
                  size="sm"
                  variant="OutlineBlack9002a"
                >
                  <div className="common-pointer bg-transparent cursor-pointer font-medium font-roboto leading-[normal] min-w-[78%] text-[20px] text-black_900_89 text-left w-[max-content]">
                    Continue with Google
                  </div>
                </Button>
                <div className="flex flex-row font-roboto gap-[9px] h-[65px] md:h-[auto] sm:h-[auto] items-center justify-center pb-[23px] pt-[15px] px-[18px] sm:w-[100%] w-[372px]">
                  <div className="bg-black_900_7f h-[1px] w-[14%]"></div>
                  <Text
                    className="font-hairline text-black_900 text-center w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    ou continuer avec votre email
                  </Text>
                  <div className="bg-black_900_7f h-[1px] w-[14%]"></div>
                </div>
                <div className="flex sm:flex-col flex-row font-roboto gap-[40px] h-[113px] md:h-[auto] sm:h-[auto] items-start justify-start pr-[8px] sm:w-[100%] w-[551px]">
                  <div className="flex flex-col gap-[9px] items-start justify-end pr-[7px] py-[7px] md:w-[100%] sm:w-[100%] w-[49%]">
                    <Text
                      className="font-light mt-[15px] text-black_900 text-left w-[auto]"
                      variant="body2"
                    >
                      Nom
                    </Text>
                    <Img
                      src="images/img_group8.svg"
                      className="h-[42px] w-[auto]"
                      alt="GroupEight"
                    />
                  </div>
                  <div className="flex flex-col gap-[11px] items-start justify-end p-[5px] md:w-[100%] sm:w-[100%] w-[45%]">
                    <Text
                      className="font-light md:ml-[0] sm:ml-[0] ml-[6px] mt-[16px] text-black_900 text-left w-[auto]"
                      variant="body2"
                    >
                      Prénom
                    </Text>
                    <Img
                      src="images/img_group8.svg"
                      className="h-[42px] md:ml-[0] sm:ml-[0] ml-[6px] w-[auto]"
                      alt="GroupEight One"
                    />
                  </div>
                </div>
                <div className="flex flex-col font-roboto gap-[10px] items-start justify-end pr-[6px] py-[6px] md:w-[100%] sm:w-[100%] w-[92%]">
                  <Text
                    className="font-light mt-[15px] text-black_900 text-left w-[auto]"
                    variant="body2"
                  >
                    Adresse email
                  </Text>
                  <Img
                    src="images/img_group8.svg"
                    className="h-[42px] w-[auto]"
                    alt="GroupEight Two"
                  />
                </div>
                <div className="flex flex-col font-roboto gap-[7px] items-start justify-end pr-[6px] py-[6px] md:w-[100%] sm:w-[100%] w-[92%]">
                  <Text
                    className="font-light mt-[15px] text-black_900 text-left w-[auto]"
                    variant="body2"
                  >
                    Mot de passe
                  </Text>
                  <Img
                    src="images/img_group8.svg"
                    className="h-[42px] w-[auto]"
                    alt="GroupEight Three"
                  />
                </div>
                <Button
                  className="flex items-center justify-center min-w-[83%] text-center w-[max-content]"
                  rightIcon={
                    <Img
                      src="images/img_arrow_1.svg"
                      className="ml-[10px] text-center"
                      alt="Arrow 1"
                    />
                  }
                  shape="RoundedBorder10"
                  size="xl"
                  variant="FillDeeppurpleA20033"
                >
                  <div className="bg-transparent cursor-pointer font-normal font-ubuntu not-italic sm:text-[26px] md:text-[28px] text-[30px] text-black_900_b2 text-left">
                    Continuer
                  </div>
                </Button>
                <div className="flex flex-col font-ubuntu items-start justify-start pr-[6px] py-[6px] md:w-[100%] sm:w-[100%] w-[66%]">
                  <Text
                    className="mb-[6px] not-italic text-black_900 text-left w-[auto]"
                    variant="body4"
                  >
                    <span className="text-black_900 text-[12px] font-ubuntu font-normal">
                      Déjà un compte ?{" "}
                    </span>
                    <span className="text-deep_purple_A200 text-[12px] font-ubuntu font-normal">
                      Se connecter
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ConnexionDrawer;
