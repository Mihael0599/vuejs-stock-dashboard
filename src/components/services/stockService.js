import axios from 'axios';

const order = [
  '19Q1',
  '19Q2',
  '19Q3',
  '19Q4',
  '20Q1',
  '20Q2',
  '20Q3',
  '20Q4',
  '21Q1',
  'Mar 21',
  'Jun 21',
  'Sep 21',
  'Dec 21',
  'Mar 22',
  'Jun 22',
  'Sep 22',
  'Dec 22',
  'Mar 23',
  '3 Aug 23',
  '2 Nov 23',
  '1 Feb 24',
  '2 Mai 24',
  '1 Feb 24',
  '1 Aug 24',
  '31 Oct 24',
  '1 May 25',
  '30 Jan 25',
  '31 Jul 25',
]

class StockService {
  constructor() {
    this.apiKey = axios.create({
      baseURL: 'https://sheetdb.io/api/v1/9sctyueajevdh',
    });
  }

  async fetchData(sheetName) {
    try {
      const response = await this.apiKey.get(`?sheet=${sheetName}`);
      return response.data;
    } catch (error) {
      console.log('Error fetching data:', error);
      return [];
    }
  }

  async getRevenue(sheetName) {
    const data = await this.fetchData(sheetName);
    return order.map(key => data[3][key]);
  }
}

export const stockService = new StockService();