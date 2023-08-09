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
    en: "The endpoint identifies the resource on the server. When combined with the value of the 'host' header, it forms the complete URL of the request. For example, if you have an endpoint '/api/users', and the host is 'www.example.com', the complete URI of the request will be 'http://www.example.com/api/users'.",
    fr: "Le point d'accès (endpoint) identifie la ressource sur le serveur. Combiné avec la valeur de l'en-tête 'host', il forme l'URI complète de la requête. Par exemple, si tu as un endpoint '/api/users', et que le host est 'www.example.com', l'URI complète de la requête sera 'http://www.example.com/api/users'",
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
    frontIntro: "The request you sent with fetch, axios or Postman",
    frontFirstTitle: "Method and URL",
    frontScndTitle: "req.body you must sent",
    noBody: "No body in get method",
    backIntro:
      "The route you must have in your router and the params and query objects of your request",
    backFirstTitle: "Method and route",
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
    frontIntro: "La requête que tu envoies avec fetch, axios ou Postman",
    frontFirstTitle: "Méthode et URL",
    frontScndTitle: "req.body que tu dois envoyer",
    noBody: "Pas de body avec la méthode GET",
    backIntro:
      "La route que tu as dans ton router et les objets params et query de ta requête",
    backFirstTitle: "Méthode et route",
    backParams: "req.params que tu reçois",
    backQuery: "req.query que tu reçois",
    close: "Fermer",
    made: "Made with ❤️ par",
    for: "pour",
  },
};
