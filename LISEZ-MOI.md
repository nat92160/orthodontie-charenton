# Site — Centre d'Orthodontie Gravelle (Dr Jessica Marciano)

Site web complet, optimisé pour le référencement Google local (Charenton-le-Pont).

## Contenu du dossier

- `index.html` — Accueil
- `orthodontie-enfants-adolescents.html`
- `orthodontie-adulte.html`
- `invisalign.html`
- `le-cabinet.html`
- `contact.html`
- `mentions-legales.html`
- `css/style.css` — design (charte bordeaux du cabinet)
- `js/main.js` — menu mobile + formulaire
- `images/` — photos (à remplacer, voir plus bas)
- `sitemap.xml` et `robots.txt` — pour Google

## 1. Remplacer les photos (important)

Le dossier `images/` contient des images d'attente. Remplacez-les par vos vraies photos
en gardant **exactement les mêmes noms de fichier** :

| Fichier | Photo à mettre |
|---|---|
| `facade-cabinet.jpg` | La façade « Centre d'Orthodontie Gravelle » |
| `salle-attente.jpg` | La salle d'attente |
| `salle-soins-enfant.jpg` | La salle de soins enfants (singes/lion) |
| `accueil-cabinet.jpg` | L'accueil / réception |
| `fauteuil-soins.jpg` | Une salle de soins (fauteuils) |
| `dr-jessica-marciano.jpg` | Le portrait du Dr Marciano |
| `favicon.png` | (facultatif) le logo/icône de l'onglet |

Astuce : gardez des images pas trop lourdes (< 300 Ko) pour un site rapide.

## 2. Nom de domaine

Le site est déjà configuré pour le domaine **`orthodontie-charenton.fr`**
(adresses présentes dans les pages, `sitemap.xml` et `robots.txt`).

Au moment de l'achat, pensez à pointer le domaine vers votre hébergement.
Si vous prenez aussi `orthodontiecharenton.fr` (sans tiret), configurez-le
en simple **redirection** vers `orthodontie-charenton.fr`.

## 3. Mettre en ligne (hébergement)

Options simples et peu coûteuses pour un site statique :
- **OVH**, **o2switch**, **Hostinger** (hébergement mutualisé + domaine) ;
- **Netlify** ou **Cloudflare Pages** (gratuit) : glissez-déposez le dossier.

Uploadez tout le contenu de ce dossier à la racine du site.

## 3 bis. Publier gratuitement sur GitHub Pages

Le dossier est prêt (il contient déjà un fichier `CNAME` pour le domaine).

1. Créez un compte gratuit sur github.com.
2. Cliquez sur **New repository** → nom : `orthodontie-charenton` → **Public** → *Create*.
3. Sur la page du dépôt : **Add file → Upload files**, puis glissez **tout le contenu**
   du dossier `site-orthodontie-charenton` (les fichiers .html, et les dossiers css/js/images).
   Cliquez sur **Commit changes**.
4. **Settings → Pages** → *Build and deployment* → Source : **Deploy from a branch**,
   Branch : **main** / **/(root)** → *Save*. Le site est en ligne en 1–2 min.
5. Toujours dans **Settings → Pages → Custom domain**, saisissez `www.orthodontie-charenton.fr`.
6. Chez votre registrar (là où vous achetez le domaine), créez un enregistrement **CNAME** :
   `www` → `VOTRE-COMPTE.github.io`. (Pour le domaine sans www, ajoutez les 4 enregistrements A
   de GitHub Pages : 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.)

## 4. Après la mise en ligne — pour bien remonter sur Google

1. Créez / revendiquez la fiche **Google Business Profile** du cabinet (c'est le levier n°1
   du référencement local) et ajoutez l'adresse du site.
2. Ajoutez le site à **Google Search Console** et soumettez `sitemap.xml`.
3. Vérifiez que l'adresse, le téléphone et le nom sont **identiques** partout
   (site, Google, Doctolib, annuaires) : Google adore la cohérence.
4. Encouragez les avis Google (déjà présents au cabinet).

## 5. Activer le formulaire de contact

Le formulaire est une démo côté navigateur. Pour recevoir les messages par e-mail,
connectez-le à un service comme **Formspree**, **Web3Forms** ou **Netlify Forms**
(quelques minutes, gratuit pour un petit volume).

## Informations utilisées

- **Cabinet** : Centre d'Orthodontie Gravelle
- **Praticien** : Dr Jessica Marciano
- **Adresse** : 176 Rue de Paris, 94220 Charenton-le-Pont
- **Téléphone** : 01 43 96 26 00
- **Doctolib** : https://www.doctolib.fr/centre-dentaire/charenton-le-pont/centre-d-orthodontie-gravelle
- **Horaires** : Lun 10h–18h30 · Mar 10h–18h · Mer 10h–18h30 · Jeu 10h–13h30 · Ven 10h–18h30
