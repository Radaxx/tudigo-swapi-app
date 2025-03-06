# Star Wars Nx Application

Ce projet est une application Star Wars développée avec Nx, React, TypeScript et TanStack Query.
Il consomme l’API SWAPI pour afficher la liste des planètes, des personnages, et le détail d’un personnage.

## Sommaire

- Fonctionnalités
- Architecture Nx
- Prérequis
- Installation et Lancement
- Commandes Nx Utiles
- Structure du Projet
- Bonnes Pratiques & Décisions Techniques
- Next Steps
- Crédits

## Fonctionnalités

- Home Page

  - Deux boutons de navigation :
    - Accès à la liste des planètes
    - Accès à la liste des personnages

- Liste des Planètes

  - Récupère et affiche les planètes depuis SWAPI (pagination).
  - Affichage sous forme de cartes (2 colonnes).

- Liste des Personnages

  - Récupère et affiche les personnages depuis SWAPI (pagination).
  - Chaque nom de personnage est cliquable pour afficher le détail.
  - Affichage sous forme de cartes (2 colonnes).

- Détail d’un Personnage

  - Affiche les informations détaillées (taille, poids, couleur de cheveux, année de naissance, etc.).

- Breadcrumb

  - Présent sur toutes les pages, indique le chemin (ex. Home / People / Luke Skywalker).

- Pagination

  - Boutons Previous / Next stylisés façon Star Wars.
  - Gérée via la logique de l’API SWAPI (next / previous).

- Design Star Wars
  - Fond noir, texte jaune, police “Star Jedi” (ou similaire).

## Architecture Nx

Le projet suit la logique Nx :

- `apps/` : contient l’application principale React (ex. starwars).
- `libs/` : contient les librairies partagées et les features (Planets, People, UI, etc.).

Cette séparation rend le code plus modulaire et facilite l’évolutivité.

## Prérequis

- Node.js v14+ (ou v16+)
- npm ou yarn
- Nx (installé globalement) :

```bash
npm install -g nx
```

(Optionnel, Nx peut s’exécuter en local via npx.)

## Installation et Lancement

1. Cloner ce dépôt :

```bash
git clone https://github.com/ton-compte/star-wars-nx.git
cd star-wars-nx
```

2. Installer les dépendances :

```bash
npm install
```

ou

```bash
yarn install
```

3. Lancer l’application :

```bash
nx serve starwars
```

Par défaut, l’application sera accessible sur http://localhost:4200.

---

## Commandes Nx Utiles

- Build de l’application :

```bash
nx build starwars
```

- Test (unitaires) pour toutes les libs :

```bash
nx test planets
nx test people
```

- Lint pour vérifier la qualité du code :

```bash
nx lint starwars
```

- Format (prettier) :

```bash
nx format
```

## Structure du Projet

Exemple de structure (simplifiée) :

```css
tudigo-swapi-app/
┣ apps/
│ ┣ src/
│ │ ┣ app/
│ │ │ ┣ pages/
│ │ │ ┗ App.tsx
│ │ ┣ assets/
│ │ ┗ main.tsx
│ ┗ project.json
┣ libs/
│ ┣ planets/
│ │ ┣ src/
│ │ │ ┣ hooks/
│ │ │ ┣ models/
│ │ │ ┣ pages/
│ │ │ ┗ index.ts
│ ┣ people/
│ │ ┣ src/
│ │ │ ┣ hooks/
│ │ │ ┣ models/
│ │ │ ┣ pages/
│ │ │ ┗ index.ts
│ ┗ ui/
│ ┣ src/
│ │ ┣ components/
│ │ │ ┣ Breadcrumb.tsx
│ │ │ ┣ Card.tsx
│ │ │ ┣ CardGrid.tsx
│ │ │ ┣ Pagination.tsx
│ │ │ ┗ ...
│ │ ┗ index.ts
┣ nx.json
┣ package.json
┗ tsconfig.base.json
```

- `apps/starwars` : application React principale, avec le routing global.

- `libs/planets` : logique et pages spécifiques à l’affichage des planètes.
- `libs/people` : logique et pages spécifiques à l’affichage des personnages.
- `libs/ui` : composants génériques réutilisables (Breadcrumb, Card, etc.).

## Bonnes Pratiques & Décisions Techniques

1. TypeScript

   - Utilisation d’interfaces (Planet, Person, etc.).
   - Type Guards pour valider la structure des réponses SWAPI (ex. isPlanetsApiResponse).

2. TanStack Query

   - Gère les appels réseau (fetch) et le cache.
   - usePlanets(page), usePeople(page), etc.

3. Pagination

   - Basée sur les champs next et previous de SWAPI.
   - Composant réutilisable Pagination.tsx.

4. UI

   - Cards en 2 colonnes via un CardGrid.
   - Composant Card<T> générique pour afficher n’importe quelle data.
   - Design Star Wars : police “Star Jedi”, couleurs, etc.

5. Tests Unitaires

   - Tests sur les type guards (ex. planet.spec.ts).
   - Tests sur les hooks (ex. usePlanets.spec.ts), avec mocking de fetch.

6. Nx
   - Séparation en librairies (planets, people, ui) pour une meilleure modularité.
   - Facilite l’exécution de tests et de builds ciblés.

## Next steps

- Ajout de plus de tests unitaires
- Fix du problème empechant de lancer les tests unitaires.
- Fix la font qui est étrange par moment :weird:

## Crédits

- SWAPI (https://swapi.dev/) : pour les données Star Wars.
- Nx (https://nx.dev/) : pour l’architecture monorepo.
- React & TypeScript : pour la base de l’application.
- TanStack Query : pour la gestion des appels API et du cache.
- Police Star Jedi : pour le style emblématique Star Wars.

Que la Force soit avec vous !
