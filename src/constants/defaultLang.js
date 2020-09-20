export default {
  'en-us': {
    search: {
      label: 'Search',
      searchingFor: 'Searching for: ',
      placeHolder: 'Search'
    },
    paginationControl: {
      label: 'Page Size',
    },
    pagination: {
      next: 'Next',
      previous: 'Previous',
      totalLabel: (showing, total) => `Showing ${showing} of ${total} records`,
    }
  },
  'pt-br': {
    search: {
      label: 'Pesquisar',
      searchingFor: 'Pesquisando por: ',
      placeHolder: 'Pesquisar'
    },
    paginationControl: {
      label: 'Items por página',
    },
    pagination: {
      next: 'Próximo',
      previous: 'Anterior',
      totalLabel: (showing, total) => `Mostrando ${showing} de um total de ${total} items`,
    }
  }
};
