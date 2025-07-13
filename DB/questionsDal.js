import pool from './pool.js';

export async function question1() {
    const [data] = await pool.query('SELECT * FROM customers WHERE country = ?', ['france']);
    return data;
}

export async function question2() {
    const [data] = await pool.query('SELECT e.firstName, e.lastName FROM employees e WHERE e.reportsTo = ?', ['1143']);
    return data;
}

export async function question3() {
    const [result] = await pool.query('SELECT COUNT(*) FROM products p WHERE p.productLine = ?', ['classic cars']);
    return result;
}