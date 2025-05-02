import { Icon } from "@iconify/react";
import Spacing from "../Spacing";
import { useTranslation } from "react-i18next";

export default function ServiceList({ position }) {
  const { t } = useTranslation();
  const serviceListData = [
    {
      texto: t("servicos.listaServicos.planejamento"),
      posicao: "left",
    },
    {
      texto: t("servicos.listaServicos.branding"),
      posicao: "left",
    },
    {
      texto: t("servicos.listaServicos.materiais"),
      posicao: "left",
    },
    {
      texto: t("servicos.listaServicos.website"),
      posicao: "left",
    },
    {
      texto: t("servicos.listaServicos.videos"),
      posicao: "left",
    },
    {
      texto: t("servicos.listaServicos.conteudo"),
      posicao: "left",
    },
    {
      texto: t("servicos.listaServicos.blog"),
      posicao: "left",
    },
    {
      texto: t("servicos.listaServicos.ebook"),
      posicao: "left",
    },
    {
      texto: t("servicos.listaServicos.portal"),
      posicao: "right",
    },
    {
      texto: t("servicos.listaServicos.redesSociais"),
      posicao: "right",
    },
    {
      texto: t("servicos.listaServicos.pr"),
      posicao: "right",
    },
    {
      texto: t("servicos.listaServicos.comunicacao"),
      posicao: "right",
    },
    {
      texto: t("servicos.listaServicos.traducao"),
      posicao: "right",
    },
    {
      texto: t("servicos.listaServicos.campanhas"),
      posicao: "right",
    },
    {
      texto: t("servicos.listaServicos.gerenciamento"),
      posicao: "right",
    },
    {
      texto: t("servicos.listaServicos.operacionalizacao"),
      posicao: "right",
    },
  ];

  const serviceList = serviceListData.filter((item) => item.posicao === position);
  return (
    <>
      {serviceList.map((item, index) => (
        <div key={index}>
          <div className="cs-text_btn cs-type2" key={index}>
            <span>{item.texto}</span>
            <Icon icon="bi:arrow-right" />
          </div>
          <Spacing lg="20" md="10" />
        </div>
      ))}
    </>
  );
}
