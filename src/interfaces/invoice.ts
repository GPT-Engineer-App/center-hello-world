export interface Invoice {
  id: number; // bigint
  status: "Empfangen" | "Ubertragen" | "Kontiert"; // enum
  created_at: string; // timestamp with time zone
  eingegangen_am: string; // timestamp with time zone
  amount: number; // real (float4)
  sender: string[]; // text[]
  konto?: string | null; // text
  ev_vp?: string | null; // text
  belegtext?: string | null; // text
  kommentar?: string | null; // text
  faellig_am?: string | null; // date
  gebucht?: string | null; // date
  skonto?: boolean | null; // boolean
  kostenstelle?: number | null; // smallint
  VB?: string | null; // text
  wer_gepruft?: string | null; // text
  wer_bezahlt?: string | null; // text
  public_url: string
  email_body: string
}
