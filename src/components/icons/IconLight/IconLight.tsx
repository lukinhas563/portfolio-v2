import { IconsProps } from "../icons";

export default function IconLight({ className, color, width }: IconsProps) {
  return (
    <svg
      width={width}
      height={width}
      className={className}
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M73.1251 39C73.1328 39.9998 72.8289 40.9771 72.2556 41.7962C71.6822 42.6153 70.8679 43.2354 69.9259 43.5703L50.5965 50.5994L43.5704 69.9258C43.2241 70.8587 42.6006 71.6634 41.7836 72.2316C40.9666 72.7998 39.9953 73.1043 39.0001 73.1043C38.0049 73.1043 37.0336 72.7998 36.2166 72.2316C35.3996 71.6634 34.7761 70.8587 34.4298 69.9258L27.4037 50.5964L8.07432 43.5703C7.14136 43.224 6.33673 42.6005 5.76852 41.7835C5.20031 40.9665 4.89575 39.9951 4.89575 39C4.89575 38.0048 5.20031 37.0335 5.76852 36.2165C6.33673 35.3995 7.14136 34.776 8.07432 34.4297L27.4037 27.4036L34.4298 8.0742C34.7761 7.14124 35.3996 6.33661 36.2166 5.7684C37.0336 5.20019 38.0049 4.89563 39.0001 4.89563C39.9953 4.89563 40.9666 5.20019 41.7836 5.7684C42.6006 6.33661 43.2241 7.14124 43.5704 8.0742L50.5996 27.4036L69.9259 34.4297C70.8679 34.7646 71.6822 35.3847 72.2556 36.2038C72.8289 37.0229 73.1328 38.0002 73.1251 39Z"
        fill={color}
      />
    </svg>
  );
}