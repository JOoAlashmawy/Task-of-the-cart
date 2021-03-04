import express from 'express';

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessages = [
      {
        id: 1,
        name: 'حلويات',
        img:
          'https://www.mexatk.com/wp-content/uploads/2015/10/%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA-%D8%A8%D8%A7%D9%84%D8%B5%D9%88%D8%B1-2.jpg',
        item: [
          {
            id: 1.1,
            name: 'بسبوسه',
            img:
              'https://fustany.com/images/ar/content/header_image_Article-Main-Fustany-basbousa-Recipe-sally-fouad-AR__2_.jpg',
            price: 40,
          },
          {
            id: 1.2,
            name: 'كنافه',
            img: 'https://na3em.cc/wp-content/uploads/2018/08/607.jpg',
            price: 60,
          },
        ],
      },
      {
        id: 3,
        name: 'حلويات',
        img:
          'https://www.mexatk.com/wp-content/uploads/2015/10/%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA-%D8%A8%D8%A7%D9%84%D8%B5%D9%88%D8%B1-2.jpg',
        item: [
          {
            id: 1.1,
            name: 'بسبوسه',
            img:
              'https://fustany.com/images/ar/content/header_image_Article-Main-Fustany-basbousa-Recipe-sally-fouad-AR__2_.jpg',
            price: 40,
          },
          {
            id: 1.2,
            name: 'كنافه',
            img: 'https://na3em.cc/wp-content/uploads/2018/08/607.jpg',
            price: 60,
          },
        ],
      },
      {
        id: 2,
        name: 'حلويات',
        img:
          'https://www.mexatk.com/wp-content/uploads/2015/10/%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA-%D8%A8%D8%A7%D9%84%D8%B5%D9%88%D8%B1-2.jpg',
        item: [
          {
            id: 1.1,
            name: 'بسبوسه',
            img:
              'https://fustany.com/images/ar/content/header_image_Article-Main-Fustany-basbousa-Recipe-sally-fouad-AR__2_.jpg',
            price: 40,
          },
          {
            id: 1.2,
            name: 'كنافه',
            img: 'https://na3em.cc/wp-content/uploads/2018/08/607.jpg',
            price: 60,
          },
        ],
      },
    ];

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
