/**
 * Catálogo de padrões — showroom de componentes e fluxos reutilizáveis.
 * Cada categoria agrupa "partes" de sistema que você usa em projetos reais.
 * demoComponent: nome do componente Vue que renderiza o demo (em catalog/demos/).
 */

export const catalogCategories = [
  {
    id: 'crud',
    title: 'CRUD',
    description: 'Listagem, criação, edição e exclusão com eventos e ações. Padrão base para entidades administrativas.',
    icon: '📋',
    items: [
      {
        id: 'crud-lista',
        title: 'Lista (ações na linha)',
        description: 'Listagem com busca, tabela, badges de status e ações por linha (ícones Editar/Excluir).',
        demoComponent: 'CrudListaDemo',
        tags: ['lista', 'busca', 'tabela', 'badges', 'ícones', 'ações na linha'],
      },
      {
        id: 'crud-lista-selecao',
        title: 'Lista (seleção múltipla)',
        description: 'Checkbox por linha, “selecionar todos”, barra de ações em lote (Excluir, Editar selecionados).',
        demoComponent: 'CrudListaSelecaoDemo',
        tags: ['lista', 'checkbox', 'seleção múltipla', 'ações em lote'],
      },
      {
        id: 'crud-formulario',
        title: 'Formulário',
        description: 'Formulário de cadastro: inputs, select, textarea, checkbox, labels e botões. Layout em grid responsivo.',
        demoComponent: 'FormDemo',
        tags: ['formulário', 'inputs', 'select', 'textarea', 'validação'],
      },
      {
        id: 'crud-completo',
        title: 'CRUD completo',
        description: 'Fluxo completo: lista, criar, editar e excluir em um único demo.',
        demoComponent: 'CrudDemo',
        tags: ['lista', 'formulário', 'modal', 'confirmação', 'feedback'],
      },
    ],
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'Painéis com cards, gráficos, resumos e navegação.',
    icon: '📊',
    items: [
      {
        id: 'dashboard-basico',
        title: 'Dashboard básico',
        description: 'Em breve: cards de resumo, grid de widgets, layout responsivo.',
        demoComponent: null,
        tags: ['cards', 'métricas', 'layout'],
      },
    ],
  },
  {
    id: 'upload',
    title: 'Upload de arquivos',
    description: 'Upload de imagens e arquivos: preview, drag-and-drop, múltiplos, validação.',
    icon: '🖼️',
    items: [
      {
        id: 'upload-imagens',
        title: 'Upload de imagens',
        description: 'Em breve: preview, crop opcional, múltiplos arquivos, progress.',
        demoComponent: null,
        tags: ['imagem', 'preview', 'múltiplos'],
      },
    ],
  },
  {
    id: 'formularios',
    title: 'Formulários',
    description: 'Formulários complexos: validação, steps, máscaras, selects dependentes.',
    icon: '📝',
    items: [
      {
        id: 'form-validacao',
        title: 'Formulário com validação',
        description: 'Em breve: validação em tempo real, mensagens de erro, submit com feedback.',
        demoComponent: null,
        tags: ['validação', 'feedback'],
      },
    ],
  },
  {
    id: 'auth',
    title: 'Autenticação',
    description: 'Login, registro, recuperação de senha, sessão.',
    icon: '🔐',
    items: [
      {
        id: 'login',
        title: 'Tela de login',
        description: 'Em breve: login com e-mail/senha, “lembrar-me”, link para recuperação.',
        demoComponent: null,
        tags: ['login', 'sessão'],
      },
    ],
  },
  {
    id: 'tabelas',
    title: 'Tabelas e listas',
    description: 'Tabelas com ordenação, paginação, seleção e exportação.',
    icon: '📑',
    items: [
      {
        id: 'tabela-avancada',
        title: 'Tabela avançada',
        description: 'Em breve: ordenação por coluna, paginação, seleção de linhas, export CSV.',
        demoComponent: null,
        tags: ['tabela', 'ordenação', 'paginação'],
      },
    ],
  },
]

/**
 * Retorna um item do catálogo pelo id (formato: categoriaId-itemId).
 */
export function getCatalogItem(categoryId, itemId) {
  const category = catalogCategories.find((c) => c.id === categoryId)
  if (!category) return null
  return category.items.find((i) => i.id === itemId) || null
}

export function getCategory(categoryId) {
  return catalogCategories.find((c) => c.id === categoryId) || null
}
