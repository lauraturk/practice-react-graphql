const Mutation = {
   async createItem(parent, args, ctx, info) {
    //TODO: checked if user is logged in

    //createItem returns a promise
    const item = await ctx.db.mutation.createItem({
        data: {
         ...args
        }
        // inside info is the actual query, mutation needs to take from front to backend, will specify what information is returned
    }, info);
    return item;
   }
};

module.exports = Mutation;
