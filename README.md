# Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud

Dans cette activité ont va créer plusieurs micro-service capables de communiquer entre eux ont utilisant un spring cloud gateway, consul registry config et un config service et pour ajouter ajouter de la sécurité à ces transactions on va utiliser Vault.

### Objectif de l'atelier ###
Créer une application de e-commerce basée sur les micro services :
1. Consul Discovery
2. Spring Cloud Config
3. Spring Cloud Gateway
4. Customer-service
5. Inventory Service
6. Order Service
7. Consul Config (Billing Service)
8. Vault (Billing Service)
9. Frontend Web avec Angular

### Vidéos de référence: ###
Part 1 : https://www.youtube.com/watch?v=LPdfVmllSQo

Part 2 : https://www.youtube.com/watch?v=L0mdrY36tpk

Part 3 : https://www.youtube.com/watch?v=L36O1edFPJE

Part 4 : https://www.youtube.com/watch?v=aQRgO2OxC0w

Part 5 : https://www.youtube.com/watch?v=iMCjDRUXoeM

### Configuration du projet ###

Langue : Java

Type : Maven

JDK : Oracle OpenJDK version 20

Java : 17

Packaging : Jar

### Dépendances utilisées ###

#### config-service ####
- Actuator
- Config Server
- Consul Discovery

#### gateway-service ####
- Actuator
- Config Server
- Consul Discovery
- Gateway

#### customer-service ####
- Spring Data JPA
- H2database
- lombok
- Actuator
- Config Server
- Consul Discovery
- Rest Repositories
- Spring Web

#### inventory-service ####
- Spring Data JPA
- H2database
- lombok
- Actuator
- Config Server
- Consul Discovery
- Rest Repositories
- Spring Web

#### order-service ####
- Spring Data JPA
- H2database
- lombok
- Actuator
- Config Server
- Consul Discovery
- Rest Repositories
- Spring Web
- Spring HATEOAS
- OpenFeign

