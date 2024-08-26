import { TagFormModal } from './TagFormModal'
import { auth } from '@/services/auth'
import { ListTags } from '../actions'
import { EmptyState } from '@/components/empty-state'
import { TagCard } from './TagCard'

export async function TagContainer() {
  const session = await auth()
  const tagList = await ListTags(session?.user?.id || '')

  console.log(tagList)
  return (
    <section className="flex flex-col gap-3">
      <header className="w-full flex flex-row justify-between">
        <h1>Tags:</h1>
        <TagFormModal userId={session?.user?.id || ''} />
      </header>
      {tagList.length === 0 && <EmptyState message="Nenhuma tag cadastrada" />}
      <div className="flex flex-row gap-3 flex-wrap">
        {tagList.map((tag) => (
          <TagCard key={tag.id} tag={tag} />
        ))}
      </div>
    </section>
  )
}
