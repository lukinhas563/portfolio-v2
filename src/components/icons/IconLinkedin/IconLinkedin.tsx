import { IconsProps } from "../icons";

export default function IconLinkedin({ className, color, width }: IconsProps) {
  return (
    <svg
      width={`${width}`}
      height={`${width}`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LinkedIn</title>
      <desc>Icode do LinkedIn</desc>

      <g clip-path="url(#clip0_151_2313)">
        <path
          d="M23 0H9C4 0 0 4 0 9V23C0 28 4 32 9 32H23C28 32 32 28 32 23V9C32 4 28 0 23 0ZM12 25C12 25.6 11.6 26 11 26H7C6.4 26 6 25.6 6 25V13C6 12.4 6.4 12 7 12H11C11.6 12 12 12.4 12 13V25ZM9 11C7.3 11 6 9.7 6 8C6 6.3 7.3 5 9 5C10.7 5 12 6.3 12 8C12 9.7 10.7 11 9 11ZM26 25C26 25.6 25.6 26 25 26H22C21.4 26 21 25.6 21 25V21.5V20.5V18.5C21 17.7 20.3 17 19.5 17C18.7 17 18 17.7 18 18.5V20.5V21.5V25C18 25.6 17.6 26 17 26H14C13.4 26 13 25.6 13 25V13C13 12.4 13.4 12 14 12H18C18.3 12 18.5 12.1 18.7 12.3C19.3 12.1 19.9 12 20.5 12C23.5 12 26 14.5 26 17.5V25Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_151_2313">
          <rect width="32" height="32" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
}
