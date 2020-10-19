export const books = {
  request_info: {
    success: true,
    credits_used: 71,
    credits_remaining: 29,
  },
  request_metadata: {
    created_at: '2020-10-19T00:46:54.366Z',
    processed_at: '2020-10-19T00:47:07.350Z',
    total_time_taken: 12.98,
    amazon_url:
      'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books/ref=zg_bs_nav_0?language=en_US',
    timing: [
      'global_init - 0ms (total 0ms)',
      'auth_apikey - 5ms (total 5ms)',
      'auth_retrieve_plan - 0ms (total 6ms)',
      'auth_retrieve_credit_usage - 2ms (total 8ms)',
      'processing_invoking_worker - 1ms (total 9ms)',
      'processing_execution_complete - 12984ms (total 12993ms)',
      'auth_credit_usage_reconcile - 10ms (total 13004ms)',
      'global_end - 0ms (total 13004ms)',
    ],
  },
  request_parameters: {
    type: 'bestsellers',
    url:
      'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books/ref=zg_bs_nav_0',
    output: 'json',
    language: 'en_US',
    customer_location: 'us',
    associate_id: 'my_associate_id',
  },
  bestsellers: [
    {
      rank: 1,
      position: 1,
      title: 'Room on the Broom',
      asin: '0142501123',
      link:
        'https://www.amazon.com/Room-Broom-Julia-Donaldson/dp/0142501123/ref=zg_bs_books_1?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Julia Donaldson',
        link:
          'https://www.amazon.com/Room-Broom-Julia-Donaldson/dp/0142501123/ref=zg_bs_books_1?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Paperback',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg',
      rating: 4.9,
      ratings_total: 8941,
      price_lower: {
        symbol: '$',
        value: 4,
        currency: 'USD',
        raw: '$4.00',
      },
      price_upper: {
        symbol: '$',
        value: 4,
        currency: 'USD',
        raw: '$4.00',
      },
      price: {
        symbol: '$',
        value: 4,
        currency: 'USD',
        raw: '$4.00 - $4.00',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 2,
      position: 2,
      title: 'Modern Comfort Food: A Barefoot Contessa Cookbook',
      asin: '0804187061',
      link:
        'https://www.amazon.com/Modern-Comfort-Food-Barefoot-Contessa/dp/0804187061/ref=zg_bs_books_2?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Ina Garten',
        link:
          'https://www.amazon.com/Modern-Comfort-Food-Barefoot-Contessa/dp/0804187061/ref=zg_bs_books_2?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81CTXWG01OL._AC_UL200_SR200,200_.jpg',
      rating: 4.6,
      ratings_total: 370,
      price_lower: {
        symbol: '$',
        value: 21,
        currency: 'USD',
        raw: '$21.00',
      },
      price_upper: {
        symbol: '$',
        value: 21,
        currency: 'USD',
        raw: '$21.00',
      },
      price: {
        symbol: '$',
        value: 21,
        currency: 'USD',
        raw: '$21.00 - $21.00',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 3,
      position: 3,
      title: 'A Time for Mercy (Jake Brigance)',
      asin: '0385545967',
      link:
        'https://www.amazon.com/Time-Mercy-Jake-Brigance/dp/0385545967/ref=zg_bs_books_3?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'John Grisham',
        link:
          'https://www.amazon.com/Time-Mercy-Jake-Brigance/dp/0385545967/ref=zg_bs_books_3?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/A1i8NcG05pL._AC_UL200_SR200,200_.jpg',
      rating: 4.4,
      ratings_total: 323,
      price_lower: {
        symbol: '$',
        value: 17.97,
        currency: 'USD',
        raw: '$17.97',
      },
      price_upper: {
        symbol: '$',
        value: 17.97,
        currency: 'USD',
        raw: '$17.97',
      },
      price: {
        symbol: '$',
        value: 17.97,
        currency: 'USD',
        raw: '$17.97 - $17.97',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 4,
      position: 4,
      title:
        'Dog Man: Grime and Punishment: From the Creator of Captain Underpants (Dog Man #9) (9)',
      asin: '1338535625',
      link:
        'https://www.amazon.com/Dog-Man-Punishment-Creator-Underpants/dp/1338535625/ref=zg_bs_books_4?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Dav Pilkey',
        link:
          'https://www.amazon.com/Dog-Man-Punishment-Creator-Underpants/dp/1338535625/ref=zg_bs_books_4?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg',
      rating: 4.9,
      ratings_total: 6787,
      price_lower: {
        symbol: '$',
        value: 7.01,
        currency: 'USD',
        raw: '$7.01',
      },
      price_upper: {
        symbol: '$',
        value: 7.01,
        currency: 'USD',
        raw: '$7.01',
      },
      price: {
        symbol: '$',
        value: 7.01,
        currency: 'USD',
        raw: '$7.01 - $7.01',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 5,
      position: 5,
      title: 'If Animals Kissed Good Night',
      asin: '0374300216',
      link:
        'https://www.amazon.com/If-Animals-Kissed-Good-Night/dp/0374300216/ref=zg_bs_books_5?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Ann Whitford Paul',
        link:
          'https://www.amazon.com/If-Animals-Kissed-Good-Night/dp/0374300216/ref=zg_bs_books_5?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Board book',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg',
      rating: 4.8,
      ratings_total: 18794,
      price_lower: {
        symbol: '$',
        value: 4.79,
        currency: 'USD',
        raw: '$4.79',
      },
      price_upper: {
        symbol: '$',
        value: 4.79,
        currency: 'USD',
        raw: '$4.79',
      },
      price: {
        symbol: '$',
        value: 4.79,
        currency: 'USD',
        raw: '$4.79 - $4.79',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 6,
      position: 6,
      title: 'This Just Speaks to Me: Words to Live By Every Day',
      asin: '0593191080',
      link:
        'https://www.amazon.com/This-Just-Speaks-Me-Words/dp/0593191080/ref=zg_bs_books_6?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Hoda Kotb',
        link:
          'https://www.amazon.com/This-Just-Speaks-Me-Words/dp/0593191080/ref=zg_bs_books_6?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81vghfsPzGL._AC_UL200_SR200,200_.jpg',
      rating: 4.5,
      ratings_total: 16,
      price_lower: {
        symbol: '$',
        value: 15.59,
        currency: 'USD',
        raw: '$15.59',
      },
      price_upper: {
        symbol: '$',
        value: 15.59,
        currency: 'USD',
        raw: '$15.59',
      },
      price: {
        symbol: '$',
        value: 15.59,
        currency: 'USD',
        raw: '$15.59 - $15.59',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 7,
      position: 7,
      title:
        'Disney Junior Mickey Mouse Clubhouse - My First Library Board Book Block 12-Book Set - PI Kids',
      asin: '1412768519',
      link:
        'https://www.amazon.com/Disney-Mickey-Mouse-Clubhouse-Library/dp/1412768519/ref=zg_bs_books_7?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      variant: 'Board book',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/91uimHDwCsL._AC_UL200_SR200,200_.jpg',
      rating: 4.6,
      ratings_total: 1368,
      price_lower: {
        symbol: '$',
        value: 6.79,
        currency: 'USD',
        raw: '$6.79',
      },
      price_upper: {
        symbol: '$',
        value: 6.79,
        currency: 'USD',
        raw: '$6.79',
      },
      price: {
        symbol: '$',
        value: 6.79,
        currency: 'USD',
        raw: '$6.79 - $6.79',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 8,
      position: 8,
      title: "Caste (Oprah's Book Club): The Origins of Our Discontents",
      asin: '0593230256',
      link:
        'https://www.amazon.com/Caste-Origins-Discontents-Isabel-Wilkerson/dp/0593230256/ref=zg_bs_books_8?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Isabel Wilkerson',
        link:
          'https://www.amazon.com/Caste-Origins-Discontents-Isabel-Wilkerson/dp/0593230256/ref=zg_bs_books_8?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81MVfud0o8L._AC_UL200_SR200,200_.jpg',
      rating: 4.8,
      ratings_total: 6102,
      price_lower: {
        symbol: '$',
        value: 17.58,
        currency: 'USD',
        raw: '$17.58',
      },
      price_upper: {
        symbol: '$',
        value: 17.58,
        currency: 'USD',
        raw: '$17.58',
      },
      price: {
        symbol: '$',
        value: 17.58,
        currency: 'USD',
        raw: '$17.58 - $17.58',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 9,
      position: 9,
      title: 'Shade: A Tale of Two Presidents',
      asin: '0316421820',
      link:
        'https://www.amazon.com/Shade-Tale-Presidents-Pete-Souza/dp/0316421820/ref=zg_bs_books_9?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Pete Souza',
        link:
          'https://www.amazon.com/Shade-Tale-Presidents-Pete-Souza/dp/0316421820/ref=zg_bs_books_9?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41IgIfhXb0L._AC_UL200_SR200,200_.jpg',
      rating: 4.8,
      ratings_total: 1186,
      price_lower: {
        symbol: '$',
        value: 26.99,
        currency: 'USD',
        raw: '$26.99',
      },
      price_upper: {
        symbol: '$',
        value: 26.99,
        currency: 'USD',
        raw: '$26.99',
      },
      price: {
        symbol: '$',
        value: 26.99,
        currency: 'USD',
        raw: '$26.99 - $26.99',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 10,
      position: 10,
      title: 'The Deep End (Diary of a Wimpy Kid Book 15)',
      asin: '1419748688',
      link:
        'https://www.amazon.com/Deep-End-Diary-Wimpy-Book/dp/1419748688/ref=zg_bs_books_10?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Jeff Kinney',
        link:
          'https://www.amazon.com/Deep-End-Diary-Wimpy-Book/dp/1419748688/ref=zg_bs_books_10?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71Ks%2B8mKq2L._AC_UL200_SR200,200_.jpg',
      price_lower: {
        symbol: '$',
        value: 10.58,
        currency: 'USD',
        raw: '$10.58',
      },
      price_upper: {
        symbol: '$',
        value: 10.58,
        currency: 'USD',
        raw: '$10.58',
      },
      price: {
        symbol: '$',
        value: 10.58,
        currency: 'USD',
        raw: '$10.58 - $10.58',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 11,
      position: 11,
      title: 'Trumpty Dumpty Wanted a Crown: Verses for a Despotic Age',
      asin: '1797209469',
      link:
        'https://www.amazon.com/Trumpty-Dumpty-Wanted-Crown-Despotic/dp/1797209469/ref=zg_bs_books_11?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'John Lithgow',
        link:
          'https://www.amazon.com/Trumpty-Dumpty-Wanted-Crown-Despotic/dp/1797209469/ref=zg_bs_books_11?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81VIi0umjbL._AC_UL200_SR200,200_.jpg',
      rating: 4.8,
      ratings_total: 184,
      price_lower: {
        symbol: '$',
        value: 20.66,
        currency: 'USD',
        raw: '$20.66',
      },
      price_upper: {
        symbol: '$',
        value: 20.66,
        currency: 'USD',
        raw: '$20.66',
      },
      price: {
        symbol: '$',
        value: 20.66,
        currency: 'USD',
        raw: '$20.66 - $20.66',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 12,
      position: 12,
      title: 'Obama: An Intimate Portrait',
      asin: '0316512583',
      link:
        'https://www.amazon.com/Obama-Intimate-Portrait-Pete-Souza/dp/0316512583/ref=zg_bs_books_12?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Pete Souza',
        link:
          'https://www.amazon.com/Obama-Intimate-Portrait-Pete-Souza/dp/0316512583/ref=zg_bs_books_12?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51zbaGLMMfL._AC_UL200_SR200,200_.jpg',
      rating: 4.9,
      ratings_total: 3366,
      price_lower: {
        symbol: '$',
        value: 30.85,
        currency: 'USD',
        raw: '$30.85',
      },
      price_upper: {
        symbol: '$',
        value: 30.85,
        currency: 'USD',
        raw: '$30.85',
      },
      price: {
        symbol: '$',
        value: 30.85,
        currency: 'USD',
        raw: '$30.85 - $30.85',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 13,
      position: 13,
      title: 'Ten Lessons for a Post-Pandemic World',
      asin: '0393542130',
      link:
        'https://www.amazon.com/Lessons-Post-Pandemic-World-Fareed-Zakaria/dp/0393542130/ref=zg_bs_books_13?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Fareed Zakaria',
        link:
          'https://www.amazon.com/Lessons-Post-Pandemic-World-Fareed-Zakaria/dp/0393542130/ref=zg_bs_books_13?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71VAknhVD3L._AC_UL200_SR200,200_.jpg',
      rating: 4.5,
      ratings_total: 49,
      price_lower: {
        symbol: '$',
        value: 15.99,
        currency: 'USD',
        raw: '$15.99',
      },
      price_upper: {
        symbol: '$',
        value: 15.99,
        currency: 'USD',
        raw: '$15.99',
      },
      price: {
        symbol: '$',
        value: 15.99,
        currency: 'USD',
        raw: '$15.99 - $15.99',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 14,
      position: 14,
      title: 'I Love You to the Moon and Back',
      asin: '1589255518',
      link:
        'https://www.amazon.com/I-Love-You-Moon-Back/dp/1589255518/ref=zg_bs_books_14?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Amelia Hepworth',
        link:
          'https://www.amazon.com/I-Love-You-Moon-Back/dp/1589255518/ref=zg_bs_books_14?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Board book',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
      rating: 4.9,
      ratings_total: 9967,
      price_lower: {
        symbol: '$',
        value: 5,
        currency: 'USD',
        raw: '$5.00',
      },
      price_upper: {
        symbol: '$',
        value: 5,
        currency: 'USD',
        raw: '$5.00',
      },
      price: {
        symbol: '$',
        value: 5,
        currency: 'USD',
        raw: '$5.00 - $5.00',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 15,
      position: 15,
      title: 'Burnout: The Secret to Unlocking the Stress Cycle',
      asin: '1984818325',
      link:
        'https://www.amazon.com/Burnout-Secret-Unlocking-Stress-Cycle/dp/1984818325/ref=zg_bs_books_15?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      variant: 'Paperback',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81dfo8I14CL._AC_UL200_SR200,200_.jpg',
      rating: 4.6,
      ratings_total: 446,
      price_lower: {
        symbol: '$',
        value: 12.01,
        currency: 'USD',
        raw: '$12.01',
      },
      price_upper: {
        symbol: '$',
        value: 12.01,
        currency: 'USD',
        raw: '$12.01',
      },
      price: {
        symbol: '$',
        value: 12.01,
        currency: 'USD',
        raw: '$12.01 - $12.01',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 16,
      position: 16,
      title: 'The Searcher: A Novel',
      asin: '073522465X',
      link:
        'https://www.amazon.com/Searcher-Novel-Tana-French/dp/073522465X/ref=zg_bs_books_16?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Tana French',
        link:
          'https://www.amazon.com/Searcher-Novel-Tana-French/dp/073522465X/ref=zg_bs_books_16?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81quKj1P3qL._AC_UL200_SR200,200_.jpg',
      rating: 4.4,
      ratings_total: 1068,
      price_lower: {
        symbol: '$',
        value: 16.19,
        currency: 'USD',
        raw: '$16.19',
      },
      price_upper: {
        symbol: '$',
        value: 16.19,
        currency: 'USD',
        raw: '$16.19',
      },
      price: {
        symbol: '$',
        value: 16.19,
        currency: 'USD',
        raw: '$16.19 - $16.19',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 17,
      position: 17,
      title: 'Encyclopedia Prehistorica Dinosaurs : The Definitive Pop-Up',
      asin: '0763622281',
      link:
        'https://www.amazon.com/Encyclopedia-Prehistorica-Dinosaurs-Definitive-Pop-Up/dp/0763622281/ref=zg_bs_books_17?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Robert Sabuda',
        link:
          'https://www.amazon.com/Encyclopedia-Prehistorica-Dinosaurs-Definitive-Pop-Up/dp/0763622281/ref=zg_bs_books_17?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51L9Zap9XDL._AC_UL200_SR200,200_.jpg',
      rating: 4.9,
      ratings_total: 3379,
      price_lower: {
        symbol: '$',
        value: 19.5,
        currency: 'USD',
        raw: '$19.50',
      },
      price_upper: {
        symbol: '$',
        value: 19.5,
        currency: 'USD',
        raw: '$19.50',
      },
      price: {
        symbol: '$',
        value: 19.5,
        currency: 'USD',
        raw: '$19.50 - $19.50',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 18,
      position: 18,
      title: 'The Return',
      asin: '1538728575',
      link:
        'https://www.amazon.com/Return-Nicholas-Sparks/dp/1538728575/ref=zg_bs_books_18?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Nicholas Sparks',
        link:
          'https://www.amazon.com/Return-Nicholas-Sparks/dp/1538728575/ref=zg_bs_books_18?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/91JRZQT3GML._AC_UL200_SR200,200_.jpg',
      rating: 4.6,
      ratings_total: 2419,
      price_lower: {
        symbol: '$',
        value: 16.8,
        currency: 'USD',
        raw: '$16.80',
      },
      price_upper: {
        symbol: '$',
        value: 16.8,
        currency: 'USD',
        raw: '$16.80',
      },
      price: {
        symbol: '$',
        value: 16.8,
        currency: 'USD',
        raw: '$16.80 - $16.80',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 19,
      position: 19,
      title: 'Midnight Sun',
      asin: '031670704X',
      link:
        'https://www.amazon.com/Midnight-Sun-Stephenie-Meyer/dp/031670704X/ref=zg_bs_books_19?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Stephenie Meyer',
        link:
          'https://www.amazon.com/Midnight-Sun-Stephenie-Meyer/dp/031670704X/ref=zg_bs_books_19?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81zBVMvSjNL._AC_UL200_SR200,200_.jpg',
      rating: 4.8,
      ratings_total: 29020,
      price_lower: {
        symbol: '$',
        value: 16.79,
        currency: 'USD',
        raw: '$16.79',
      },
      price_upper: {
        symbol: '$',
        value: 16.79,
        currency: 'USD',
        raw: '$16.79',
      },
      price: {
        symbol: '$',
        value: 16.79,
        currency: 'USD',
        raw: '$16.79 - $16.79',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 20,
      position: 20,
      title: 'Untamed',
      asin: '1984801252',
      link:
        'https://www.amazon.com/Untamed-Glennon-Doyle-Melton/dp/1984801252/ref=zg_bs_books_20?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Glennon Doyle',
        link:
          'https://www.amazon.com/Untamed-Glennon-Doyle-Melton/dp/1984801252/ref=zg_bs_books_20?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/91AQs6qv9ML._AC_UL200_SR200,200_.jpg',
      rating: 4.7,
      ratings_total: 17485,
      price_lower: {
        symbol: '$',
        value: 16.77,
        currency: 'USD',
        raw: '$16.77',
      },
      price_upper: {
        symbol: '$',
        value: 16.77,
        currency: 'USD',
        raw: '$16.77',
      },
      price: {
        symbol: '$',
        value: 16.77,
        currency: 'USD',
        raw: '$16.77 - $16.77',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 21,
      position: 21,
      title:
        'The Happy in a Hurry Cookbook: 100-Plus Fast and Easy New Recipes That Taste Like Home (The Happy Cookbook Series)',
      asin: '0062968394',
      link:
        'https://www.amazon.com/Happy-Hurry-Cookbook-Recipes-Taste/dp/0062968394/ref=zg_bs_books_21?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Steve Doocy',
        link:
          'https://www.amazon.com/Happy-Hurry-Cookbook-Recipes-Taste/dp/0062968394/ref=zg_bs_books_21?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81lu4WGzgeL._AC_UL200_SR200,200_.jpg',
      rating: 4.7,
      ratings_total: 544,
      price_lower: {
        symbol: '$',
        value: 17.99,
        currency: 'USD',
        raw: '$17.99',
      },
      price_upper: {
        symbol: '$',
        value: 17.99,
        currency: 'USD',
        raw: '$17.99',
      },
      price: {
        symbol: '$',
        value: 17.99,
        currency: 'USD',
        raw: '$17.99 - $17.99',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 22,
      position: 22,
      title: 'The Very Hungry Caterpillar',
      asin: '0399226907',
      link:
        'https://www.amazon.com/Very-Hungry-Caterpillar-Eric-Carle/dp/0399226907/ref=zg_bs_books_22?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Eric Carle',
        link:
          'https://www.amazon.com/Very-Hungry-Caterpillar-Eric-Carle/dp/0399226907/ref=zg_bs_books_22?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Board book',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg',
      rating: 4.9,
      ratings_total: 21685,
      price_lower: {
        symbol: '$',
        value: 5.76,
        currency: 'USD',
        raw: '$5.76',
      },
      price_upper: {
        symbol: '$',
        value: 5.76,
        currency: 'USD',
        raw: '$5.76',
      },
      price: {
        symbol: '$',
        value: 5.76,
        currency: 'USD',
        raw: '$5.76 - $5.76',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 23,
      position: 23,
      title:
        'Follow the Money: The Shocking Deep State Connections of the Anti-Trump Cabal',
      asin: '1642936596',
      link:
        'https://www.amazon.com/Follow-Money-Shocking-Connections-Anti-Trump/dp/1642936596/ref=zg_bs_books_23?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Dan Bongino',
        link:
          'https://www.amazon.com/Follow-Money-Shocking-Connections-Anti-Trump/dp/1642936596/ref=zg_bs_books_23?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/91BQbqTW6oL._AC_UL200_SR200,200_.jpg',
      rating: 4.8,
      ratings_total: 232,
      price_lower: {
        symbol: '$',
        value: 16.8,
        currency: 'USD',
        raw: '$16.80',
      },
      price_upper: {
        symbol: '$',
        value: 16.8,
        currency: 'USD',
        raw: '$16.80',
      },
      price: {
        symbol: '$',
        value: 16.8,
        currency: 'USD',
        raw: '$16.80 - $16.80',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 24,
      position: 24,
      title:
        'School Zone - Big Preschool Workbook - Ages 4 and Up, Colors, Shapes, Numbers 1-10, Alphabet, Pre-Writing, Pre-Reading…',
      asin: '0887431453',
      link:
        'https://www.amazon.com/School-Zone-Preschool-Pre-Writing-Pre-Reading/dp/0887431453/ref=zg_bs_books_24?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      variant: 'Paperback',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81HCcHPXZnL._AC_UL200_SR200,200_.jpg',
      rating: 4.8,
      ratings_total: 26710,
      price_lower: {
        symbol: '$',
        value: 6.69,
        currency: 'USD',
        raw: '$6.69',
      },
      price_upper: {
        symbol: '$',
        value: 6.69,
        currency: 'USD',
        raw: '$6.69',
      },
      price: {
        symbol: '$',
        value: 6.69,
        currency: 'USD',
        raw: '$6.69 - $6.69',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 25,
      position: 25,
      title:
        'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
      asin: '1878424319',
      link:
        'https://www.amazon.com/Four-Agreements-Practical-Personal-Freedom/dp/1878424319/ref=zg_bs_books_25?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Don Miguel Ruiz',
        link:
          'https://www.amazon.com/Four-Agreements-Practical-Personal-Freedom/dp/1878424319/ref=zg_bs_books_25?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Paperback',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg',
      rating: 4.7,
      ratings_total: 26040,
      price_lower: {
        symbol: '$',
        value: 6.48,
        currency: 'USD',
        raw: '$6.48',
      },
      price_upper: {
        symbol: '$',
        value: 6.48,
        currency: 'USD',
        raw: '$6.48',
      },
      price: {
        symbol: '$',
        value: 6.48,
        currency: 'USD',
        raw: '$6.48 - $6.48',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 26,
      position: 26,
      title:
        'Blackout: How Black America Can Make Its Second Escape from the Democrat Plantation',
      asin: '1982133279',
      link:
        'https://www.amazon.com/Blackout-America-Second-Democrat-Plantation/dp/1982133279/ref=zg_bs_books_26?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Candace Owens',
        link:
          'https://www.amazon.com/Blackout-America-Second-Democrat-Plantation/dp/1982133279/ref=zg_bs_books_26?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71Wl%2BdpjV-L._AC_UL200_SR200,200_.jpg',
      rating: 4.9,
      ratings_total: 2962,
      price_lower: {
        symbol: '$',
        value: 16.8,
        currency: 'USD',
        raw: '$16.80',
      },
      price_upper: {
        symbol: '$',
        value: 16.8,
        currency: 'USD',
        raw: '$16.80',
      },
      price: {
        symbol: '$',
        value: 16.8,
        currency: 'USD',
        raw: '$16.80 - $16.80',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 27,
      position: 27,
      title:
        'The Home Edit: A Guide to Organizing and Realizing Your House Goals (Includes Refrigerator Labels)',
      asin: '0525572643',
      link:
        'https://www.amazon.com/Home-Edit-Organizing-Realizing-Refrigerator/dp/0525572643/ref=zg_bs_books_27?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Clea Shearer',
        link:
          'https://www.amazon.com/Home-Edit-Organizing-Realizing-Refrigerator/dp/0525572643/ref=zg_bs_books_27?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Paperback',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/910SEF8J1NL._AC_UL200_SR200,200_.jpg',
      rating: 4.7,
      ratings_total: 2793,
      price_lower: {
        symbol: '$',
        value: 14.2,
        currency: 'USD',
        raw: '$14.20',
      },
      price_upper: {
        symbol: '$',
        value: 14.2,
        currency: 'USD',
        raw: '$14.20',
      },
      price: {
        symbol: '$',
        value: 14.2,
        currency: 'USD',
        raw: '$14.20 - $14.20',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 28,
      position: 28,
      title:
        'My First Learn to Write Workbook: Practice for Kids with Pen Control, Line Tracing, Letters, and More! (Kids coloring…',
      asin: '1641526270',
      link:
        'https://www.amazon.com/My-First-Learn-Write-Workbook/dp/1641526270/ref=zg_bs_books_28?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Crystal Radke',
        link:
          'https://www.amazon.com/My-First-Learn-Write-Workbook/dp/1641526270/ref=zg_bs_books_28?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Paperback',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71XQe19mZtL._AC_UL200_SR200,200_.jpg',
      rating: 4.8,
      ratings_total: 26046,
      price_lower: {
        symbol: '$',
        value: 5.39,
        currency: 'USD',
        raw: '$5.39',
      },
      price_upper: {
        symbol: '$',
        value: 5.39,
        currency: 'USD',
        raw: '$5.39',
      },
      price: {
        symbol: '$',
        value: 5.39,
        currency: 'USD',
        raw: '$5.39 - $5.39',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 29,
      position: 29,
      title: "Little Blue Truck's Halloween",
      asin: '0544772539',
      link:
        'https://www.amazon.com/Little-Trucks-Halloween-Alice-Schertle/dp/0544772539/ref=zg_bs_books_29?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Alice Schertle',
        link:
          'https://www.amazon.com/Little-Trucks-Halloween-Alice-Schertle/dp/0544772539/ref=zg_bs_books_29?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Board book',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51qNkKlcbnL._AC_UL200_SR200,200_.jpg',
      rating: 4.9,
      ratings_total: 1960,
      price_lower: {
        symbol: '$',
        value: 8.64,
        currency: 'USD',
        raw: '$8.64',
      },
      price_upper: {
        symbol: '$',
        value: 8.64,
        currency: 'USD',
        raw: '$8.64',
      },
      price: {
        symbol: '$',
        value: 8.64,
        currency: 'USD',
        raw: '$8.64 - $8.64',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 30,
      position: 30,
      title:
        'The Tower of Nero (Trials of Apollo, The Book Five) (Trials of Apollo, 5)',
      asin: '1484746457',
      link:
        'https://www.amazon.com/Tower-Nero-Trials-Apollo-Book/dp/1484746457/ref=zg_bs_books_30?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Rick Riordan',
        link:
          'https://www.amazon.com/Tower-Nero-Trials-Apollo-Book/dp/1484746457/ref=zg_bs_books_30?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81gBmkNppfL._AC_UL200_SR200,200_.jpg',
      rating: 4.9,
      ratings_total: 1291,
      price_lower: {
        symbol: '$',
        value: 13.11,
        currency: 'USD',
        raw: '$13.11',
      },
      price_upper: {
        symbol: '$',
        value: 13.11,
        currency: 'USD',
        raw: '$13.11',
      },
      price: {
        symbol: '$',
        value: 13.11,
        currency: 'USD',
        raw: '$13.11 - $13.11',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 31,
      position: 31,
      title: 'Spooky Pookie (Little Pookie)',
      asin: '1481497677',
      link:
        'https://www.amazon.com/Spooky-Pookie-Little-Sandra-Boynton/dp/1481497677/ref=zg_bs_books_31?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Sandra Boynton',
        link:
          'https://www.amazon.com/Spooky-Pookie-Little-Sandra-Boynton/dp/1481497677/ref=zg_bs_books_31?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Board book',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71rZvKObxUL._AC_UL200_SR200,200_.jpg',
      rating: 4.9,
      ratings_total: 999,
      price_lower: {
        symbol: '$',
        value: 2.98,
        currency: 'USD',
        raw: '$2.98',
      },
      price_upper: {
        symbol: '$',
        value: 2.98,
        currency: 'USD',
        raw: '$2.98',
      },
      price: {
        symbol: '$',
        value: 2.98,
        currency: 'USD',
        raw: '$2.98 - $2.98',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 32,
      position: 32,
      title:
        'Food Babe Kitchen: More than 100 Delicious, Real Food Recipes to Change Your Body and Your Life',
      asin: '140196012X',
      link:
        'https://www.amazon.com/Food-Babe-Kitchen-Delicious-Recipes/dp/140196012X/ref=zg_bs_books_32?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Vani Hari',
        link:
          'https://www.amazon.com/Food-Babe-Kitchen-Delicious-Recipes/dp/140196012X/ref=zg_bs_books_32?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/814LcF%2BM-YL._AC_UL200_SR200,200_.jpg',
      price_lower: {
        symbol: '$',
        value: 27,
        currency: 'USD',
        raw: '$27.00',
      },
      price_upper: {
        symbol: '$',
        value: 27,
        currency: 'USD',
        raw: '$27.00',
      },
      price: {
        symbol: '$',
        value: 27,
        currency: 'USD',
        raw: '$27.00 - $27.00',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 33,
      position: 33,
      title: 'The Little Old Lady Who Was Not Afraid of Anything',
      asin: '0064431835',
      link:
        'https://www.amazon.com/Little-Old-Lady-Afraid-Anything/dp/0064431835/ref=zg_bs_books_33?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      variant: 'Paperback',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/816VzjZVGrL._AC_UL200_SR200,200_.jpg',
      rating: 4.8,
      ratings_total: 925,
      price_lower: {
        symbol: '$',
        value: 3.84,
        currency: 'USD',
        raw: '$3.84',
      },
      price_upper: {
        symbol: '$',
        value: 3.84,
        currency: 'USD',
        raw: '$3.84',
      },
      price: {
        symbol: '$',
        value: 3.84,
        currency: 'USD',
        raw: '$3.84 - $3.84',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 34,
      position: 34,
      title: 'Pete the Cat: Trick or Pete',
      asin: '006219870X',
      link:
        'https://www.amazon.com/Pete-Cat-Trick-James-Dean/dp/006219870X/ref=zg_bs_books_34?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'James Dean',
        link:
          'https://www.amazon.com/Pete-Cat-Trick-James-Dean/dp/006219870X/ref=zg_bs_books_34?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Paperback',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/915r1BXvDcL._AC_UL200_SR200,200_.jpg',
      rating: 4.8,
      ratings_total: 869,
      price_lower: {
        symbol: '$',
        value: 5.02,
        currency: 'USD',
        raw: '$5.02',
      },
      price_upper: {
        symbol: '$',
        value: 5.02,
        currency: 'USD',
        raw: '$5.02',
      },
      price: {
        symbol: '$',
        value: 5.02,
        currency: 'USD',
        raw: '$5.02 - $5.02',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 35,
      position: 35,
      title: 'How to Catch a Unicorn',
      asin: '1492669733',
      link:
        'https://www.amazon.com/How-Catch-Unicorn-Adam-Wallace/dp/1492669733/ref=zg_bs_books_35?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Adam Wallace',
        link:
          'https://www.amazon.com/How-Catch-Unicorn-Adam-Wallace/dp/1492669733/ref=zg_bs_books_35?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/91vtkaBWXeL._AC_UL200_SR200,200_.jpg',
      rating: 4.8,
      ratings_total: 8857,
      price_lower: {
        symbol: '$',
        value: 5.49,
        currency: 'USD',
        raw: '$5.49',
      },
      price_upper: {
        symbol: '$',
        value: 5.49,
        currency: 'USD',
        raw: '$5.49',
      },
      price: {
        symbol: '$',
        value: 5.49,
        currency: 'USD',
        raw: '$5.49 - $5.49',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 36,
      position: 36,
      title: 'A Promised Land',
      asin: '1524763160',
      link:
        'https://www.amazon.com/Promised-Land-Barack-Obama/dp/1524763160/ref=zg_bs_books_36?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Barack Obama',
        link:
          'https://www.amazon.com/Promised-Land-Barack-Obama/dp/1524763160/ref=zg_bs_books_36?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
      price_lower: {
        symbol: '$',
        value: 27,
        currency: 'USD',
        raw: '$27.00',
      },
      price_upper: {
        symbol: '$',
        value: 27,
        currency: 'USD',
        raw: '$27.00',
      },
      price: {
        symbol: '$',
        value: 27,
        currency: 'USD',
        raw: '$27.00 - $27.00',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 37,
      position: 37,
      title: 'Brown Bear, Brown Bear, What Do You See?',
      asin: '0805047905',
      link:
        'https://www.amazon.com/Brown-Bear-What-You-See/dp/0805047905/ref=zg_bs_books_37?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      variant: 'Board book',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81EVdWdmOKL._AC_UL200_SR200,200_.jpg',
      rating: 4.9,
      ratings_total: 26444,
      price_lower: {
        symbol: '$',
        value: 5.67,
        currency: 'USD',
        raw: '$5.67',
      },
      price_upper: {
        symbol: '$',
        value: 5.67,
        currency: 'USD',
        raw: '$5.67',
      },
      price: {
        symbol: '$',
        value: 5.67,
        currency: 'USD',
        raw: '$5.67 - $5.67',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 38,
      position: 38,
      title: 'The Spider Who Saved Christmas',
      asin: '1644132117',
      link:
        'https://www.amazon.com/Spider-Who-Saved-Christmas/dp/1644132117/ref=zg_bs_books_38?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Raymond Arroyo',
        link:
          'https://www.amazon.com/Spider-Who-Saved-Christmas/dp/1644132117/ref=zg_bs_books_38?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81xbUsj6KfL._AC_UL200_SR200,200_.jpg',
      rating: 5,
      ratings_total: 2,
      price_lower: {
        symbol: '$',
        value: 11.34,
        currency: 'USD',
        raw: '$11.34',
      },
      price_upper: {
        symbol: '$',
        value: 11.34,
        currency: 'USD',
        raw: '$11.34',
      },
      price: {
        symbol: '$',
        value: 11.34,
        currency: 'USD',
        raw: '$11.34 - $11.34',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 39,
      position: 39,
      title: 'Greenlights',
      asin: '0593139135',
      link:
        'https://www.amazon.com/Greenlights-Matthew-McConaughey/dp/0593139135/ref=zg_bs_books_39?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Matthew McConaughey',
        link:
          'https://www.amazon.com/Greenlights-Matthew-McConaughey/dp/0593139135/ref=zg_bs_books_39?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81EF17-zQUL._AC_UL200_SR200,200_.jpg',
      price_lower: {
        symbol: '$',
        value: 18.71,
        currency: 'USD',
        raw: '$18.71',
      },
      price_upper: {
        symbol: '$',
        value: 18.71,
        currency: 'USD',
        raw: '$18.71',
      },
      price: {
        symbol: '$',
        value: 18.71,
        currency: 'USD',
        raw: '$18.71 - $18.71',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 40,
      position: 40,
      title:
        'First Little Readers Parent Pack: Guided Reading Level A: 25 Irresistible Books That Are Just the Right Level for…',
      asin: '0545231493',
      link:
        'https://www.amazon.com/First-Little-Readers-Parent-Pack/dp/0545231493/ref=zg_bs_books_40?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Deborah Schecter',
        link:
          'https://www.amazon.com/First-Little-Readers-Parent-Pack/dp/0545231493/ref=zg_bs_books_40?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Paperback',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71urLRbZzPL._AC_UL200_SR200,200_.jpg',
      rating: 4.7,
      ratings_total: 8318,
      price_lower: {
        symbol: '$',
        value: 11.99,
        currency: 'USD',
        raw: '$11.99',
      },
      price_upper: {
        symbol: '$',
        value: 11.99,
        currency: 'USD',
        raw: '$11.99',
      },
      price: {
        symbol: '$',
        value: 11.99,
        currency: 'USD',
        raw: '$11.99 - $11.99',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 41,
      position: 41,
      title:
        '5,000 Awesome Facts (About Everything!) (National Geographic Kids)',
      asin: '1426310498',
      link:
        'https://www.amazon.com/Awesome-Facts-Everything-National-Geographic/dp/1426310498/ref=zg_bs_books_41?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'National Geographic Kids',
        link:
          'https://www.amazon.com/Awesome-Facts-Everything-National-Geographic/dp/1426310498/ref=zg_bs_books_41?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/91nSi4sI-SL._AC_UL200_SR200,200_.jpg',
      rating: 4.8,
      ratings_total: 8270,
      price_lower: {
        symbol: '$',
        value: 12.29,
        currency: 'USD',
        raw: '$12.29',
      },
      price_upper: {
        symbol: '$',
        value: 12.29,
        currency: 'USD',
        raw: '$12.29',
      },
      price: {
        symbol: '$',
        value: 12.29,
        currency: 'USD',
        raw: '$12.29 - $12.29',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 42,
      position: 42,
      title: 'Rage',
      asin: '198213173X',
      link:
        'https://www.amazon.com/Rage-Bob-Woodward/dp/198213173X/ref=zg_bs_books_42?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Bob Woodward',
        link:
          'https://www.amazon.com/Rage-Bob-Woodward/dp/198213173X/ref=zg_bs_books_42?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71ycXfIU0cL._AC_UL200_SR200,200_.jpg',
      rating: 4.7,
      ratings_total: 8053,
      price_lower: {
        symbol: '$',
        value: 17.72,
        currency: 'USD',
        raw: '$17.72',
      },
      price_upper: {
        symbol: '$',
        value: 17.72,
        currency: 'USD',
        raw: '$17.72',
      },
      price: {
        symbol: '$',
        value: 17.72,
        currency: 'USD',
        raw: '$17.72 - $17.72',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 43,
      position: 43,
      title: 'The 5 Love Languages: The Secret to Love that Lasts',
      asin: '080241270X',
      link:
        'https://www.amazon.com/Love-Languages-Secret-that-Lasts/dp/080241270X/ref=zg_bs_books_43?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Gary Chapman',
        link:
          'https://www.amazon.com/Love-Languages-Secret-that-Lasts/dp/080241270X/ref=zg_bs_books_43?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Paperback',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41ILRrgp5-L._AC_UL200_SR200,200_.jpg',
      rating: 4.8,
      ratings_total: 27756,
      price_lower: {
        symbol: '$',
        value: 8.99,
        currency: 'USD',
        raw: '$8.99',
      },
      price_upper: {
        symbol: '$',
        value: 8.99,
        currency: 'USD',
        raw: '$8.99',
      },
      price: {
        symbol: '$',
        value: 8.99,
        currency: 'USD',
        raw: '$8.99 - $8.99',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 44,
      position: 44,
      title: 'How to Catch a Mermaid',
      asin: '149266247X',
      link:
        'https://www.amazon.com/How-Catch-Mermaid-Adam-Wallace/dp/149266247X/ref=zg_bs_books_44?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Adam Wallace',
        link:
          'https://www.amazon.com/How-Catch-Mermaid-Adam-Wallace/dp/149266247X/ref=zg_bs_books_44?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81Zj4ibm%2BhL._AC_UL200_SR200,200_.jpg',
      rating: 4.8,
      ratings_total: 24386,
      price_lower: {
        symbol: '$',
        value: 5.99,
        currency: 'USD',
        raw: '$5.99',
      },
      price_upper: {
        symbol: '$',
        value: 5.99,
        currency: 'USD',
        raw: '$5.99',
      },
      price: {
        symbol: '$',
        value: 5.99,
        currency: 'USD',
        raw: '$5.99 - $5.99',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 45,
      position: 45,
      title: 'Shade: A Tale of Two Presidents',
      asin: '031645821X',
      link:
        'https://www.amazon.com/Shade-Tale-Presidents-Pete-Souza/dp/031645821X/ref=zg_bs_books_45?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Pete Souza',
        link:
          'https://www.amazon.com/Shade-Tale-Presidents-Pete-Souza/dp/031645821X/ref=zg_bs_books_45?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Paperback',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51OjEKgaVRL._AC_UL200_SR200,200_.jpg',
      rating: 4.8,
      ratings_total: 1186,
      price_lower: {
        symbol: '$',
        value: 17.99,
        currency: 'USD',
        raw: '$17.99',
      },
      price_upper: {
        symbol: '$',
        value: 17.99,
        currency: 'USD',
        raw: '$17.99',
      },
      price: {
        symbol: '$',
        value: 17.99,
        currency: 'USD',
        raw: '$17.99 - $17.99',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 46,
      position: 46,
      title:
        'Think Like a Monk: Train Your Mind for Peace and Purpose Every Day',
      asin: '1982134488',
      link:
        'https://www.amazon.com/Think-Like-Monk-Train-Purpose/dp/1982134488/ref=zg_bs_books_46?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Jay Shetty',
        link:
          'https://www.amazon.com/Think-Like-Monk-Train-Purpose/dp/1982134488/ref=zg_bs_books_46?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71ru1Xg%2BVyL._AC_UL200_SR200,200_.jpg',
      rating: 4.9,
      ratings_total: 3476,
      price_lower: {
        symbol: '$',
        value: 16.2,
        currency: 'USD',
        raw: '$16.20',
      },
      price_upper: {
        symbol: '$',
        value: 16.2,
        currency: 'USD',
        raw: '$16.20',
      },
      price: {
        symbol: '$',
        value: 16.2,
        currency: 'USD',
        raw: '$16.20 - $16.20',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 47,
      position: 47,
      title:
        'School Zone - Multiplication 0-12 Flash Cards - Ages 8+, 3rd Grade, 4th Grade, Elementary Math, Multiplication Facts…',
      asin: '0938256939',
      link:
        'https://www.amazon.com/School-Zone-Multiplication-Grades-Concentration/dp/0938256939/ref=zg_bs_books_47?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'School Zone',
        link:
          'https://www.amazon.com/School-Zone-Multiplication-Grades-Concentration/dp/0938256939/ref=zg_bs_books_47?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Cards',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71%2Bb4It5oSL._AC_UL200_SR200,200_.jpg',
      rating: 4.6,
      ratings_total: 7345,
      price_lower: {
        symbol: '$',
        value: 2.99,
        currency: 'USD',
        raw: '$2.99',
      },
      price_upper: {
        symbol: '$',
        value: 2.99,
        currency: 'USD',
        raw: '$2.99',
      },
      price: {
        symbol: '$',
        value: 2.99,
        currency: 'USD',
        raw: '$2.99 - $2.99',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 48,
      position: 48,
      title: 'The Vanishing Half: A Novel',
      asin: '0525536299',
      link:
        'https://www.amazon.com/Vanishing-Half-Novel-Brit-Bennett/dp/0525536299/ref=zg_bs_books_48?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'Brit Bennett',
        link:
          'https://www.amazon.com/Vanishing-Half-Novel-Brit-Bennett/dp/0525536299/ref=zg_bs_books_48?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg',
      rating: 4.5,
      ratings_total: 13719,
      price_lower: {
        symbol: '$',
        value: 16.2,
        currency: 'USD',
        raw: '$16.20',
      },
      price_upper: {
        symbol: '$',
        value: 16.2,
        currency: 'USD',
        raw: '$16.20',
      },
      price: {
        symbol: '$',
        value: 16.2,
        currency: 'USD',
        raw: '$16.20 - $16.20',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 49,
      position: 49,
      title: 'The Invisible Life of Addie LaRue',
      asin: '0765387565',
      link:
        'https://www.amazon.com/Invisible-Life-Addie-LaRue/dp/0765387565/ref=zg_bs_books_49?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'V. E. Schwab',
        link:
          'https://www.amazon.com/Invisible-Life-Addie-LaRue/dp/0765387565/ref=zg_bs_books_49?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/91Ql48Y0mqL._AC_UL200_SR200,200_.jpg',
      rating: 4.7,
      ratings_total: 408,
      price_lower: {
        symbol: '$',
        value: 16.19,
        currency: 'USD',
        raw: '$16.19',
      },
      price_upper: {
        symbol: '$',
        value: 16.19,
        currency: 'USD',
        raw: '$16.19',
      },
      price: {
        symbol: '$',
        value: 16.19,
        currency: 'USD',
        raw: '$16.19 - $16.19',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
    {
      rank: 50,
      position: 50,
      title:
        'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
      asin: '0735211299',
      link:
        'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299/ref=zg_bs_books_50?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      sub_title: {
        text: 'James Clear',
        link:
          'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299/ref=zg_bs_books_50?_encoding=UTF8&psc=1&refRID=CVH9ZZKQ9VMCD8Y7TMA3&tag=my_associate_id',
      },
      variant: 'Hardcover',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg',
      rating: 4.8,
      ratings_total: 14259,
      price_lower: {
        symbol: '$',
        value: 16.2,
        currency: 'USD',
        raw: '$16.20',
      },
      price_upper: {
        symbol: '$',
        value: 16.2,
        currency: 'USD',
        raw: '$16.20',
      },
      price: {
        symbol: '$',
        value: 16.2,
        currency: 'USD',
        raw: '$16.20 - $16.20',
      },
      current_category: {
        name: 'Books',
        link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
        id: 'books',
      },
      parent_category: {
        name: 'Any Department',
        link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
        id: 'zgbs',
      },
    },
  ],
  pagination: {
    current_page: 1,
    total_pages: 2,
  },
  bestsellers_info: {
    current_category: {
      name: 'Books',
      link: 'https://www.amazon.com/best-sellers-books-Amazon/zgbs/books',
      id: 'books',
    },
    parent_category: {
      name: 'Any Department',
      link: 'https://www.amazon.com/Best-Sellers/zgbs/ref=zg_bs_unv_b_0_b_1',
      id: 'zgbs',
    },
    child_categories: [
      {
        name: 'Arts & Photography',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Arts-Photography/zgbs/books/1/ref=zg_bs_nav_b_1_b',
        id: '1',
      },
      {
        name: 'Biographies & Memoirs',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Biographies/zgbs/books/2/ref=zg_bs_nav_b_1_b',
        id: '2',
      },
      {
        name: 'Books on CD',
        link:
          'https://www.amazon.com/Best-Sellers-Books-CD/zgbs/books/69724/ref=zg_bs_nav_b_1_b',
        id: '69724',
      },
      {
        name: 'Business & Money',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Business-Money/zgbs/books/3/ref=zg_bs_nav_b_1_b',
        id: '3',
      },
      {
        name: "Children's Books",
        link:
          'https://www.amazon.com/Best-Sellers-Books-Childrens/zgbs/books/4/ref=zg_bs_nav_b_1_b',
        id: '4',
      },
      {
        name: 'Comics & Graphic Novels',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Comics-Graphic-Novels/zgbs/books/4366/ref=zg_bs_nav_b_1_b',
        id: '4366',
      },
      {
        name: 'Lesbian, Gay, Bisexual & Transgender Books',
        link:
          'https://www.amazon.com/Best-Sellers-Books-LGBT/zgbs/books/301889/ref=zg_bs_nav_b_1_b',
        id: '301889',
      },
      {
        name: 'Literature & Fiction',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Literature-Fiction/zgbs/books/17/ref=zg_bs_nav_b_1_b',
        id: '17',
      },
      {
        name: 'Engineering & Transportation',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Engineering-Transportation/zgbs/books/173507/ref=zg_bs_nav_b_1_b',
        id: '173507',
      },
      {
        name: 'Religion & Spirituality',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Religion-Spirituality/zgbs/books/22/ref=zg_bs_nav_b_1_b',
        id: '22',
      },
      {
        name: 'Romance',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Romance/zgbs/books/23/ref=zg_bs_nav_b_1_b',
        id: '23',
      },
      {
        name: 'Science Fiction & Fantasy',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Science-Fiction-Fantasy/zgbs/books/25/ref=zg_bs_nav_b_1_b',
        id: '25',
      },
      {
        name: 'Teens',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Teen-Young-Adult/zgbs/books/28/ref=zg_bs_nav_b_1_b',
        id: '28',
      },
      {
        name: 'Travel',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Travel/zgbs/books/27/ref=zg_bs_nav_b_1_b',
        id: '27',
      },
      {
        name: 'Christian Books & Bibles',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Christian-Bibles/zgbs/books/12290/ref=zg_bs_nav_b_1_b',
        id: '12290',
      },
      {
        name: 'Medical Books',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Medical/zgbs/books/173514/ref=zg_bs_nav_b_1_b',
        id: '173514',
      },
      {
        name: 'Politics & Social Sciences',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Politics-Social-Sciences/zgbs/books/3377866011/ref=zg_bs_nav_b_1_b',
        id: '3377866011',
      },
      {
        name: 'Self-Help',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Self-Help/zgbs/books/4736/ref=zg_bs_nav_b_1_b',
        id: '4736',
      },
      {
        name: 'Computers & Technology',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Computers-Technology/zgbs/books/5/ref=zg_bs_nav_b_1_b',
        id: '5',
      },
      {
        name: 'Cookbooks, Food & Wine',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Cookbooks-Food-Wine/zgbs/books/6/ref=zg_bs_nav_b_1_b',
        id: '6',
      },
      {
        name: 'Crafts, Hobbies & Home',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Crafts-Hobbies-Home/zgbs/books/48/ref=zg_bs_nav_b_1_b',
        id: '48',
      },
      {
        name: 'Reference',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Reference/zgbs/books/21/ref=zg_bs_nav_b_1_b',
        id: '21',
      },
      {
        name: 'Health, Fitness & Dieting',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Health-Fitness-Dieting/zgbs/books/10/ref=zg_bs_nav_b_1_b',
        id: '10',
      },
      {
        name: 'Humor & Entertainment',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Humor-Entertainment/zgbs/books/86/ref=zg_bs_nav_b_1_b',
        id: '86',
      },
      {
        name: 'Parenting & Relationships',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Parenting-Relationships/zgbs/books/20/ref=zg_bs_nav_b_1_b',
        id: '20',
      },
      {
        name: 'Science & Math',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Science-Math/zgbs/books/75/ref=zg_bs_nav_b_1_b',
        id: '75',
      },
      {
        name: 'Sports & Outdoors',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Sports-Outdoors/zgbs/books/26/ref=zg_bs_nav_b_1_b',
        id: '26',
      },
      {
        name: 'Mystery, Thriller & Suspense',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Mystery-Thriller-Suspense/zgbs/books/18/ref=zg_bs_nav_b_1_b',
        id: '18',
      },
      {
        name: 'History',
        link:
          'https://www.amazon.com/Best-Sellers-Books-History/zgbs/books/9/ref=zg_bs_nav_b_1_b',
        id: '9',
      },
      {
        name: 'Law',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Law/zgbs/books/10777/ref=zg_bs_nav_b_1_b',
        id: '10777',
      },
      {
        name: 'Calendars',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Calendars/zgbs/books/3248857011/ref=zg_bs_nav_b_1_b',
        id: '3248857011',
      },
      {
        name: 'Deals in Books',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Deals/zgbs/books/45/ref=zg_bs_nav_b_1_b',
        id: '45',
      },
      {
        name: 'Textbooks',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Textbooks/zgbs/books/465600/ref=zg_bs_nav_b_1_b',
        id: '465600',
      },
      {
        name: 'Education & Teaching',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Education-Teaching/zgbs/books/8975347011/ref=zg_bs_nav_b_1_b',
        id: '8975347011',
      },
      {
        name: 'Test Preparation',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Test-Preparation/zgbs/books/5267710011/ref=zg_bs_nav_b_1_b',
        id: '5267710011',
      },
      {
        name: 'Libros en español',
        link:
          'https://www.amazon.com/Best-Sellers-Books-Libros-en-español/zgbs/books/16568978011/ref=zg_bs_nav_b_1_b',
        id: '16568978011',
      },
    ],
  },
};
