//Import du model
import { Produits } from "./produits";

export const PRODUITS: Produits[] = [
    {
        id:1,
        nom_produit: "Table bois",
        image_produit: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhz2vdQtKwOI98eSpYYWzX9bgLdg43Uixh0nAMt96zv2LJmclVIWBFFqP5JW5liYL9wvQ&usqp=CAU",
        prix_produit: 152.25,
        categorie_produit: ["Meuble", "Salon"],
        en_stock: true,
        date_creation: new Date()
    },
    {
        id:2,
        nom_produit: "Chaise fer",
        image_produit: "https://www.anticline-creations.com/3878-large_default/friendly-url-autogeneration-failed.jpg",
        prix_produit: 782.25,
        categorie_produit:["Meuble","Cuisine"],
        en_stock: false,
        date_creation: new Date()
    },
    {
        id:3,
        nom_produit: "Neo Geo",
        image_produit: "https://upload.wikimedia.org/wikipedia/commons/5/59/Neogeoaes.jpg",
        prix_produit: 1482.25,
        categorie_produit:["Hi-fi","Jeux Vidéo"],
        en_stock: true,
        date_creation: new Date()
    },
]