export type Example1Props = { fullName: string } & (
  | { shape: "circle"; radius: number }
  | { shape: "square"; width: number }
  | { shape: "rectangle"; width: number; height: number }
);

export function Drawer(props: Example1Props) {
  return <pre>{JSON.stringify(props)}</pre>;
}

const Example1 = () => {
  return (
    <div>
      <Drawer fullName="Jihan" shape="circle" radius={55} />
    </div>
  );
};

export default Example1;
