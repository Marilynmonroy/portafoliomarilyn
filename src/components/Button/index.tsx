import { ReactNode, useRef, useEffect } from "react";
import styles from "./index.module.css";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export function Button(props: ButtonProps) {
  const handleDownloadClick = () => {
    // Crear un enlace temporal
    const link = document.createElement("a");

    // Establecer la URL del archivo PDF
    link.href = "/MarilynAragon.cv (2).pdf"; // Asegúrate de que la ruta sea correcta

    // Establecer el nombre del archivo para la descarga
    link.download = "MarilynAragon.pdf";

    // Simular un clic en el enlace para iniciar la descarga
    link.click();
  };
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.title} {props.icon}
    </button>
  );
}
