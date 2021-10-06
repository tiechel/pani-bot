const { default: axios } = require('axios');
const moment = require('moment')

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

async function fetchHoroscope(date) {
  const d = moment(date).format('YYYY/MM/DD');
  const urlbase = "http://api.jugemkey.jp/api/horoscope/free/"
  const response = await axios.get(urlbase + d);
  const { horoscope } = response.data;
  return horoscope[d].map((horo) => new Horoscope(horo));
}

module.exports = {
  /**
   * @param {Date} date 
   * @returns {Horoscope[]}
   */
  get: async function (date) {
    return await fetchHoroscope(date);
  },
  /**
   * @returns {Horoscope[]}
   */
  today: async function () {
    return await fetchHoroscope();
  },
  /**
   * @param {Date} date 
   * @returns {Horoscope}
   */
  random: async function (date) {
    const d = date ? moment(date) : moment();
    const horoscopes = await fetchHoroscope(d);
    const rnd = Math.floor(Math.random() * horoscopes.length);
    return horoscopes[rnd];
  }
}

