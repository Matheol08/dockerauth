# dockerauth

Ce dépôt prépare :

- un conteneur Docker MySQL pour stocker les comptes utilisateur,
- une interface React prête pour l'authentification (connexion + inscription).

## Démarrer MySQL via Docker

1. Copiez le fichier d'environnement.

```bash
cp .env.example .env
```

2. Lancez le conteneur.

```bash
docker compose up -d
```

Le service MySQL écoute sur `localhost:3306` avec les identifiants définis dans `.env`.

## Lancer l'interface React

```bash
cd frontend
npm install
npm run dev
```

Ouvrez ensuite `http://localhost:5173`.

## Notes

- L'interface React est purement front-end : aucun appel API n'est encore branché.
- Vous pouvez ajouter votre backend (Node, Laravel, etc.) et brancher la base MySQL créée par Docker.
