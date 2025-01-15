# ZOSK -  Zarządzanie Obsługą Sklepu Komputerowego

## Opis projektu

ZOSK to aplikacja umożliwiająca zarządzanie magazynem oraz fakturami przy użyciu nowoczesnego interfejsu REST API. System wspiera operacje CRUD (Create, Read, Update, Delete) na różnych tabelach bazy danych, takich jak **Stan Magazynowy** i **Faktury**. Projekt został zaimplementowany w języku Java z użyciem frameworka Spring Boot, a baza danych jest zarządzana w MySQL.

---

## Funkcjonalności

### Backend (Spring Boot)
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

### Frontend
- Wyświetlanie listy produktów w magazynie.
- Wyświetlanie i zarządzanie fakturami.
- Obsługa błędów komunikacji z backendem.

---

## Wymagania systemowe

- **Java**: 11+
- **Maven**: 3.6+
- **MySQL**: 8.0+
- **Node.js**: 16+ (dla frontendu)

---

## Instalacja i uruchomienie

### 1. Konfiguracja bazy danych
Utwórz bazę danych MySQL i zaktualizuj plik `application.properties` w katalogu `src/main/resources`:

```properties
spring.datasource.url=jdbc:mysql:http://localhost:3000/
spring.datasource.username=root
spring.datasource.password=ezio
spring.jpa.hibernate.ddl-auto=update

## Uruchomienie aplikacji
terminal zosk=  mvn spring-boot:run
terminal frontend=  npm run dev
docker i baza danych połączone i uruchomione
http://localhost:3000/

Technologie
Backend:
Spring Boot
MySQL
JDBC Template
Java

Frontend:
Javascript
Html
Css
React.js
Axios

Autorzy
Damian Pasek- Backend, api, baza danych
Dawid Marcisz- frontend, api



