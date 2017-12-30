// modyfikacja istniejacej karty
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': 2477,
  'X-Auth-Token': "36a25b813e544154e0c3e5e0402b984c"
};


$.ajax({
    url: baseUrl + '/card' + self.id,
    method: 'PUT',
    success: function(response) {
      var self = this,
      changeCards(response.cards);
    }
});

changeCards(cards) {
  cards.forEach(function (cards) {
  board.changeCards(cards);
  })
}

// modyfikacja istniejacej KOLUMNY

$.ajax({
    url: baseUrl + '/card' + self.id,
    method: 'PUT',
    success: function(response) {
      var self = this,
      changeColumns(response.columns);
    }
});

changeColumns(columns) {
  columns.forEach(function (column) {
  board.changeColumns(column);
  })
}
