class NegotiationController {
  constructor() {
    let $ = document.querySelector.bind(document);
    
    this._inputDate = $('#data');
    this._inputAmount = $('#quantidade');
    this._inputValue = $('#valor');

    this._negotiationsList = ProxyFactory.create(new NegotiationsList(), ['add', 'empty'], (model) => this._negotiationsView.update(model));

    this._negotiationsView = new NegotiationsView($('#negotiationsView'));
    this._negotiationsView.update(this._negotiationsList);
    
    this._message = new Message();
    this._messageView = new MessageView($('#messageView'));

    this._messageView.update(this._message);
  }
  
  add(event) {
    event.preventDefault();

    this._negotiationsList.add(this._createNegotiation());

    this._message.text = 'Negociação adicionada com sucesso!';
    setTimeout(() => {
      this._message.text = '';
      this._messageView.update(this._message);
    }, 5000);
    
    this._messageView.update(this._message);

    this._clearForm();
  }

  clearList() {
    this._negotiationsList.empty();

    this._message.text = 'Negociações deletadas com sucesso!';
    this._messageView.update(this._message);
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
    this._inputValue.value = 0,0;

    this._inputDate.focus();
  }
}