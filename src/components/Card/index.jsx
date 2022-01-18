import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Skeleton,
  Text,
  VStack
} from "@chakra-ui/react";
import CardTag from "../CardTag";

const Card = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <VStack
      m="50px auto"
      w="50%"
      border="solid 1px"
      borderRadius="10px"
      // overflow="hidden"
      paddingBottom="3"
      position="relative"
    >
      <CardTag />
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
          src="https://c.wallhere.com/photos/bf/94/Pok_mon_video_games_pixel_art_pixels-1361959.jpg!d"
          alt="pixel"
          // marginTop="0 !important"
          // borderRadius="10px 10px 0 0"
        />
      </Skeleton>
      <Text textAlign="justify" p="5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Curabitur vitae nunc
        sed velit dignissim sodales ut. Tristique senectus et netus et malesuada
        fames ac turpis. Egestas maecenas pharetra convallis posuere morbi leo
        urna. Lacus vestibulum sed arcu non odio euismod lacinia.
      </Text>
      <Button colorScheme="red"> button </Button>
    </VStack>
  );
};

export default Card;
