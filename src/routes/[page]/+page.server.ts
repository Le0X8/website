/** @type {import('./$types').EntryGenerator} */
export function entries() {
  const pages = import.meta.glob('../../pages/*.svx');
  return Object.keys(pages).map((page) => {
    return {
      page: page.replace('../../pages/', '').replace('.svx', '')
    };
  }).filter(page => page.page !== 'start');
}