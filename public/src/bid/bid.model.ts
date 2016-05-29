export class Bid {
  _id:            string;
  bidder:         any;
  amount:         any;
  createdAt:      string

  constructor(
    _id?:         string,
    bidder?:      any,
    amount?:      any,
    createdAt?:   string
  ) {
    this._id = _id;
    this.bidder = bidder;
    this.amount = amount;
    this.createdAt = createdAt;
  }
}
