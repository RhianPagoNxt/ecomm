import categories from "../models/Category.js";

class CategoryController {
    static listCategories = (req, res) => {
        categories.find((err, allCategories) => {
            res.status(200).json(allCategories);
        })
    }
};

export default CategoryController;