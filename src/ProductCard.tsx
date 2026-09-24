import React from 'react';
import { Product } from '../../data/menuItems';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <img src={product.imagem} alt={product.nome} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '1rem' }}>
        <span style={{ fontSize: '0.8rem', color: '#8B4513', fontWeight: 'bold' }}>{product.categoria} • {product.estado}</span>
        <h3 style={{ margin: '0.5rem 0' }}>{product.nome}</h3>
        <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>{product.descricao}</p>
        <p style={{ fontSize: '0.8rem', fontStyle: 'italic', color: '#888' }}>Artesão: {product.artesao}</p>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <strong style={{ fontSize: '1.2rem', color: '#2e7d32' }}>R$ {product.preco.toFixed(2)}</strong>
          <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#8B4513',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};