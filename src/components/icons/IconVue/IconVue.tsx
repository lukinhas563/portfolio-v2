import { IconsProps } from "../icons";

export default function IconVue({ className, width, color }: IconsProps) {
  return (
    <svg
      className={className}
      width={`${width}px`}
      height={`${width}px`}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>Vue</title>
      <desc>Icode de habilidade em Vue</desc>

      <path d="M19.1143 2H15L12 6.9L9.42857 2H0L12 23L24 2H19.1143ZM3 3.75H5.91429L12 14.6L18.0857 3.75H21L12 19.5L3 3.75Z" />
    </svg>
  );
}
