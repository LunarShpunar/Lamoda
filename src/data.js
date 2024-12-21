
export const products = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Продукт ${index + 1}`,
    description: `Описание продукта ${index + 1}`,
    color: ['Черный', 'Красный', 'Белый', 'Синий', 'Бежевый'][Math.floor(Math.random() * 5)],
    category: `Категория ${Math.ceil((index + 1) / 2)}`,
    price: Math.floor(Math.random() * 9990) + 10,
    rating: (Math.random() * 5).toFixed(1),
    imageUrl: `/images/product${(index % 10) + 1}.jpg`,
  }));
