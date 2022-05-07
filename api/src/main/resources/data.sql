DELETE FROM bcvmdb.public.supply WHERE id != 999;
DELETE FROM bcvmdb.public.machine WHERE id != 999;
INSERT INTO bcvmdb.public.machine("name")
VALUES ('Woods-Penniman'), ('Draper Floor 2'), ('Draper Floor 3'), ('Alumni'), ('Hutchins'), ('Seabury');

INSERT INTO bcvmdb.public.supply(machine, time_checked, coffee, short_supply, checked_by)
VALUES
    ((SELECT id FROM bcvmdb.public.machine WHERE "name" = 'Woods-Penniman'), '2022-03-04', false, true, 'Erika'),
    ((SELECT id FROM bcvmdb.public.machine WHERE "name" = 'Draper Floor 2'), '2022-03-04', true, false, 'Daisy'),
    ((SELECT id FROM bcvmdb.public.machine WHERE "name" = 'Draper Floor 3'), '2022-03-04', true, false, 'Mariale'),
    ((SELECT id FROM bcvmdb.public.machine WHERE "name" = 'Alumni'), '2022-03-04', true, false, 'Klaire'),
    ((SELECT id FROM bcvmdb.public.machine WHERE "name" = 'Woods-Penniman'), '2022-03-07', true, false, 'Zach'),
    ((SELECT id FROM bcvmdb.public.machine WHERE "name" = 'Woods-Penniman'), '2022-03-14', true, false, 'Zach'),
    ((SELECT id FROM bcvmdb.public.machine WHERE "name" = 'Hutchins'), '2022-02-01', false, true, 'Zach'),
    ((SELECT id FROM bcvmdb.public.machine WHERE "name" = 'Seabury'), '2022-02-01', false, true, 'Zach');
BEGIN;
LOCK TABLE bcvmdb.public.machine IN EXCLUSIVE MODE;
SELECT setval('bcvmdb.public.machine_id_seq', COALESCE((SELECT MAX(id)+1 FROM bcvmdb.public.machine), 1), false);
COMMIT;

BEGIN;
LOCK TABLE bcvmdb.public.machine IN EXCLUSIVE MODE;
SELECT setval('bcvmdb.public.supply_id_seq', COALESCE((SELECT MAX(id)+1 FROM bcvmdb.public.supply), 1), false);
COMMIT;

-- SELECT pg_catalog.setval(pg_get_serial_sequence('bcvmdb.public.supply', 'id'), 8);
-- SELECT pg_catalog.setval(pg_get_serial_sequence('bcvmdb.public.machine', 'id'), 8);
-- SELECT SETVAL(PG_GET_SERIAL_SEQUENCE('bcvmdb.public.supply', 'id')), (SELECT (MAX('id') + 1) FROM 'bcvmdb.public.supply'), FALSE);
-- SELECT SETVAL(PG_GET_SERIAL_SEQUENCE('bcvmdb.public.machine', 'id')), (SELECT (MAX('id') + 1) FROM 'bcvmdb.public.machine'), FALSE);

-- DELETE FROM bcvmdb.public.hibernate_sequence WHERE next_val != 999;
-- INSERT INTO bcvmdb.public.hibernate_sequence(next_val) VALUES (9);