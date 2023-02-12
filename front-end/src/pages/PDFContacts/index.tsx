import { useEffect, useRef, useState } from "react"
import { apiPDF } from "../../api"
import {Document, Page} from "react-pdf/dist/esm/entry.vite"

interface INumPage{
     numPage : number
}

export function PDFContacts(){
     const [numPages, setNumPages] = useState(null);
     const [pageNumber, setPageNumber] = useState(1);

     const token = window.localStorage.getItem("$TOKEN")

  function onDocumentLoadSuccess({numPage} : any) {
    setNumPages(numPages);
  }

  return (
    <div>
       <Document onLoadSuccess={onDocumentLoadSuccess} file={{ url: 'http://localhost:3000/contact/pdf/', httpHeaders: { 'Authorization': `Bearer ${token}`}}}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}