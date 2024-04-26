import { IconsProps } from "../icons";

export default function IconFigma({ className, color, width }: IconsProps) {
  return (
    <svg
      className={className}
      width={`${width}px`}
      height={`${width}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Figma</title>
      <desc>Icode de habilidade em Figma</desc>

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.66699 9.41667C7.24021 9.41667 6.08366 10.5731 6.08366 11.9998C6.08366 13.4266 7.24026 14.5832 8.66699 14.5832H11.2503V12.0519C11.2501 12.0346 11.25 12.0172 11.25 11.9998C11.25 11.9825 11.2501 11.9651 11.2503 11.9478V9.41667H8.66699ZM11.2503 7.91667H8.66699C7.24026 7.91667 6.08366 6.76007 6.08366 5.33333C6.08366 3.9066 7.24026 2.75 8.66699 2.75H11.2503V7.91667ZM12.7503 2.75V7.91663L15.333 7.9165C16.7597 7.9165 17.9167 6.76002 17.9167 5.33333C17.9167 3.9066 16.7601 2.75 15.3333 2.75H12.7503ZM15.3331 9.4165C13.9203 9.41664 12.7724 10.5509 12.7503 11.9584V12.0412C12.7724 13.4489 13.9204 14.5832 15.3333 14.5832C16.7601 14.5832 17.9167 13.4266 17.9167 11.9998C17.9167 10.5731 16.7598 9.41652 15.3331 9.4165ZM8.66699 16.0832C7.2403 16.0832 6.0835 17.24 6.0835 18.6668C6.0835 20.0936 7.24009 21.2502 8.66683 21.2502C10.0936 21.2502 11.2502 20.0936 11.2502 18.6668L11.2503 16.0832H8.66699Z"
        fill={color}
      />
    </svg>
  );
}
