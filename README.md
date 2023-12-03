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

## Config Repo:
Git repo: https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-config-repo

## Consul Discovery
![Screenshot 2023-11-28 202139](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/eebf4e24-a60d-4b82-a021-63552d9e7759)

![Screenshot 2023-11-28 202152](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/e182f916-1089-4bc0-8ce4-59c1b11e6b98)

![Screenshot 2023-11-28 202202](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/eae435f0-c9a6-493e-9f38-5467e0a3a48e)

![Screenshot 2023-11-28 202340](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/095804f0-bd6f-42a4-96ce-4d79b2fb75b8)

## Spring Cloud Config
![Screenshot 2023-12-03 163902](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/e20cde98-7b7e-4f9c-94d4-4dbc447c9625)

![Screenshot 2023-12-03 163914](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/91d3ccfe-3179-4b47-a025-a1a7d2850734)

## Spring Cloud Gateway
![Screenshot 2023-12-03 164321](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/7610bb18-a2b7-4313-8bde-a3969391ab64)

![Screenshot 2023-12-03 164328](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/7adf864f-b2c0-4e0e-9792-061d4c4be9b7)

![Screenshot 2023-12-03 164337](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/b123fd4b-89c8-4b12-9559-00321f521ed3)

## Customer-service

![Screenshot 2023-12-03 164522](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/e084d457-8adb-4b74-89e1-505d2df37dcc)

![Screenshot 2023-12-03 164608](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/d49c9a26-9937-44c5-8529-b789a717b826)

## Inventory Service
![Screenshot 2023-12-03 164809](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/f4193c5b-5b83-4f61-99e7-4777a3227803)

![Screenshot 2023-12-03 164857](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/aff685ea-3978-47d4-a65e-0dc162f5defd)

## Order Service
![Screenshot 2023-12-03 165107](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/0142b021-ad88-4646-8c43-ca2986c67644)

![Screenshot 2023-12-03 165137](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/74a07bf5-e5f0-44bf-ba82-e3240d57ada5)

## Billing Service
![Screenshot 2023-12-03 165307](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/b3592b22-345a-4be6-96f5-3cbf4a0e0109)

![Screenshot 2023-12-03 165324](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/1850a966-9337-4800-8d84-e73ab76759ec)

## Consul Config (Billing Service)
![Screenshot 2023-12-03 165330](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/e189268a-34cc-4868-a910-1ca802e7f2bd)

## Vault (Billing Service)
![Screenshot 2023-12-03 165349](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/059c9e26-7bc7-4d9c-95ef-eca2a5d9ac73)

![Screenshot 2023-11-29 154300](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/e441e015-6038-4a00-bcb3-4b3ff1063a70)

![Screenshot 2023-11-29 154442](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/ac6e060f-61d1-40a8-a9b7-fce3aef5ec1a)



# Frontend Web avec Angular

![Screenshot 2023-11-29 163216](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/9476040f-5efc-4a07-a036-bdf9b32a0ee8)

![Screenshot 2023-11-29 163304](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/f737c945-cfe9-49df-9798-ffed3a12f4c0)

![Screenshot 2023-11-29 174922](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/5652196e-6249-4751-8f84-e4e4c05a0241)

![Screenshot 2023-11-29 174851](https://github.com/Sohaib-jalil/Activite-Pratique-N-4---Architectures-Micro-services-avec-Spring-Cloud/assets/92445933/124d31b9-84d9-4898-8810-cdaaa7a0cc56)

