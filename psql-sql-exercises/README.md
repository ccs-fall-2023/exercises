# Intro to SQL

## Data School Online Practice

* [Data School: Quick Introductory SQL Concepts](https://dataschool.com/learn-sql/introduction/)
* Start with the Introduction, and complete up through the `LIMIT` section.

---

## SQLBolt

### Part 1

* Complete [SQLBolt `SELECT` Exercises, 1-4](https://sqlbolt.com/) up through _SQL Review: Simple SELECT Queries_.
* Complete [SQLBolt `INSERT` Exercise, 13](https://sqlbolt.com/lesson/inserting_rows)
* Complete [SQLBolt `CREATE TABLE` Exercise, 16](https://sqlbolt.com/lesson/creating_tables)
* Complete [SQLBolt `DROP TABLE` Exercise, 18](https://sqlbolt.com/lesson/dropping_tables)

### Part 2

* Complete [SQLBolt `JOIN` Exercises, 6-7](https://sqlbolt.com/lesson/select_queries_with_joins).

### Part 3

* Complete [SQLBolt `UPDATE` Exercise, 14](https://sqlbolt.com/lesson/updating_rows)
* Complete [SQLBolt `DELETE` Exercise, 15](https://sqlbolt.com/lesson/deleting_rows)

### Part 4

* Complete [SQLBolt `ALTER TABLE` Exercise, 17](https://sqlbolt.com/lesson/altering_tables)

---

## Apple CEOS Database

### Create an `apple_ceos_sql` folder

This folder will contain _two_ SQL files.

### Create a Schema File

Create a `schema.sql` file for an Apple CEO database. Include a `CREATE TABLE` statement to create a table called `apple_ceos`.

This table will contain the following columns:

* Name
* Slug (lowercase version of the name without spaces)
* First Year Active

Make sure to use the appropriate data types for each column to represent the info it will recieve.

__REMINDER:__ Use an auto-incrementing primary key `ID`

### Create a Seed File

Create a `seed.sql` file to populate the table. Include an `INSERT` statement to add one, or more, Apple CEOs with all the associated data.

This file will use the following information to populate the columns you defined above:

| CEO Name         | Year |
|------------------|------|
| Steve Jobs       | 1976 |
| Mike Markkula    | 1977 |
| Mike Scott       | 1978 |
| John Sculley     | 1983 |
| Michael Spindler | 1993 |
| Gil Amelio       | 1996 |
| Steve Jobs       | 1997 |
| Tim Cook         | 2011 |
