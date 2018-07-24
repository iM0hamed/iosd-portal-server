const uploadController = {
    upload: (req, res, next) => {
        console.log(req.file);
        res.json({
            url: req.file.location
        });
    }
};

export default uploadController;
