export default {
  main: [
    { id: "objectifs", label: "Objectifs", type: "markdown", default: "" },
    {
      id: "ficheUrl",
      label: "Bouton vers la fiche formation",
      type: "link",
      default: { label: "Voir la fiche formation", url: "https://caensup.fr/" }
    },
    { id: "missions", label: "Missions", type: "markdown", default: "" },
    { id: "secteurs", label: "Secteurs d'activité", type: "textarea", default: "", lineConverter: "ul" },
    { id: "debouches", label: "Métiers et débouchés", type: "textarea", default: "", lineConverter: "ul" },
    { id: "competences", label: "Blocs de compétences", type: "markdown", default: "" },
    { id: "inscription", label: "Inscription", type: "markdown", default: "" },
    { id: "video", label: "Vidéo de présentation", type: "inputText", default: "" }
  ],
  aside: [
    { id: "prerequis", label: "Prérequis", type: "textarea", default: "", lineConverter: "ol" },
    { id: "rythme", label: "Rythme", type: "textarea", default: "", lineConverter: "ol" },
    { id: "alternance", label: "Dispositif d'alternance", type: "textarea", default: "", lineConverter: "ol" },
    { id: "financements", label: "Autres financements", type: "textarea", default: "", lineConverter: "ul" },
    { id: "infos", label: "Informations complémentaires", type: "textarea", default: "", lineConverter: "ul" }
  ]
}
