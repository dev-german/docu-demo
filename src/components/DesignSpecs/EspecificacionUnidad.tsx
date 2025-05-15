import React, { JSX } from "react";
import styles from "./EspecificacionUnidad.module.css";

interface EspecificacionUnidadProps {
  /** Identificador único de la unidad, ej: "UC-001" (Opcional) */
  id?: string;
  /** Nombre principal de la unidad de construcción */
  nombre: string;
  /** Paquete o módulo al que pertenece la unidad */
  paquete: string;
  /** Tipo de unidad (Ej: Servicio, Componente UI, Clase de Lógica) */
  tipo: string;
  /** Descripción clara y concisa del propósito de esta unidad */
  objetivoPrincipal: string;
  /** Artefacto de despliegue donde se incluye la unidad (Ej: proyecto-core.jar) (Opcional) */
  artefacto?: string;
}

export default function EspecificacionUnidad({
  id,
  nombre,
  paquete,
  tipo,
  objetivoPrincipal,
  artefacto,
}: EspecificacionUnidadProps): JSX.Element {
  return (
    <div className={styles.especificacionContainer}>
      <h2 className={styles.mainTitle}>
        {id ? `${id}: ` : ""}Especificación: {nombre}
      </h2>

      <table className={styles.infoTable}>
        <thead>
          <tr>
            <th>Característica</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.featureLabel}>Nombre</td>
            <td>{nombre}</td>
          </tr>
          <tr>
            <td className={styles.featureLabel}>Paquete/Módulo</td>
            <td><code>{paquete}</code></td>
          </tr>
          <tr>
            <td className={styles.featureLabel}>Tipo</td>
            <td>{tipo}</td>
          </tr>
          <tr>
            <td className={styles.featureLabel}>Objetivo Principal</td>
            <td>{objetivoPrincipal}</td>
          </tr>
          {artefacto && (
            <tr>
              <td className={styles.featureLabel}>Artefacto (si aplica)</td>
              <td>{artefacto}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
