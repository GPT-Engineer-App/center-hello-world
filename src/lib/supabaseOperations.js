import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url';
const supabaseKey = 'your-supabase-key';
const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchAllRowsFromTable = async (tableName) => {
  const { data, error } = await supabase.from(tableName).select('*');
  if (error) {
    console.error('Error fetching data:', error);
    return null;
  }
  return data;
};