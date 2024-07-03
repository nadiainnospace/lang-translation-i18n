import 'server-only'
 
const dictionaries = {
  en: () => import('/dictionaries/en.json').then((module) => module.default),
  bn: () => import('/dictionaries/bn.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()




// const dictionaries = {
//   en: async () => {
//     const module = await import('/dictionaries/en.json');
//     return module.default;
//   },
//   bn: async () => {
//     const module = await import('/dictionaries/bn.json');
//     return module.default;
//   },

// };


// export const getDictionary = async (locale) => {
//   const dictionaryFunction = dictionaries[locale];

//   if (typeof dictionaryFunction !== 'function') {
//     throw new Error(`Dictionary for locale '${locale}' not found or is not a function`);
//   }

//   return dictionaryFunction();
// };


// getDictionary('en')
//   .then(dictionary => console.log(dictionary))
//   .catch(error => console.error(error));
