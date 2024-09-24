import { IconsProps } from "../icons";

export default function IconHalfArrowUp({
  className,
  color,
  width,
}: IconsProps) {
  return (
    <svg
      width={width}
      height={width}
      className={className}
      viewBox="0 0 14 15"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_151_156)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.43861 13.5216C5.43861 13.3364 5.48967 13.1502 5.60085 12.9863L9.02344 7.85576L5.56708 2.88411C5.27144 2.43859 5.39167 1.83823 5.8372 1.54259C6.28109 1.24529 6.88308 1.36553 7.17873 1.81106L10.9925 7.31882C11.2099 7.64247 11.2099 8.06659 10.9941 8.39188L7.21414 14.0586C6.9185 14.5041 6.31485 14.6252 5.87097 14.3287C5.58932 14.1409 5.43861 13.8338 5.43861 13.5216Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_151_156">
          <rect
            width="14"
            height="14"
            transform="translate(14 0.5) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
