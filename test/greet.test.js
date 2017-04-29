import message from '../src/js/reducers'

test('returns a greeting', () => {
  let emptyState = {}
  let action = { type: 'GREET', payload: 'Good Morning!' }
  
  let result = message(emptyState, action)
  expect(result).toEqual({msg: 'Good Morning!'})
});

test('returns an empty object', () => {
  let emptyState = {}
  let action = { type: 'GREET', payload: 'Good Morning!' }
  
  let emptyResult = message(emptyState, emptyState)
  expect(emptyResult).toEqual(emptyState)
});