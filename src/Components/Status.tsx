type StatusProps = {
  status: "loading" | "Fetched" | "Failed";
};

const Status = (props: StatusProps) => {
  let message = "";
  if (props.status === "loading") {
    message = "Loading";
  } else if (props.status === "Fetched") {
    message = "Feching data succesfully";
  } else if (props.status === "Failed") {
    message = " Failed To fetch data";
  }
  return <div>Status - {message}</div>;
};

export default Status;
