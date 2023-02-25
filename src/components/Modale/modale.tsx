import "./modale.scss";

type ModaleProps = {
  title: string;
  description: string;
  displayed: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function Modale({
  title,
  description,
  displayed,
  onClick,
}: ModaleProps) {
  return (
    <div className="full-screen" data-display={displayed}>
      <div className="modale">
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={onClick ?? undefined}>OK</button>
      </div>
    </div>
  );
}
