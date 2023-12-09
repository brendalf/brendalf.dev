import Link from "next/link";
import styled from "@emotion/styled";
import hatWhite from "@/app/assets/hat-white.png";
import Image from "next/image";

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`;

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Image width={30} alt="Wizard Hat" src={hatWhite} />
        <p className="font-bold dark:text-white text-gray-800 ml-1">brendalf</p>
      </LogoBox>
    </Link>
  );
};
export default Logo;
