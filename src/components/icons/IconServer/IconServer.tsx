import { IconsProps } from "../icons";

export default function IconServer({ className, color, width }: IconsProps) {
  return (
    <svg
      className={className}
      width={`${width}px`}
      height={`${width}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Servidor</title>
      <desc>Icode de servidor</desc>

      <path
        d="M7 7C7.55229 7 8 6.55229 8 6C8 5.44772 7.55229 5 7 5C6.44771 5 6 5.44772 6 6C6 6.55229 6.44771 7 7 7Z"
        fill={color}
      />
      <path
        d="M8 14C8 14.5523 7.55229 15 7 15C6.44771 15 6 14.5523 6 14C6 13.4477 6.44771 13 7 13C7.55229 13 8 13.4477 8 14Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 1C20.6569 1 22 2.34315 22 4V8C22 8.76836 21.7111 9.46925 21.2361 10C21.7111 10.5308 22 11.2316 22 12V16C22 17.6569 20.6569 19 19 19H13V21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H11V19H5C3.34315 19 2 17.6569 2 16V12C2 11.2316 2.28885 10.5308 2.7639 10C2.28885 9.46925 2 8.76836 2 8V4C2 2.34315 3.34315 1 5 1H19ZM5 9H19C19.5523 9 20 8.55228 20 8V4C20 3.44772 19.5523 3 19 3H5C4.44772 3 4 3.44772 4 4V8C4 8.55228 4.44772 9 5 9ZM5 11C4.44772 11 4 11.4477 4 12V16C4 16.5523 4.44772 17 5 17H19C19.5523 17 20 16.5523 20 16V12C20 11.4477 19.5523 11 19 11H5Z"
        fill={color}
      />
    </svg>
  );
}
