# Werkplaats 4 - Progressive Web Apps

> [!NOTE]
> Bij inleveren moet hier het volgende staan:
> 
> Instructies voor installatie en opstarten
> Screenshots
> Andere dingen die je wilt melden of belangrijk zijn (bonus functionaliteiten bijvoorbeeld)
> Links naar relevante pull requests (voor elk groepslid)
> Link naar een filmpje
> APA bronnen


## Casus

Zie de [CASUS.md](./CASUS.md) voor de casus van deze werkplaats.

## Projectstructuur

### `/api`: 
  
FastAPI-gebaseerde backend waar jullie je applicatie op baseren. Dient te draaien in Docker, zie [`docker-compose.yml`](./docker-compose.yml) hoe dit in zijn werk gaat.

### `/data`:

De map die gedeeld wordt met de API in Docker. Hier wordt de SQLite database in aangemaakt.

### `/docs`:

De map voor documentatie. De map `prompt-log` is bedoeld voor (automatische) verslaglegging bij gebruik van GenAI in de IDE.

## Installeren

Zorg dat je docker geinstalleerd hebt.

## Opstarten

Start de backend door `docker compose up --build` te draaien.

## Generative AI

In deze repository proberen we het gebruik van generatieve AI en de verslaglegging eromheen wat te stroomlijnen. In IDEs zoals VSCode worden deze bestanden automatisch uitgelezen en meegestuurd met vragen die je Copilot stelt. We vragen het Large Language Model (LLM) daarbij je te helpen met de problemen en oplossingen te begrijpen, maar ze niet voor je in te vullen. Daarnaast vragen we het LLM om de conversaties te loggen. Zoals hierboven beschreven is hier de map `prompt-log` voor aangemaakt.

## Bronnen
- Code Cpmplete - Build a Customizable Card Component in ReactJS - Beginner Friendly Tutorial [https://www.youtube.com/watch?v=Ts3kTbdQ_4U]
- Vaadin - Turn a web app into PWA in 10 minutes [https://www.youtube.com/watch?v=E8BeSSdIUW4&t=170s]
- https://www.geeksforgeeks.org/reactjs/how-to-redirect-to-another-page-in-reactjs/
- Tutorend - How to use react-share package to implement sharing features [https://www.youtube.com/watch?v=_vUd_ex6wBw]
- https://www.npmjs.com/package/react-share?activeTab=readme#emailsharebutton
