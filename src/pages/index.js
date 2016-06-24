const pagesCtx = require.context('.', false, /^(.(?!index))*\.js$/);
const pages = [];

for (const key of pagesCtx.keys()) {
    pages.push(pagesCtx.resolve(key));
}

pages.indexPath = '/home';

export default pages;

