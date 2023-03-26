import orderByProps from '../orderByProps';

test('test sort fucntion', () => {
    const obj = {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const result = orderByProps(obj, ['name', 'level']);
    expect(result).toStrictEqual({
        attack: 80, defence: 40, health: 10, level: 2, name: 'мечник',
    });
});
