# dede_es3a

[![Actions Status](https://github.com/Arquisoft/dede_es3a/actions/workflows/asw2122.yml/badge.svg)](https://github.com/Arquisoft/dede_es3a/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_dede_es3a&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Arquisoft_dede_es3a)
[![codecov](https://codecov.io/gh/Arquisoft/dede_es3a/branch/main/graph/badge.svg?token=VN4XG9NTRO)](https://codecov.io/gh/Arquisoft/dede_es3a)

*****************************************************************
<p align="center">
  <img alt="logo" src="./docs/images/logo.png" width="200">
</p>

<h1 align="center">
    👟Tu tienda de zapatos de confianza👟
</h1>

¡Aquí os dejamos algunos accesos rápidos!
* [Wiki📚](https://github.com/Arquisoft/dede_es3a/wiki)
* [Decisiones arquitectónicas👷](https://github.com/Arquisoft/dede_es3a/wiki/%F0%9F%91%B7Decisiones-arquitect%C3%B3nicas-%F0%9F%91%B7)
* [Issues📒](https://github.com/Arquisoft/dede_es3a/issues)
* [Despliegue🚀](https://dede-es3a.herokuapp.com/)
* [Documentación📁](https://arquisoft.github.io/dede_es3a/)
* [Presentación✒️](https://unioviedo-my.sharepoint.com/:b:/g/personal/uo277876_uniovi_es/EZwlNv8F1VhCiLZvekhmL9ABkrQjdluMQV9VVHr3GvOeDg?e=iNPCmf)
* [Demo🎬](https://www.youtube.com/watch?v=XUwgiOEJYYk)

*****************************************************************
<p float="left">
<img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" height="100">
<img src="https://miro.medium.com/max/1200/0*RbmfNyhuBb8G3LWh.png" height="100">
<img src="https://miro.medium.com/max/365/1*Jr3NFSKTfQWRUyjblBSKeg.png" height="100">
</p>

Este proyecto es un ejemplo basico de un sitio web utilizando **React** con **Typescript** y un endpoint usando **NodeJS** con **express**
## Miembros del equipo 😁
>* Andrea Auñón Antúnez - uo277876@uniovi.es
>* Javier Lopez de Juan - uo271447@uniovi.es
>* Alejandro Del Gallego Moro - uo271411@uniovi.es

## Guia de inicio rápido 📓

<mark>Si tienes instalados node.js y npm, asegurate de actualizarlos antes de intentar construir las imagenes</mark>

Si quieres ejecutar el proyecto necesitarás [git](https://git-scm.com/downloads), [Node.js and npm](https://www.npmjs.com/get-npm) y [Docker](https://docs.docker.com/get-docker/). Asegurate de tenerlos instalados en tu equipo. Descarga el proyecto con `git clone https://github.com/pglez82/asw2122_0`. La manera más rápìda de ejecutar todo es con Docker.

```bash
docker-compose up --build
```
Este comando creará dos imagenes de docker si no existen en tu equipo (la webapp y la restapi) y lanzará un contenedor de mongoDB. Además lanzará contenedores de Prometheus y Grafana para monitorizar el servicio web. Deberias ser capaz de acceder a todo desde aqui:

 - [Webapp - http://localhost:3000](http://localhost:3000)
 - [Ejemplo llamada a RestApi - http://localhost:5000/api/users/list](http://localhost:5000/api/users/list)
 - [Metricas RestApi - http://localhost:5000/metrics](http://localhost:5000/metrics)
 - [Servidor Prometheus - http://localhost:9090](http://localhost:9090)
 - [Servidor Grafana http://localhost:9091](http://localhost:9091)
 
Si quieres ejecutar el proyecto sin Docker primero complila y ejecuta la restapi:

```shell
cd restapi
npm install
npm start
```
a continuación la webapp:
```shell
cd webapp
npm install
npm start
```

Deberias ser capaz de acceder a la aplicación en [http://localhost:3000](http://localhost:3000).

## Mas información ✏️
Encontrarás más información sobre el repositorio en los otros archivos README:
- Documentación: https://github.com/Arquisoft/dede_es3a/tree/master/docs
- Webapp: https://github.com/Arquisoft/dede_es3a/tree/master/webapp
- Restapi: https://github.com/Arquisoft/dede_es3a/tree/master/restapi
