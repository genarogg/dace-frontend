import React from "react";
import { BlobProvider } from "@react-pdf/renderer";

import { FaArrowDownShortWide } from "react-icons/fa6";

import { Icono } from "@nano";

interface DownloadPDFbtnProps {
  document: any;
  text: string;
}

const DownloadPDFbtn: React.FC<DownloadPDFbtnProps> = ({ document, text }) => {
  return (
    <BlobProvider document={document}>
      {({ blob, url, loading, error }) => {
        // Si el PDF aún se está generando, muestra un texto de carga
        if (loading) {
          return "Cargando documento...";
        }

        // Si hay un error, muéstralo
        if (error) {
          return `Error: ${error.message}`;
        }

        // Crea una URL para el blob
        let pdfURL = "";
        if (blob !== null) {
          pdfURL = URL.createObjectURL(blob);
        }

        // Cuando el PDF esté listo, muestra un enlace para descargarlo
        return (
          <div className="containerDownload">
            <a href={pdfURL} download="documento.pdf">
              <Icono icono={<FaArrowDownShortWide />} />
              {text}
            </a>
          </div>
        );
      }}
    </BlobProvider>
  );
};

export default DownloadPDFbtn;
