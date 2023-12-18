// DocumentPage.jsx

import React from "react";
import ModifiedDocumentList from "../../Components/DocumentList/DocumentList";

const DocumentPage = () => {
  return (
    <div className="mt-10">
      {/* Include the DocumentList */}
      <ModifiedDocumentList />
    </div>
  );
};

export default DocumentPage;
