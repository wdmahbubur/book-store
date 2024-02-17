
const users = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Maria Com Com',
    email: 'mcomcom@hitmail.com',
    image_url: '/users/maria-com-com.jpg',
  },
  {
    id: 'd0cdfaa6-beee-4dd9-bfe6-cbcfeceffa8a',
    name: 'José da Silva',
    email: 'josedasilva@gmail.com',
    image_url: '/users/joao-da-silva.jpg',
  }
];

const books = [
  {
    id: 'e0cdfaa6-ceee-4dd9-bfe6-cbcfeceffa8a',
    title: 'The Great Gatsby',
    description: "The Great Gatsby, third novel by F. Scott Fitzgerald, published in 1925 by Charles Scribner's Sons. Set in Jazz Age New York, the novel tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.",
    author: 'F. Scott Fitzgerald',
    cover: '/books/tgg.jpg',
    genre: 'Novel',
    pages: 256,
    rent: 'Yes',
    sold: 'Yes',
    stock: 34,
    rentPrice: 24,
    sellPrice: 230,
    ISBN: '1-86092-049-7',
    show: 'No',
    seller: {
      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Maria Com Com',
      email: '',
      image_url: '/user.jpg',
    }
  },
  {
    id: 'e0cdfaa6-deee-4dd8-bfe6-cbcfeceffa8a',
    title: 'Murder!',
    description: "Stories in the Travelman Short Stories series take the reader to places of mystery, fantasy, horror, romance, and corners of the universe yet unexplored.",
    author: 'Arnold Bennett',
    cover: '/books/murder.png',
    genre: 'Crime',
    pages: 198,
        rent: 'Yes',
    sold: 'Yes',
    stock: 7,
    rentPrice: 15,
    sellPrice: 120,
    ISBN: '1-86092-050-3',
    show: 'Yes',
    seller: {
      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Maria Com Com',
      email: '',
      image_url: '/user.jpg',
    }
  },
  {
    id: 'e0cdfaa6-aeee-4dd9-bfe6-cbcfeceffa8a',
    title: "Alice's Adventures in Wonderland",
    description: "Alice's Adventures in Wonderland (commonly Alice in Wonderland) is an 1865 English children's novel by Lewis Carroll, a mathematics don at Oxford University. It details the story of a young girl named Alice who falls through a rabbit hole into a fantasy world of anthropomorphic creatures.",
    author: 'Lewis Carroll',
    cover: '/books/alice.jpg',
    genre: 'Children',
    pages: 128,
    rent: 'Yes',
    sold: 'Yes',
    stock: 12,
    rentPrice: 10,
    sellPrice: 100,
    ISBN: '1-86092-051-X',
    seller: {
      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Maria Com Com',
      email: '',
      image_url: '/user.jpg',
    }
  },
  {
    id: 'e0cdfaa6-aeee-4dd9-bfe6-cbcfeceffa8a',
    title: 'Pride and Prejudice',
    description: "Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry.",
    author: 'Jane Austen',
    cover: '/books/pandp.jpg',
    genre: 'Classic',
    pages: 280,
    rent: 'Yes',
    sold: 'Yes',
    stock: 20,
    rentPrice: 15,
    sellPrice: 120,
    ISBN: '1-86092-052-8',
    seller: {
      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Maria Com Com',
      email: '',
      image_url: '/user.jpg',
    }
  },
  {
    id: 'e0cdfaa6-beee-4dd9-bfe6-cbcfeceffa8a',
    title: 'War and Peace',
    description: "War and Peace broadly focuses on Napoleon's invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment;",
    author: 'Leo Tolstoy',
    cover: '/books/war-and-peace.jpg',
    genre: 'Historical Fiction',
    pages: 928,
    rent: 'Yes',
    sold: 'Yes',
    stock: 15,
    rentPrice: 20,
    sellPrice: 250,
    ISBN: '1-86092-053-6',
    seller: {
      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Maria Com Com',
      email: '',
      image_url: '/user.jpg',
    }
  },
  {
    id: 'e0cdfaa6-beee-4dd9-bfe6-cbcfeceffa8b',
    title: 'The Man',
    description: "The story of a brilliant man whose unflinching dedication to independence of thought and transparency in business sparked an entire industry--and whose personal tribulations humbled and strengthened him. Through it all, Alfred Best remained the eternal optimist.",
    author: 'AM Best',
    cover: '/books/the_man.jpg',
    genre: 'Biography',
    pages: 700,
    rent: 'Yes',
    sold: 'Yes',
    stock: 10,
    rentPrice: 15,
    sellPrice: 120,
    ISBN: '1-86092-054-4',
    seller: {
      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Maria Com Com',
      email: '',
      image_url: '/user.jpg',
    }
  },
  {
    id: 'e0cdfaa6-beee-4dd9-bfe6-cbcfeceffa8c',
    title: 'The Alchemist',
    description: "The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.",
    author: 'Paulo Coelho',
    cover: '/books/alchemist.jpg',
    genre: 'Fiction',
    pages: 280,
    rent: 'Yes',
    sold: 'Yes',
    stock: 0,
    rentPrice: 15,
    sellPrice: 120,
    ISBN: '1-86092-055-2',
    seller: {
      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Maria Com Com',
      email: '',
      image_url: '/user.jpg',
    }
  },
  {
    id: 'e0cdfaa6-beee-4dd9-bfe6-cbcfeceffa8d',
    title: 'Moby Dick',
    description: "Herman Melville's Moby Dick is the story of Captain Ahab's self-destructive obsession with the white whale called Moby Dick. It is told through the narration of Ishmael, a sailor new to Ahab's ship, the Pequod. The plot of the novel follows Ahab's manic drive to kill the whale, even as it endangers his crew.",
    author: 'Herman Melville',
    cover: '/books/mobydick.jpg',
    genre: 'Novel',
    pages: 320,
    rent: 'Yes',
    sold: 'Yes',
    stock: 10,
    rentPrice: 15,
    sellPrice: 120,
    ISBN: '1-86092-056-0',
    seller: {
      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Maria Com Com',
      email: '',
      image_url: '/user.jpg',
    }
  }  
];


const fakeConversation = [{"id":"1","name":"Ilsa Siverns","avatar":"https://robohash.org/optiopariaturab.png?size=50x50&set=set1","last_message":"Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.","last_message_time":"2023-03-04T04:41:14Z","status":"offline"},
{"id":"2","name":"Sydel Cains","avatar":"https://robohash.org/velitdoloresea.png?size=50x50&set=set1","last_message":"Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.","last_message_time":"2024-02-16T21:32:32Z","status":"offline"},
{"id":"3","name":"Nealson Crocroft","avatar":"https://robohash.org/estnesciuntreiciendis.png?size=50x50&set=set1","last_message":"Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.","last_message_time":"2023-03-16T17:10:39Z","status":"offline"},
{"id":"4","name":"Conchita Spolton","avatar":"https://robohash.org/animiminimaut.png?size=50x50&set=set1","last_message":"Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.","last_message_time":"2023-10-27T16:26:22Z","status":"online"},
{"id":"5","name":"Belita Geary","avatar":"https://robohash.org/ametevenietet.png?size=50x50&set=set1","last_message":"Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.","last_message_time":"2023-06-02T20:58:27Z","status":"offline"},
{"id":"6","name":"Meier Aspland","avatar":"https://robohash.org/nobispossimuscupiditate.png?size=50x50&set=set1","last_message":"Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.","last_message_time":"2023-10-23T02:38:28Z","status":"offline"},
{"id":"7","name":"Morgana Dibdin","avatar":"https://robohash.org/sitquisquamvoluptatem.png?size=50x50&set=set1","last_message":"Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.","last_message_time":"2023-12-23T07:37:39Z","status":"offline"},
{"id":"8","name":"Frankie Keynes","avatar":"https://robohash.org/ametveroin.png?size=50x50&set=set1","last_message":"Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.","last_message_time":"2023-11-17T20:32:40Z","status":"online"},
{"id":"9","name":"Dulce Gong","avatar":"https://robohash.org/eumreprehenderitodit.png?size=50x50&set=set1","last_message":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.","last_message_time":"2023-06-13T10:20:23Z","status":"online"},
  { "id": "10", "name": "Thorndike Havoc", "avatar": "https://robohash.org/nihilsiteius.png?size=50x50&set=set1", "last_message": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", "last_message_time": "2023-06-07T04:44:59Z", "status": "online" }]

const fakeMessages = [{"name":"Ilsa Siverns","message":"Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.","message_time":"10/22/2022","type":"outgoing","conversation_id":"1","cid":"1", "avatar": "https://robohash.org/omnisquasiquia.png?size=50x50&set=set1"},
{"name":"Ilsa Siverns","message":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.","message_time":"4/12/2022","type":"incoming","conversation_id":"1","cid":"2", "avatar": "https://robohash.org/omnisquasiquia.png?size=50x50&set=set1"},
{"name":"Ilsa Siverns","message":"Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.","message_time":"6/1/2022","type":"incoming","conversation_id":"1","cid":"3", "avatar": "https://robohash.org/omnisquasiquia.png?size=50x50&set=set1"},
{"name":"Ilsa Siverns","message":"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.","message_time":"10/27/2022","type":"outgoing","conversation_id":"1","cid":"4", "avatar": "https://robohash.org/omnisquasiquia.png?size=50x50&set=set1"},
{"name":"Ilsa Siverns","message":"Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.","message_time":"5/26/2022","type":"outgoing","conversation_id":"1","cid":"5", "avatar": "https://robohash.org/omnisquasiquia.png?size=50x50&set=set1"},
{"name":"Ilsa Siverns","message":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.","message_time":"8/22/2022","type":"outgoing","conversation_id":"1","cid":"6","avatar": "https://robohash.org/omnisquasiquia.png?size=50x50&set=set1"},
{"name":"Ilsa Siverns","message":"Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.","message_time":"10/21/2022","type":"incoming","conversation_id":"1","cid":"7", "avatar": "https://robohash.org/omnisquasiquia.png?size=50x50&set=set1"},
{"name":"Ilsa Siverns","message":"Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.","message_time":"8/27/2022","type":"incoming","conversation_id":"1","cid":"8", "avatar": "https://robohash.org/omnisquasiquia.png?size=50x50&set=set1"},
{"name":"Ilsa Siverns","message":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.","message_time":"1/1/2022","type":"incoming","conversation_id":"1","cid":"9", "avatar": "https://robohash.org/omnisquasiquia.png?size=50x50&set=set1"},
{"name":"Ilsa Siverns","message":"Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.","message_time":"10/6/2022","type":"outgoing","conversation_id":"1","cid":"10", "avatar": "https://robohash.org/omnisquasiquia.png?size=50x50&set=set1"}]

export const getAllBooks = () => {
  return books;
}

export const getBookById = (id: string) => {
  return books.find((book) => book.id === id);
}

export const getRelatedBooks = (genre: string, id:string)=>{
  return books.filter((book) => book.genre === genre && book.id!==id);
}

export const getConversation = () => {
  return fakeConversation;
}

export const getMessages = () => {
  return fakeMessages;
}