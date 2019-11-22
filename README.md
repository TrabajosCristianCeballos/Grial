# Documentación de Grial

### Bases de datos

AWS: Sobre el Amazon Web Services se montó una base de datos relacionada con el motor de MySql propio de la plataforma, en la cual se almacenan los datos de usuario, tales como Nombre, apellido, correo, edad, todo lo relacionado con datos personales.

El proceso para realizar:

*1) Ingresar a la cuenta de Amazon Educate:*
[AQUI](https://www.awseducate.com/signin/SiteLogin?sc_ichannel=so&sc_icategory=abtest&sc_iname=awswt-8&sc_iurl=aws-educate&sc_iversion=hero-cta-login-control)

*2) Ingresar a la consola de AWS:*

*3) Crear la instancia: (Véase)*
[AQUÍ](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateDBInstance.html)

*4) Se crean las tablas con sus respectivas columnas para su posterior consulta*

Azure: Se implementó con MongoDB

[Ver documentacion aquí:](https://www.mongodb.com/cloud/atlas/azure-mongodb?lang=es-es)

### Backend

Para los servicios Backend los cuales consulta el Frontend que funcionan como intermediario entre el modelo y la vista, decidimos utilizar Express js, que es un framework de node js, para esto, los pasos de creación fueron:

*1) Ejecutar *
``` shell script
npmx create-express-app
```
