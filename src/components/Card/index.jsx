import React, { useState } from "react";
import { Button, Image, Skeleton, Text, VStack } from "@chakra-ui/react";
import CardTag from "../CardTag";
import CardTag2 from "../CardTag2";

const Card = ({ variant }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <VStack
      m="50px auto"
      w="290px"
      border="solid 1px"
      borderRadius="10px"
      paddingBottom="3"
      position="relative"
    >
      {variant ? <CardTag2 /> : <CardTag />}
      <Skeleton
        isLoaded={!isLoading}
        h="fit-content"
        w="100%"
        marginTop="0 !important"
        borderRadius="10px 10px 0 0"
        overflow="hidden"
      >
        <Image
          onLoad={() => setIsLoading(false)}
          display={isLoading ? "none" : "unset"}
          src={
            variant
              ? "https://pixeljoint.com/files/icons/full/wayuki_warrior_of_light.gif"
              : "https://c.wallhere.com/photos/bf/94/Pok_mon_video_games_pixel_art_pixels-1361959.jpg!d"
          }
          alt="pixel"
          // marginTop="0 !important"
          // borderRadius="10px 10px 0 0"
        />
      </Skeleton>
      <Text textAlign="justify" p="5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Button colorScheme="red"> button </Button>
    </VStack>
  );
};

export default Card;
