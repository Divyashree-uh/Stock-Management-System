import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) { 

const uri = "mongodb+srv://mongodb:di9utTasUi4AHxoJ@mongoyoutube.nhtraxd.mongodb.net/";
const client = new MongoClient(uri); 
  try {
    const database = client.db('divya');
    const movies = database.collection('inventory');
    
    const query = {  };
    const stocks = await stocks.find(query).toArray();
    console.log(stocks);
    return NextResponse.json({"a": 34, movie})
  } finally {
    
    await client.close();
  } 

}