import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Fácil de Usar",
    Svg: require("@site/static/img/focus.svg").default,
    description: (
      <>
        O Planify foi projetado para ser intuitivo e fácil de usar, permitindo
        que você gerencie seus projetos sem complicações.
      </>
    ),
  },
  {
    title: "Foco no que Importa",
    Svg: require("@site/static/img/genetic.svg").default,
    description: (
      <>
        O Planify permite que você foque no que realmente importa - seus
        projetos e equipes, não na ferramenta de gerenciamento.
      </>
    ),
  },
  {
    title: "Completo e Extensível",
    Svg: require("@site/static/img/nail-svgrepo-com.svg").default,
    description: (
      <>
        Com módulos para gerenciamento de projetos, tarefas, equipes, riscos,
        custos, documentos e comunicações, o Planify é completo e extensível.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {/* Seção de ícones */}
      <div className="text--center" style={{ marginBottom: 32 }}>
        {FeatureList.map(({ Svg }, idx) => (
          <Svg
            key={idx}
            className={styles.featureSvg}
            role="img"
            style={{ margin: "0 16px", width: 64, height: 64 }}
          />
        ))}
      </div>
      {/* Seção de features */}
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
