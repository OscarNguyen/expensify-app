import moment from 'moment';

export default [{
  id: '1',
  description: 'iphone 11 pro',
  note: '',
  amount: 5999,
  createdAt: 0
}, {
  id: '2',
  description: 'iphone 11 pro max',
  note: '',
  amount: 6999,
  createdAt: moment(0).subtract(4, 'd').valueOf()
}, {
  id: '3',
  description: 'Macbook pro',
  note: '',
  amount: 15999,
  createdAt: moment(0).add(4, 'd').valueOf()
}
]