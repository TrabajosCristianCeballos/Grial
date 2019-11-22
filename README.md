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

## Instalaciones necesarias para poder ejecutar Backend y Frontend

### Instalaciones del Backend

Instalación de node js por comandos o entrando a la página [Ver aquí](https://nodejs.org/es/)
O por línea de comandos

``` shell script
sudo apt install nodejs
```
Instalamos npm

``` shell script
sudo apt install npm
```


``` shell script
npmx create-express-app
```

### Instalaciones del Frontend

Instalación de boostrap para react

``` shell script
npm install --save reactstrap react react-dom
```
Instalación de Material.UI

``` shell script
npm install @material-ui/core
```

### Backend

Para los servicios Backend los cuales consulta el Frontend que funcionan como intermediario entre el modelo y la vista, decidimos utilizar Express js, que es un framework de node js, para esto, los pasos de creación fueron:

*1) Ejecutar*
``` shell script
npmx create-express-app
```
**NOTA: Esto crea los archivos base para ejecutar una aplicación sencilla de Node sobre Express**

*2) Se procede a crear los modelos de Mongo DB en una carpeta llamada Modelo, además de crear*

*3) Se crean los servicios encargados de hacer las consultas en las respectivas bases de datos con los parámetros necesarios*

*4) Se crea el router que es el encargado de redirigir las peticiones que llegan al servidor*

*5) Configuramos el contexto del servidor entero para ver qué peticiones permite y cuáles no, además se pone en uso los servicios creador previamente*

**NOTA: Toda esta información se puede encontrar en la carpeta de Back.**

### Frontend

Para la creación del Frontend utilizamos React js, lo cual es un framework de Javascript donde implementamos librerías de diseños de Boostrap 4 y de Material.UI.

*1) Inicializamos la aplicación en React*
``` shell script
npm create-react-app
```
Y este comando te genera una gerarquía de trabajo con componentes y clases, para más información de React, [Documentación de React:](https://es.reactjs.org/)

*2) Creamos componentes para React: *
Para esta parte, utilizamos el concepto de componentes en React para tener toda la funcionalidad por separado importando las diferentes librerías con las cuales vamos a trabajar.

**Trabajo de Telemática, 2019-2**

**Grial, v:1.0**

**Universidad Eafit, Pregrado de ingeniería de sistemas**

**Isaias Labrador Sánchez**

**Santiago Valencia Arango**

**Cristian Darío Ceballos Rodríguez**

![](https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjp4KSwtP7lAhUpD2MBHcmSCNUQjRx6BAgBEAQ&url=http%3A%2F%2Fgifanimadosyfrasescortas.blogspot.com%2F2016%2F07%2Fgif-animados-fuegos-artificiales.html&psig=AOvVaw0YGKipRIK2uPIAdlK-ooxg&ust=1574532281472423)






