DELETE FROM supply WHERE id != 999;
DELETE FROM machine WHERE id != 999;
DELETE FROM users WHERE id != 999;

INSERT INTO users(id, username, password, contributions, display_name)
VALUES (1, 'guest', 'guest', 9, 'Guest'), (2, 'zach', 'zach', 5, 'Zach'), (3, 'test2', 'test2', 1, 'Test 2');

INSERT INTO machine(id, "name")
VALUES (1, 'Woods-Penniman'), (2, 'Draper'), (3, 'Hutchins'), (4, 'Alumni'), (5, 'Seabury');

INSERT INTO supply(id, machine, time_checked, coffee, short_supply, checked_by, user_id)
VALUES
    (1, (SELECT id FROM machine WHERE "name" = 'Woods-Penniman'), '2022-03-03', false, true, 'Guest', (SELECT id FROM users WHERE username = 'guest')),
    (2, (SELECT id FROM machine WHERE "name" = 'Draper'), '2022-03-04', true, false, 'Zach', (SELECT id FROM users WHERE username = 'zach')),
    (3, (SELECT id FROM machine WHERE "name" = 'Alumni'), '2022-03-04', true, false, 'Test 2', (SELECT id FROM users WHERE username = 'test2')),
    (4, (SELECT id FROM machine WHERE "name" = 'Woods-Penniman'), '2022-03-14', true, false, 'Zach', (SELECT id FROM users WHERE username = 'zach')),
    (5, (SELECT id FROM machine WHERE "name" = 'Hutchins'), '2022-02-01', false, true, 'Zach', (SELECT id FROM users WHERE username = 'zach')),
    (6, (SELECT id FROM machine WHERE "name" = 'Seabury'), '2022-02-01', false, true, 'Zach', (SELECT id FROM users WHERE username = 'zach'));
-- BEGIN;
-- LOCK TABLE machine IN EXCLUSIVE MODE;
-- SELECT setval('machine_id_seq', COALESCE((SELECT MAX(id)+1 FROM machine), 1), false);
-- COMMIT;
--
-- BEGIN;
-- LOCK TABLE machine IN EXCLUSIVE MODE;
-- SELECT setval('supply_id_seq', COALESCE((SELECT MAX(id)+1 FROM supply), 1), false);
-- COMMIT;