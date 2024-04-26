import { IconsProps } from "../icons";

export default function IconArrowUp({ className, color, width }: IconsProps) {
  return (
    <svg
      className={className}
      width={`${width}px`}
      height={`${width}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6V18M12 6L7 11M12 6L17 11"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
