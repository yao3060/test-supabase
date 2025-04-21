import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid';

dotenv.config()
console.log(process.env) // remove this after you've confirmed it is working

const supabaseUrl = 'https://xpfbuenyoylvobezfglj.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)

// const { data, error } = await supabase.from('clients').select('*').eq('client_id', 'abcded')
// console.log({ data, error })


const { data, error } = await supabase
  .from('sim_card_activations')
  .insert([
    {
      id: uuidv4(),
      sim_number: '1234567890',
      choose_plan: 'choose_plan',
      start_date: "2025-04-21",
      days: 30,
      passport_number: 'passport_number',
      passport_country: 'passport_country',
      passport_expiry_date: "2035-04-21",
      first_name: 'first_name',
      last_name: 'last_name',
      email: 'email@app.com',
      address: 'address',
      imei: "{}",
      attachments: "",
      status: "pending"
    },
  ])
  .select()

console.log({ data, error })
