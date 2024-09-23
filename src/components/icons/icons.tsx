import IconDownload from "./IconDownload/IconDownload";
import IconEmail from "./IconEmail/IconEmail";
import IconGithub from "./IconGithub/IconGithub";
import IconHtml from "./IconHtml/IconHtml";
import IconJavascript from "./IconJavascript/IconJavascript";
import IconLinkedin from "./IconLinkedin/IconLinkedin";
import IconNext from "./IconNext/IconNext";
import IconReact from "./IconReact/IconReact";
import IconTypescript from "./IconTypescript/IconTypescript";
import IconVue from "./IconVue/IconVue";
import IconCss from "./IconCss/IconCss";
import IconNode from "./IconNode/IconNode";
import IconDocker from "./IconDocker/IconDocker";
import IconSvelte from "./IconSvelte/IconSvelte";
import IconFigma from "./IconFigma/IconFigma";
import IconPostgresql from "./IconPostgresql/IconPostgresql";
import IconNpm from "./IconNpm/IconNpm";
import IconMysql from "./IconMysql/IconMysql";
import IconFirebase from "./IconFirebase/IconFarebase";
import IconMongodb from "./IconMongodb/IconMongodb";
import IconKnex from "./IconKnex/IconKnex";
import IconTailwind from "./IconTailwind/IconTailwind";
import IconGit from "./IconGit/IconGit";
import IconWebpack from "./IconWebpack/IconWebpack";
import IconYarn from "./IconYarn/IconYarn";
import IconJest from "./IconJest/IconJest";
import IconArrowUpRight from "./IconArrowUpRight/IconArrowUpRight";
import IconServer from "./IconServer/IconServer";
import IconComputer from "./IconComputer/IconComputer";
import IconArrowRight from "./IconArrowRight/IconArrowRight";
import IconArrowLeft from "./IconArrowLeft/IconArrowLeft";
import IconArrowUp from "./IconArrowUp/IconArrowUp";
import IconCSharp from "./IconCSharp/IconCSharp";
import IconJava from "./IconJava/IconJava";
import IconDotNet from "./IconDotNet/IconDotNet";
import IconPython from "./IconPython/IconPython";
import IconAngular from "./IconAngular/IconAngular";
import IconSpring from "./IconSpring/IconSpring";
import IconRabbitMQ from "./IconRabbitMQ/IconRabbitMQ";
import IconAWS from "./IconAWS/IconAWS";
import IconAzure from "./IconAzure/IconAzure";
import IconStar from "./IconStar/IconStar";
import IconShootingStar from "./IconShootingStart/IconShotingStar";
import IconLight from "./IconLight/IconLight";

export interface IconsProps {
  width?: number;
  color?: string;
  className?: string;
}

export const icons = {
  github: ({ width, color, className }: IconsProps) => (
    <IconGithub className={className} color={color} width={width} />
  ),
  linkedin: ({ width, color, className }: IconsProps) => (
    <IconLinkedin width={width} color={color} className={className} />
  ),
  download: ({ width, color, className }: IconsProps) => (
    <IconDownload color={color} width={width} className={className} />
  ),
  email: ({ width, color, className }: IconsProps) => (
    <IconEmail className={className} color={color} width={width} />
  ),
  javascript: ({ width, color, className }: IconsProps) => (
    <IconJavascript width={width} color={color} className={className} />
  ),
  react: ({ width, color, className }: IconsProps) => (
    <IconReact width={width} className={className} />
  ),
  typescript: ({ width, color, className }: IconsProps) => (
    <IconTypescript color={color} width={width} className={className} />
  ),
  vue: ({ width, color, className }: IconsProps) => (
    <IconVue color={color} width={width} className={className} />
  ),
  next: ({ width, color, className }: IconsProps) => (
    <IconNext color={color} width={width} className={className} />
  ),
  html: ({ width, color, className }: IconsProps) => (
    <IconHtml width={width} color={color} className={className} />
  ),
  css: ({ width, color, className }: IconsProps) => (
    <IconCss width={width} color={color} className={className} />
  ),
  node: ({ width, color, className }: IconsProps) => (
    <IconNode width={width} color={color} className={className} />
  ),
  docker: ({ width, color, className }: IconsProps) => (
    <IconDocker width={width} color={color} className={className} />
  ),
  svelte: ({ width, color, className }: IconsProps) => (
    <IconSvelte width={width} color={color} className={className} />
  ),
  figma: ({ width, color, className }: IconsProps) => (
    <IconFigma width={width} color={color} className={className} />
  ),
  postgresql: ({ width, color, className }: IconsProps) => (
    <IconPostgresql width={width} color={color} className={className} />
  ),
  npm: ({ width, color, className }: IconsProps) => (
    <IconNpm width={width} color={color} className={className} />
  ),
  mysql: ({ width, color, className }: IconsProps) => (
    <IconMysql width={width} color={color} className={className} />
  ),
  firebase: ({ width, color, className }: IconsProps) => (
    <IconFirebase width={width} color={color} className={className} />
  ),
  mongodb: ({ width, color, className }: IconsProps) => (
    <IconMongodb width={width} color={color} className={className} />
  ),
  knex: ({ width, color, className }: IconsProps) => (
    <IconKnex width={width} color={color} className={className} />
  ),
  tailwind: ({ width, color, className }: IconsProps) => (
    <IconTailwind width={width} color={color} className={className} />
  ),
  git: ({ width, color, className }: IconsProps) => (
    <IconGit width={width} color={color} className={className} />
  ),
  webpack: ({ width, color, className }: IconsProps) => (
    <IconWebpack width={width} color={color} className={className} />
  ),
  yarn: ({ width, color, className }: IconsProps) => (
    <IconYarn width={width} color={color} className={className} />
  ),
  jest: ({ width, color, className }: IconsProps) => (
    <IconJest width={width} color={color} className={className} />
  ),
  arrowupright: ({ width, color, className }: IconsProps) => (
    <IconArrowUpRight width={width} color={color} className={className} />
  ),
  server: ({ width, color, className }: IconsProps) => (
    <IconServer width={width} color={color} className={className} />
  ),
  computer: ({ width, color, className }: IconsProps) => (
    <IconComputer width={width} color={color} className={className} />
  ),
  arrowright: ({ width, color, className }: IconsProps) => (
    <IconArrowRight width={width} color={color} className={className} />
  ),
  arrowleft: ({ width, color, className }: IconsProps) => (
    <IconArrowLeft width={width} color={color} className={className} />
  ),
  arrowup: ({ width, color, className }: IconsProps) => (
    <IconArrowUp width={width} color={color} className={className} />
  ),
  csharp: ({ width, color, className }: IconsProps) => (
    <IconCSharp width={width} color={color} className={className} />
  ),
  java: ({ width, color, className }: IconsProps) => (
    <IconJava width={width} color={color} className={className} />
  ),
  dotnet: ({ width, color, className }: IconsProps) => (
    <IconDotNet width={width} color={color} className={className} />
  ),
  python: ({ width, color, className }: IconsProps) => (
    <IconPython width={width} color={color} className={className} />
  ),
  angular: ({ width, color, className }: IconsProps) => (
    <IconAngular width={width} color={color} className={className} />
  ),
  spring: ({ width, color, className }: IconsProps) => (
    <IconSpring width={width} color={color} className={className} />
  ),
  rabbitmq: ({ width, color, className }: IconsProps) => (
    <IconRabbitMQ width={width} color={color} className={className} />
  ),
  aws: ({ width, color, className }: IconsProps) => (
    <IconAWS width={width} color={color} className={className} />
  ),
  azure: ({ width, color, className }: IconsProps) => (
    <IconAzure width={width} color={color} className={className} />
  ),
  star: ({ width, color, className }: IconsProps) => (
    <IconStar width={width} color={color} className={className} />
  ),
  shootingstar: ({ width, color, className }: IconsProps) => (
    <IconShootingStar width={width} color={color} className={className} />
  ),
  light: ({ width, color, className }: IconsProps) => (
    <IconLight width={width} color={color} className={className} />
  ),
};
