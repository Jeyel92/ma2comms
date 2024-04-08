import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
import PageHeading from "../PageHeading";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { request } from "graphql-request";
import useSWRMutation from "swr/mutation";
import { sendMailMutationQuery } from "../../helper/queries";
import Alert from "../Alert";
import Map from "../Map";

const url = "https://ma2comms.com/ma2/graphql/";

const fetcher = (query, variables) => request(url, query, variables);

export default function ContactPage() {
  const { t } = useTranslation();
  const [msg, setMsg] = useState(null);

  const { trigger, error, isMutating } = useSWRMutation(
    sendMailMutationQuery,
    fetcher
  );

  const formContato = {
    clientMutationId: "contact",
    from: "ti@ma2comms.com",
    to: "ti@ma2comms.com",
    body: "",
    subject: "Nova mensagem form contato site.",
  };

  const baseMsgErro = "Ops, parece que algo está errado!";

  pageTitle("Contact Us");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    setMsg(null);

    const emailContent = `
    Nome: <strong>${formData.name}</strong>.  <br />
    Email: <strong>${formData.email}</strong>. <br />
    Projeto: <strong>${formData.project}</strong>. <br />
    Telefone: <strong>${formData.phone}</strong>. <br />
    Mensagem: <strong>${formData.message}</strong>.
    
  `;

    formContato.body = emailContent;
    try {
      const result = await trigger({ formContato });
      console.log(result);

      // if (!data.sent) {
      //   throw new Error(`Invalid response: ${data.message}`);
      // }

      setMsg({ text: " Mensagem enviada com sucesso", type: "success" });
    } catch (error) {
      // Capture the error message to display to the user
      setMsg({ text: error.message, type: "error" });
      console.error(error);
    }
  };

  const registerOptions = {
    name: {
      required: `${baseMsgErro} Você precisa preencher o campo Nome.`,
    },
    email: {
      required: `${baseMsgErro} Você precisa preencher o campo Email.`,
      pattern: {
        value: /.+@.+/,
        message: `${baseMsgErro} Campo Email inválido`,
      },
    },
    project: {
      required: `${baseMsgErro} você precisa preencher o campo Projeto.`,
    },
    phone: {
      required: `${baseMsgErro} você precisa preencher o campo Telefone.`,
      pattern: {
        value: /[0-9]/,
        message: `${baseMsgErro} Campo Telefone inválido`,
      },
    },
    message: {
      required: `${baseMsgErro} você precisa preencher o campo Memnsagem.`,
      maxLength: {
        value: 500,
        message: `${baseMsgErro} Campo Mensagem inválido`,
      },
    },
  };

  return (
    <>
      <PageHeading
        title={t("contato.heading.title")}
        bgSrc="/images/banner-pag-contato.jpg"
        pageLinkText={t("contato.heading.pageLinkText")}
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title={t("contato.details.title")}
              subtitle={t("contato.details.subtitle")}
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
              <Div className="col-sm-6">
                <label className="cs-primary_color">
                  {t("contato.form.inputs.name")}*
                </label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="name"
                  id="name"
                  {...register("name", registerOptions.name)}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">
                  {t("contato.form.inputs.email")}*
                </label>
                <input
                  type="email"
                  className="cs-form_field"
                  name="email"
                  id="email"
                  {...register("email", registerOptions.email)}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">
                  {t("contato.form.inputs.project")}*
                </label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="project"
                  id="project"
                  {...register("project", registerOptions.project)}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">
                  {t("contato.form.inputs.phone")}*
                </label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="phone"
                  id="phone"
                  {...register("phone", registerOptions.phone)}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">
                  {t("contato.form.inputs.message")}*
                </label>
                <textarea
                  cols="30"
                  rows="7"
                  maxLength={500}
                  className="cs-form_field"
                  id="message"
                  name="message"
                  {...register("message", registerOptions.message)}
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1">
                  <span>{t("contato.form.inputs.send")}</span>
                  {/* <Icon icon="bi:arrow-right" /> */}
                </button>
              </Div>
            </form>
            <Spacing lg="10" md="10" />
            {errors?.name && (
              <Alert texto={errors?.name.message} type="attention" />
            )}
            {errors?.email && (
              <Alert texto={errors?.email.message} type="attention" />
            )}
            {errors?.project && (
              <Alert texto={errors?.project.message} type="attention" />
            )}
            {errors?.phone && (
              <Alert texto={errors?.phone.message} type="attention" />
            )}
            {errors?.message && (
              <Alert texto={errors?.message.message} type="attention" />
            )}
            {msg && <Alert texto={msg.text} type={msg.type} />}
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <Map />
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}
