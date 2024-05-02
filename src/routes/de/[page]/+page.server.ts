/** @type {import('./$types').EntryGenerator} */
export function entries() {
  const pages = import.meta.glob('../../../pages/de/*.svx');
  return Object.keys(pages).map((page) => {
    return {
      page: page.replace('../../../pages/de/', '').replace('.svx', '')
    };
  }).filter(page => page.page !== 'start');
}