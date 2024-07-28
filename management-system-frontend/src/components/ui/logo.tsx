import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { appSettings } from "@/utils/app-settings";

type LogoProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  size?: number;
  url?: string;
};
const Logo: React.FC<LogoProps> = ({
  className,
  size = appSettings.logo.width,
  url = null,
  ...props
}) => {
  return (
    <Link
      href={appSettings.logo.href}
      className={cn("inline-flex focus:outline-none", className)}
      {...props}
    >
      <Image
        src={url ?? appSettings.logo.url}
        alt={appSettings.logo.alt}
        height={size}
        width={size}
        layout="fixed"
        loading="eager"
      />
    </Link>
  );
};

export default Logo;
