import { useState } from "react";

const initialForm = {
  email: "",
  password: "",
  confirmPassword: "",
  remember: true
};

const AuthCard = () => {
  const [mode, setMode] = useState("login");
  const [formState, setFormState] = useState(initialForm);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const isSignup = mode === "signup";

  return (
    <section className="auth-card">
      <div className="auth-header">
        <h2>{isSignup ? "Créer un compte" : "Se connecter"}</h2>
        <p>
          {isSignup
            ? "Collectez les informations de base pour vos nouveaux utilisateurs."
            : "Rassemblez les identifiants pour un accès rapide et sécurisé."}
        </p>
      </div>
      <div className="pill-group" role="tablist" aria-label="Choisir un mode">
        <button
          className={mode === "login" ? "pill active" : "pill"}
          type="button"
          onClick={() => setMode("login")}
          role="tab"
          aria-selected={mode === "login"}
        >
          Connexion
        </button>
        <button
          className={mode === "signup" ? "pill active" : "pill"}
          type="button"
          onClick={() => setMode("signup")}
          role="tab"
          aria-selected={mode === "signup"}
        >
          Inscription
        </button>
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Adresse e-mail
          <input
            name="email"
            type="email"
            placeholder="vous@exemple.com"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mot de passe
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            value={formState.password}
            onChange={handleChange}
            required
          />
        </label>
        {isSignup && (
          <label>
            Confirmer le mot de passe
            <input
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={formState.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>
        )}
        <div className="form-row">
          <label className="checkbox">
            <input
              name="remember"
              type="checkbox"
              checked={formState.remember}
              onChange={handleChange}
            />
            Garder ma session active
          </label>
          <button className="link" type="button">
            Mot de passe oublié ?
          </button>
        </div>
        <button className="primary" type="submit">
          {isSignup ? "Créer un compte" : "Se connecter"}
        </button>
      </form>
      <footer className="auth-footer">
        <div>
          <span>{isSignup ? "Déjà inscrit ?" : "Pas encore de compte ?"}</span>
          <button className="link" type="button" onClick={() => setMode(isSignup ? "login" : "signup")}>
            {isSignup ? "Se connecter" : "Créer un compte"}
          </button>
        </div>
        <span className="chip">JWT prêt à brancher</span>
      </footer>
    </section>
  );
};

export default AuthCard;
