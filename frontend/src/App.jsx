import AuthCard from "./components/AuthCard.jsx";

const App = () => (
  <main className="page">
    <header className="hero">
      <p className="eyebrow">Authentification</p>
      <h1>Bienvenue sur votre futur espace sécurisé</h1>
      <p className="subtitle">
        Préparez la connexion et l'inscription de votre application web avant le lancement.
      </p>
    </header>
    <AuthCard />
  </main>
);

export default App;
