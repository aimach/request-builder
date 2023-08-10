export const infos = [
  {
    name: "host",
    en: "Server address where the resource you want to retrieve or modify is located. It can be specified as an IP address or a domain name (192.168.0.1 or www.example.com). It is transmitted in the request through the 'host' header.",
    fr: "Adresse du serveur sur lequel se trouve la ressource que tu souhaites récupérer ou modifier. Il peut être spécifié sous forme d'adresse IP ou d'un nom de domaine (192.168.0.1 ou www.example.com). Il est transmis dans la requête par l'en-tête 'host'.",
  },
  {
    name: "port",
    en: "A number used to specify the port on the server where the request must be directed.",
    fr: "Un numéro utilisé pour spécifier le point d'accès sur le serveur où la requête doit être dirigée.",
  },
  {
    name: "method",
    en: "HTTP methods define the type of action you want to perform on a specific resource (such as a web page, image, or file) hosted on a server. The main HTTP methods are GET, POST, PUT, DELETE.",
    fr: "Les méthodes HTTP définissent le type d'action que tu souhaites effectuer sur une ressource spécifique (par exemple une page web, une image ou un fichier) hébergée sur un serveur. Les principales méthodes HTTP sont GET, POST, PUT et DELETE.",
  },
  {
    name: "endpoint",
    en: "The endpoint identifies the resource on the server. When combined with the value of the 'host' header, it forms the complete URL of the request. For example, if you have an endpoint '/api/users', and the host is 'www.example.com', the complete URL of the request will be 'http://www.example.com/api/users'.",
    fr: "Le point d'accès (endpoint) identifie la ressource sur le serveur. Combiné avec la valeur de l'en-tête 'host', il forme l'URL complète de la requête. Par exemple, si tu as un endpoint '/api/users', et que le host est 'www.example.com', l'URL complète de la requête sera 'http://www.example.com/api/users'",
  },
  {
    name: "body",
    en: "Used especially in POST and PUT requests to send data to the server. The content is typically in JSON format.",
    fr: "Utilisé notamment dans les requêtes POST et PUT pour envoyer des données au serveur. Le contenu est généralement au format JSON.",
  },
  {
    name: "params",
    en: "Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys. For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.",
    fr: "Les paramètres de route sont des segments d'URL nommés qui sont utilisés pour récupérer les valeurs spécifiées à leur position dans l'URL. Les clés et valeurs sont renseignées dans l'objet req.params. Par exemple, si tu as la route /user/:name, la propriété 'name' est disponible en tant que req.params.name. Cet objet est par défaut est {}.",
  },
  {
    name: "query",
    en: "req.query is a request object that is populated by request query strings that are found in a URL. These query strings are in key-value form. They start after the question mark in any URL. And if there are more than one, they are separated with the ampersand. For example, if you have https://example.com/user?name=Theodore&isAuthor=true, then req.query is {name: 'Theodore', isAuthor: true}",
    fr: "req.query est un objet rempli par les chaînes de requête qui sont trouvées dans une URL. Ces chaînes de requête sont sous forme clé-valeur. On trouvera les queries après le point d'interrogation dans n'importe quelle URL. S'il y en a plusieurs, ils sont séparés par l'esperluette (&). Par exemple, si tu as https://example.com/user?name=Theodore&isAuthor=true, alors req.query est {name : 'Theodore', isAuthor : true}",
  },
];

export const translation = {
  en: {
    title: "Request builder",
    subtitle:
      "A tool to assist you in understanding HTTP requests and the Express API",
    intro:
      "Welcome to Request Builder, a tool to assist you in constructing your HTTP requests and gaining a better understanding of their structure in ExpressJS. First, fill out the form below, then explore your request and its associated elements.",
    clear: "Clear",
    add: "Add",
    host: "Host",
    port: "Port",
    method: "Method",
    endpoint: "Endpoint",
    body: "Body",
    params: "Params",
    query: "Query",
    key: "key",
    value: "value",
    client: "Client",
    server: "Server",
    clientIntro: "The request you sent with fetch, axios or Postman",
    clientTitle: "req.body you must sent",
    noBody: "No body in get method",
    serverIntro:
      "The route you must have in your router and the params and query objects of your request",
    backParams: "req.params you get",
    backQuery: "req.query you get",
    close: "Close",
    made: "Made with ❤️ by",
    for: "for",
  },
  fr: {
    title: "Request builder",
    subtitle:
      "Un outil pour t'aider à comprendre les requêtes http et l'API d'Express",
    intro:
      "Bienvenue sur Request builder, un outil pour t'aider à construire tes requêtes HTTP et à mieux comprendre leur structure dans ExpressJS. Tout d'abord, remplis le formulaire ci-dessous puis découvre ta requête et les éléments associés.",
    clear: "Effacer",
    add: "Ajouter",
    host: "Host",
    port: "Port",
    method: "Méthode",
    endpoint: "Point d'accès",
    body: "Body",
    params: "Params",
    query: "Query",
    key: "clé",
    value: "valeur",
    client: "Client",
    server: "Serveur",
    clientIntro: "La requête que tu envoies avec fetch, axios ou Postman",
    frontFirstTitle: "Méthode et URL",
    clientTitle: "req.body que tu dois envoyer",
    noBody: "Pas de body avec la méthode GET",
    serverIntro:
      "La route que tu as dans ton router et les objets params et query de ta requête",
    backFirstTitle: "Méthode et route",
    backParams: "req.params que tu reçois",
    backQuery: "req.query que tu reçois",
    close: "Fermer",
    made: "Made with ❤️ par",
    for: "pour",
  },
};

export const tutorial = {
  en: {},
  fr: {
    firstStep: {
      title: "Bienvenue sur Request builder !",
      firstContent:
        "Je suis un outil pour t'aider à construire tes requêtes HTTP et te permettre de mieux comprendre leur structure dans ExpressJS.",
      secondContent:
        "Cet outil se veut volontairement simple car il est à destination de ceux qui apprennent à faire des requêtes et à utiliser ExpressJS. Il n'est pas possible de faire des requêtes avec une URL complexe, l'objectif de cet outil est de t'aider à comprendre la structure d'une requête et comment tu dois l'utiliser dans ton code.",
      thirdContent: "Je suis développé et maintenu par",
    },
    secondStep: {
      title: "Language",
      firstContent: "Ici, tu peux choisir le language : anglais ou français",
    },
    thirdStep: {
      title: "Le formulaire",
      firstContent:
        "A gauche, il y a un formulaire où tu peux renseigner les informations sur ta requête.",
      example:
        "Tu peux voir que des champs sont déjà remplis : pour l'example de ce tutoriel, nous souhaitons récupérer de l'API tous les westerns en noir et blanc dans une limite de 10 résultats.",
    },
    fourthStep: {
      title: "Adresse de la requête",
      firstContent:
        "Dans la première partie, tu peux remplir les champs qui formeront l'URL de ta requête : l'host, le port, la méthode (GET, POST, PUT ou DELETE) et le point d'accès (endpoint).",
      example:
        "Example : nous avons localhost comme host, 5000 comme port, GET comme méthode et l'endpoint '/api/movies'.",
    },
    fifthStep: {
      title: "Informations de la requête",
      firstContent:
        "Dans la seconde partie, tu peux remplir les champs qui seront les informations que tu souhaites envoyer dans ta requête.",
      secondContent:
        "Tu peux ajouter un body (excepté pour la méthode GET), des params et query. Le formulaire fonctionne avec des champs de type clé/valeur. Tu peux ajouter des champs avec le boutton 'Ajouter' ou en supprimer.",
      example:
        "Example : il n'y a pas de body car nous utilisons la méthode GET. Nous avons 2 params (type et color) et 1 query (limit)",
    },
    sixthStep: {
      title: "Le resultat",
      firstContent:
        "A droite, sont affichés un ensemble d'informations qui vont te permettrent de bien comprendre ce que tu dois envoyer côté client et ce que tu reçois côté serveur.",
    },
    seventhStep: {
      title: "Coté client",
      firstContent:
        "Dans l'encadré, tu peux voir la méthode et l'adresse que tu utiliseras dans fetch, axios ou Postman. Si tu passes la souris sur l'adresse, les différents éléments seront surlignés et tu verras leur pendant côté serveur. Si tu as un body, il s'affichera sous l'encadré.",
      example:
        "Dans notre example, il n'y a pas de body car nous utilisons la méthode GET.",
    },
    heigthStep: {
      title: "Coté serveur",
      firstContent:
        "Dans l'encadré, tu peux voir la méthode et la route que tu devrais avoir dans ton router.",
      secondContent:
        "Les objets params et query sont affichés afin que tu puisses voir ce que tu reçois du côté backend. Là aussi, si tu passes la souris sur les éléments de la route, ils seront surlignés et tu verras leur pendant côté client.",
    },
  },
};
