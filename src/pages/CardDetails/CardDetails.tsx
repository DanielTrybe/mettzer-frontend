import { CardDetailsTemplate } from "templates";
import { useParams } from "react-router-dom";
import CardDetailsProvider from "services/context/CardDetails";

function CardDetails() {
  const { owner, repo } = useParams();
  if (!owner || !repo) {
    return (
      <>
        <h1>preciso de um usuário e repositório para buscar a carta</h1>
      </>
    );
  }

  return (
    <CardDetailsProvider>
      <CardDetailsTemplate owner={owner} repo={repo} />
    </CardDetailsProvider>
  );
}

export default CardDetails;
