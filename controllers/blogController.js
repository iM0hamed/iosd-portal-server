import request from 'request' ;
import fs from 'fs';

let blogController = {
    fetchPosts: (req, res) => {
        let rawdata = fs.readFileSync('feed.json');
        let feed = JSON.parse(rawdata);

        res.json({
            success: true,
            feed: feed
        })
    },

    fetchPost: (req, res) => {
        let rawdata = fs.readFileSync('feed.json');
        let feed = JSON.parse(rawdata);

        let guid = req.params.guid;
        let selected = undefined;

        feed.items.forEach(item => {

            if (item.guid === guid) {
                selected = item;
                return;
            }

        });

        if (selected) {
            res.json({
                success: true,
                post: selected
            })
        } else {
            res.json({
                success: false,
                message: "Post Not Found"
            })
        }

    } ,

    refreshBlog : (req , res) => {
        request.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Felementaryos%2F' ,(error, response, body) => {
            console.log('Callback');
            if (!error && response.statusCode === 200) {
                // res.json(JSON.parse(body));
                body = JSON.parse(body);
                if(body.status === 'ok'){

                    body.items.forEach(item => {

                        let a = item.guid.split("/");
                        a = a[a.length -1]
                        console.log(a);
                        item.guid = a;

                    })
                    // console.log(body)
                    let data = JSON.stringify(body , null, 4);
                    fs.writeFileSync('feed.json', data);
                    res.json({
                        message : true,
                        blog : body
                    });

                } else {
                    res.json({
                        success : false ,
                        message : "Could't Refresh the Feed"
                    });
                }

            } else {

                console.log(error);
                console.log(response);
                console.log(body);
                res.json({
                    success : false ,
                    message : "Could't Refresh the Feed"
                });
            }
        });
    }
};

export default blogController;