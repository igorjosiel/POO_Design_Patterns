class NegotiationController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputDate = $('#data');
    this._inputAmount = $('#quantidade');
    this._inputValue = $('#valor');

    this._negotiationsList = new Bind(
      new NegotiationsList(),
      new NegotiationsView($('#negotiationsView')),
      'add', 'empty',
    );

    this._message = new Bind(
      new Message(),
      new MessageView($('#messageView')),
      'text',
    );
  }

  add(event) {
    event.preventDefault();

    this._negotiationsList.add(this._createNegotiation());

    this._message.text = 'Negociação adicionada com sucesso!';

    this._clearForm();
  }

  clearList() {
    this._negotiationsList.empty();

    this._message.text = 'Negociações deletadas com sucesso!';
  }

  _createNegotiation() {
    return new Negotiation(
      DateHelper.textToDate(this._inputDate.value),
      this._inputAmount.value,
      this._inputValue.value,
    );
  }

  _clearForm() {
    this._inputDate.value = "";
    this._inputAmount.value = 1;
    this._inputValue.value = 0, 0;

    this._inputDate.focus();
  }
}