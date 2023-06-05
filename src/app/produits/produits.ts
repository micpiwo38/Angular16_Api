export class Produits {
        id: number
        nom_produit: string
        image_produit: string
        prix_produit: number
        categorie_produit
        en_stock: boolean
        date_creation: Date


        constructor(
            nom_produit: string = "Produit de base",
            image_produit: string = "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
            prix_produit: number = 0,
            categorie_produit = ["Divers"],
            en_stock: boolean = true,
            date_creation: Date = new Date()
        ){
        this.nom_produit = nom_produit,
        this.image_produit = image_produit,
        this.prix_produit = prix_produit,
        this.categorie_produit = categorie_produit,
        this.en_stock = en_stock,
        this.date_creation = date_creation
    }
}
