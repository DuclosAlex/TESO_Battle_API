
-- SQL script for characterTable
INSERT INTO public.characters(
	name, src, alt, speed, initiative, strength, vitality, lp)
	VALUES ( 'Jorunn', '/assets/character/jorunn.jpg', 'Jorunn img', 11, 4, 75, 35, 1800),
    ( 'Ayrenn', '/assets/character/ayrenn.jpg', 'Ayrenn img', 17, 7, 59, 28, 1450),
    ('Emeric', '/assets/character/emeric.jpg', 'Emeric img', 13, 5, 66, 31, 1580),
    ('Abnur Tharn', '/assets/character/abnur.jpg', 'Abnur Tharn img', 14, 6, 61, 24, 1250),
    ('Naryu Viran', '/assets/character/Naruy.jpg', 'naryu virian img', 18, 10, 73, 29, 1640),
    ('Indaenir', '/assets/character/indaenir.jpg', 'indaenir img', 15, 7, 62, 38, 1730),
    ('Kurog', '/assets/character/kurog.jpg', 'kurog img', 11, 3, 64, 41, 1900),
    ('Gharesh-ri', '/assets/character/gharesh-ri.jpg', 'gharesh-ri img', 16, 6, 68, 29, 1780),
    ('Merric at-Aswala', '/assets/character/merric', 'merric img', 15, 6, 72, 37, 1820);

-- Sql Script for Campaigns 

INSERT INTO public.campaign(
	name, "levelNumber", "slug")
	VALUES ( 'Pacte de coeurébène', 2, 'pact'),
    ('Alliance de Daguefillante', 2, 'alliance'),
    ('Domaine Aldmeri', 2, 'domain');


-- TODO:  has to remove isClear after testing and move it into a relation table between stage and user !!! 

INSERT INTO public.stage(
	"name", "isClear", "stageNumber", "campaignId")
	VALUES ('Pacte 1', true, 1, 1),
    ('Pacte 2', true, 2, 1),
    ('Pacte 3', true, 3, 1),
    ('Pacte 4', true, 4, 1),
    ('Pacte 5', true, 5, 1),
    ('Pacte 6', true, 6, 1),
    ('Pacte 7', true, 7, 1),
    ('Alliance 1', true, 1, 2),
    ('Alliance 2', true, 2, 2),
    ('Alliance 3', true, 3, 2),
    ('Alliance 4', true, 4, 2),
    ('Alliance 5', true, 5, 2),
    ('Alliance 6', true, 6, 2),
    ('Alliance 7', true, 7, 2),
    ('Domaine 1', true, 1, 3),
    ('Domaine 2', true, 2, 3),
    ('Domaine 3', true, 3, 3),
    ('Domaine 4', true, 4, 3),
    ('Domaine 5', true, 5, 3),
    ('Domaine 6', true, 6, 3),
    ('Domaine 7', true, 7, 3);

