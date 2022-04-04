# Sherpas
CRUD

Par una correcta ejecución, se deben seguir los pasos de la web de express.js en https://expressjs.com/es/starter/installing.html

Una vez hecho, se puede abrir una terminal dentro de la carpeta del proyecto y ejecutar el siguiente comando:
nodemon

También es necesario instalar cors: 
npm install cors

Ahora, ejecútelo con nodemon si su servidor no está funcionando. Esta vez tenemos tres puntos finales:
→ localhost: 3307 (predeterminado)
→ localhost: 3307 / customers (Devuelve todos los customers)
→ localhost: 3307 / customers / 1 (Devuelve un solo customer de id = 1)

#Probar CRUD en Postman#
Hemos probado los métodos GET de nuestra API en nuestro navegador web y hemos visto las respuestas. Pero no podemos probar los métodos HTTP POST, PUT y DELETE en el navegador web. Para probar esos métodos, usamos Postman o puede usar otra utilidad http para llamar a las API.

![imagen](https://user-images.githubusercontent.com/62959463/161620247-58d6cfed-ff90-4c78-a7fe-0ef24714cc7b.png)

Se pueden ir comprobando los resultados obtenidos en el localhost:3307 del navegador con la extensión que sea necesaria

A continuación, se obtienen todos los clientes
![imagen](https://user-images.githubusercontent.com/62959463/161620302-05c8d6da-d8cb-47b2-a11b-b2ce8afe701d.png)

Clientes filtrados por id
![imagen](https://user-images.githubusercontent.com/62959463/161620359-3e2e307d-62bf-4ec5-a213-56b6dd30ae2f.png)

Post para añadir nuevos clientes, hay que escribir en formato json todos los elementos requeridos: name, surname, email y birthdate
![imagen](https://user-images.githubusercontent.com/62959463/161620435-97d110e2-ee50-4719-9f0e-9be6e4d51b0d.png)

Para modificar con PUT hay que indicar en la url el id a modificar y luego añadir en formato json todos los elementos requeridos
![imagen](https://user-images.githubusercontent.com/62959463/161620499-0d06ec23-9027-4a4a-ad01-5035c51207c9.png)

finalmente, para eliminar un cliente, en la url se indica el id a eliminar
![imagen](https://user-images.githubusercontent.com/62959463/161620554-f97ca55e-24df-4593-b3ba-9e82282d09e9.png)

se puede ver el resultado final en el navegador
![imagen](https://user-images.githubusercontent.com/62959463/161620749-60a8b503-4804-4297-83d0-2556647db6a0.png)


Como conclusión

Se han visto todos los métodos de solicitud HTTP (GET, POST, PUT y DELETE) usando Postman.



Para los Unit Test hay que instalar:
npm install --save mocha chai supertest mockgoose
