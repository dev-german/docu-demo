import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  imagePath: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Instalación rápida y liviana",
    imagePath: "/img/docu_easy_install.jpg",
    description: (
      <>
        Este sitio se genera con Docusaurus en segundos, usando Markdown y Git.
      </>
    ),
  },
  {
    title: "Documentación siempre actualizada",
    imagePath: "/img/code_versionado.jpg",
    description: (
      <>
        Los cambios se versionan con el código fuente, facilitando el
        mantenimiento.
      </>
    ),
  },
  {
    title: "Listo para CI/CD y revisión en PRs",
    imagePath: "/img/cicd.png",
    description: (
      <>
        Puedes integrar validaciones, previsualizaciones y despliegue
        automático.
      </>
    ),
  },
];

function Feature({ title, imagePath, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={imagePath} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
