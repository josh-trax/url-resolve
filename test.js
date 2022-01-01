const urls = [
  'url1',
  'url2',
  'url3',
  'url4',
  'url5',
  'url6',
  'url7',
  'url8',
  'url9',
  'url10',
]

function urlResponse(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${url} has resolved`);
    }, Math.random() * 2000)
  })
}
