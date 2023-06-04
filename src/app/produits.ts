export interface Produits {
    id: number,
    nom_produit: string,
    image_produit: string
    prix_produit: number,
    categorie_produit: Array<string>
    en_stock:boolean,
    date_creation: Date
}
