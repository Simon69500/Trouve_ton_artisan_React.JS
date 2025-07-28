/* Insertions des données dans les tableaux  */

-- insertion des Categories dans le tableau Categorie
INSERT INTO Categorie (nom)
VALUES
('Alimentation'),
('Bâtiment'),
('Fabrication'),
('Services');


-- insertion des Artisans
INSERT INTO Artisan (nom, specialite, note, ville, about, email, site_web, top_artisan, id_categorie)
VALUES 

(
    'Boucherie Dumont',
    'Boucherie',
    4.5,
    'Lyon',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'boucherie.dumond@gmail.com',
    NULL,
    FALSE,
    1
),

(
    'Au pain chaud',
    'Boulanger',
    4.8,
    'Montélimar',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'aupainchaud@hotmail.com',
    NULL,
    TRUE,
    1
),

(
    'Chocolaterie Labbé',
    'Chocolatier',
    4.9,
    'Lyon',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'chocolaterie-labbe@gmail.com',
    'https://chocolaterie-labbe.fr',
    TRUE,
    1
),

(
    'Traiteur Truchon',
    'Traiteur',
    4.1,
    'Lyon',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'contact@truchon-traiteur.fr',
    'https://truchon-traiteur.fr',
    FALSE,
    1
),

(
    'Orville Salmons',
    'Chauffagiste',
    5.0,
    'Evian',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'o-salmons@live.com',
    NULL,
    TRUE,
    2
),

(
    'Mont Blanc Eléctricité',
    'Electricien',
    4.5,
    'Chamonix',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'contact@mont-blanc-electricite.com',
    'https://mont-blanc-electricite.com',
    FALSE,
    2
),

(
    'Boutot & fils',
    'Menuisier',
    4.7,
    'Bourg-en-bresse',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'boutot-menuiserie@gmail.com',
    'https://boutot-menuiserie.com',
    FALSE,
    2
),

(
    'Vallis Bellemare',
    'Plombier',
    4.0,
    'Vienne',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'v.bellemare@gmail.com',
    'https://plomberie-bellemare.com',
    FALSE,
    2
),

(
    'Claude Quinn',
    'Bijoutier',
    4.2,
    'Aix-les-bains',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'claude.quinn@gmail.com',
    NULL,
    FALSE,
    3
),

(
    'Amitee Lécuyer',
    'Couturier',
    4.5,
    'Annecy',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'a.amitee@hotmail.com',
    'https://lecuyer-couture.com',
    FALSE,
    3
),

(
    'Ernest Carignan',
    'Ferronier',
    5.0,
    'Le Puy-en-Velay',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'e-carigan@hotmail.com',
    NULL,
    FALSE,
    3
),

(
    'Royden Charbonneau',
    'Coiffeur',
    3.8,
    'Saint-Priest',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'r.charbonneau@gmail.com',
    NULL,
    FALSE,
    4
),

(
    'Leala Dennis',
    'Coiffeur',
    3.8,
    'Chambéry',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'l.dennos@hotmail.fr',
    'https://coiffure-leala-chambery.fr',
    FALSE,
    4
),

(
    'C''est sup''hair',
    'Coiffeur',
    4.1,
    'Romans-sur-Isère',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'sup-hair@gmail.com',
    'https://sup-hair.fr',
    FALSE,
    4
),

(
    'Le monde des fleurs',
    'Fleuriste',
    4.6,
    'Annonay',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'contact@le-monde-des-fleurs-annonay.fr',
    'https://le-monde-des-fleurs-annonay.fr',
    FALSE,
    4
),

(
    'Valérie Laderoute',
    'Toiletteur',
    4.5,
    'Valence',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'v-laredoute@gmail.com',
    NULL,
    FALSE,
    4
),

(
    'CM Graphisme',
    'Webdesign',
    4.4,
    'Valence',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae natus pariatur ea. Natus, maxime expedita? Nesciunt suscipit fugiat, tenetur aperiam inventore impedit ea enim sequi vel distinctio consectetur fugit.',
    'contact@cm-graphisme.com',
    'https://cm-graphisme.com',
    FALSE,
    4
);
