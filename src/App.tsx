import React, { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { MENU_ITEMS, CATEGORIES, MenuItem } from './data/menuData';

type Screen = 'lgpd' | 'login' | 'home' | 'menu' | 'cart' | 'loyalty' | 'profile';

interface Unit {
  id: string;
  name: string;
  city: string;
  distance: string;
  time: string;
  status: string;
}

const UNITS: Unit[] = [
  { id: '1', name: 'Boa Viagem', city: 'Recife', distance: '1,2 km', time: '20 min', status: 'Aberta' },
  { id: '2', name: 'Boa Vista', city: 'Recife', distance: '3,4 km', time: '35 min', status: 'Aberta' },
  { id: '3', name: 'Ponta d\'Areia', city: 'São Luís', distance: '2,0 km', time: '15 min', status: 'Aberta' },
  { id: '4', name: 'Centro Histórico', city: 'São Luís', distance: '4,1 km', time: '25 min', status: 'Aberta' },
  { id: '5', name: 'Meireles', city: 'Fortaleza', distance: '1,8 km', time: '18 min', status: 'Aberta' }
];

export function App() {
  // 1. Estado inicial alterado para 'lgpd'
  const [currentScreen, setCurrentScreen] = useState<Screen>('lgpd');
  const [selectedUnit, setSelectedUnit] = useState<Unit>(UNITS[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);
  const [lgpdAccepted, setLgpdAccepted] = useState(true);

  const filteredItems = selectedCategory === 'todas'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => [...prev, item]);
  };

  const totalCart = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="app-container">
      {/* TELA 1: LGPD (Agora é a primeira tela) */}
      {currentScreen === 'lgpd' && (
        <>
          <header className="header-hero">
            <div className="cactus-icon">🌵</div>
            <h1 className="brand-title">Raízes do <span>Nordeste</span></h1>
            <p className="brand-subtitle">Sabor de Raiz, Tecnologia de Ponta</p>
          </header>

          <main className="screen-content">
            <div className="lgpd-card">
              <h3>🔒 Aviso de Privacidade — LGPD</h3>
              <p>
                A Raízes do Nordeste coleta dados pessoais (nome, e-mail, localização e histórico de pedidos) para autenticação, entrega e programa de fidelização em conformidade com a Lei 13.709/2018 (LGPD).
              </p>
            </div>

            <div className="checkbox-group">
              <label className="checkbox-item">
                <input 
                  type="checkbox" 
                  checked={lgpdAccepted} 
                  onChange={(e) => setLgpdAccepted(e.target.checked)} 
                />
                <span>Li e aceito os Termos de Uso e a Política de Privacidade <strong>(obrigatório)</strong></span>
              </label>
            </div>

            {/* Redireciona para a tela de LOGIN ao clicar em Continuar */}
            <button 
              className="btn-continue" 
              disabled={!lgpdAccepted}
              onClick={() => setCurrentScreen('login')}
            >
              Continuar →
            </button>
          </main>
        </>
      )}

      {/* TELA 2: LOGIN */}
      {currentScreen === 'login' && (
        <LoginScreen onLoginSuccess={() => setCurrentScreen('home')} />
      )}

      {/* TELA 3: INÍCIO */}
      {currentScreen === 'home' && (
        <>
          <header className="header-hero" style={{ paddingBottom: '16px' }}>
            <div className="cactus-icon">🌵</div>
            <h1 className="brand-title">Raízes do <span>Nordeste</span></h1>
          </header>

          <div className="loyalty-banner">
            <div>
              <div className="loyalty-points">1.480</div>
              <div className="loyalty-sub">pontos de fidelidade ★ Nível Ouro</div>
            </div>
            <button onClick={() => setCurrentScreen('loyalty')} className="loyalty-link" style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
              Ver prêmios →
            </button>
          </div>

          <main className="screen-content" style={{ borderRadius: 0 }}>
            <div className="section-label">CANAL DE PEDIDO</div>
            <div className="channel-scroll">
              <button className="channel-btn active">📱 App</button>
              <button className="channel-btn">🌐 Site</button>
              <button className="channel-btn">🖥️ Totem</button>
              <button className="channel-btn">🛍️ Pick-up</button>
            </div>

            <h2 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Escolha a Unidade</h2>
            <div className="units-scroll">
              {UNITS.map(unit => (
                <div 
                  key={unit.id} 
                  className={`unit-card ${selectedUnit.id === unit.id ? 'active' : ''}`}
                  onClick={() => setSelectedUnit(unit)}
                >
                  <span style={{ fontSize: '1.2rem' }}>🏪</span>
                  <div className="unit-title">{unit.name}</div>
                  <div className="unit-location">{unit.city} • {unit.distance} • {unit.time}</div>
                  <span className="status-badge">• {unit.status}</span>
                </div>
              ))}
            </div>

            <div className="promo-banner">
              <div className="promo-tag">🌾 PROMOÇÃO DO DIA</div>
              <div className="promo-title">Tapioca + Suco R$ 18,90</div>
              <div className="promo-sub">Combo especial nordestino. Válido até as 14h.</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1rem' }}>Mais Pedidos</h3>
              <button 
                onClick={() => setCurrentScreen('menu')} 
                style={{ background: 'none', border: 'none', color: '#c84b12', fontWeight: 700, cursor: 'pointer' }}
              >
                Ver cardápio →
              </button>
            </div>
          </main>
        </>
      )}

      {/* TELA 4: CARDÁPIO */}
      {currentScreen === 'menu' && (
        <>
          <header className="header-hero" style={{ padding: '16px' }}>
            <h1 className="brand-title" style={{ fontSize: '1.3rem' }}>Raízes do <span>Nordeste</span></h1>
            <p className="brand-subtitle">Unidade: {selectedUnit.name} ({selectedUnit.city})</p>
          </header>

          <div className="categories-bar">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <main className="menu-list">
            {filteredItems.map((item: MenuItem) => (
              <article key={item.id} className="menu-card">
                <img src={item.imageUrl} alt={item.name} className="menu-card-img" />
                <div className="menu-card-info">
                  <div>
                    {item.badge && <span className="badge">{item.badge}</span>}
                    <h2 className="item-title">{item.name}</h2>
                    <p className="item-description">{item.description}</p>
                  </div>
                  <div className="item-footer">
                    <span className="item-price">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </span>
                    <button className="add-btn" onClick={() => handleAddToCart(item)}>
                      Adicionar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </main>
        </>
      )}

      {/* TELA 5: CARRINHO */}
      {currentScreen === 'cart' && (
        <main className="screen-content" style={{ padding: '20px' }}>
          <h2>🛒 Seu Carrinho</h2>
          {cartItems.length === 0 ? (
            <p style={{ marginTop: '20px' }}>Seu carrinho está vazio.</p>
          ) : (
            <div style={{ marginTop: '16px' }}>
              {cartItems.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                  <span>{item.name}</span>
                  <strong>R$ {item.price.toFixed(2).replace('.', ',')}</strong>
                </div>
              ))}
              <div style={{ marginTop: '20px', fontSize: '1.2rem', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
                <span>Total:</span>
                <span>R$ {totalCart.toFixed(2).replace('.', ',')}</span>
              </div>
              <button className="btn-continue" style={{ marginTop: '20px' }} onClick={() => alert('Pedido finalizado com sucesso!')}>
                Finalizar Pedido
              </button>
            </div>
          )}
        </main>
      )}

      {/* TELA 6: FIDELIDADE */}
      {currentScreen === 'loyalty' && (
        <main className="screen-content" style={{ padding: '20px' }}>
          <h2>⭐ Programa de Fidelidade</h2>
          <div className="loyalty-banner" style={{ marginTop: '16px', borderRadius: '12px' }}>
            <div>
              <div className="loyalty-points">1.480</div>
              <div className="loyalty-sub">pontos acumulados</div>
            </div>
          </div>
          <h3 style={{ marginTop: '20px' }}>Prêmios Disponíveis</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>☕ Café Regional — <strong>500 pts</strong></li>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>🌮 Tapioca Simples — <strong>1.000 pts</strong></li>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>🥤 Combo Nordestino — <strong>2.000 pts</strong></li>
          </ul>
        </main>
      )}

      {/* TELA 7: PERFIL */}
      {currentScreen === 'profile' && (
        <main className="screen-content" style={{ padding: '20px' }}>
          <h2>👤 Meu Perfil</h2>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div><strong>Unidade Preferida:</strong> {selectedUnit.name}</div>
            <div><strong>Endereço:</strong> Recife - PE</div>
            <button className="btn-continue" style={{ backgroundColor: '#c84b12', marginTop: '20px' }} onClick={() => setCurrentScreen('login')}>
              Sair da Conta
            </button>
          </div>
        </main>
      )}

      {/* NAV BAR FIXA (Aparece nas telas principais) */}
      {['home', 'menu', 'cart', 'loyalty', 'profile'].includes(currentScreen) && (
        <nav className="bottom-nav">
          <button className={`nav-item ${currentScreen === 'home' ? 'active' : ''}`} onClick={() => setCurrentScreen('home')}>
            <span>🏠 Início</span>
          </button>
          <button className={`nav-item ${currentScreen === 'menu' ? 'active' : ''}`} onClick={() => setCurrentScreen('menu')}>
            <span>📖 Cardápio</span>
          </button>
          <button className={`nav-item ${currentScreen === 'cart' ? 'active' : ''}`} onClick={() => setCurrentScreen('cart')}>
            <span>🛒 Carrinho ({cartItems.length})</span>
          </button>
          <button className={`nav-item ${currentScreen === 'loyalty' ? 'active' : ''}`} onClick={() => setCurrentScreen('loyalty')}>
            <span>⭐ Fidelidade</span>
          </button>
          <button className={`nav-item ${currentScreen === 'profile' ? 'active' : ''}`} onClick={() => setCurrentScreen('profile')}>
            <span>👤 Perfil</span>
          </button>
        </nav>
      )}
    </div>
  );
}

export default App;