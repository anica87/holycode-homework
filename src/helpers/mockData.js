import { randomId } from './utils'

const getCard = (content) => ({
  id: randomId(),
  content,
})
export default [
  {
    id: randomId(),
    name: 'To do',
    cards: [
      getCard('Review request for proposal'),
      getCard('Develop BIM model of wind shear impact'),
    ],
  },
  {
    id: randomId(),
    name: 'In progress',
    cards: [
      getCard('Prepare for client meeting with Addisons'),
      getCard('Addisons client meeting Thursday 11 a.m.'),
      getCard('Write speech on housing trends'),
      getCard('Speak to realtors dinner Wed 7 a.m.'),
    ],
  },
  {
    id: randomId(),
    name: 'Done',
    cards: [getCard('Write meeting minutes from client meeting')],
  },
]
