import { Box, Link } from "@chakra-ui/react";
import { useState } from "react";

const color = { normal: "#505960cc", hover: "#41484e" };

const CardTag = () => {
  const [bgColor, setBgColor] = useState(color.normal);

  return (
    <Link
      href="https://html5zombo.com/"
      target="_blank"
      w="120px"
      h="120px"
      position="absolute"
      top="-6px"
      right="-6px"
      zIndex="1"
      transition="all 0.1s ease-in"
      pointerEvents="none"
      overflow="hidden"
      _focus={{
        outline: "none"
      }}
      _hover={{
        transform: "scale(1.02)"
      }}
      _before={{
        content: "''",
        h: "6px",
        w: "72px",
        position: "absolute",
        top: 0,
        left: 0,
        bg: bgColor,
        transition: "inherit"
      }}
      _after={{
        content: "''",
        h: "72px",
        w: "6px",
        position: "absolute",
        bottom: 0,
        right: 0,
        bg: bgColor,
        transition: "inherit"
      }}
    >
      <Box
        onMouseOver={() => setBgColor(color.hover)}
        onMouseOut={() => setBgColor(color.normal)}
        cursor="pointer"
        w="200px"
        p="9px 0 6px 0"
        bg={bgColor}
        position="relative"
        left="-23px"
        top="15px"
        zIndex="1"
        color="white"
        fontWeight="bold"
        textAlign="center"
        boxShadow="0 2px 4px 0 rgb(0 0 0 / 40%)"
        transition="inherit"
        pointerEvents="auto"
        transform="rotate(45deg)"
      >
        <Box fontSize="8px" textTransform="uppercase">
          card subtitle
        </Box>
        <Box fontSize="16px">Card Title</Box>
      </Box>
    </Link>
  );
};

export default CardTag;
