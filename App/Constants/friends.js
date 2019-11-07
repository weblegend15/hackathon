const FRIENDS = [
  {
    id: 1,
    name: 'Kobe Bryant',
    photo: 'http://www.gstatic.com/tv/thumb/persons/80696/80696_v9_bb.jpg',
    story: 'Kobe Bean Bryant, often known mononymously as Kobe, is an American former professional basketball player.',
    thumbnail: 'https://mk0slamonlinensgt39k.kinstacdn.com/wp-content/uploads/2019/09/GettyImages-84064911.jpg'
  },
  {
    id: 2,
    name: 'Lebron James',
    photo: 'https://fadeawayworld.net/wp-content/uploads/2019/11/bron-getty.jpg',
    story: 'LeBron Raymone James Sr, often known mononymously as Kobe, is an American former professional basketball player.',
    thumbnail: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/3E0B/production/_109238851_lebron.jpg'
  },
  {
    id: 3,
    name: 'Chris Paul',
    photo: 'https://i.ytimg.com/vi/77Qo0krBcxU/maxresdefault.jpg',
    story: 'Christopher Emmanuel Paul, often known mononymously as Kobe, is an American former professional basketball player.',
    thumbnail: 'https://i.ytimg.com/vi/g6a47vBt6Lc/maxresdefault.jpg'
  },
  {
    id: 4,
    name: 'Shaquille O`Neal',
    photo: 'https://www.gannett-cdn.com/-mm-/020e6171fa630204d798870f80b86fd10b31c6aa/c=0-0-2660-2000/local/-/media/2015/02/17/Phoenix/Phoenix/635597720247849594-aasuns05.jpg?width=540&height=405&fit=crop',
    story: 'Shaquille Rashaun "Shaq" O`Neal, often known mononymously as Kobe, is an American former professional basketball player.',
    thumbnail: 'https://s.marketwatch.com/public/resources/images/MW-HG398_shaq_t_ZH_20190326111501.jpg'
  }
]

const FRIENDS_POSTS = [
  [
    {
      id: 'first',
      src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
      comment: 'This is Kobe Bryant`s video'
    }
  ],
  [
    {
      id: 'first',
      src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
      comment: 'This is Lebron James`s video'
    }
  ],
  [
    {
      id: 'first',
      src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
      comment: 'This is Chris Paul`s video'
    }
  ],
  [
    {
      id: 'first',
      src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
      comment: 'This is Shaquille O`Neal`s video'
    }
  ]
]

const FRIENDS_CARDS = [
  {
    id: 1,
    cards: [
      { like: 6, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 3, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 0, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 0, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 2, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 1, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 2, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' }
    ]
  },
  {
    id: 2,
    cards: [
      { like: 3, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 5, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 2, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 5, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 6, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 8, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 0, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' }
    ]
  },
  {
    id: 3,
    cards: [
      { like: 6, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 3, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 0, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 0, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 2, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 1, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 2, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' }
    ]
  },
  {
    id: 4,
    cards: [
      { like: 3, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 5, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 2, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 5, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 6, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 8, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' },
      { like: 0, src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4' }
    ]
  }
]

export {
  FRIENDS,
  FRIENDS_POSTS,
  FRIENDS_CARDS
}