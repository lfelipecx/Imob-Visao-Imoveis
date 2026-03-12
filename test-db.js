const { Client } = require("pg")

const client = new Client({
  connectionString:
    "postgresql://neondb_owner:npg_hKkla9wXSo6f@ep-lucky-term-a5uerrs1.us-east-2.aws.neon.tech/neondb",
  ssl: {
    rejectUnauthorized: false,
  },
})

async function test() {
  try {
    await client.connect()
    const res = await client.query("SELECT NOW()")
    console.log("Conectado:", res.rows)
  } catch (err) {
    console.error("Erro:", err)
  } finally {
    await client.end()
  }
}

test()