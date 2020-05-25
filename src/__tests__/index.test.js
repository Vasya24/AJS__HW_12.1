import { Movie } from '../ts/domain/Movie'

test('Basic test', () => {
    expect(typeof Movie.year).toBe('number')
})