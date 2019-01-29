var list = [
    {
        todo: "Buy a car",
        for: "Mom",
        how: "cash"
    },
    {
        todo: "Walk the dog",
        for: "Lilly",
        how: "Leash"
    },
    {
        todo: "Play Hockey",
        for: "Me",
        how: "Ice Skates"
    },
    {
        todo: "Wash Clothes",
        for: "Neighbor",
        how: "detergent"
    }
]

module.exports = {
    getTodos: (req, res) => {
    console.log('req.query: ', req.query);
    let { search } = req.query
    let todos = list

    let searchResponse = todos.map((item, i) => {
        return item.todo.includes(search);
    })



    res.send(searchResponse)
     
    }
}