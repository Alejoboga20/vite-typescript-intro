// Primitives

export const name = 'Alejo'; //type "Alejo"
export let stringName = 'Test'; //type string

export const age: number = 35;
export let ageInLetters: number | string = 'ThirtyFive'; //type string or number
ageInLetters = 35; //type string or number
export const isValid: boolean = true;

export const templateStrings = `Hey ${name} you are ${age} 
years old and
this is a multiline
templateString
`;
