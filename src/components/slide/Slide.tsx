import Icon from "../icons/Icon";

export default function Slide() {
  const className = "fill-[#333333] hover:fill-white min-w-[50px]";
  const width = 50;

  return (
    <div className="bg-[#1A1A1A] border-y-2 border-[#3C3C3C] h-60 p-10 flex gap-3 ">
      <Icon name="javascript" width={width} className={className} />
      <Icon name="react" width={width} color="#333333" className={className} />
      <Icon name="typescript" width={width} className={className} />
      <Icon name="vue" width={width} className={className} />
      <Icon name="next" width={width} className={className} />
      <Icon name="html" width={width} className={className} />
      <Icon name="css" width={width} className={className} />
      <Icon name="node" width={width} className={className} />
      <Icon name="docker" width={width} className={className} />
      <Icon name="svelte" width={width} className={className} />
      <Icon name="figma" width={width} className={className} />
      <Icon name="postgresql" width={width} className={className} />
      <Icon name="npm" width={width} className={className} />
      <Icon name="mysql" width={width} className={className} />
      <Icon name="firebase" width={width} className={className} />
      <Icon name="mongodb" width={width} className={className} />
      <Icon name="knex" width={width} className={className} />
      <Icon name="tailwind" width={width} className={className} />
      <Icon name="git" width={width} className={className} />
      <Icon name="webpack" width={width} className={className} />
      <Icon name="yarn" width={width} className={className} />
      <Icon name="jest" width={width} className={className} />
    </div>
  );
}
