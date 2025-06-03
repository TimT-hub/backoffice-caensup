export default {
  main: [
    { id: "objectifs", label: "Objectifs", type: "markdown", default: "" },
    {
      id: "ficheUrl",
      label: "Bouton vers la fiche formation",
      type: "link",
      default: { label: "Voir la fiche", url: "https://caensup.fr/" }
    },
    { id: "missions", label: "Missions", type: "markdown", default: "" },
    { id: "secteurs", label: "Secteurs d'activité", type: "textarea", default: "" },
    { id: "debouches", label: "Métiers et débouchés", type: "textarea", default: "" },
    { id: "competences", label: "Blocs de compétences", type: "markdown", default: "" },
    { id: "inscription", label: "Inscription", type: "markdown", default: "" },
    { id: "video", label: "Vidéo de présentation", type: "inputText", default: "" }
  ],
  aside: [
    { id: "prerequis", label: "Prérequis", type: "textarea", default: "" },
    { id: "rythme", label: "Rythme", type: "textarea", default: "" },
    { id: "alternance", label: "Dispositif d'alternance", type: "textarea", default: "" },
    { id: "financements", label: "Autres financements", type: "textarea", default: "" },
    { id: "infos", label: "Informations complémentaires", type: "textarea", default: "" }
  ]
}
