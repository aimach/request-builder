export const help = {
  en: {
    host: {
      title: "Host",
      content:
        "Server address where the resource you want to retrieve or modify is located. It can be specified as an IP address or a domain name (192.168.0.1 or www.example.com). It is transmitted in the request through the 'host' header.",
    },
    port: {
      title: "Port",
      content:
        "A number used to specify the port on the server where the request must be directed.",
    },
    method: {
      title: "method",
      content:
        "HTTP methods define the type of action you want to perform on a specific resource (such as a web page, image, or file) hosted on a server. The main HTTP methods are GET, POST, PUT, DELETE.",
    },
    endpoint: {
      title: "endpoint",
      content:
        "The endpoint identifies the resource on the server. When combined with the value of the 'host' header, it forms the complete URL of the request. For example, if you have an endpoint '/api/users', and the host is 'www.example.com', the complete URL of the request will be 'http://www.example.com/api/users'.",
    },
    body: {
      title: "body",
      content:
        "Used especially in POST and PUT requests to send data to the server. The content is typically in JSON format.",
    },
    params: {
      title: "params",
      content:
        "Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys. For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.",
    },
    query: {
      title: "query",
      content:
        "req.query is a request object that is populated by request query strings that are found in a URL. These query strings are in key-value form. They start after the question mark in any URL. And if there are more than one, they are separated with the ampersand. For example, if you have https://example.com/user?name=Theodore&isAuthor=true, then req.query is {name: 'Theodore', isAuthor: true}",
    },
  },
  fr: {
    host: {
      title: "Host",
      content:
        "Adresse du serveur sur lequel se trouve la ressource que tu souhaites récupérer ou modifier. Il peut être spécifié sous forme d'adresse IP ou d'un nom de domaine (192.168.0.1 ou www.example.com). Il est transmis dans la requête par l'en-tête 'host'.",
    },
    port: {
      title: "Port",
      content:
        "Un numéro utilisé pour spécifier le point d'accès sur le serveur où la requête doit être dirigée.",
    },
    method: {
      title: "Méthode",
      content:
        "Les méthodes HTTP définissent le type d'action que tu souhaites effectuer sur une ressource spécifique (par exemple une page web, une image ou un fichier) hébergée sur un serveur. Les principales méthodes HTTP sont GET, POST, PUT et DELETE.",
    },
    endpoint: {
      title: "Point d'accès",
      content:
        "Le point d'accès (endpoint) identifie la ressource sur le serveur. Combiné avec la valeur de l'en-tête 'host', il forme l'URL complète de la requête. Par exemple, si tu as un endpoint '/api/users', et que le host est 'www.example.com', l'URL complète de la requête sera 'http://www.example.com/api/users'.",
    },
    body: {
      title: "Body",
      content:
        "Utilisé notamment dans les requêtes POST et PUT pour envoyer des données au serveur. Le contenu est généralement au format JSON.",
    },
    params: {
      title: "Params",
      content:
        "Les paramètres de route sont des segments d'URL nommés qui sont utilisés pour récupérer les valeurs spécifiées à leur position dans l'URL. Les clés et valeurs sont renseignées dans l'objet req.params. Par exemple, si tu as la route /user/:name, la propriété 'name' est disponible en tant que req.params.name. Cet objet est par défaut est {}.",
    },
    query: {
      title: "Query",
      content:
        "req.query est un objet rempli par les chaînes de requête qui sont trouvées dans une URL. Ces chaînes de requête sont sous forme clé-valeur. On trouvera les queries après le point d'interrogation dans n'importe quelle URL. S'il y en a plusieurs, ils sont séparés par l'esperluette (&). Par exemple, si tu as https://example.com/user?name=Theodore&isAuthor=true, alors req.query est {name : 'Theodore', isAuthor : true}",
    },
  },
};
