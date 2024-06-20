import { supabase } from "./supabaseClient";

type TableName = "invoices_dev" | "invoices_prod";

export async function fetchAllRowsFromTable(tableName: TableName) {
  const { data, error } = await supabase.from(tableName).select("*");
  if (error) {
    console.error("Data fetch error: ", error);
    return null;
  }
  return data;
}

export async function updateRows(
  tableName: TableName,
  updates: object,
  id: string
) {
  console.log("Updates: ", updates, " \nID: ", id);
  const { data, error } = await supabase
    .from(tableName)
    .update(updates)
    .eq("id", id);
  if (error) {
    console.error("Update error: ", error);
    return null;
  }
  return data;
}

// Add more Supabase-related functions as needed...
