import { PGlite } from "@electric-sql/pglite";
import fs from 'node:fs/promises'

const initDB = async () => {
  // Create in-memory DB (you can persist by giving a file path)
  const db = new PGlite();

  await db.query(`
    CREATE TABLE cars (
      id SERIAL PRIMARY KEY,
      brand TEXT NOT NULL,
      model TEXT NOT NULL,
      year INT NOT NULL,
      price INT NOT NULL,
      fuel_type TEXT CHECK (fuel_type IN ('Petrol', 'Diesel', 'Electric', 'Hybrid')),
      mileage INT,
      owner TEXT,
      location TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await db.query(`
    INSERT INTO cars (brand, model, year, price, fuel_type, mileage, owner, location) VALUES
    ('Toyota', 'Corolla', 2020, 950000, 'Petrol', 18000, 'Rahul Sharma', 'Mumbai'),
    ('Honda', 'Civic', 2019, 870000, 'Diesel', 23000, 'Aditi Rao', 'Delhi'),
    ('Tesla', 'Model 3', 2022, 4200000, 'Electric', 5000, 'Karthik Menon', 'Bangalore'),
    ('Maruti', 'Swift', 2021, 650000, 'Petrol', 12000, 'Sneha Patel', 'Ahmedabad'),
    ('Ford', 'EcoSport', 2018, 560000, 'Diesel', 45000, 'Ramesh Naidu', 'Hyderabad'),
    ('Hyundai', 'Creta', 2020, 1300000, 'Petrol', 15000, 'Ananya Singh', 'Pune'),
    ('Mahindra', 'Thar', 2023, 1750000, 'Diesel', 3000, 'Siddharth Rao', 'Chennai'),
    ('Kia', 'Seltos', 2021, 1400000, 'Petrol', 8000, 'Nikhil Verma', 'Kolkata'),
    ('Renault', 'Duster', 2017, 500000, 'Diesel', 60000, 'Priya Iyer', 'Coimbatore'),
    ('Tata', 'Nexon EV', 2023, 1600000, 'Electric', 4000, 'Meera Krishnan', 'Bangalore'),
    ('Volkswagen', 'Polo', 2018, 720000, 'Petrol', 35000, 'Manish Gupta', 'Indore'),
    ('Skoda', 'Superb', 2022, 3400000, 'Hybrid', 7000, 'Rajesh Nair', 'Delhi'),
    ('BMW', 'X1', 2021, 4500000, 'Diesel', 12000, 'Neha Kapoor', 'Mumbai'),
    ('Mercedes', 'C-Class', 2020, 5200000, 'Petrol', 18000, 'Abhinav Joshi', 'Noida'),
    ('Audi', 'A4', 2019, 4900000, 'Petrol', 24000, 'Shruti Das', 'Bhubaneswar'),
    ('Jeep', 'Compass', 2020, 2100000, 'Diesel', 16000, 'Harsh Vardhan', 'Lucknow'),
    ('MG', 'Hector', 2021, 1800000, 'Hybrid', 9000, 'Aarav Desai', 'Surat'),
    ('Hyundai', 'Venue', 2022, 1200000, 'Petrol', 7000, 'Ritu Malhotra', 'Nagpur'),
    ('Maruti', 'Baleno', 2019, 740000, 'Petrol', 26000, 'Suman Ghosh', 'Kolkata'),
    ('Nissan', 'Magnite', 2021, 850000, 'Petrol', 10000, 'Arjun Sinha', 'Jaipur'),
    ('Tata', 'Harrier', 2020, 1500000, 'Diesel', 14000, 'Pooja Bhat', 'Bangalore'),
    ('Kia', 'Carens', 2023, 1600000, 'Petrol', 2000, 'Vikas Reddy', 'Hyderabad'),
    ('Renault', 'Kwid', 2018, 400000, 'Petrol', 38000, 'Divya Chauhan', 'Vadodara'),
    ('Mahindra', 'XUV700', 2022, 2500000, 'Diesel', 8000, 'Deepak Shetty', 'Mangalore'),
    ('Toyota', 'Innova Crysta', 2020, 2800000, 'Diesel', 17000, 'Preeti Sharma', 'Delhi');
  `);

  console.log("✅ Database initialized with dummy car data.");

  console.log("✅ Executing the query in queries.sql");
  const query = await fs.readFile("./queries.sql", "utf-8");
  const result = await db.query(query);
  console.table(result.rows);

  await db.close();
};

initDB().catch((err) => console.error(err));
