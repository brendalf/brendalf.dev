import { faHatWizard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <FontAwesomeIcon
          icon={faHatWizard}
          className="dark:text-orange-400 text-purple-800"
        />
        <p className="font-bold dark:text-white text-gray-800 ml-1">brendalf</p>
      </LogoBox>
    </Link>
  );
};
export default Logo;
