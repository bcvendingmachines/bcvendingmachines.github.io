DELETE FROM supply WHERE id != 999;
DELETE FROM machine WHERE id != 999;
DELETE FROM users WHERE id != 999;

INSERT INTO users(id, username, password, contributions, display_name, salt)
VALUES (1, 'guest', 'IBqW5L912HxNb1R2k3riLB7NvvX0pbWS69/3rG5CHCC4VwAK20W9iPBum8l9ZJJyXCAWLcTYzpiV
HEuf7s57VA==', 4,
        'Z2', '3Jh42w30yvQetnub'),
       (2, 'test', 'SRR5A+b4FJw+dvkZEED5lSp2SM7XcaQp1SdHLAjoc1jBllQLhXdxEzmXgEaiSMQokKOpGhYpKxHA
HDHa9NTXmw==', 1,
        'Test', 'nFMg3ILNaZJken4/'),
       (3, 'zaza', 'DyK4X6vzY0KauDSVI8ZG8djvY3qaNN5Aa/lEAMpFTcF05bprV/ZSJjz4v0omzFWHAKDvU7u6st9a
9UQlsNfp2A==', 1,
        'ZA ZA', 'xrnD5Fgwkrua8pYc');

INSERT INTO machine(id, "name")
VALUES (1, 'Woods-Penniman'), (2, 'Draper'), (3, 'Hutchins'), (4, 'Alumni'), (5, 'Seabury');

INSERT INTO supply(id, machine, time_checked, coffee, short_supply, checked_by, user_id)
VALUES
    (1, (SELECT id FROM machine WHERE "name" = 'Woods-Penniman'), '2022-03-03', false, true, 'Guest', (SELECT id FROM users WHERE username = 'guest')),
    (2, (SELECT id FROM machine WHERE "name" = 'Draper'), '2022-03-04', true, false, 'Test', (SELECT id FROM users WHERE username = 'test')),
    (3, (SELECT id FROM machine WHERE "name" = 'Alumni'), '2022-03-04', true, false, 'Test', (SELECT id FROM users WHERE username = 'test')),
    (4, (SELECT id FROM machine WHERE "name" = 'Woods-Penniman'), '2022-03-14', true, false, 'Test', (SELECT id FROM users WHERE username = 'test')),
    (5, (SELECT id FROM machine WHERE "name" = 'Hutchins'), '2022-02-01', false, true, 'Test', (SELECT id FROM users WHERE username = 'test')),
    (6, (SELECT id FROM machine WHERE "name" = 'Seabury'), '2022-02-01', false, true, 'ZA ZA', (SELECT id FROM users WHERE username = 'zaza'));
-- BEGIN;
-- LOCK TABLE machine IN EXCLUSIVE MODE;
-- SELECT setval('machine_id_seq', COALESCE((SELECT MAX(id)+1 FROM machine), 1), false);
-- COMMIT;
--
-- BEGIN;
-- LOCK TABLE machine IN EXCLUSIVE MODE;
-- SELECT setval('supply_id_seq', COALESCE((SELECT MAX(id)+1 FROM supply), 1), false);
-- COMMIT;

-- (SELECT id FROM users WHERE username = 'zach')