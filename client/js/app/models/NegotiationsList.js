class NegotiationsList {
  constructor(trap) {
    this._negotiations = [];
    this._trap = trap;
  }

  add(negotiation) {
    this._negotiations.push(negotiation);
    
    this._trap(this);
  }

  get negotiations() {
    return [].concat(this._negotiations);
  }

  empty() {
    this._negotiations = [];

    this._trap(this);
  }
}