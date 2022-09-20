export default function IndexPage(): JSX.Element {
  return (
    <div>
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i}>indexpage</div>
      ))}
    </div>
  );
}
