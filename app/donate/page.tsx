// app/page.tsx (or app/redirect/page.tsx if you want this under a route like /redirect)
import { redirect } from 'next/navigation'

export default function Page() {
  redirect('https://hcb.hackclub.com/donations/start/fremont-hacks-b85ecc83-17ce-4445-9727-0f71c418b769')
}
