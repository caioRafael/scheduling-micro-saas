import { MessageCircleWarning } from 'lucide-react'
import Link from 'next/link'

export function SuportButton() {
  return (
    <Link
      target="blank"
      href={
        'https://docs.google.com/forms/d/e/1FAIpQLScELAzlU5qkA8UTH-TPakJ3OqEuTghefc2k7if7cNunPN50yw/viewform?usp=sf_link'
      }
      className="flex flex-row gap-2 justify-start p-2"
    >
      <MessageCircleWarning />
      Suporte
    </Link>
  )
}
