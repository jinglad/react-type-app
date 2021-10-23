type OneOrTheOtherProps =
  | { collapsed?: boolean; expanded?: never }
  | { collapsed?: never; expanded?: boolean };

export function OneOrTheOther(props: OneOrTheOtherProps) {
  return <pre>{JSON.stringify(props)}</pre>;
}

const Example2 = () => {
  return (
    <div>
      <OneOrTheOther expanded />
    </div>
  );
};

export default Example2;
