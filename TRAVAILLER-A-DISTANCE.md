# Travailler à distance sur le site (depuis plusieurs ordinateurs)

Objectif : pouvoir modifier le site depuis l'ordinateur fixe **et** le portable,
en gardant tout synchronisé. On utilise **GitHub** (gratuit).

## Étape 1 — Publier le projet sur GitHub (une seule fois)

Depuis l'ordinateur où se trouve le projet, avec **GitHub Desktop** :

1. Menu **File → Add local repository…**
2. Choisir le dossier `site-orthodontie-charenton`.
3. S'il dit « not a git repository » → cliquer **create a repository** → **Create Repository**.
4. En haut à droite : **Publish repository**
   - Décocher « Keep this code private » si vous voulez l'hébergement gratuit GitHub Pages.
   - **Publish**.

Le projet est maintenant sauvegardé en ligne sur github.com (dans votre compte).

## Étape 2 — Récupérer le projet sur le portable

Sur le portable :

1. Installer **GitHub Desktop** (desktop.github.com) et se connecter avec **le même compte**.
2. **File → Clone repository…** → onglet **GitHub.com** → choisir `orthodontie-charenton` → **Clone**.
3. Le dossier se télécharge : vous pouvez modifier les fichiers.

## Étape 3 — Le va-et-vient au quotidien

Sur l'ordinateur où vous travaillez :

1. **Avant de commencer** : cliquer **Fetch origin** puis **Pull** (récupère les dernières modifs).
2. Modifier les fichiers (avec un éditeur comme **VS Code**, gratuit).
3. **Après modification** : en bas à gauche, écrire un petit résumé, cliquer **Commit to main**,
   puis en haut **Push origin** (envoie vers GitHub).
4. Sur l'autre ordinateur, refaire **Fetch/Pull** pour être à jour.

Règle simple : **Pull avant de travailler, Push après.**

## Alternative sans rien installer

Depuis n'importe quel navigateur : aller sur github.com → votre dépôt →
ouvrir un fichier → icône **crayon (Edit)** → modifier → **Commit changes**.
Pratique pour une petite correction en déplacement.

## Astuce

Si vous publiez aussi le site via **GitHub Pages** (Settings → Pages), vous obtenez
une adresse web pour **prévisualiser le site en ligne** depuis n'importe quel appareil.
