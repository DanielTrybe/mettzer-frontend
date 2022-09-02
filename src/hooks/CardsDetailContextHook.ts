import { useContext } from "react";
import { CardsDetailsContext } from "services/context/CardDetails";

export const useCardDetailsContext = () => {
  const context = useContext(CardsDetailsContext);
  if (context === undefined) {
    throw new Error("useGeneralContext must be used within a GeneralProvider");
  }
  return context;
};

export default useCardDetailsContext;
