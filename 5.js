/*
QUESTION 5

You are part of the web dev team responsible for making the webpage's header and navigation bar.
You need to generate the payload (Object) which will be used to populate/generate the category menu.

- Each category Object should contain:
    - the category ID
    - the category display name
    - a list of sub-categories Objects
- Each category can contain zero or more sub-categories
- Each sub-category Object follows the same criteria as a normal category
    - is an Object that contains both an ID, display name, and list of sub-category Objects

e.g.

const categoryMenuTree = [
    {
        id: 'root_category_1',
        displayName: 'Shoes',
        subCategories: [
            {
                id: 'category_3',
                displayName: 'Sandals',
                subCategories: [
                    ...
                ]
            },
            {
                id: 'category_4',
                displayName: 'Socks',
                subCategories: [
                    ...
                ]
            }
        ]
    },
    {
        id: 'root_category_2',
        displayName: 'Coats',
        subCategories: [
            {
                id: 'category_5',
                displayName: 'Winter Jackets',
                subCategories: [
                    {
                        id: 'category_6',
                        displayName: 'Leather Jackets',
                        subCategories: [
                            ...
                        ]
                    }
                ]
            }
        ]
    }
]

You are to generate this category menu tree from the list of categories provided in '5-input.js'
(You can think of this list as the response from a "getAllCategories()" call to the database)
    - a category with no parent ids associated to it is considered to be a "root" or "top level" category
    - the category menu tree should be a list that contains only "root" or "top level" categories
    - Each "root" or "top level" category should contain all relevant sub-categories
        - Only include immediate children (no grand-children, etc.)
    - the 'parentCategoryIds' is a list of parent category IDs *IN HIERARCHY ORDER*
        - The first Id should always refer to the root category
        - The second Id is the child of the root category
        ... etc...
        - The last Id in the array is the ID of the immediate parent of the given category
*/

//DO NOT modify this
const input = require('./5-input')

//Hint: The 'dyn_accessories' root category object tree should look like the following: 
/*
{
    "id": "dyn_accessories",
    "displayName": "Accessories",
    "subCategories": [
        {
            "id": "dyn_accessories_necklaces",
            "displayName": "Necklaces",
            "subCategories": []
        },
        {
            "id": "dyn_accessories_rings",
            "displayName": "Rings",
            "subCategories": [
                {
                    "id": "dyn_accessories_rings_14k-gold",
                    "displayName": "14K Gold",
                    "subCategories": []
                }
            ]
        }
    ]
}
*/
