import React, { useState } from 'react';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLoginSuccess();
    }
  };

  return (
    <div className="login-wrapper">
      <header className="header-hero">
        <div className="cactus-icon">🌵</div>
        <h1 className="brand-title">Raízes do <span>Nordeste</span></h1>
        <p className="brand-subtitle">Acesse sua conta para fazer pedidos</p>
      </header>

      <main className="screen-content">
        <div className="tab-switch">
          <button 
            type="button" 
            className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Entrar
          </button>
          <button 
            type="button" 
            className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Cadastrar
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {activeTab === 'register' && (
            <div className="form-group">
              <label htmlFor="name">NOME COMPLETO</label>
              <input 
                id="name"
                type="text" 
                placeholder="Seu nome" 
                className="form-input" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">E-MAIL</label>
            <input 
              id="email"
              type="email" 
              placeholder="seu@email.com" 
              className="form-input" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">SENHA</label>
            <input 
              id="password"
              type="password" 
              placeholder="••••••••" 
              className="form-input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            {activeTab === 'login' ? 'Entrar na conta' : 'Criar minha conta'}
          </button>
        </form>

        {activeTab === 'login' && (
          <button type="button" className="btn-secondary">
            Esqueci minha senha
          </button>
        )}

        <div className="divider">OU CONTINUE COM</div>

        <div className="social-login">
          <button type="button" className="social-btn" aria-label="Login com Google">🌐</button>
          <button type="button" className="social-btn" aria-label="Login com Apple">🍎</button>
          <button type="button" className="social-btn" aria-label="Login com Telefone">📱</button>
        </div>
      </main>
    </div>
  );
};