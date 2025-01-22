# ZOSK - Zarządzanie Obsługą Sklepu Komputerowego

## Opis projektu

ZOSK to aplikacja umożliwiająca zarządzanie magazynem oraz fakturami przy użyciu nowoczesnego interfejsu REST API. System wspiera operacje CRUD (Create, Read, Update, Delete) na różnych tabelach bazy danych, takich jak **Stan Magazynowy** i **Faktury**. Projekt został zaimplementowany w języku Java z użyciem frameworka Spring Boot, a baza danych jest zarządzana w MySQL.

## Funkcjonalności

### 1. Backend (Spring Boot)

- **Stan Magazynowy:**
  - Pobieranie wszystkich rekordów.
  - Pobieranie rekordu według `ID`.
  - Tworzenie nowego rekordu.
  - Aktualizacja pełna i częściowa (PATCH).
  - Usuwanie rekordów pojedynczo lub grupowo.
- **Faktury:**
  - Pobieranie wszystkich faktur.
  - Dodawanie nowej faktury.
  - Edytowanie istniejących faktur.
  - Usuwanie faktur.

### 2. Frontend

- Wyświetlanie listy produktów w magazynie.
- Wyświetlanie i zarządzanie fakturami.
- Obsługa błędów komunikacji z backendem.

## Wymagania systemowe

- **Java**: 11+
- **Maven**: 3.6+
- **MySQL**: 8.0+
- **Node.js**: 16+

## Instalacja

Aby uruchomić aplikację lokalnie, wykonaj poniższe kroki:

### 1. Konfiguracja Bazy Danych

- Należy zainstalować docker oraz narzędzie do zarzadzania bazą danych ( w przypadku tego projektu był to MySQL Workbench)
- Z dockerhub pobrać obraz mysql(terminal zosk): docker pull mysql
- Aktywacja kontenera: docker run --name zosk-mysql -e MYSQL_ROOT_PASSWORD=ezio -d -p 3306:3306 mysql

- Należy dodać nowe połączenie w MySQL Workbench
- Hasło do bazy: ezio
- Dodać schema i wykonać w niej komendy zawarte w pliku .mysql w folderze zosk.

### 2. Instalacja Backend (Spring Boot)

- Wymagana jest instalacja maven i dodanie go do PATH
- Otworzyć terminal główny zosk
- Uruchomić aplikację Spring Boot przy użyciu: mvn spring-boot:run
- Aplikacja backendowa będzie działać na porcie 8080

### 3. Instalacja Frontend (React/TypeScript)

- Należy zainstalowac Node.js
- Uruchomić terminal zosk/frontend
- Zainstalować potrzebne narzędzia node.js przy użyciu: npm install
- Uruchomić frontend wpisując: npm start
- Aplikacja frontendowa będzie dostępna pod adresem http://localhost:3000.

## Technologie

### 1. Backend:

- Spring Boot
- MySQL
- JDBC Template
- Java

### 2. Frontend:

- Javascript
- Html
- Css
- React.js
- Axios

## Autorzy

- Damian Pasek- Backend, api, baza danych
- Dawid Marcisz- frontend, api
