const { forwardTo } = require('prisma-binding');
const Query = {
    // can forward directly to prisma
    // useful if you don't need to do anything special in this step
    items: forwardTo('db'),
//    async items(parent, args, ctx, info) {
//        const items = await ctx.db.query.items();
//    }
};

module.exports = Query;
