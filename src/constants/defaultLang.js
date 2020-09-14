export default {
  "en-us": {
    search: {
      label: "Search",
      searchingFor: "Searching for: ",
      placeHolder: "Search"
    },
    paginationControl: {
      label: "Page Size",
    },
    pagination: {
      totalLabel: (showing, total) => `Showing ${showing} of ${total} records`,
    }
  },
  "pt-br": {
    search: {
      label: "Pesquisar",
      searchingFor: "Pesquisando por: ",
      placeHolder: "Pesquisar"
    },
    paginationControl: {
      label: "Items por página",
    },
    pagination: {
      totalLabel: (showing, total) => `Mostrando ${showing} de um total de ${total} items`,
    }
  }
};
