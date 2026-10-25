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
- Vaadin - Turn a web app into PWA in 10 minutes [https://www.youtube.com/watch?v=E8BeSSdIUW4&t=170s]
- https://www.geeksforgeeks.org/reactjs/how-to-redirect-to-another-page-in-reactjs/
- Tutorend - How to use react-share package to implement sharing features [https://www.youtube.com/watch?v=_vUd_ex6wBw]
- https://www.npmjs.com/package/react-share?activeTab=readme#emailsharebutton
- Web Dev Simplified - How To Create A Navbar In React With Routing - t/m 6:00[https://www.youtube.com/watch?v=SLfhMt5OUPI]
- https://www.w3schools.com/react/react_es6_array_map.asp
- Basis van CSS kaartjes: Code Complete - Build a Customizable Card Component in ReactJS - Beginner Friendly Tutorial [https://www.youtube.com/watch?v=Ts3kTbdQ_4U]
- https://stackoverflow.com/questions/76198802/how-do-i-make-the-mailto-subject-and-body-tags-change-when-i-type-in-them-in-rev
- Paginatie react:https://www.youtube.com/watch?v=wAGIOCqS8tk

 ## Verbeter punten 

 - We hebben en saved card bestand waar de overzicht en de kaart in dezelfde bestand zijn. Dit is niet goed onderhoudbaar, omdat je bij de bestands namen duidelijk wilt hebben wat erin zit.
We willen de kaart in de saved card bestand een van component maken zodat het duidelijker en meer onderhoudbaar maakt. Zodat de component naam aangeeft wat daadwerkelijk in het bestand te vinden is.
Verder moet de knoppen ook componenten worden, omdat de knoppen precies hetzelfde doen. De knoppen worden elke keer opnieuw geschreven en het is beter als het een component wordt.


 - We hebben nu meerdere stukken van de dezelfde code in verschillende bestanden zo is het niet goed, omdat de dubbel overal ingevoerd is en het meer onderhoudbaar zou zijn als er geen herhalende stukken code is.
We willen ervoor zorgen om zo min mogelijk tot geen herhalende code hebben in onze bestanden. Zodat er alleen unieke code bestaat bij elke bestand en dat de naamgeving van CSS-bestand klopt met wat daarin zit om het meer overzichterlijker te maken.


 - We gebruiken op dit moment map() om alles in de array in te laden door de kaart. Om dit moment laden we alle kaartjes in en terwijl er alleen 6 kaartjes zijn, moeten we ervoor zorgen dat als er duizenden zijn het nog steeds goed draait.
We willen een paginatie limiet van 3 kaartjes in leggen, omdat als er duizenden kaartjes ingeladen wordt het niet efficiënt en loopt de applicatie traag door alle kaartjes die ingeladen wordt.


Feedback punten doorgevoerd:

Ana: De codekwaliteit was nog niet goed volgens Jurgen dit was zo omdat veel bestanden soms wel met een hoofdletter beginnen en soms niet dit is verwarrend. We moeten ervoor zorgen dat de naamgeving consistent is en dat alle componenten en bestanden duidelijk benoemd zijn. Ook gebruiken we Nederlands en Engels door elkaar, dit moet ook consistent zijn daarom kiezen we nu voor een Engelse naamgeving.

 ## AI Gebruik 

Ana:[AI-bronvermelding-WP4-ana kopie.pdf](https://github.com/user-attachments/files/28838987/AI-bronvermelding-WP4-ana.kopie.pdf). [Ai bornvermelding wp4 ana 2.pdf](https://github.com/user-attachments/files/28839011/Ai.bornvermelding.wp4.ana.2.pdf)




Wan Xuan:

Kien-sing:

