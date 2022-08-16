DELETE FROM supply WHERE id != 999;
DELETE FROM machine WHERE id != 999;
INSERT INTO machine("name")
VALUES ('Woods-Penniman'), ('Draper Floor 2'), ('Draper Floor 3'), ('Alumni'), ('Hutchins'), ('Seabury');

INSERT INTO supply(machine, time_checked, coffee, short_supply, checked_by)
VALUES
    ((SELECT id FROM machine WHERE "name" = 'Woods-Penniman'), '2022-03-04', false, true, 'Erika'),
    ((SELECT id FROM machine WHERE "name" = 'Draper Floor 2'), '2022-03-04', true, false, 'Daisy'),
    ((SELECT id FROM machine WHERE "name" = 'Draper Floor 3'), '2022-03-04', true, false, 'Mariale'),
    ((SELECT id FROM machine WHERE "name" = 'Alumni'), '2022-03-04', true, false, 'Klaire'),
    ((SELECT id FROM machine WHERE "name" = 'Woods-Penniman'), '2022-03-07', true, false, 'Zach'),
    ((SELECT id FROM machine WHERE "name" = 'Woods-Penniman'), '2022-03-14', true, false, 'Zach'),
    ((SELECT id FROM machine WHERE "name" = 'Hutchins'), '2022-02-01', false, true, 'Zach'),
    ((SELECT id FROM machine WHERE "name" = 'Seabury'), '2022-02-01', false, true, 'Zach');
BEGIN;
LOCK TABLE machine IN EXCLUSIVE MODE;
SELECT setval('machine_id_seq', COALESCE((SELECT MAX(id)+1 FROM machine), 1), false);
COMMIT;

BEGIN;
LOCK TABLE machine IN EXCLUSIVE MODE;
SELECT setval('supply_id_seq', COALESCE((SELECT MAX(id)+1 FROM supply), 1), false);
COMMIT;

-- SELECT pg_catalog.setval(pg_get_serial_sequence('supply', 'id'), 8);
-- SELECT pg_catalog.setval(pg_get_serial_sequence('machine', 'id'), 8);
-- SELECT SETVAL(PG_GET_SERIAL_SEQUENCE('supply', 'id')), (SELECT (MAX('id') + 1) FROM 'supply'), FALSE);
-- SELECT SETVAL(PG_GET_SERIAL_SEQUENCE('machine', 'id')), (SELECT (MAX('id') + 1) FROM 'machine'), FALSE);

-- DELETE FROM hibernate_sequence WHERE next_val != 999;
-- INSERT INTO hibernate_sequence(next_val) VALUES (9);