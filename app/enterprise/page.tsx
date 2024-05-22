import { Suspense } from "react";
import Enterprises from "./_components/enterprises";


const EnterprisesPage = () => {
  return (
    <Suspense>
      <Enterprises />
    </Suspense>
  );
};

export default EnterprisesPage;