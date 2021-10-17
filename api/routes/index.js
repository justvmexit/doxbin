const uuid = require('uuid');

module.exports = ((router, database) => {
    router.use((req, res, next) => {
        res.set('X-Powered-By', 'justvmexit');

        req.ip = req.get('CF-Connecting-Ip') || req.ip;

        console.log('request from %s to %s', req.ip, req.path)

        next();
    });

    router.get('/', (req, res) => {
        res.status(200).json({
            version: "1.0.0"
        });
    });

    router.get('/api/v1/posts', (req, res) => {
        const limit = parseInt(req.query.limit) || 500;

        if(req.query.search)
        {
            database.query("SELECT * FROM posts WHERE title LIKE ? LIMIT ?", ['%' + req.query.search + '%', limit], (error, posts, fields) => {
                if(error) throw error;

                res.status(200).json({
                    status: "success",
                    posts: posts
                });
            });
        }
        else
        {
            database.query("SELECT * FROM posts LIMIT ?", [limit], (error, result, fields) => {
                if(error) throw error;
    
                res.status(200).json({
                    status: "success",
                    posts: result
                });
            });
        }
    });

    router.post('/api/v1/posts', (req, res) => {
        if(req.body.title && req.body.content)
        {
            if(req.body.content.length <= 4096 && req.body.title.length <= 255)
            {
                const id = uuid.v4();
                database.query("INSERT INTO posts(id, title, content) VALUES(?, ?, ?)", [id, req.body.title, req.body.content], (error, result, fields) => {
                    if(error) throw error;

                    if(result.affectedRows >= 1)
                    {
                        res.status(200).json({
                            status: "success",
                            id: id
                        });
                    }
                    else
                    {
                        res.status(500).json({
                            status: "failure",
                            message: "Internal server error"
                        });
                    }
                });
            }
            else
            {
                res.status(400).json({
                    status: "failure",
                    message: "Data provided to big!"
                });
            }
        }
        else
        {
            res.status(400).json({
                status: "failure",
                message: "Bad Request"
            });
        }
    });

    router.get('/api/v1/posts/:id', (req, res) => {
        database.query("SELECT * FROM posts WHERE id = ?", [req.params.id], (error, posts, fields) => {
            if(error) throw error;

            if(posts.length >= 1)
            {
                res.status(200).json({
                    status: "success",
                    post: posts[0]
                });
            }
            else
            {
                res.status(404).json({
                    status: "success",
                    message: "Post doesn't exist"
                })
            }
        });
    });
});