const uploadController = {
    upload: (req, res, next) => {
        res.json({
            url: `http://localhost:5000/${req.file.path}`
        });
    }
};

export default uploadController;
