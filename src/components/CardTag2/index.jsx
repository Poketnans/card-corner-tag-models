import { border, Box, Link } from "@chakra-ui/react";
import { useState } from "react";

const color = { normal: "#0282a2cc", hover: "#0282a2" };

const CardTag2 = ({
  title = "Card Title",
  ref = "https://html5zombo.com/"
}) => {
  const [bgColor, setBgColor] = useState(color.normal);

  return (
    <Link
      href={ref}
      target="_blank"
      h="140px"
      w="140px"
      position="absolute"
      top="-1px"
      right="-1px"
      zIndex="1"
      transition="all 0.1s ease-in"
      pointerEvents="none"
      overflow="hidden"
      fontSize="13px"
      onMouseOver={() => setBgColor(color.hover)}
      onMouseOut={() => setBgColor(color.normal)}
      _focus={{
        outline: "none"
      }}
      _hover={{
        transform: "scale(1.02)"
      }}
      _before={{
        content: "''",
        position: "absolute",
        width: "15.38em",
        height: "1.54em",
        top: "3.23em",
        right: "-3.23em",
        boxSizing: "content-box",
        padding: ".38em 0",
        display: "block",
        bg: bgColor,
        transition: "inherit",
        transform: "rotate(45deg)",
        pointerEvents: "auto"
      }}
      _after={{
        content: `"${title}"`,
        position: "absolute",
        color: "#fff",
        lineHeight: "1.7em",
        fontWeight: "bold",
        width: "15.38em",
        height: "1.54em",
        top: "3.23em",
        right: "-3.23em",
        transition: "inherit",
        transform: "rotate(45deg)",
        border: "dotted .8px white",
        boxSizing: "content-box",
        padding: ".2em 0"
      }}
    />
  );
};

export default CardTag2;
