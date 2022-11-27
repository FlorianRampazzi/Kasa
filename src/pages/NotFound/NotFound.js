// import { useRouteError } from "react-router-dom";

export default function NotFound() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div id="error-page">
      <h1>Oups!</h1>
      <p>Une erreure est survenue</p>
      <p>
        404
      </p>
    </div>
  );
}