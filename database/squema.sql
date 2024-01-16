CREATE DATABASE joyas;

\c joyas

CREATE TABLE inventario (id SERIAL PRIMARY KEY, nombre VARCHAR(50) NOT NULL, categoria VARCHAR(50) NOT NULL, metal VARCHAR(50) NOT NULL, precio INT, stock INT);

INSERT INTO inventario (nombre, categoria, metal, precio, stock) values
('Collar Heart', 'collar', 'oro', 20000 , 2),
('Collar History', 'collar', 'plata', 15000 , 5),
('Aros Berry', 'aros', 'oro', 12000 , 10),
('Aros Hook Blue', 'aros', 'oro', 25000 , 4),
('Anillo Wish', 'aros', 'plata', 30000 , 4),
('Anillo Cuarzo Greece', 'anillo', 'oro', 40000 , 2);

INSERT INTO inventario (nombre, categoria, metal, precio, stock) values ('Collar Heart', 'collar', 'oro', 20000 , 2), ('Collar History', 'collar', 'plata', 15000 , 5), ('Aros Berry', 'aros', 'oro', 12000 , 10), ('Aros Hook Blue', 'aros', 'oro', 25000 , 4), ('Anillo Wish', 'aros', 'plata', 30000 , 4), ('Anillo Cuarzo Greece', 'anillo', 'oro', 40000 , 2);