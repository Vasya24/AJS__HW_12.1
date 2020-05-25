import Cart from './service/Cart';
import Movie from './domain/Movie';


const cart = new Cart();
console.log(cart.items);

cart.add(new Movie('Мстители', 'Avengers', 2018, ['США'], 'Avengers Assemble!', ['Фантастика', 'Боевик', 'Фэнтези', 'Приключения'], 137));
cart.add(new Movie('Во все тяжкие', 'Breaking Bad', 2008, ['США'], '«In the no-holds-barred world of Walt White, the end justifies the extreme»', ['Триллер', 'Криминал', 'Драма'], 47))
cart.add(new Movie('Бриллиантовая рука', null, 1968, ['СССР'], '«Кинороман в 2-ух частях из жизни контрабандистов»', ['Комедия', 'Приключения', 'Криминал', 'Семейный'], 94));
cart.add(new Movie('Властелин колец: Братство кольца', 'The Lord of the Rings: The Fellowship of the Ring', 2001, ['США', 'Новая Зеландия'], '«Power can be held in the smallest of things...»', ['Фэнтези', 'Приключения', 'Драма'], 178))

console.log(cart.items);

export { cart }