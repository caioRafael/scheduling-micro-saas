import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Edit } from 'lucide-react'

export function TagCard() {
  return (
    <Card className="w-80 p-2 bg-cyan-200 border-cyan-500">
      <CardHeader className="flex flex-row items-center justify-between py-2">
        <h1>Titulo</h1>

        <Button variant={'ghost'} className="p-0 h-2">
          <Edit size={14} />
        </Button>
      </CardHeader>
      <CardContent className="h-10 py-0">
        <p className="h-6 w-full text-ellipsis line-clamp-1">
          Para paicentes com agora acompanhamento intenso
        </p>
      </CardContent>
    </Card>
  )
}
