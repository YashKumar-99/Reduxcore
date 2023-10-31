const INCREMENT = 'ACTION/INCREMENT';
const INCBONUS = 'ACTION/INCBONUS'

export function incrementAmount() {
    return { type: INCREMENT }
}

export function incrementBonus() {
    return { type: INCBONUS }
}
export { INCREMENT, INCBONUS }