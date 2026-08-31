export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'entradas' | 'principais' | 'bebidas' | 'sobremesas';
  imageUrl: string;
  badge?: string;
}

export const CATEGORIES = [
  { id: 'todas', label: 'Todos' },
  { id: 'entradas', label: 'Entradas' },
  { id: 'principais', label: 'Pratos Principais' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'sobremesas', label: 'Sobremesas' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Dado de Tapioca com Geléia de Pimenta',
    description: 'Cubo de tapioca crocante por fora e macio por dentro, acompanhado de geléia artesanal de pimenta.',
    price: 28.90,
    category: 'entradas',
    badge: 'Mais Pedido',
    imageUrl: 'https://cdn.awsli.com.br/800x800/1345/1345272/produto/53711172/66afb46bbe.jpg'
  },
  {
    id: '2',
    name: 'Tapioca com Manteiga',
    description: 'Massa quentinha de Tapioca com manteiga derretida na hora.',
    price: 5.00,
    category: 'entradas',
    badge: 'Mais Pedido',
    imageUrl: 'https://cdn.pixabay.com/photo/2020/07/04/21/35/tapioca-5371009_1280.jpg'
  },
  {
    id: '3',
    name: 'Carne de Sol Acebolada com Macaxeira',
    description: 'Tiras de carne de sol aceboladas na manteiga de garrafa, acompanhadas de macaxeira frita bem crocante.',
    price: 42.00,
    category: 'principais',
    imageUrl: 'https://www.agendadascidades.com.br/uploads/images/2022/05/carne-de-sol-acebolada-com-macaxeira-frita.jpg'
  },
  {
    id: '4',
    name: 'Baião de Dois Especial',
    description: 'Feijão verde, arroz, queijo coalho grelhado, carne de sol desfiada, queijo cremoso e cheiro-verde.',
    price: 49.90,
    category: 'principais',
    badge: 'Destaque da Casa',
    imageUrl: 'https://temperododia.com.br/wp-content/uploads/2025/06/baiao-de-dois-nordestino-receita-768x512.jpg'
  },
  {
    id: '5',
    name: 'Moqueca de Peixe e Camarão',
    description: 'Postas de peixe fresco e camarões cozidos ao molho de dendê, leite de coco e pimentões. Acompanha arroz e pirão.',
    price: 78.00,
    category: 'principais',
    imageUrl: 'https://gastronomismo.com.br/wp-content/uploads/2025/11/Receita-de-Moqueca-de-peixe-e-camarao.png'
  },
  {
    id: '6',
    name: 'Suco Natural de Cajá (500ml)',
    description: 'Suco feito na hora com a polpa natural de cajá bem gelado.',
    price: 9.50,
    category: 'bebidas',
    imageUrl: 'https://sucopuroenergia.com.br/wp-content/uploads/2025/11/Receita-de-Suco-de-Caja-768x480.jpeg'
  },
  {
    id: '7',
    name: 'Cartola Pernambucana',
    description: 'Banana frita na manteiga de garrafa, coberta com queijo coalho assado, açúcar e canela.',
    price: 18.00,
    category: 'sobremesas',
    imageUrl: 'https://2.bp.blogspot.com/-LgGl_eETr-E/Wrihy7CQdVI/AAAAAAAAAUA/HKkXo7kA8XMYNxe6_f3HVmAFmbfCFe_cgCLcBGAs/s1600/northeast-brazilian-cuisine-what-to-eat-recife-olinda-brazil-brasil-7.jpg'
  }
];