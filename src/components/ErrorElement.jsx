import { useRouteError } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();
  return <div className="font-bold text-4xl">error</div>;
}

export default ErrorElement;
