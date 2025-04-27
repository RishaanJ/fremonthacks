// app/page.tsx (or app/redirect/page.tsx if you want this under a route like /redirect)
import { redirect } from 'next/navigation'

export default function Page() {
  redirect('https://docs.google.com/forms/d/e/1FAIpQLSfGuU5-n9J-IsneLFf7V8na9UdiMI2QUrPjuWatADEYmL0kTg/viewform?usp=sharing')
}
