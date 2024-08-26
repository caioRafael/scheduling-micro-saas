'use server'

import { Tag } from '@/interface/tag'
import { prisma } from '@/services/database'

export async function CreateTag(tagData: Tag): Promise<Tag | null> {
  const tag = await prisma.patientTag.create({
    data: {
      title: tagData.title,
      description: tagData.description,
      color: tagData.color,
      userId: tagData.userId,
    },
  })

  return tag as Tag
}

export async function ListTags(userId: string): Promise<Tag[]> {
  const tagList = await prisma.patientTag.findMany({
    where: {
      userId,
    },
  })

  return tagList as Tag[]
}
