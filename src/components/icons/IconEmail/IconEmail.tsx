import { IconsProps } from "../icons";

export default function IconEmail({ width, color, className }: IconsProps) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 39 39"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>E-mail</title>
      <desc>Icone de e-mail</desc>

      <path d="M35.75 13.52V29.25C35.75 30.112 35.4076 30.9386 34.7981 31.5481C34.1886 32.1576 33.3619 32.5 32.5 32.5H6.5C5.63805 32.5 4.8114 32.1576 4.2019 31.5481C3.59241 30.9386 3.25 30.112 3.25 29.25V14.1213L6.5 15.8925L18.72 22.555C18.9596 22.6843 19.2278 22.7514 19.5 22.75C19.7861 22.747 20.0664 22.6686 20.3125 22.5225L32.5 15.4213L35.75 13.52Z" />
      <path d="M35.75 9.75L32.5 11.6675L19.5 19.2562L6.5 12.1875L3.25 10.4V9.75C3.25 8.88805 3.59241 8.0614 4.2019 7.4519C4.8114 6.84241 5.63805 6.5 6.5 6.5H32.5C33.3619 6.5 34.1886 6.84241 34.7981 7.4519C35.4076 8.0614 35.75 8.88805 35.75 9.75Z" />
    </svg>
  );
}
