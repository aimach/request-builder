const tutorial = [
  {
    en: {
      title: "Welcome to Request builder!",
      firstParagraph:
        "I am a tool to help you build your HTTP requests and better understand their structure in ExpressJS.",
      secondParagraph:
        "This tool is intentionally kept simple as it is intended for those who are learning to make requests and use ExpressJS. It's not possible to create requests with complex URLs. The purpose of this tool is to help you understand the structure of a request and how to use it in your code.",
      thirdParagraph: "I am developed and maintained by",
    },
    fr: {
      title: "Bienvenue sur Request builder !",
      firstParagraph:
        "Je suis un outil pour t'aider à construire tes requêtes HTTP et te permettre de mieux comprendre leur structure dans ExpressJS.",
      secondParagraph:
        "Cet outil se veut volontairement simple car il est à destination de ceux qui apprennent à faire des requêtes et à utiliser ExpressJS. Il n'est pas possible de faire des requêtes avec une URL complexe, l'objectif de cet outil est de t'aider à comprendre la structure d'une requête et comment tu dois l'utiliser dans ton code.",
      thirdParagraph: "Je suis développé et maintenu par",
    },
  },
  {
    en: {
      title: "Language",
      firstParagraph: "Here, you can choose the language: English or French",
    },
    fr: {
      title: "Language",
      firstParagraph: "Ici, tu peux choisir le language : anglais ou français",
    },
  },
  {
    en: {
      title: "The Form",
      firstParagraph:
        "On the left, there's a form where you can provide informations about your request.",
      example:
        "You can see that some fields are already filled: for the example of this tutorial, we want to retrieve all black and white western movies from the API, with a limit of 10 results.",
    },
    fr: {
      title: "Le formulaire",
      firstParagraph:
        "A gauche, il y a un formulaire où tu peux renseigner les informations sur ta requête.",
      example:
        "Tu peux voir que des champs sont déjà remplis : pour l'example de ce tutoriel, nous souhaitons récupérer de l'API tous les westerns en noir et blanc dans une limite de 10 résultats.",
    },
  },
  {
    en: {
      title: "Request Address",
      firstParagraph:
        "In the first part, you can fill in the fields that will form your request URL: the host, port, method (GET, POST, PUT, or DELETE), and endpoint.",
      example:
        "Example: we have 'localhost' as the host, '5000' as the port, 'GET' as the method, and the endpoint '/api/movies'.",
    },
    fr: {
      title: "Adresse de la requête",
      firstParagraph:
        "Dans la première partie, tu peux remplir les champs qui formeront l'URL de ta requête : l'host, le port, la méthode (GET, POST, PUT ou DELETE) et le point d'accès (endpoint).",
      example:
        "Example : nous avons localhost comme host, 5000 comme port, GET comme méthode et l'endpoint '/api/movies'.",
    },
  },
  {
    en: {
      title: "Request Information",
      firstParagraph:
        "In the second part, you can fill in the fields with the informations you want to send in your request.",
      secondParagraph:
        "You can add a body (except for the GET method), params, and query. The form works with key/value pair fields. You can add fields using the 'Add' button or remove them.",
      example:
        "Example: there is no body since we're using the GET method. We have 2 params (type and color) and 1 query (limit).",
    },
    fr: {
      title: "Informations de la requête",
      firstParagraph:
        "Dans la seconde partie, tu peux remplir les champs qui seront les informations que tu souhaites envoyer dans ta requête.",
      secondParagraph:
        "Tu peux ajouter un body (excepté pour la méthode GET), des params et query. Le formulaire fonctionne avec des champs de type clé/valeur. Tu peux ajouter des champs avec le boutton 'Ajouter' ou en supprimer.",
      example:
        "Example : il n'y a pas de body car nous utilisons la méthode GET. Nous avons 2 params (type et color) et 1 query (limit)",
    },
  },
  {
    en: {
      title: "The Result",
      firstParagraph:
        "On the right, a set of information is displayed that will help you understand what you need to send on the client side and what you'll receive on the server side.",
    },
    fr: {
      title: "Le resultat",
      firstParagraph:
        "A droite, sont affichés un ensemble d'informations qui vont te permettrent de bien comprendre ce que tu dois envoyer côté client et ce que tu reçois côté serveur.",
    },
  },
  {
    en: {
      title: "Client Side",
      firstParagraph:
        "In the box, you can see the method and the address you'll use in fetch, axios, or Postman. If you hover over the address, the different elements will be highlighted, and you'll see their counterparts on the server side. If you have a body, it will be displayed below the box.",
      example:
        "In our example, there's no body since we're using the GET method.",
    },
    fr: {
      title: "Coté client",
      firstParagraph:
        "Dans l'encadré, tu peux voir la méthode et l'adresse que tu utiliseras dans fetch, axios ou Postman. Si tu passes la souris sur l'adresse, les différents éléments seront surlignés et tu verras leur pendant côté serveur. Si tu as un body, il s'affichera sous l'encadré.",
      example:
        "Dans notre example, il n'y a pas de body car nous utilisons la méthode GET.",
    },
  },
  {
    en: {
      title: "Server Side",
      firstParagraph:
        "In the box, you can see the method and the route you should have in your router.",
      secondParagraph:
        "The params and query objects are displayed so you can see what you receive on the backend side. Similarly, if you hover over the route elements, they will be highlighted, and you'll see their counterparts on the client side.",
    },
    fr: {
      title: "Coté serveur",
      firstParagraph:
        "Dans l'encadré, tu peux voir la méthode et la route que tu devrais avoir dans ton router.",
      secondParagraph:
        "Les objets params et query sont affichés afin que tu puisses voir ce que tu reçois du côté backend. Là aussi, si tu passes la souris sur les éléments de la route, ils seront surlignés et tu verras leur pendant côté client.",
    },
  },
];

export default tutorial;
