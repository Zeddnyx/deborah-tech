import Image from "next/image";

export default function cardTeam({ image, id, role, name, desc, logo, link }) {
  return (
    <div id={id} className="card-team">
      <Image
        className="rounded-md w-full"
        src={image}
        alt={name}
        width={200}
        height={300}
      />
      <div className="grid gap-2">
        <div className="bg-gradient-to-r from-main to-pressed text-transparent bg-clip-text text-[13px]">
          {role}
        </div>
        <h4 className="font-semibold">{name}</h4>
        <div className="flex gap-2 items-start justify-between">
          <p>{desc}</p>
          {!!logo ? (
            <i>
              <a href={link}>
                <Image src={logo} width={20} height={20} alt={name} />
              </a>
            </i>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
}
