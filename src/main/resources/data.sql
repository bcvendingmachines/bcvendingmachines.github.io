DELETE FROM supply WHERE id != 999;
DELETE FROM machine WHERE id != 999;
DELETE FROM users WHERE id != 999;

INSERT INTO users(username, password, contributions, display_name)
VALUES ('guest', 'guest', 9, 'Guest'), ('abcd', 'abcd', 3, 'abcd'), ('dfdf', 'dfdf', 2, 'Daisy'), ('test', 'test', 6, 'Klaire'), ('zach', 'zach', 5, 'Zach'), ('mariale', 'mariale', 1, 'Mariale');

INSERT INTO machine("name")
VALUES ('Woods-Penniman'), ('Draper Floor 2'), ('Draper Floor 3'), ('Alumni'), ('Hutchins'), ('Seabury');

INSERT INTO supply(machine, time_checked, coffee, short_supply, checked_by, user_id)
VALUES
    ((SELECT id FROM machine WHERE "name" = 'Woods-Penniman'), '2022-03-03', false, true, 'Guest', (SELECT id FROM users WHERE username = 'guest')),
    ((SELECT id FROM machine WHERE "name" = 'Woods-Penniman'), '2022-03-04', false, true, 'abcd', (SELECT id FROM users WHERE username = 'abcd')),
    ((SELECT id FROM machine WHERE "name" = 'Draper Floor 2'), '2022-03-04', true, false, 'Daisy', (SELECT id FROM users WHERE username = 'dfdf')),
    ((SELECT id FROM machine WHERE "name" = 'Draper Floor 3'), '2022-03-04', true, false, 'Mariale', (SELECT id FROM users WHERE username = 'mariale')),
    ((SELECT id FROM machine WHERE "name" = 'Alumni'), '2022-03-04', true, false, 'Klaire', (SELECT id FROM users WHERE username = 'test')),
    ((SELECT id FROM machine WHERE "name" = 'Woods-Penniman'), '2022-03-07', true, false, 'Zach', (SELECT id FROM users WHERE username = 'zach')),
    ((SELECT id FROM machine WHERE "name" = 'Woods-Penniman'), '2022-03-14', true, false, 'Zach', (SELECT id FROM users WHERE username = 'zach')),
    ((SELECT id FROM machine WHERE "name" = 'Hutchins'), '2022-02-01', false, true, 'Zach', (SELECT id FROM users WHERE username = 'zach')),
    ((SELECT id FROM machine WHERE "name" = 'Seabury'), '2022-02-01', false, true, 'Zach', (SELECT id FROM users WHERE username = 'zach'));
BEGIN;
LOCK TABLE machine IN EXCLUSIVE MODE;
SELECT setval('machine_id_seq', COALESCE((SELECT MAX(id)+1 FROM machine), 1), false);
COMMIT;

BEGIN;
LOCK TABLE machine IN EXCLUSIVE MODE;
SELECT setval('supply_id_seq', COALESCE((SELECT MAX(id)+1 FROM supply), 1), false);
COMMIT;