export const userList = async (req, res, callback) => {
    req.body.users = [
        {
            name : "gil",
            email: "email@example.com"
        },
        {
            name : "jane",
            email: "janewatson@example.com"
        },
    ];
    
    callback();
}