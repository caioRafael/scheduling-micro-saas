import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Tag } from '@/interface/tag'
import { Edit } from 'lucide-react'

interface TagCardProps {
  tag: Tag
}

export function TagCard({ tag }: TagCardProps) {
  return (
    <Card
      className={`w-80 p-2  border-cyan-500`}
      style={{ background: `${tag.color}50`, borderColor: `${tag.color}` }}
    >
      <CardHeader className="flex flex-row items-center justify-between py-2">
        <h1>{tag.title}</h1>

        <Button variant={'ghost'} className="p-0 h-2">
          <Edit size={14} />
        </Button>
      </CardHeader>
      <CardContent className="h-10 py-0">
        <p className="h-6 w-full text-ellipsis line-clamp-1">
          {tag.description}
        </p>
      </CardContent>
    </Card>
  )
}
