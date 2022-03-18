

const generate_avatar = () => {
  
  const num = ( Math.random() * 5 | 0 )
  const image = [
    'https://react.semantic-ui.com/images/avatar/large/steve.jpg',    
    'https://react.semantic-ui.com/images/avatar/large/molly.png',
    'https://react.semantic-ui.com/images/avatar/large/jenny.jpg',
    'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
    'https://react.semantic-ui.com/images/avatar/large/matthew.png'
  ]
  const avatar = image[num]
  return avatar
}

export default generate_avatar
