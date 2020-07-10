const fetch = require('node-fetch')

module.exports = {
  date: async function(date) {
    const urlbase = "http://api.jugemkey.jp/api/horoscope/free/"
    const response = await fetch(urlbase + date, {method: 'GET'});
    const json = await response.json();
    const horoscopes = await json.horoscope[date].map(await function(horo) {
      return new Horoscope(horo);
    });
    const rnd = Math.floor(Math.random() * horoscopes.length);
    return horoscopes[rnd];
  }
}

const Horoscope = class {
  constructor(data) {
    this.sign = data.sign;
    this.rank = data.rank;
    this.total = data.total;
    this.content = data.content;
    this.item = data.item;
    this.color = data.color;
    this.money = data.money;
    this.job = data.job;
    this.day = data.day;
    this.love = data.love;
  }
};
